<script>
import { mapState, mapActions } from "pinia";

import ActivityCard from "../components/ActivityCard.vue";
import divingIcon from "../assets/images/index/banner-icon/diving.svg";
import peoplesIcon from "../assets/images/index/banner-icon/peoples.svg";
import areaIcon from "../assets/images/index/banner-icon/area.svg";

import activityStore from "../stores/activityStore.js";

export default {
    data() {
        return {
            bannerIcons: [
                {
                    title: "揪團潛水",
                    img: divingIcon,
                    total: 1005
                },
                {
                    title: "報名人數",
                    img: peoplesIcon,
                    total: 14186
                },
                {
                    title: "潛水地區",
                    img: areaIcon,
                    total: 84
                },
            ],
            activityNavs: {
                hot: "熱門",
                new: "最新",
            },
            activeActivityNav: "hot"
        };
    },
    mounted() {
        Object.keys(this.activityNavs).forEach(activityNav => this.getActivitys(activityNav));
    },
    computed: {
        activityCards() {
            let cards = [];
            switch (this.activeActivityNav) {
                case "hot":
                    console.log("hot");
                    break;
                case "new":
                    console.log("new");
                    break;
            }

            return cards;
        }
    },
    methods: {
        ...mapActions(activityStore, ["getActivitys"]),
        toggleActiveActivityNav(nav) {
            this.activeActivityNav = nav;
        }
    },
    components: {
        ActivityCard
    }
};
</script>

<template>
    <!-- banner -->
    <div class="bg-img pb-5 py-lg-5">
        <div class="container text-center py-5">
            <h6 class="en-title text-uppercase fs-5 font-barlow mb-0">DIVING</h6>
            <h1 class="main-title display-3 mb-0">潛安伴旅這裡揪</h1>
            <h2 class="sub-title opacity-75 fs-4">在氣瓶海人遇見好潛伴</h2>
            <div class="d-grid col-7 col-md-4 col-lg-3 mx-auto mt-4">
                <router-link to="addGroup" class="btn btn-outline-lightPrimary btn-lg rounded-pill opacity-75" role="button">我要揪團</router-link>
            </div>
        </div>
        <div class="bg-lightPrimary bg-opacity-20 mt-3">
            <div class="container py-4">
                <div class="row gx-0 gy-4 justify-content-center">
                    <div class="col-7 col-md-4 d-flex justify-content-center align-items-center" v-for="bannerIcon in bannerIcons" :key="bannerIcon.title">
                        <img :src="bannerIcon.img" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2" />
                        <div class="text-center flex-grow-1 flex-md-grow-0">
                            <span class="d-block text-primary fw-light font-barlow display-4 lh-1">{{ bannerIcon.total }}</span
                            >{{ bannerIcon.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 熱門 / 最新 活動 -->
    <div class="container py-5">
        <nav class="nav fs-5">
            <a class="nav-link" :class="{ disabled: activeActivityNav === key, 'ps-0': !index }" aria-current="page" href="#" v-for="(activityNav, key, index) in activityNavs" :key="key" @click.prevent="toggleActiveActivityNav(key)">{{ activityNav }} </a>
        </nav>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" v-if="activityCards.length">
            <ActivityCard v-for="activityCard in activityCards" :key="activityCard.title" />
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";
.bg-img {
    background: url("../assets/images/index/banner-people.png") center center no-repeat;
    background-size: contain;

    .en-title {
        text-indent: 1rem;
        letter-spacing: 1rem;

        @media (min-width: 576px) {
            text-indent: 1.875rem;
            letter-spacing: 1.875rem;
        }
    }

    .main-title {
        text-indent: 0.625rem;
        letter-spacing: 0.625rem;
        -webkit-text-stroke: 1px $primary;
        color: $bg-primary-20;

        @media (min-width: 576px) {
            text-indent: 1.25rem;
            letter-spacing: 1.25rem;
        }
    }

    .sub-title {
        text-indent: 0.75rem;
        letter-spacing: 0.75rem;

        @media (min-width: 576px) and (max-width: 767px) {
            text-indent: 1.375rem;
            letter-spacing: 1.375rem;
        }

        @media (min-width: 768px) {
            text-indent: 1.25rem;
            letter-spacing: 1.25rem;
        }
    }

    .banner-icon-size {
        width: 85px;
        height: 85px;
    }
}
</style>
