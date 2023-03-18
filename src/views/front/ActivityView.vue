<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
import currencyFormat from "../../handle-formats/currencyFormat.js";
import { statusBtnTextFormat } from "../../handle-formats/statusTextFormat.js";
import { swalPopup, setSwalFire } from "../../data/sweetalert2.js";
</script>

<script>
import Swiper from "swiper/bundle";
import { mapActions, mapState } from "pinia";
import AuthStore from "../../stores/AuthStore.js";
import LoadingStore from "../../stores/LoadingStore.js";
import ActivityStore from "../../stores/ActivityStore.js";
import OrderStore from "../../stores/OrderStore.js";
import PageStore from "../../stores/PageStore.js";
import swiperParams from "../../data/swiperParams.js";
import CommentList from "../../components/Comment/CommentList.vue";
import MessagetList from "../../components/Message/MessageList.vue";
const pageStore = PageStore();
const { VITE_COMPANY_NAME } = import.meta.env;

export default {
    data() {
        return {
            activity: {},
            activityId: null,
            isLoadingBtn: false
        }
    },
    inject: ["frontLayoutData"],
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => { 
                const { activityId } = toParams;
                if(activityId) { 
                    this.activityId = activityId;
                    this.getActivity(activityId)
                    .then(res => {
                        this.activity = res;
                        this.hideLoading();
                    });
                }
            },
            { immediate: true }
        );
        
    },
    mounted() {
        window.addEventListener("scroll", this.scrollEvent);
    
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
        ...mapState(PageStore, ["hasActivityHavbar"]),
        ...mapState(AuthStore, ["user"]),
        orderImgs() {
            const imgArr = [];
            const { imgs } = this.activity;
            if(imgs){
                const imgsKeys = Object.keys(imgs);
                imgsKeys.forEach(key => {
                    imgArr.push({
                        key,
                        ...imgs[key]
                    });
                });
                
                imgArr.sort((a, b) => a.isMain > b.isMain ? -1 : 1);
            }
            
            return imgArr;
        },
        activityBtnText() {
            const { activityStatus, orderStatus, isOrderPlaced } = this.activity;
            return isOrderPlaced ? "已報名" : statusBtnTextFormat(activityStatus, orderStatus);
        },
        activityBtnDisabled() {
            const { orderStatus, isOrderPlaced } = this.activity;
            return !isOrderPlaced && orderStatus === 2 ? false : true;
        },
        validOrderTotal() {
           return this.activity?.orders?.filter(order => !order.isDelete).length;
        }
    },
    components: {
        CommentList,
        MessagetList
    },
    methods: {
        ...mapActions(LoadingStore, ["hideLoading"]),
        ...mapActions(ActivityStore, ["getActivity"]),
        ...mapActions(OrderStore, ["updateOrder"]),
        scrollEvent() {
            let scrollTop = 0;
            if(this.$refs.activityImgs) { 
                const { clientHeight } = this.$refs.activityImgs;
                scrollTop = clientHeight / 2; 
            }
            
            pageStore.$patch(state => {
                state.hasActivityHavbar = window.scrollY > scrollTop ? true : false;
            });
        },
        submitOrder() {
            if(!this.user) {
                swalPopup.fire({
                    icon: "warning",
                    title: "尚未登入",
                    text: "您尚未登入，無法報名",
                    showConfirmButton: true,
                    confirmButtonText: "立即登入",
                }).then(({isConfirmed}) => {
                    if(isConfirmed) {
                        const returnUrl = this.$route.path; 
                        this.$router.push({ path: '/login', query: { returnUrl } }) 
                    }
                });
            } else {
                const { id, certificateLevelId, isNitrox, cylinderTotalId } = this.user;
                const { userId } = this.activity;
                if(id == userId) {
                    setSwalFire("popup", "warning", "系統提醒", "您無法報名自己建立的揪團活動");
                } else {
                    if(this.activity) {
                        if (this.activity.certificateLevelId > certificateLevelId ||
                            this.activity.isNitrox > isNitrox ||
                            this.activity.cylinderTotalId > cylinderTotalId
                        ) {
                            setSwalFire("popup", "warning", "報名資格不符", "您的潛水經驗未達報名標準");
                        } else {
                            this.isLoadingBtn = true;
                            // 之前是否曾經報名過
                            const findOrder = this.activity.orders.find(order => order.userId == id);
                            this.updateOrder(this.activityId, findOrder?.id)
                                .then(resArr => {
                                    this.activity = resArr[0];
                                    this.isLoadingBtn = false;
                            });
                        }
                    }
                }
            }
        }
    }
};
</script>

