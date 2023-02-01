<script>
import ActivityCard from "../components/ActivityCard.vue";

export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    components: {
        ActivityCard,
    },
};
</script>

<template>
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
                    <div class="col-7 col-md-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/images/index/banner-icon/diving.svg" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2" />
                        <div class="text-center flex-grow-1 flex-md-grow-0"><span class="d-block text-primary fw-light font-barlow display-4 lh-1">1005</span>揪團潛水</div>
                    </div>
                    <div class="col-7 col-md-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/images/index/banner-icon/peoples.svg" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2" />
                        <div class="text-center flex-grow-1 flex-md-grow-0"><span class="d-block text-primary fw-light font-barlow display-4 lh-1">14186</span>報名人數</div>
                    </div>
                    <div class="col-7 col-md-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/images/index/banner-icon/area.svg" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2" />
                        <div class="text-center flex-grow-1 flex-md-grow-0"><span class="d-block text-primary fw-light font-barlow display-4 lh-1">84</span>潛水地區</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <ActivityCard />
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
