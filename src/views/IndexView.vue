<script setup></script>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<template>
    <div class="bg-img pb-5 py-lg-5">
        <div class="container text-center py-5">
            <h6 class="en-title text-uppercase fs-5 font-barlow mb-0">DIVING</h6>
            <h1 class="main-title display-3 mb-0">潛安伴旅這裡揪</h1>
            <h2 class="sub-title opacity-75 fs-4">在氣瓶海人遇見好潛伴</h2>
            <a class="btn btn-outline-lightPrimary btn-lg rounded-pill w-25 opacity-75 mt-4" href="#" role="button">我要揪團</a>
        </div>
        <div class="bg-lightPrimary bg-opacity-20">
            <div class="container">
                <div class="grid">
                    <div class="g-col-12 g-col-md-4 d-flex justify-content-center align-items-center py-4">
                        <img src="../assets/images/index/banner-icon/diving.svg" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-2" />
                        <div class="text-center"><span class="d-block text-primary fw-light font-barlow display-4 lh-1">1005</span>揪團潛水</div>
                    </div>
                    <div class="g-col-12 g-col-md-4 d-flex justify-content-center align-items-center py-4">
                        <img src="../assets/images/index/banner-icon/peoples.svg" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-2" />
                        <div class="text-center"><span class="d-block text-primary fw-light font-barlow display-4 lh-1">14186</span>報名人數</div>
                    </div>
                    <div class="g-col-12 g-col-md-4 d-flex justify-content-center align-items-center py-4">
                        <img src="../assets/images/index/banner-icon/area.svg" class="banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-2" />
                        <div class="text-center"><span class="d-block text-primary fw-light font-barlow display-4 lh-1">84</span>潛水地區</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";
.bg-img {
    background: url("../assets/images/index/banner-people.png") center center no-repeat;
    background-size: contain;

    .en-title {
        text-indent: 1.875rem;
        letter-spacing: 1.875rem;
    }

    .main-title {
        text-indent: 1.25rem;
        letter-spacing: 1.25rem;
        -webkit-text-stroke: 1px $primary;
        color: $bg-primary-20;
    }

    .sub-title {
        text-indent: 2.25rem;
        letter-spacing: 2.25rem;
    }

    .banner-icon-size {
        width: 90px;
        height: 90px;
    }
}
</style>
