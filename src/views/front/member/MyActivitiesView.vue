<script setup>
import dateFormat from "../../../handle-formats/dateFormat.js";
import { activityStatusTextFormat, orderStatusTextFormat } from "../../../handle-formats/statusTextFormat.js";
import { getMainImg } from "../../../data/utilitieFunctions.js";
</script>

<script>
import { mapState } from "pinia";
import MemberStore from "../../../stores/MemberStore.js";
import SearchListBar from "../../../components/Search/SearchListBar.vue";
import DeleteActivityModal from "../../../components/Modal/DeleteActivityModal.vue";
import ViolationModal from "../../../components/Modal/ViolationModal.vue";
import OrderModal from "../../../components/Modal/OrderModal.vue";
import NoData from "../../../components/NoData.vue";

export default {
    data () {
        return {
            filterMyActivities: [],
            currentActivity: {},
            currentActivityId: null,
            currentViolationId: null
        }
    },
    components: {
        SearchListBar,
        DeleteActivityModal,
        ViolationModal,
        OrderModal,
        NoData
    },
    computed: {
        ...mapState(MemberStore, ["myActivities"]),
        fullActivitiesTotal() {
            return this.filterMyActivities.reduce((accumulator, currentValue) => {
                const { maxOrderTotal, orders } = currentValue;
                if(maxOrderTotal === orders.length) {
                    accumulator ++;
                }
                return accumulator;
            }, 0);
        }
    },
    watch: {
        myActivities() {
            this.filterMyActivities = this.myActivities;
        }
    },
    mounted() {
        this.filterMyActivities = this.myActivities;
    },
    methods: {
        getOrderStatusTotal(status) {
            return this.filterMyActivities.reduce((accumulator, currentValue) => {
                if(currentValue.orderStatus === status) {
                    accumulator ++;
                }
                return accumulator;
            }, 0);
        },
        onSubmit(search) {
            const { keyword, startDate, endDate } = search;
            this.filterMyActivities = this.myActivities.filter(activity => 
                (!keyword || activity.title.indexOf(keyword) > -1) && 
                (!startDate || activity.startDate >= startDate) &&
                (!endDate || endDate >= activity.endDate)
            );
        },
        openViolationModal(violationId) {
            this.currentViolationId = violationId;
            this.$refs.childViolationModal.openModal();
        },
        openOrderModal(activityId) {
            this.currentActivityId = activityId;
            this.$refs.childOrderModal.openModal();
        },
        openDelActivityModal(activity) {
            this.currentActivity = { ...activity };
            this.$refs.childDeleteActivityModal.openModal();
        }
    }
};
</script>