<template>
    <teleport to="title">{{ activity.title }} - {{ VITE_COMPANY_NAME }}</teleport>
    <!-- sm 活動報名列表 -->
    <div class="activity-havbar body-bg fixed-top sticky-top-headerHeight shadow-lg" :class="{ 'show': hasActivityHavbar }">
        <div class="border-top opacity-30"></div>
        <div class="container py-2">
            <div class="row gy-2">
                <div class="col-sm-6">
                    <h3 class="fs-6 mb-0 text-truncate">{{ activity.location?.name }}</h3>
                    <h1 class="fw-bold fs-4 text-primary text-truncate mb-0">{{ activity.title }}</h1>
                </div>
                <div class="col-sm-6 d-flex align-items-center justify-content-sm-end">
                    <small class="me-2">每人</small><strong class="fs-4 me-3 font-barlow">{{ currencyFormat(activity.cost) }}</strong>
                    <button type="button" class="ms-auto ms-sm-0 btn btn-custom-rectangle" :disabled="isLoadingBtn || activityBtnDisabled" :class="activityBtnDisabled ? 'btn-lightPrimary opacity-40' : 'btn-danger'" @click="submitOrder"><span class="spinner-border spinner-border-sm" role="status" v-if="isLoadingBtn"></span>
                    {{ activityBtnText }}</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-4 py-md-5" ref="activityImgs">
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
                <h3 class="fs-6 mb-0">{{ activity.location?.name }}</h3>
                <h1 class="fw-bold fs-4 text-primary">{{ activity.title }}</h1>
                <ul class="list-unstyled opacity-80 mb-1">
                    <li class="font-barlow"><font-awesome-icon icon="fa-solid fa-calendar-days" fixed-width class="me-1" />{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</li>
                    <li class="font-barlow"><font-awesome-icon icon="fa-solid fa-user" fixed-width class="me-1" /><strong>{{ validOrderTotal }}</strong>{{ ` / ${activity.maxOrderTotal}` }}</li>
                    <li class="mt-3">主揪人<strong class="ms-2">{{ activity.user?.name }}</strong></li>
                    <li>證照等級<strong class="ms-2">{{ activity.certificateLevel?.name }}</strong></li>
                    <li>需有高氧證照<strong class="ms-2">
                            <template v-if="activity.isNitrox">是</template>
                            <template v-else>否</template>
                        </strong>
                    </li>
                    <li>潛水支數<strong class="ms-2">{{ activity.cylinderTotalId ? activity.cylinderTotal.name : '不限' }}</strong></li>
                    <li class="font-barlow">報名截止<strong class="ms-2">{{ dateFormat(activity.orderExpiryDate) }}</strong></li>
                </ul>
                <router-link class="text-decoration-none badge bg-lightPrimary bg-opacity-20 me-1" v-for="tag in activity.tags"  :key="tag" :to="{ path: '/activities', query: { tag: tag } }">{{ tag }}</router-link>
                <div class="mt-3 d-flex align-items-center">
                    <small class="me-2">每人</small><strong class="fs-4 me-3 font-barlow">{{ currencyFormat(activity.cost) }}</strong>
                    <button type="button" class="ms-auto ms-sm-0 btn btn-custom-rectangle" :disabled="isLoadingBtn || activityBtnDisabled" :class="activityBtnDisabled ? (activity.orderStatus === 4 && activity.activityStatus === 3 ? 'btn-danger' : 'btn-lightPrimary opacity-40') : 'btn-danger'" @click="submitOrder">
                    <span class="spinner-border spinner-border-sm" role="status" v-if="isLoadingBtn"></span>
                    {{ activityBtnText }}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 特點 & 內容 -->
    <div class="bg-primary bg-opacity-20 py-4 py-md-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="mb-5" v-if="activity.features">
                        <h4 class="fs-5 fw-bold mb-1">活動特點</h4>
                        <p class="white-space-pre-wrap">{{ activity.features }}</p>
                    </div>
                    <h4 class="fs-5 fw-bold mb-1">活動內容</h4>
                    <p class="white-space-pre-wrap mb-0">{{ activity.content }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-4 py-md-5">
        <div class="row gy-2 row-cols-lg-2">
            <!-- 評論 -->
            <div class="col-lg">
                <CommentList :user-id="activity.userId" :user-name="activity.user.name" v-if="activity.userId" />
            </div>
            <!-- 留言 -->
            <div class="col-lg" id="messaget">
                <MessagetList :activity-id="activityId" v-if="activityId" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";

.activity-havbar {
    opacity: 0;
    transform: translateY(-75px); 
    transition: all 0.5s ease-out;
    z-index: 1000;

    &.show {
        opacity: 1;
        transform: translateY(0); 
        transition: all 0.5s ease-in;
    }
}

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
