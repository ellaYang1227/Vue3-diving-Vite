<script setup>
import { authGuard } from "../../data/routeGuard.js";
import decimalFormat from "../../handle-formats/decimalFormat.js";
</script>

<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import AuthStore from "../../stores/AuthStore.js";
import MemberStore from "../../stores/MemberStore.js";
import CommentStore from "../../stores/CommentStore.js";
import UserMugShot from "../../components/UserMugShot.vue";
import StatisticsCard from "../../components/StatisticsCard.vue";
const memberStore = MemberStore();

export default {
    data() {
        return {
            cards: {
                myOrders: {
                    title: "報名揪團次數",
                    value: null
                },
                commentScore: {
                    title: "評價分數",
                    value: null
                },
                activities: {
                    title: "累積揪團數",
                    value: null
                },
                orders: {
                    title: "累積報名人數",
                    value: null
                }
            },
            navTabs: [{
                name: "我的揪團",
                url: "/myActivities"
            },{
                name: "我的報名",
                url: "/myOrders"
            },{
                name: "評論管理",
                url: "/myComments"
            },{
                name: "編輯個人檔案",
                url: "/editMyinfo"
            }]
        }
    },
    beforeRouteEnter(to, from, next) {
        authGuard(to, from, next);
        
    },
    computed: {
        ...mapState(AuthStore, ["user"]),
        ...mapState(MemberStore, ["myinfo", "myComments", "myActivities", "myOrders"]),
        ...mapState(CommentStore, ["initComments", "comments"])
    },
    watch: {
        comments() {
            const { id } = this.user;
            memberStore.$patch(state => {
                state.myComments = this.comments.find(comment => comment.userId == id);
            });
        }
    },
    components: {
        UserMugShot,
        StatisticsCard
    },
    mounted() {
        Promise.all([
            this.getMyinfo(),
            this.getComments(),
            this.getMyActivities()
        ]).then(resArr => {
            this.setCards();
            this.hideLoading();
        });
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(MemberStore, ["getMyinfo", "getMyActivities"]),
        ...mapActions(CommentStore, ["getComments"]),
        setCards() {
            const keys = Object.keys(this.cards);  
            keys.forEach(key => {
                let num = 0;
                switch (key) {
                    case "myOrders":
                        num = this.myOrders.length;
                        break;
                    case "commentScore":
                        if(this.myComments?.averageScore) { num = decimalFormat(this.myComments.averageScore, 1) }
                        break;
                    case "activities":
                        num = this.myActivities.length;
                        break;
                    case "orders":
                        num = this.myActivities.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue.orders.length;
                        }, 0);
                        break;
                }

                this.cards[key].value = num;
            });
        }
    }
};
</script>

<template>
    <div class="container py-4 py-md-5">
        <div class="row gy-2 gy-sm-4 align-items-stretch">
            <div class="col-md-12 col-lg-5">
                <div class="card h-100">
                    <div class="row g-0 h-100">
                        <div class="col-sm-5 col-lg-6 col-xl-5 text-center">
                            <div class="bg-lightPrimary bg-opacity-5 h-100 p-3 custom-rectangle d-flex flex-sm-column justify-content-center align-items-center">
                                <UserMugShot :img="myinfo.img" :isShowName="false" :widthSize="75" class="flex-shrink-0 me-2 me-sm-0" />
                                <div class="text-truncate flex-grow-1 flex-sm-grow-0 text-start text-sm-center mt-sm-2">
                                    <h5 class="fw-bold mb-0 text-truncate">{{ myinfo.name }}</h5>
                                    <small class="font-barlow">{{ myinfo.email }}</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <ul class="card-body list-unstyled mb-0 h-100 d-flex flex-column justify-content-center">
                                <li class="d-flex justify-content-between align-items-center">
                                    <small class="opacity-80">證照等級</small>
                                    <strong class="ms-2">{{ myinfo.certificateLevel?.name }}</strong>
                                </li>
                                <li class="d-flex justify-content-between align-items-center py-2">
                                    <small class="opacity-80">持有高氧證照</small>
                                    <strong class="ms-2">{{ myinfo.isNitrox ? "是" : "否" }}</strong>
                                </li>
                                <li class="d-flex justify-content-between align-items-center">
                                    <small class="opacity-80">潛水支數</small>
                                    <strong class="ms-2">{{ myinfo.cylinderTotal?.name }}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row row-cols-2 g-2 g-sm-4">
                    <div class="col" v-for="(card, key) in cards" :key="key">
                        <StatisticsCard :title="card.title" :imgName="`${key}Icon`" :value="card.value" />
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 pt-md-5">
            <nav class="nav nav-tabs member-nav-tabs">
                <router-link class="nav-link" :to="`/member${navTab.url}`" v-for="navTab in navTabs" :key="navTab.name">{{ navTab.name }}</router-link>
            </nav>
            <div class="card border-top-0">
                <div class="card-body p-4 px-md-5">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.member-nav-tabs {
    .nav-link {
        @media (max-width: 575px) {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            font-size: 0.875rem;
        }
    }
    
    
}
</style>
