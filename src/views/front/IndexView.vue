<script>
import AOS from "aos";
import CountUp from "vue-countup-v3";
import { mapState, mapActions } from "pinia";
import { divingIcon, peoplesIcon, areaIcon, licenseImg, scoreImg, commentImg } from "../../data/imagePaths.js";
import ActivityCard from "../../components/ActivityCard.vue";
import ActivityStore from "../../stores/ActivityStore.js";

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
            ]
        };
    },
    mounted() {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out-back"
        });
        this.getActivitys();
        this.getLocations();
        this.getComments();
    },
    computed: {
        ...mapState(ActivityStore, ["newActivitys", "hotActivitys", "adLocations"]),
        activityCards() {
            let cards = [];
            switch (this.activeActivityNav) {
                case "new":
                    cards = this.newActivitys;
                    break;
                case "hot":
                    cards = this.hotActivitys;
                    break;
            }

            return cards;
        }
    },
    methods: {
        ...mapActions(ActivityStore, ["getActivitys", "getLocations"]),
        toggleActiveActivityNav(nav) {
            this.activeActivityNav = nav;
        }
    },
    components: {
        ActivityCard,
        CountUp
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
                <router-link to="addGroup" class="btn btn-outline-lightPrimary btn-lg rounded-pill opacity-75" role="button">我要揪團</router-link>
            </div>
        </div>
        <div class="bg-lightPrimary bg-opacity-20 mt-3" data-aos="fade-up" data-aos-delay="600">
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
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4" v-if="activityCards.length">
            <div data-aos="fade-up" v-for="(activityCard, index) in activityCards" :key="activityCard.id">
                <ActivityCard :activity="activityCard" :class="{ 'd-block d-sm-none d-lg-block': index >= 2 }" />
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
                    <h5 class="col fw-bold text-warning fs-1 mb-0 word-break-keep-all lh-sm align-self-center mt-3 mt-xl-5">
                        {{ feature.title }}
                    </h5>
                </div>
            </div>
        </div>
    </div>
    <!-- 地點 -->
    <div class="bg-lightPrimary bg-opacity-20 my-3 py-3" data-aos="fade-up">
        <div class="container-fluid waterfalls-flow-imgs">
            <router-link
                to="#"
                class="position-relative"
                v-for="(adLocation, index) in adLocations"
                :key="adLocation.id"
                :class="`waterfalls-flow-item-${index + 1}`"
                data-aos="zoom-out-down"
                :data-aos-delay="50 * index"
            >
                <div class="waterfalls-flow-item-img-box">
                    <img :src="adLocation.img" :alt="adLocation.name" class="img-cover" />
                </div>
                <h2
                    class="position-absolute bottom-0 start-0 m-3 py-1 px-2 border border-lightPrimary bg-lightPrimary bg-opacity-20 text-body fs-5 text-truncate-row-2"
                >
                    {{ adLocation.name }}
                </h2>
            </router-link>
        </div>
    </div>
    <!-- 評論 -->
    <div class="container py-4 py-md-5" data-aos="fade-up">
        <h5 class="fs-3 text-center text-primary">
            <strong>聽聽其他人怎麼說</strong><small class="d-block text-body fs-5">大家參加完潛團的想法是甚麼呢</small>
        </h5>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col-auto">
                <img :src="commentImg" alt="評論" class="shadow-lg" />
            </div>
            <div class="col">
                <swiper-container init="false" ref="commentSwiper">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                </swiper-container>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";
$waterfalls-flow-item-gap: $spacer;

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
            @media (min-width: 767px) and (max-width: 1199px) {
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
            filter: brightness(0.75) blur(0.9px);
            transition: all 0.5s ease-in-out;

            &:hover {
                filter: brightness(1);
                transform: scale(1.2);
            }
        }
    }
}
</style>
