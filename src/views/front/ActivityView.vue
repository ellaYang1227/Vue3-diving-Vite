<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
import currencyFormat from "../../handle-formats/currencyFormat.js";
</script>

<script>
import { mapActions } from "pinia";
import Swiper from "swiper/bundle";
import LoadingStore from "../../stores/LoadingStore.js";
import ActivityStore from "../../stores/ActivityStore.js";
import swiperParams from "../../data/swiperParams.js";

export default {
    data() {
        return {
            activity: {}
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => { 
                const { activityId } = toParams;
                if(activityId) {
                    this.getActivity(activityId)
                    .then(res => {
                        console.log(res)
                        this.activity = res;
                        this.hideLoading();
                    });
                }
            },
            { immediate: true }
        );
        
    },
    mounted() {
        const thumbnailSwiper = new Swiper(this.$refs.thumbnailSwiper, { 
            ...swiperParams,
            spaceBetween: 10,
            slidesPerView: 3,
            watchSlidesProgress: true,
            breakpoints: { 
                576: {
                    slidesPerView: 1,
                    grid: {
                        rows: 3 // 網格
                    }
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 1,
                    grid: {
                        rows: 3 // 網格
                    }
                }
            }
            
        });

        new Swiper(this.$refs.activitySwiper, { 
            ...swiperParams,
            spaceBetween: 10,
            thumbs: {
                swiper: thumbnailSwiper,
            }
        });
    },
    computed: {
        orderImgs() {
            const imgArr = [];
            const { imgs } = this.activity;
            if(imgs){
                const imgsKeys = Object.keys(imgs);
                console.log(imgsKeys)
                imgsKeys.forEach(key => {
                    imgArr.push({
                        key,
                        ...imgs[key]
                    });
                });
                
                imgArr.sort((a, b) => a.isMain > b.isMain ? -1 : 1);
            }
            
            return imgArr;
        }
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(ActivityStore, ["getActivity"]),
    }
};
</script>

<template>
    <div class="container py-4 py-md-5">
        <div class="row gy-4 align-items-center">
            <!-- 活動 swiper -->
            <div class="col-md-6">
                <div class="d-sm-flex d-md-block d-lg-flex swiper-height">
                    <div ref="activitySwiper" class="swiper activity-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="orderImg in orderImgs" :key="orderImg.key">
                                <img :src="orderImg.img" :alt="activity.title" class="border border-card-border-width" />
                            </div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                    <div ref="thumbnailSwiper" thumbsSlider="" class="swiper thumbnail-swiper bg-primary bg-opacity-10 shadow-sm">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="orderImg in orderImgs" :key="orderImg.key">
                                <img :src="orderImg.img" :alt="activity.title" class="border border-card-border-width" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 活動 標題 -->
            <div class="col-md-6 py-md-3">
                <h3 class="fs-6 mb-0 text-truncate">{{ activity.location?.name }}</h3>
                <h1 class="col fw-bold fs-4 text-primary text-truncate">{{ activity.title }}</h1>
                <ul class="list-unstyled opacity-80 mb-1">
                    <li class="font-barlow"><font-awesome-icon icon="fa-solid fa-calendar-days" fixed-width class="me-1" />{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</li>
                    <li class="font-barlow"><font-awesome-icon icon="fa-solid fa-user" fixed-width class="me-1" /><strong>{{ activity.orders?.length }}</strong>{{ ` / ${activity.maxOrderTotal}` }}</li>
                    <li class="mt-3">證照等級：<strong>{{ activity.certificateLevel?.name }}</strong></li>
                    <li>需有高氧證照：<strong>
                            <template v-if="activity.isNitrox">是</template>
                            <template v-else>否</template>
                        </strong>
                    </li>
                    <li>潛水支數：<strong>{{ activity.cylinderTotal ? activity.cylinderTotal : '不限' }}</strong></li>
                </ul>
                <router-link class="text-decoration-none badge bg-lightPrimary bg-opacity-20 me-1" v-for="tag in activity.tags"  :key="tag" :to="{ path: '/activities', query: { tag: tag }}">{{ tag }}</router-link>
                <div class="mt-3 d-flex align-items-center">
                    <small class="me-2">每人</small><strong class="fs-4 me-3">{{ currencyFormat(activity.cost) }}</strong>
                    <button type="button" class="btn btn-danger btn-custom-rectangle">立即報名</button>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-primary bg-opacity-20 py-4 py-md-5 mb-4 mb-md-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="mb-5" v-if="activity.features">
                        <h4 class="fs-5 fw-bold mb-1 text-warning">活動特點</h4>
                        <p class="white-space-pre-wrap">{{ activity.features }}</p>
                    </div>
                    <h4 class="fs-5 fw-bold mb-1 text-warning">活動內容</h4>
                    <p class="white-space-pre-wrap mb-0">{{ activity.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";

.swiper-height {
    height: 320px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        height: 350px;
    }

    @media (min-width: 1200px) {
        height: 380px;
    }

    .swiper-slide {
        background-size: cover;
        background-position: center;
    }

    .activity-swiper {
        width: 75%;

        @media (max-width: 575px) {
            height: 75%;
            width: 100%;
        }

        @media (min-width: 768px) and (max-width: 991px) {
            height: 75%;
            width: 100%;
        }
        
    }

    .thumbnail-swiper {
        @media (max-width: 575px) {
            height: 25%;
            width: 100%;
            margin-left: 0;
            margin-top: 10px;
        }

        @media (min-width: 768px) and (max-width: 991px) {
            height: 25%;
            width: 100%;
            margin-left: 0;
            margin-top: 10px;
        }

        width: 25%;
        margin-left: 10px;
        box-sizing: border-box;
        padding: 10px;

        .swiper-slide {
            @media (max-width: 575px) {
                width: 25%;
                height: 100%;
            }

            @media (min-width: 768px) and (max-width: 991px) {
                width: 25%;
                height: 100%;
            }

            height: calc((100% - 10px * 2 ) / 3);
            opacity: 0.5;
        }

        .swiper-slide-thumb-active {
            opacity: 1;
        }
    }
}

.badge {
    &.bg-lightPrimary {
        &:hover {
            color: $warning;
            --bs-bg-opacity: 0.3 !important;
        }
    }
}
</style>
