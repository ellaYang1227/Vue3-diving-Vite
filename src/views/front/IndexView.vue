<script>
import AOS from "aos";
import CountUp from "vue-countup-v3";
import Swiper from "swiper/bundle";
import { mapState, mapActions } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import ActivityStore from "../../stores/ActivityStore.js";
import CommentStore from "../../stores/CommentStore.js";
import swiperParams from "../../data/swiperParams.js";
import { divingIcon, peoplesIcon, areaIcon, licenseImg, scoreImg, commentImg } from "../../data/imagePaths.js";
import CornerActivityCard from "../../components/CornerActivityCard.vue";
import BottomFrameActivityCard from "../../components/BottomFrameActivityCard.vue";
import UserMugShot from "../../components/UserMugShot.vue";

export default {
    data() {
        return {
            commentImg,
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
                }
            ],
            activityNavs: {
                hot: "熱門",
                new: "最新"
            },
            activeActivityNav: "hot",
            features: [
                {
                    title: "證照門檻\n找伴揪安心",
                    img: licenseImg
                },
                {
                    title: "評分機制\n加團不踩雷",
                    img: scoreImg
                }
            ],
            newActivities: [],
            hotActivities: [],
            goodRatingActivities: [],
            adLocations: []
        };
    },
    inject: ["frontLayoutData"],
    components: {
        CornerActivityCard,
        BottomFrameActivityCard,
        UserMugShot,
        CountUp
    },
    computed: {
        ...mapState(CommentStore, ["initComments"]),
        activityCards() {
            let cards = [];
            switch (this.activeActivityNav) {
                case "new":
                    cards = this.newActivities;
                    break;
                case "hot":
                    cards = this.hotActivities;
                    break;
            }

            return cards;
        },
        comments() {
            return this.initComments.slice(0, 6);
        }
    },
    created() {
        this.frontLayoutData.showSearchBar = false;
        this.frontLayoutData.isMainOverflowHidden = true;
    },
    mounted() {
        Promise.all([
            this.getNewActivities(),
            this.getHotActivities(),
            this.getAdLocations()
        ]).then(resArr => {
            resArr[0] = this.setScore(resArr[0]);
            this.goodRatingActivities = this.getGoodRatingActivities(resArr[0]);
            this.newActivities = resArr[0].slice(0, 3);
            this.hotActivities = this.setScore(resArr[1]);
            this.adLocations = resArr[2];
            this.setSwiper("commentSwiper");
            this.setSwiper("goodRatingSwiper");
            this.hideLoading();
            
            AOS.init({
                duration: 1200,
                easing: "ease-in-out-back"
            });
        });
    },
    methods: {
        ...mapActions(ActivityStore, ["getNewActivities", "getHotActivities", "getAdLocations"]),
        ...mapActions(CommentStore, ["setScore"]),
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        getGoodRatingActivities(activities) {
            return activities.sort((a, b) => b.score - a.score).slice(0, 3);
        },
        toggleActiveActivityNav(nav) {
            this.activeActivityNav = nav;
        },
        setSwiper(refName) {
            let addSwiperParams = null;
            if (refName === "commentSwiper") {
                addSwiperParams = {
                    grid: {
                        rows: 2 // 網格
                    }
                };
            } else if (refName === "goodRatingSwiper") {
                addSwiperParams = {
                    slidesPerView: 1,
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }
                };
            }

            new Swiper(this.$refs[refName], { ...swiperParams, ...addSwiperParams });
        }
    }
};
</script>

