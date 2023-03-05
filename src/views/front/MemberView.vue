<script setup>
import { activityImg } from "../../data/imagePaths.js";
import { authGuard } from "../../data/routeGuard.js";
</script>

<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import MemberStore from "../../stores/MemberStore.js";
import UserMugShot from "../../components/UserMugShot.vue";
import StatisticsCard from "../../components/StatisticsCard.vue";

export default {
    data() {
        return {
            cards: [{
                title: "未回覆留言",
                imgName: "",
                value: null
            },{
                title: "評價分數",
                imgName: "",
                value: null
            },{
                title: "累積揪團數",
                imgName: "",
                value: null
            },{
                title: "累積報名人數",
                imgName: "",
                value: null
            }]
        }
    },
    beforeRouteEnter(to, from, next) {
        authGuard(to, from, next);
        
    },
    computed: {
        ...mapState(MemberStore, ["myinfo"]),
    },
    watch: {
        myinfo() {
            console.log('myinfo', this.myinfo)
        }
    },
    components: {
        UserMugShot,
        StatisticsCard
    },
    mounted() {
        this.getMyinfo().then(res => this.hideLoading());
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(MemberStore, ["getMyinfo"]),
    }
};
</script>

<template>
    <div class="container py-4 py-md-5">
        <div class="row row-cols-md-2 gy-2 align-items-stretch">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <ul class="row list-unstyled mb-0">
                            <li class="col-12 d-flex align-items-center mb-3">
                                <UserMugShot :img="myinfo.img" :isShowName="false" class="flex-shrink-0 me-1" />
                                <div class="ms-auto text-truncate flex-grow-1 lh-1">
                                    <h5 class="fw-bold h6 mb-0 text-truncate">{{ myinfo.name }}</h5>
                                    <small class="font-barlow">{{ myinfo.email }}</small>
                                </div>
                            </li>
                            <li class="col-6 opacity-80">
                                證照等級<strong class="ms-2">{{ myinfo.certificateLevel?.name }}</strong>
                            </li>
                            <li class="col-6 opacity-80">
                                持有高氧證照<strong class="ms-2">{{ myinfo.isNitrox ? "是" : "否" }}</strong>
                            </li>
                            <li class="col-6 opacity-80">
                                潛水支數<strong class="ms-2">{{ myinfo.cylinderTotal?.name }}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row row-cols-md-2 gy-2 h-100">
                    <div class="col h-50" v-for="card in cards" :key="card.title">
                        <StatisticsCard :title="card.title" :imgName="card.imgName" :value="card.value" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-4 py-md-5">
        <router-view></router-view>
    </div>
</template>

<style lang="scss"></style>
