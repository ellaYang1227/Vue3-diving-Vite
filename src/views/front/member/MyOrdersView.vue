<script setup>
import dateFormat from "../../../handle-formats/dateFormat.js";
import { activityStatusTextFormat } from "../../../handle-formats/statusTextFormat.js";
import { getMainImg } from "../../../data/utilitieFunctions.js";
</script>

<script>
import { mapState } from "pinia";
import MemberStore from "../../../stores/MemberStore.js";
import SearchListBar from "../../../components/Search/SearchListBar.vue";
import CommentModal from "../../../components/Modal/CommentModal.vue";
import DeleteOrderModal from "../../../components/Modal/DeleteOrderModal.vue";
import NoData from "../../../components/NoData.vue";

export default {
    data () {
        return {
            filterMyOrders: [],
            currentActivity: {},
            currentOrder: {}
        }
    },
    components: {
        SearchListBar,
        CommentModal,
        DeleteOrderModal,
        NoData
    },
    computed: {
        ...mapState(MemberStore, ["myOrders"])
    },
    watch: {
        myOrders() {
            this.filterMyOrders = this.myOrders;
        }
    },
    mounted() {
        this.filterMyOrders = this.myOrders;
    },
    methods: {
        getActivityStatusTotal(status) {
            return this.filterMyOrders.reduce((accumulator, currentValue) => {
                const { activity } = currentValue;
                if(activity.activityStatus === status) {
                    accumulator ++;
                }
                return accumulator;
            }, 0);
        },
        onSubmit(search) {
            const { keyword, startDate, endDate } = search;
            this.filterMyOrders = this.myOrders.filter(order => 
                (!keyword || order.activity.title.indexOf(keyword) > -1) && 
                (!startDate || order.activity.startDate >= startDate) &&
                (!endDate || endDate >= order.activity.endDate)
            );
        },
        openCommentModal(activity) {
            this.currentActivity = { ...activity };
            this.$refs.childCommentModal.openModal();
        },
        openDeleteOrderModal(order) {
            this.currentOrder = { ...order };
            this.$refs.childDeleteOrderModal.openModal();
        }
    }
};
</script>

<template>
    <div class="py-3">
        <SearchListBar @onSubmit="onSubmit" class="pb-3" />
        <template v-if="filterMyOrders.length">
            <div class="p-3" :class="{ 'bg-lightPrimary bg-opacity-10': (index + 1 ) % 2 }" v-for="(filterOrder, index) in filterMyOrders" :key="filterOrder.id">
                <div class="row g-3 align-items-sm-center">
                    <div class="col-md-6 col-xl-4 col-xxl-3 d-flex align-items-center">
                        <div class="custom-rectangle-img custom-rectangle border-card-border-width border flex-shrink-0">
                            <img :src="getMainImg(filterOrder.activity.imgs).img" class="custom-rectangle img-cover" :alt="filterOrder.activity.title">
                        </div>
                        <div class="ms-2">
                            <h2 class="fw-bold h6 mb-1 text-primary text-truncate-row-2">{{ filterOrder.activity.title }}</h2>
                            <h3 class="fs-7 mb-0 text-truncate">{{ filterOrder.activity.location.name }}</h3>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 col-xxl d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">活動日期</small>
                        <span class="font-barlow">{{ `${dateFormat(filterOrder.activity.startDate)} ~ ${dateFormat(filterOrder.activity.endDate)}` }}</span>
                    </div>
                    <div class="col-6 col-xl col-xxl-2 d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">主揪人</small>
                        <span class="font-barlow">{{ filterOrder.activity.user.name }}</span>
                    </div>
                    <div class="col-6 col-xl col-xxl-2 d-flex flex-column justify-content-sm-center align-items-start">
                        <small class="order-md-last opacity-80">活動狀態</small>
                        <span :class="{ 'text-danger': filterOrder.activity.activityStatus === 0, 'opacity-50': filterOrder.activity.activityStatus === 3 }">{{ activityStatusTextFormat(filterOrder.activity.activityStatus) }}</span>
                    </div>
                    <div class="col-xl-2">
                        <div class="row gx-2 align-items-center">
                            <div class="col-auto">
                                <router-link :to="`/activity/${filterOrder.activity.id}`" class="btn btn-link btn-sm border-0 p-0">詳情</router-link>
                            </div>
                            <div class="col-auto">
                                <router-link :to="`/activity/${filterOrder.activity.id}#messaget`" class="btn btn-link btn-sm border-0 p-0">留言</router-link>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-link btn-sm border-0 p-0" @click="openCommentModal(filterOrder.activity)" :disabled="filterOrder.activity.activityStatus === 0 || filterOrder.activity.activityStatus === 1">
                                評論<template v-if="filterOrder.activity.comment">(1)</template></button>
                            </div>
                            <div class="col-auto col-xl-12">
                                <button type="button" class="btn btn-link btn-sm border-0 p-0" :disabled="filterOrder.activity.orderStatus === 3 || filterOrder.activity.orderStatus === 0" @click="openDeleteOrderModal(filterOrder)">刪除報名</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <NoData v-else class="pt-4 pb-5" />
        <div class="border-top px-3 pt-2 opacity-80">
            <ul class="row gx-2 gx-md-3 align-items-center list-unstyled mb-0">
                <li class="col-md">總計：<strong class="me-1 font-barlow">{{ filterMyOrders.length }}</strong>筆</li>
                <li class="col-auto ms-md-auto" :class="{ 'text-danger': getActivityStatusTotal(0) }">系統中止：<strong class="me-1 font-barlow">{{ getActivityStatusTotal(0) }}</strong>筆</li>
                <li class="col-auto">未開始：<strong class="me-1 font-barlow">{{ getActivityStatusTotal(1) }}</strong>筆</li>
                <li class="col-auto">進行中：<strong class="me-1 font-barlow">{{ getActivityStatusTotal(2) }}</strong>筆</li>
                <li class="col-auto">已結束：<strong class="me-1 font-barlow">{{ getActivityStatusTotal(3) }}</strong>筆</li>
            </ul>
        </div>
    </div>
    <CommentModal ref="childCommentModal" :activity="currentActivity" />
    <DeleteOrderModal ref="childDeleteOrderModal" :order="currentOrder" />
</template>

<style lang="scss">
.custom-rectangle-img {
    width: 100px;
    height: 75px;
}
</style>