<template>
    <!-- banner -->
    <div class="bg-img pb-5 py-lg-5">
        <div class="container text-center py-5" data-aos="zoom-out-down">
            <h6 class="en-title text-uppercase fs-5 font-barlow mb-0">DIVING</h6>
            <h1 class="main-title display-3 mb-0 fw-bold">潛安伴旅這裡揪</h1>
            <h2 class="sub-title opacity-75 fs-4">在氣瓶海人遇見好潛伴</h2>
            <div class="d-grid col-7 col-md-4 col-lg-3 mx-auto mt-4">
                <router-link to="addActivity" class="btn btn-outline-lightPrimary btn-lg rounded-pill" role="button">我要揪團</router-link>
            </div>
        </div>
        <div class="bg-primary bg-opacity-20 mt-3" data-aos="fade-up" data-aos-delay="600">
            <div class="container py-4">
                <div class="row gx-0 gy-4 justify-content-center">
                    <div
                        data-aos="flip-left"
                        data-aos-delay="1000"
                        class="col-7 col-md-4 d-flex justify-content-center align-items-center"
                        v-for="bannerIcon in bannerIcons"
                        :key="bannerIcon.title"
                    >
                        <img :src="bannerIcon.img" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2" />
                        <div class="text-center flex-grow-1 flex-md-grow-0">
                            <span class="d-block text-primary fw-light font-barlow display-4 lh-1">
                                <count-up :endVal="bannerIcon.total" :duration="5"></count-up></span
                            >{{ bannerIcon.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" data-aos="fade-up">
        <!-- 熱門 / 最新 活動 -->
        <nav class="nav fs-4">
            <a
                class="nav-link fw-bold"
                :class="{ disabled: activeActivityNav === key, 'ps-0': !index }"
                aria-current="page"
                href="#"
                v-for="(activityNav, key, index) in activityNavs"
                :key="key"
                @click.prevent="toggleActiveActivityNav(key)"
                >{{ activityNav }}
            </a>
        </nav>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <div data-aos="fade-up" v-for="(activityCard, index) in activityCards" :key="activityCard.id">
                <CornerActivityCard :activity="activityCard" :class="{ 'd-block d-sm-none d-lg-block': index >= 2 }" />
            </div>
        </div>
        <!-- 特點 -->
        <div class="row gy-4 justify-content-center py-4 py-md-5">
            <div
                class="col-9 col-md col-lg-5"
                v-for="(feature, index) in features"
                :key="feature.title"
                :data-aos="index % 2 ? 'fade-down-left' : 'fade-down-right'"
            >
                <div class="row g-0">
                    <div class="col-5">
                        <img :src="feature.img" :alt="feature.title" class="img-fluid" />
                    </div>
                    <h5 class="col fw-bold text-warning fs-1 mb-0 white-space-pre-wrap lh-sm align-self-center mt-3 mt-xl-5">
                        {{ feature.title }}
                    </h5>
                </div>
            </div>
        </div>
    </div>
    <!-- 地點 -->
    <div class="bg-primary bg-opacity-20 my-4 my-md-5 py-3" data-aos="fade-up">
        <div class="container-fluid waterfalls-flow-imgs">
            <router-link
                :to="{ path: '/activities', query: { locationId: `${adLocation.id}`} }"
                class="position-relative shadow"
                v-for="(adLocation, index) in adLocations"
                :key="adLocation.id"
                :class="`waterfalls-flow-item-${index + 1}`"
                data-aos="zoom-out-down"
                :data-aos-delay="50 * index"
            >
                <div class="waterfalls-flow-item-img-box">
                    <img :src="adLocation.img" :alt="adLocation.name" class="img-cover" />
                </div>
                <div class="position-absolute bottom-0 start-0 m-3 p-2 border border-lightPrimary bg-primary bg-opacity-20">
                    <h2 class="text-truncate-row-2 mb-0 text-body fs-5">
                        {{ adLocation.name }}
                    </h2>
                </div>
            </router-link>
        </div>
    </div>
    <div class="container">
        <!-- 評論 -->
        <div class="py-4 py-md-5" data-aos="zoom-out">
            <h5 class="fs-4 text-center text-primary mb-5">
                <strong>聽聽其他人怎麼說</strong><small class="d-block text-body fs-6">大家參加完潛團的想法是甚麼呢</small>
            </h5>
            <div class="row justify-content-center row-cols-1 row-cols-md-2 gy-4 gy-md-0">
                <div class="col-10 col-md text-center align-self-center" data-aos="zoom-out">
                    <img :src="commentImg" alt="評論" class="comment-img-height" />
                </div>
                <div class="col" data-aos="zoom-out">
                    <div ref="commentSwiper" class="swiper comment-swiper offset-pagination">
                        <div class="swiper-wrapper">
                            <div v-for="comment in comments" :key="comment.id" class="swiper-slide align-items-start">
                                <div class="row align-items-end">
                                    <div class="col-sm-5 col-md-6 col-lg-5">
                                        <UserMugShot :name="comment.user.name" :img="comment.user.img" :score="comment.score" :isShowRating="false" />
                                    </div>
                                    <h2 class="col-sm-7 col-md-6 col-lg-7 fs-6 mb-0 text-primary text-truncate text-sm-end mt-2 mt-sm-0">{{
                                        comment.activity.title }}</h2>
                                    <p class="mb-0 col-12 mt-sm-2 text-truncate-row-4">{{ comment.content }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 好評主揪開團 -->
        <div class="py-4 py-md-5" data-aos="fade-up">
            <h5 class="fs-4 text-center text-primary mb-3">
                <strong>好評主揪開團</strong><small class="d-block text-body fs-6">跟著好主揪 享受安心潛旅</small>
            </h5>
            <div ref="goodRatingSwiper" class="swiper good-rating-swiper offset-pagination">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="goodRatingActivity in goodRatingActivities" :key="goodRatingActivity.id">
                        <BottomFrameActivityCard data-aos="flip-left" :activity="goodRatingActivity" />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";
$waterfalls-flow-item-gap: $spacer;
$comment-height: 420px;

.bg-img {
    background: url("../../assets/images/index/banner-people.png") center center no-repeat;
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

// 瀑布流圖片
.waterfalls-flow-imgs {
    display: grid;
    grid-row-gap: $waterfalls-flow-item-gap;
    grid-column-gap: $waterfalls-flow-item-gap;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: 185px;

    grid-template-rows: repeat(2, 225px 85px 150px 125px);

    @media (min-width: 768px) and (max-width: 1199px) {
        grid-template-rows: repeat(2, 225px 85px 150px);
        grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 1200px) {
        grid-template-rows: repeat(1, 225px 85px 150px);
    }

    @media (min-width: 1200px) and (max-width: 1399px) {
        grid-template-columns: repeat(4, auto);
    }

    @media (min-width: 1400px) {
        grid-template-columns: repeat(6, auto);
    }

    .waterfalls-flow-item {
        &-1 {
            @media (max-width: 767px) {
                grid-row-start: span 2;
            }

            @media (min-width: 768px) and (max-width: 1199px) {
                grid-column-start: span 2;
            }
        }

        &-2 {
            @media (min-width: 768px) and (max-width: 1199px) {
                grid-row-start: span 2;
            }

            @media (min-width: 1200px) {
                grid-row-start: span 3;
            }
        }

        &-3 {
            grid-row-start: span 2;

            @media (min-width: 768px) and (max-width: 1199px) {
                grid-row-start: span 3;
            }

            @media (min-width: 1200px) {
                grid-row-start: span 2;
            }
        }

        &-4 {
            @media (min-width: 768px) and (max-width: 1199px) {
                grid-row-start: span 2;
            }

            @media (min-width: 1200px) and (max-width: 1399px) {
                grid-row-start: 3;
                grid-column: 3 / 5;
            }

            @media (min-width: 1400px) {
                grid-column: 4 / 6;
            }
        }

        &-5 {
            @media (max-width: 767px) {
                grid-column-start: span 2;
            }

            @media (min-width: 768px) {
                grid-row-start: span 2;
            }
        }

        &-6 {
            grid-row-start: span 2;

            @media (min-width: 1200px) {
                grid-row-start: span 3;
            }
        }

        &-7 {
            @media (min-width: 768px) {
                grid-row-start: span 3;
            }
        }

        &-8 {
            @media (max-width: 1199px) {
                grid-row-start: span 2;
            }

            @media (min-width: 1400px) {
                grid-row-start: span 2;
            }
        }

        &-9 {
            grid-row-start: span 2;

            @media (min-width: 768px) and (max-width: 1199px) {
                grid-row-start: span 3;
            }
            @media (min-width: 1400px) {
                grid-row-start: span 2;
            }
        }

        &-10 {
            @media (max-width: 1399px) {
                grid-row-start: span 2;
            }
        }

        &-11 {
            @media (max-width: 1399px) {
                grid-row-start: span 2;
            }
        }

        &-12 {
            @media (min-width: 768px) and (max-width: 1199px) {
                grid-column: span 2;
            }
            @media (min-width: 1400px) {
                grid-column: span 2;
            }
        }
    }

    .waterfalls-flow-item-img-box {
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
            height: 100%;
            filter: brightness(0.75) blur(0.5px);
            transition: all 0.5s ease-in-out;

            &:hover {
                filter: brightness(1);
                transform: scale(1.2);
            }
        }
    }
}

// 評論
.comment-img-height {
    @media (max-width: 991px) {
        width: 100%;
    }

    @media (min-width: 992px) {
        height: $comment-height * 1.1;
    }
}

.comment-swiper {
    height: 440px;

    @media (min-width: 576px) {
        height: $comment-height;
    }

    .swiper-slide {
        height: calc((100% - 30px) / 2) !important;
    }
}

// 好評主揪開團
.good-rating-swiper {
    .swiper-slide {
        height: 90%;
    }
}
</style>
