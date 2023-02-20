<script setup>
import formSchema from "../../data/formSchema.js";
import { loginImg } from "../../data/imagePaths.js";

const { VITE_COMPANY_NAME } = import.meta.env;
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    data() {
        return {
            title: "登入",
            user: {
                email: "",
                password: ""
            },
            isLoadingBtn: false
        };
    },
    components: {
        Form,
        Field,
        ErrorMessage
    },
    inject: ["frontLayoutData"],
    created() {
        this.frontLayoutData.isVerticalMiddle = true;
    },
    methods: {
        login() {
            this.isLoadingBtn = true;
        }
    }
};
</script>

<template>
    <div class="container py-2 py-sm-4 py-md-5">
        <div class="row justify-content-center">
            <div class="col-md-11 col-lg-10 col-xxl-8">
                <div class="login-card card bg-darkPrimary bg-opacity-50 shadow-lg">
                    <div class="row g-0">
                        <div class="col-md-5 position-relative d-flex justify-content-center">
                            <img
                                :src="loginImg"
                                class="border border-card-border-width login-img img-cover shadow-lg"
                                :alt="`${VITE_COMPANY_NAME}-${title}`"
                            />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body py-4 py-md-5">
                                <h5 class="card-title mb-2 mb-mb-4 fw-bold fs-4 text-primary">{{ title }}</h5>
                                <Form v-slot="{ errors }" @submit="login">
                                    <fieldset :disabled="isLoadingBtn">
                                        <div class="mb-3">
                                            <label :for="`${formSchema.email.label}Input`" class="form-label"
                                                >{{ formSchema.email.label
                                                }}<span class="text-danger" v-if="formSchema.email.isRequired">*</span></label
                                            >
                                            <Field
                                                :id="`${formSchema.email.label}Input`"
                                                :name="formSchema.email.label"
                                                :type="formSchema.email.type"
                                                class="form-control"
                                                :class="{ 'is-invalid': errors[formSchema.email.label] }"
                                                :placeholder="`請輸入 ${formSchema.email.label}`"
                                                :rules="formSchema.email.rules"
                                                v-model="user.email"
                                            ></Field>
                                            <ErrorMessage :name="formSchema.email.label" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="mb-3">
                                            <label :for="`${formSchema.password.label}Input`" class="form-label"
                                                >{{ formSchema.password.label
                                                }}<span class="text-danger" v-if="formSchema.password.isRequired">*</span></label
                                            >
                                            <Field
                                                :id="`${formSchema.password.label}Input`"
                                                :name="formSchema.password.label"
                                                :type="formSchema.password.type"
                                                class="form-control"
                                                :class="{ 'is-invalid': errors[formSchema.password.label] }"
                                                :placeholder="`請輸入${formSchema.password.label}`"
                                                :rules="formSchema.password.rules"
                                                v-model="user.password"
                                            ></Field>
                                            <ErrorMessage :name="formSchema.password.label" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-primary w-100 mt-3"
                                            :disabled="isLoadingBtn || Object.keys(errors).length"
                                        >
                                            {{ title }}
                                        </button>
                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 offset-md-5 text-center pt-1">沒有帳號？<router-link to="/signup" class="text-reset">立即註冊</router-link></div>
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
