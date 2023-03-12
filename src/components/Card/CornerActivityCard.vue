<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
import decimalFormat from "../../handle-formats/decimalFormat.js";
import { getMainImg } from "../../data/utilitieFunctions.js";
</script>

<script>
import propsValidator from "../../data/propsValidator.js";
import UserMugShot from "../UserMugShot.vue";

export default {
    props: {
        activity: {
            type: Object,
            required: true,
            validator(value) {
                const verifyKeys = ["id", "title", "imgs", "location", "startDate", "endDate", "isNitrox", "cylinderTotalId", "user"];
                return propsValidator("CornerActivityCard", value, verifyKeys);
            }
        }
    },
    components: {
        UserMugShot
    }
};
</script>

<template>
    <router-link :to="`/activity/${activity.id}`" class="col text-decoration-none">
        <div class="corner-card">
            <div class="img-frame mb-3">
                <div class="outer-border"></div>
                <div class="card custom-rectangle">
                    <img :src="getMainImg(activity.imgs).img" class="card-img custom-rectangle img-cover" :alt="`[${activity.location.name}]${activity.title}`" />
                    <div class="card-img-overlay" v-if="activity.score">
                        <span
                            class="fs-6 font-barlow badge rounded-pill bg-darkPrimary bg-opacity-75 text-body border border-2"
                            >{{ decimalFormat(activity.score, 1) }}</span
                        >
                    </div>
                </div>
            </div>
            <h2 class="h5 mb-1 text-primary text-truncate-row-2 fw-bold">{{ activity.title }}</h2>
            <ul class="list-unstyled text-body lh-sm">
                <li>{{ activity.location.name }}</li>
                <li class="font-barlow">{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</li>
                <li class="row align-items-center fw-bold pt-2">
                    <div class="col text-truncate">
                        <UserMugShot :width-size="30" :name="activity.user.name" :img="activity.user.img" />
                    </div>
                    <ul class="col-auto font-barlow list-inline">
                        <li class="list-inline-item">{{ activity.certificateLevel.name }}</li>
                        <li class="list-inline-item" v-if="activity.isNitrox">高氧</li>
                        <li class="list-inline-item" v-if="activity.cylinderTotalId">{{ activity.cylinderTotal.name }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </router-link>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";
$img-frame-card-Spacing: 1rem;

.corner-card {
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
