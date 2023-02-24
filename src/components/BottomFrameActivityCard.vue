<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
</script>

<script>
import propsValidator from "../data/propsValidator.js";
import UserMugShot from "./UserMugShot.vue";

export default {
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
    }
};
</script>

<template>
    <router-link to="#" class="col text-decoration-none">
        <div class="bottom-frame-card">
            <div class="img-frame mb-3">
                <div class="outer-border custom-rectangle border border-card-border-width"></div>
                <div class="card custom-rectangle">
                    <img :src="activity.imgs[0]" class="card-img custom-rectangle img-cover" :alt="`[${activity.location}]${activity.title}`" />
                    <div class="card-img-overlay text-body w-75">
                        <UserMugShot :name="activity.user?.name" :img="activity.user?.img" :score="activity.user?.score" :isShowRating="false" />
                    </div>
                </div>
            </div>
            <h2 class="h5 mb-1 text-primary text-truncate-row-2 fw-bold">{{ activity.title }}</h2>
            <ul class="list-unstyled text-body lh-sm">
                <li>{{ activity.location }}</li>
                <li class="font-barlow">{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</li>
            </ul>
        </div>
    </router-link>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";
$img-frame-card-Spacing: 1rem;

.bottom-frame-card {
    margin-left: $img-frame-card-Spacing;
    margin-top: $img-frame-card-Spacing;

    .img-frame {
        position: relative;

        .outer-border {
            background-color: $bg-primary-10;
            position: absolute;
            top: -$img-frame-card-Spacing;
            left: -$img-frame-card-Spacing;
            width: 100%;
            height: 100%;
        }

        .card-img {
            height: 200px;

            @media (min-width: 576px) and (max-width: 767px) {
                height: 250px;
            }

            @media (min-width: 992px) {
                height: 250px;
            }

            @media (min-width: 1200px) {
                height: 350px;
            }
        }
    }

    .card-img-overlay {
        top: unset;
        bottom: 0;
    }
}
</style>
