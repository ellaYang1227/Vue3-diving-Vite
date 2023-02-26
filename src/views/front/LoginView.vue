<script setup>
import formSchema from "../../data/formSchema.js";
import { loginImg } from "../../data/imagePaths.js";
import { guestGuard } from "../../data/routeGuard.js";
const { VITE_COMPANY_NAME } = import.meta.env;
</script>

<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import MemberStore from "../../stores/MemberStore.js";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    data() {
        return {
            title: "登入",
            form: {
                email: "",
                password: ""
            }
        };
    },
    inject: ["frontLayoutData"],
    components: {
        VForm: Form,
        Field,
        ErrorMessage
    },
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"])
    },
    beforeRouteEnter(to, from, next) {
        guestGuard(to, from, next);
    },
    created() {
        this.frontLayoutData.isVerticalMiddle = true;
        this.hideLoading();
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(MemberStore, ["login"]),
        onSubmit() {
            this.showLoading("btn");
            const { returnUrl } = this.$route.query;
            this.login(this.form, returnUrl);
        }
    }
};
</script>

<template>
    <div class="container py-2 py-sm-4 py-md-5">
        <div class="row justify-content-center">
            <div class="col-md-11 col-lg-10 col-xxl-8">
                <div class="login-card card">
                    <div class="row g-0">
                        <div class="col-md-5 position-relative d-flex justify-content-center">
                            <img
                                :src="loginImg"
                                class="border border-card-border-width login-img img-cover shadow"
                                :alt="`${VITE_COMPANY_NAME}-${title}`"
                            />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body py-4 py-md-5">
                                <h5 class="card-title mb-2 fw-bold fs-4 text-primary text-end opacity-75 text-shadow">
                                    {{ title }}<small class="font-barlow text-uppercase fw-normal ms-1">login</small>
                                </h5>
                                <VForm v-slot="{ errors }" @submit="onSubmit">
                                    <fieldset :disabled="isLoadingBtn">
                                        <div class="mb-3">
                                            <label :for="formSchema.email.label" class="form-label"
                                                >{{ formSchema.email.label
                                                }}<span class="text-danger" v-if="formSchema.email.isRequired">*</span></label
                                            >
                                            <Field
                                                :id="formSchema.email.label"
                                                :name="formSchema.email.label"
                                                :type="formSchema.email.type"
                                                class="form-control"
                                                :class="{ 'is-invalid': errors[formSchema.email.label] }"
                                                :placeholder="`請輸入 ${formSchema.email.label}`"
                                                :rules="formSchema.email.rules"
                                                v-model.trim="form.email"
                                            ></Field>
                                            <ErrorMessage :name="formSchema.email.label" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="mb-3">
                                            <label :for="formSchema.password.label" class="form-label"
                                                >{{ formSchema.password.label
                                                }}<span class="text-danger" v-if="formSchema.password.isRequired">*</span></label
                                            >
                                            <Field
                                                :id="formSchema.password.label"
                                                :name="formSchema.password.label"
                                                :type="formSchema.password.type"
                                                class="form-control"
                                                :class="{ 'is-invalid': errors[formSchema.password.label] }"
                                                :placeholder="`請輸入${formSchema.password.label}`"
                                                :rules="formSchema.password.rules.required"
                                                v-model.trim="form.password"
                                            ></Field>
                                            <ErrorMessage :name="formSchema.password.label" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="text-end pt-3">
                                            <button
                                                type="submit"
                                                class="btn btn-primary btn-custom-rectangle"
                                                :disabled="isLoadingBtn || Object.keys(errors).length"
                                            >
                                                <span class="spinner-border spinner-border-sm text-dark-primary" role="status" v-if="isLoadingBtn"></span>
                                                {{ title }}
                                            </button>
                                        </div>
                                    </fieldset>
                                </VForm>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 offset-md-5 text-center pt-2">沒有帳號？<router-link to="/signup" class="text-reset">立即註冊</router-link></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";

.login-card {
    margin-top: $card-spacer-x;

    .login-img {
        @media (max-width: 375px) {
            height: 150px;
        }

        @media (min-width: 376px) and (max-width: 767px) {
            height: 180px;
        }

        @media (min-width: 768px) {
            position: absolute;
            height: calc(100% + $card-spacer-x * 2);
        }

        width: calc(100% - $card-spacer-x * 2);
        margin-top: -$card-spacer-x;
    }
}
</style>
