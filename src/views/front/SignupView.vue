<script setup>
import { signupImg } from "../../data/imagePaths.js";
import { guestGuard } from "../../data/routeGuard.js";
const { VITE_COMPANY_NAME } = import.meta.env;
</script>

<script>
import MyinfoForm from "../../components/MyinfoForm.vue";

export default {
    data() {
        return {
            title: "註冊"
        };
    },
    beforeRouteEnter(to, from, next) {
        guestGuard(to, from, next);
    },
    components: {
        MyinfoForm
    }
};
</script>

<template>
    <div class="container py-4 py-md-5">
        <div class="row justify-content-center">
            <div class="col-md-11 col-lg-10 col-xxl-8">
                <div class="signup-card card">
                    <div class="signup-img-box position-relative d-flex justify-content-center">
                        <img
                            :src="signupImg"
                            class="signup-img card-img-top border border-card-border-width login-img img-cover shadow"
                            :alt="`${VITE_COMPANY_NAME}-${title}`"
                        />
                        <div class="card-img-overlay d-flex justify-content-end align-items-end">
                            <h5 class="card-title fw-bold fs-4 opacity-75 mb-0 text-shadow">
                                {{ title }}<small class="font-barlow text-uppercase fw-normal ms-1">signup</small>
                            </h5>
                        </div>
                    </div>
                    <div class="card-body pt-4 pt-md-5">
                        <MyinfoForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";

.signup-card {
    margin-top: $card-spacer-x;

    .signup-img-box {
        height: 180px;

        @media (max-width: 375px) {
            height: 150px;
        }

        .card-img-overlay {
            margin-left: $card-spacer-x;
            margin-right: $card-spacer-x;
        }

        .signup-img {
            @media (min-width: 768px) {
                position: absolute;
                height: calc(100% + $card-spacer-x * 1);
            }

            width: calc(100% - $card-spacer-x * 2);
            margin-top: -$card-spacer-x;
        }
    }
}
</style>
