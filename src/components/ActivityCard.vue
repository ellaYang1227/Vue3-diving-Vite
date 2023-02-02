<script>
import UserMugShot from "./UserMugShot.vue";

export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    components: {
        UserMugShot
    },
};
</script>

<template>
    <router-link to="#" class="col text-decoration-none">
        <div class="img-frame-card">
            <div class="img-frame mb-3">
                <div class="outer-border"></div>
                <div class="card custom-rectangle bg-primary">
                    <img src="/Vue3-diving-Vite/示意OK.jpg" class="card-img custom-rectangle img-cover" alt="..." />
                    <div class="card-img-overlay">
                        <span class="fs-6 font-barlow badge rounded-pill bg-darkPrimary bg-opacity-75 text-body border border-lightPrimary border-2">5.0</span>
                    </div>
                </div>
            </div>
            <h2 class="h5 mb-1 text-primary">初四開始，一起來宿霧陪鯨鯊玩水吧！</h2>
            <ul class="list-unstyled text-body lh-sm">
                <li>菲律賓．宿霧</li>
                <li class="font-barlow">2023/01/25 ~ 2023/01/29</li>
                <li class="row align-items-center fw-bold pt-3">
                    <div class="col text-truncate"><UserMugShot :width-size="25" :name="'LULULULULULULULULULULULULULULULULULULULULULULULULULULULULULU'" :img="''" /></div>
                    <div class="col-auto font-barlow">AOW</div>
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
