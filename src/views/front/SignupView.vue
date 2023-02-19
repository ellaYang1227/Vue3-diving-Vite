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
            title: "註冊",
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
    methods: {
        signup() {
            this.isLoadingBtn = true;
        }
    }
};
</script>

<template>
    <div class="container py-4 py-md-5">
        <div class="row justify-content-center">
            <div class="col-md-11 col-lg-10 col-xxl-8">
                <div class="signup-card card bg-darkPrimary bg-opacity-50 shadow-lg">
                    <div class="signup-img-box position-relative d-flex justify-content-center">
                        <img
                            :src="loginImg"
                            class="signup-img card-img-top border border-card-border-width login-img img-cover shadow-lg"
                            :alt="`${VITE_COMPANY_NAME}-${title}`"
                        />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title py-2 fw-bold fs-4 text-primary">{{ title }}</h5>
                        <Form v-slot="{ errors }" @submit="signup">
                            <fieldset :disabled="isLoadingBtn" class="row g-3">
                                <div class="col-md-6">
                                    <label :for="`${formSchema.email.label}Input`" class="form-label"
                                        >{{ formSchema.email.label }}<span class="text-danger" v-if="formSchema.email.isRequired">*</span></label
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
                                <div class="col-md-6">
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
                                        :placeholder="`請輸入 ${formSchema.password.label}`"
                                        :rules="formSchema.password.rules"
                                        v-model="user.password"
                                    ></Field>
                                    <ErrorMessage :name="formSchema.password.label" class="invalid-feedback"></ErrorMessage>
                                    <div class="invalid-feedback d-block text-lightPrimary" v-if="!errors[formSchema.password.label]">
                                        {{ formSchema.password.help }}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label :for="`${formSchema.userName.label}Input`" class="form-label"
                                        >{{ formSchema.userName.label
                                        }}<span class="text-danger" v-if="formSchema.userName.isRequired">*</span></label
                                    >
                                    <Field
                                        :id="`${formSchema.userName.label}Input`"
                                        :name="formSchema.userName.label"
                                        :type="formSchema.userName.type"
                                        class="form-control"
                                        :class="{ 'is-invalid': errors[formSchema.userName.label] }"
                                        :placeholder="`請輸入 ${formSchema.userName.label}`"
                                        :rules="formSchema.userName.rules"
                                        v-model="user.userName"
                                    ></Field>
                                    <ErrorMessage :name="formSchema.userName.label" class="invalid-feedback"></ErrorMessage>
                                </div>
                                <div class="col-12 border-top pt-3">
                                    <div class="alert alert-warning" role="alert">
                                        警告：請確實勾選您的證照，出團時，須提供證件審查；如有不實，則受退團處分，且不予退費。
                                    </div>
                                </div>
                                <div class="col-12 text-end border-top pt-3">
                                    <button type="submit" class="btn btn-primary" :disabled="isLoadingBtn || Object.keys(errors).length">
                                        {{ title }}
                                    </button>
                                </div>
                            </fieldset>
                        </Form>
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

        .signup-img {
            height: 100%;

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