<template>
    <div class="py-3">
        <div class="row g-2 pb-3">
            <div class="col-md">
                <SearchListBar @onSubmit="onSubmit" />
            </div>
            <div class="col-md-auto">
                <router-link class="btn btn-primary btn-custom-rectangle" to="/addActivity" role="button">新增揪團</router-link>
            </div>
        </div>
        <template v-if="filterMyActivities.length">
            <div class="p-3" :class="{ 'bg-lightPrimary bg-opacity-10': (index + 1 )% 2 }" v-for="(filterActivity, index) in filterMyActivities" :key="filterActivity.id">
                <div class="row g-3 align-items-sm-center">
                    <div class="col-md-6 col-xl-4 col-xxl-3 d-flex align-items-center">
                        <div class="custom-rectangle-img custom-rectangle border-card-border-width border flex-shrink-0">
                            <img :src="getMainImg(filterActivity.imgs).img" class="custom-rectangle img-cover" :alt="filterActivity.title">
                        </div>
                        <div class="ms-2">
                            <h2 class="fw-bold h6 mb-1 text-primary text-truncate-row-2">{{ filterActivity.title }}</h2>
                            <h3 class="fs-7 mb-0 text-truncate">{{ filterActivity.location.name }}</h3>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3 d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">活動日期</small>
                        <span class="font-barlow">{{ `${dateFormat(filterActivity.startDate)} ~ ${dateFormat(filterActivity.endDate)}` }}</span>
                    </div>
                    <div class="col-6 col-xl d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">報名人數</small>
                        <span class="font-barlow"><strong>{{ filterActivity.orders.length }}</strong>/{{ filterActivity.maxOrderTotal }}</span>
                    </div>
                    <div class="col-6 col-xl d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">揪團狀態</small>
                        <span :class="{ 'text-danger': filterActivity.orderStatus === 0, 'opacity-50': filterActivity.orderStatus === 2 }">{{ orderStatusTextFormat(filterActivity.orderStatus) }}</span>
                    </div>
                    <div class="col-6 col-xl d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">活動狀態</small>
                        <span :class="{ 'text-danger': filterActivity.activityStatus === 0, 'opacity-50': filterActivity.activityStatus === 3 }">{{ activityStatusTextFormat(filterActivity.activityStatus) }}</span>
                    </div>
                    <div class="col-6 col-xl d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">更新時間</small>
                        <span class="font-barlow">{{ dateFormat(filterActivity.updateDate, ["date", "time"]) }}</span>
                    </div>
                    <div class="col-xxl-2">
                        <div class="row gx-2 align-items-center" v-if="filterActivity.activityStatus !== 0">
                            <div class="col-auto">
                                <router-link :to="`/editActivity/${filterActivity.id}`" class="btn btn-link btn-sm border-0 p-0" :class="{ 'disabled': filterActivity.orders.length }">編輯</router-link>
                            </div>
                            <div class="col-auto">
                                <router-link :to="`/activity/${filterActivity.id}`" class="btn btn-link btn-sm border-0 p-0">查看</router-link>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-link btn-sm border-0 p-0" :disabled="!filterActivity.orders.length" @click="openOrderModal(filterActivity.id)">報名總覽</button>
                            </div>
                            <div class="col-auto">
                                <router-link :to="`/activity/${filterActivity.id}#messaget`" class="btn btn-link btn-sm border-0 p-0">留言</router-link>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-link btn-sm border-0 p-0" :disabled="filterActivity.orderStatus === 3" @click="openDelActivityModal(filterActivity)">刪除</button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-link btn-sm border-0 p-0" v-else @click="openViolationModal(filterActivity.violations[0]?.id)">違規原因</button>
                    </div>
                </div>
            </div>
        </template>
        <NoData v-else class="pt-4 pb-5" />
        <div class="border-top px-3 pt-2 opacity-80">
            <ul class="row gx-2 gx-md-3 align-items-center list-unstyled mb-0">
                <li class="col-md">總計：<strong class="me-1 font-barlow">{{ filterMyActivities.length }}</strong>筆</li>
                <li class="col-auto ms-md-auto" :class="{ 'text-danger': getOrderStatusTotal(0) }">系統中止：<strong class="me-1 font-barlow">{{ getOrderStatusTotal(0) }}</strong>筆</li>
                <li class="col-auto">已額滿：<strong class="me-1 font-barlow">{{ fullActivitiesTotal }}</strong>筆</li>
                <li class="col-auto">進行中：<strong class="me-1 font-barlow">{{ getOrderStatusTotal(2) }}</strong>筆</li>
                <li class="col-auto">已截止：<strong class="me-1 font-barlow">{{ getOrderStatusTotal(3) }}</strong>筆</li>
            </ul>
        </div>
    </div>
    <ViolationModal ref="childViolationModal" :violationId="currentViolationId" />
    <OrderModal ref="childOrderModal" :activityId="currentActivityId" />
    <DeleteActivityModal ref="childDeleteActivityModal" :activity="currentActivity" />
</template>

<style lang="scss">
.custom-rectangle-img {
    width: 100px;
    height: 75px;
}
</style>