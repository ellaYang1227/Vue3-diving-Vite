<script>
import { activitiesIcon, commentScoreIcon, myOrdersIcon, ordersIcon } from "../data/imagePaths.js";

export default {
    props: ["title", "imgName", "value"],
    computed: {
        imgSrc() {
            if(this.imgName === 'activitiesIcon') {
                return activitiesIcon;
            } else if (this.imgName === 'commentScoreIcon') {
                return commentScoreIcon;
            } else if (this.imgName === 'myOrdersIcon') {
                return myOrdersIcon;
            } else if (this.imgName === 'ordersIcon') {
                return ordersIcon;
            }
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body p-2 p-sm-3">
            <div class="row g-2 justify-content-between justify-content-sm-center align-items-center">
                <div class="col-auto col-sm text-center">
                    <img :src="imgSrc" :alt="title" class="icon-height" />
                </div>
                <div class="col">
                    <strong class="fs-3 font-barlow">{{ value }}</strong>
                    <small class="d-block opacity-80">{{ title }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.icon-height {
    @media (max-width: 575px) {
        width: 50px;
    }

    @media (min-width: 576px) {
        height: 100%;
    }
}
</style>
