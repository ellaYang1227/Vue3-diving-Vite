<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
import decimalFormat from "../handle-formats/decimalFormat.js";
</script>

<script>
import propsValidator from "../data/propsValidator.js";
import UserMugShot from "./UserMugShot.vue";

export default {
    data() {
        return {};
    },
    props: {
        activity: {
            type: Object,
            required: true,
            validator(value) {
                const verifyKeys = ["id", "title", "imgs", "location", "startDate", "endDate", "isNitrox", "cylinderTotal", "user"];

                return propsValidator(value, verifyKeys);
            }
        }
    },
    components: {
        UserMugShot
    },
    mounted() {},
    methods: {}
};
</script>

<template>
    <router-link to="#" class="col text-decoration-none">
        <div class="img-frame-card">
            <div class="img-frame mb-3">
                <div class="outer-border"></div>
                <div class="card custom-rectangle bg-primary">
                    <img :src="activity.imgs[0]" class="card-img custom-rectangle img-cover" :alt="`[${activity.location}]${activity.title}`" />
                    <div class="card-img-overlay">
                        <span
                            class="fs-6 font-barlow badge rounded-pill bg-darkPrimary bg-opacity-75 text-body border border-lightPrimary border-2"
                            >{{ decimalFormat(activity.user?.score, 1) }}</span
                        >
                    </div>
                </div>
            </div>
            <h2 class="h5 mb-1 text-primary text-truncate-row-2 fw-bold">{{ activity.title }}</h2>
            <ul class="list-unstyled text-body lh-sm">
                <li>{{ activity.location }}</li>
                <li class="font-barlow">{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</li>
                <li class="row align-items-center fw-bold pt-3">
                    <div class="col text-truncate">
                        <UserMugShot :width-size="30" :name="activity.user?.name" :img="activity.user?.img" />
                    </div>
                    <ul class="col-auto font-barlow list-inline">
                        <li class="list-inline-item">{{ activity.grade }}</li>
                        <li class="list-inline-item" v-if="activity.isNitrox">高氧</li>
                        <li class="list-inline-item" v-if="activity.cylinderTotal">{{ activity.cylinderTotal }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </router-link>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";
$img-frame-card-Spacing: 1rem;

.img-frame-card {
    margin-left: $img-frame-card-Spacing;
    margin-top: $img-frame-card-Spacing;

    .img-frame {
        position: relative;

        .outer-border {
            background-color: $primary;
            clip-path: polygon(0 0, 0% 100%, 7px 100%, 7px 7px, 70% 7px, 70% 0);
            position: absolute;
            top: -$img-frame-card-Spacing;
            left: -$img-frame-card-Spacing;
            width: 50%;
            height: 50%;
        }

        .card-img {
            height: 200px;

            @media (min-width: 576px) and (max-width: 767px) {
                height: 150px;
            }

            @media (min-width: 1200px) {
                height: 250px;
            }
        }
    }

    .card-img-overlay {
        left: unset;
        right: 0;
    }
}
</style>
