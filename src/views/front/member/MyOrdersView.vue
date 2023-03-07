<script setup>
import decimalFormat from "../../../handle-formats/decimalFormat.js";
import dateFormat from "../../../handle-formats/dateFormat.js";
import { getMainImg } from "../../../data/utilitieFunctions.js";
</script>

<script>
import { mapState } from "pinia";
import MemberStore from "../../../stores/MemberStore.js";
import OptionStore from "../../../stores/OptionStore.js";
import SearchListBar from "../../../components/SearchListBar.vue";

export default {
    data () {
        return {
            filterMyOrders: []
        }
    },
    components: {
        SearchListBar
    },
    computed: {
        ...mapState(MemberStore, ["myOrders"]),
        ...mapState(OptionStore, ["locations"]),
        toBeCommented() {
            console.log(this.myOrders, this.filterMyOrders)
            return 1;
        }
    },
    watch: {
        myOrders() {
            console.log('myOrders')
            this.filterMyOrders = this.myOrders;
        }
    },
    mounted() {
        console.log(this.myOrders, this.filterMyOrders)
        this.filterMyOrders = this.myOrders;
    },
    methods: {
        getLocationName(locationId) {
            return this.locations.find(location => location.id == locationId).name;
        },
        onSubmit(search) {
            console.log(search)
            const { keyword, startDate, endDate } = search;
            this.filterMyOrders = this.myOrders.filter(order => {
                return !keyword || order.title.indexOf(keyword) > -1 && 
                !startDate || startDate >= order.startDate && 
                !endDate || order.startDate >= endDate
            });
            // this.showLoading("btn");
            // const query = Object.keys(this.search).reduce((accumulator, currentKey) => {
            //     if(this.search[currentKey]){ accumulator[currentKey] = this.search[currentKey] }
            //     return accumulator;
            // }, {});

            // let routerPushData = { path: '/activities' }
            // if(Object.keys(this.search).length){ routerPushData.query = query }
            // this.$router.push(routerPushData)
        }
    }
};
</script>

<template>
    <div class="py-3">
        <h6 class="text-danger h5" v-if="toBeCommented">等待評論：<strong>{{ toBeCommented }} 筆</strong></h6>
        <SearchListBar @onSubmit="onSubmit" />
        <div class="row py-3" v-for="filterOrder in filterMyOrders" :key="filterOrder.id">
            <div class="col d-flex align-items-center">
                <div class="custom-rectangle-img custom-rectangle border-card-border-width border">
                    <img :src="getMainImg(filterOrder.activity.imgs).img" class="custom-rectangle img-cover" :alt="filterOrder.activity.title">
                </div>
                <div class="ms-2">
                    <h2 class="fw-bold h6 mb-1 text-primary text-truncate-row-2">{{ filterOrder.activity.title }}</h2>
                    <h3 class="fs-7 mb-0 text-truncate">{{ getLocationName(filterOrder.activity.locationId) }}</h3>
                </div>
            </div>
            <div class="col d-flex flex-column justify-content-center align-items-start">
                <small class="order-md-last opacity-80">活動日期</small>
                <span class="font-barlow">{{ `${dateFormat(filterOrder.activity.startDate)} ~ ${dateFormat(filterOrder.activity.endDate)}` }}</span>
            </div>
            <div class="col d-flex flex-column justify-content-center align-items-start">
                <small class="order-md-last opacity-80">主揪人</small>
                <span class="font-barlow">{{ `${dateFormat(filterOrder.activity.startDate)} ~ ${dateFormat(filterOrder.activity.endDate)}` }}</span>
            </div>
            <div class="col d-flex flex-column justify-content-center align-items-start">
                <small class="order-md-last opacity-80">活動狀態</small>
                <span class="font-barlow">{{ `${dateFormat(filterOrder.activity.startDate)} ~ ${dateFormat(filterOrder.activity.endDate)}` }}</span>
            </div>
            <div class="col">
                <small class="order-md-last opacity-80">活動狀態</small>
                <span class="font-barlow">{{ `${dateFormat(filterOrder.activity.startDate)} ~ ${dateFormat(filterOrder.activity.endDate)}` }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.custom-rectangle-img {
    width: 100px;
    height: 75px;
}
</style>
