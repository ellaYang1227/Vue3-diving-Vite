<script setup>
import formSchema from "../../data/formSchema.js";
import { loginImg } from "../../data/imagePaths.js";

const { VITE_COMPANY_NAME } = import.meta.env;
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions } from "pinia";
import MemberStore from "../../stores/MemberStore.js";
import LoadingStore from "../../stores/LoadingStore.js";
import OtherStore from "../../stores/OtherStore.js";
import UploadImg from "../../components/UploadImg.vue";

export default {
    data() {
        return {
            title: "註冊",
            certificateLevelOptions: [],
            cylinderTotalOptions: [],
            user: {
                email: "",
                password: "",
                name: "",
                img: "",
                certificateLevels: [],
                isNitrox: "",
                cylinderTotal: ""
            },
            isLoadingBtn: false
        };
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        UploadImg
    },
    mounted() {
        Promise.all([this.getCertificateLevelOptions(), this.getCylinderTotalOptions()]).then(resArr => {
            console.log(resArr);
            this.certificateLevelOptions = resArr[0];
            this.cylinderTotalOptions = resArr[1];
            this.hideLoading();
        });
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(OtherStore, ["getCertificateLevelOptions", "getCylinderTotalOptions"]),
        ...mapActions(MemberStore, ["signup"]),
        onSubmit() {
            this.isLoadingBtn = true;
            this.signup(this.user);
        }
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
                            :src="loginImg"
                            class="signup-img card-img-top border border-card-border-width login-img img-cover shadow"
                            :alt="`${VITE_COMPANY_NAME}-${title}`"
                        />
                        <div class="card-img-overlay d-flex justify-content-end align-items-end">
                            <h5 class="card-title fw-bold fs-4 text-primary opacity-90">
                                {{ title }}<small class="font-barlow text-uppercase fw-normal ms-1">signup</small>
                            </h5>
                        </div>
                    </div>
                    <div class="card-body pt-4 pt-md-5">
                        <Form v-slot="{ errors }" @submit="onSubmit">
                            <fieldset :disabled="isLoadingBtn" class="row g-3">
                                <div class="col-12">
                                    <UploadImg :errors="errors" v-model:img="user.img" />
                                </div>
                                <div class="col-md-6">
                                    <label :for="`${formSchema.email.name}Input`" class="form-label"
                                        >{{ formSchema.email.label }}<span class="text-danger" v-if="formSchema.email.isRequired">*</span></label
                                    >
                                    <Field
                                        :id="`${formSchema.email.name}Input`"
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
                                    <label :for="`${formSchema.password.name}Input`" class="form-label"
                                        >{{ formSchema.password.label
                                        }}<span class="text-danger" v-if="formSchema.password.isRequired">*</span></label
                                    >
                                    <Field
                                        :id="`${formSchema.password.name}Input`"
                                        :name="formSchema.password.label"
                                        :type="formSchema.password.type"
                                        class="form-control"
                                        :class="{ 'is-invalid': errors[formSchema.password.label] }"
                                        :placeholder="`請輸入${formSchema.password.label}`"
                                        :rules="formSchema.password.rules"
                                        v-model="user.password"
                                    ></Field>
                                    <ErrorMessage :name="formSchema.password.label" class="invalid-feedback"></ErrorMessage>
                                    <span v-if="!errors[formSchema.password.label]" class="invalid-feedback text-body d-block">{{
                                        formSchema.password.help
                                    }}</span>
                                </div>
                                <div class="col-md-6">
                                    <label :for="`${formSchema.userName.name}Input`" class="form-label"
                                        >{{ formSchema.userName.label
                                        }}<span class="text-danger" v-if="formSchema.userName.isRequired">*</span></label
                                    >
                                    <Field
                                        :id="`${formSchema.userName.name}Input`"
                                        :name="formSchema.userName.label"
                                        :type="formSchema.userName.type"
                                        class="form-control"
                                        :class="{ 'is-invalid': errors[formSchema.userName.label] }"
                                        :placeholder="`請輸入${formSchema.userName.label}`"
                                        :rules="formSchema.userName.rules"
                                        v-model="user.userName"
                                    ></Field>
                                    <ErrorMessage :name="formSchema.userName.label" class="invalid-feedback"></ErrorMessage>
                                </div>
                                <div class="col-12 border-top pt-3">
                                    <div class="alert alert-warning" role="alert">
                                        警告：請確實勾選您的證照，出團時，須提供證件審查；如有不實，則受退團處分，且不予退費。
                                    </div>
                                    <label class="form-label d-block"
                                        >{{ formSchema.certificateLevel.label
                                        }}<span class="text-danger" v-if="formSchema.certificateLevel.isRequired">*</span></label
                                    >
                                    <div class="form-check form-check-inline" v-for="option in certificateLevelOptions" :key="option.value">
                                        <Field
                                            :class="{ 'is-invalid': errors[formSchema.certificateLevel.label] }"
                                            class="form-check-input"
                                            :id="`${formSchema.certificateLevel.name}Checkbox-${option.value}`"
                                            :name="formSchema.certificateLevel.label"
                                            :type="formSchema.certificateLevel.type"
                                            :value="option.value"
                                            :rules="formSchema.certificateLevel.rules"
                                            v-model="user.certificateLevels"
                                        /><label class="form-check-label" :for="`${formSchema.certificateLevel.name}Checkbox-${option.value}`">{{
                                            option.name
                                        }}</label>
                                    </div>
                                    <ErrorMessage :name="formSchema.certificateLevel.label" class="invalid-feedback d-block"></ErrorMessage>
                                </div>
                                <div class="col-12">
                                    <label class="form-label d-block"
                                        >{{ formSchema.isNitrox.label
                                        }}<span class="text-danger" v-if="formSchema.isNitrox.isRequired">*</span></label
                                    >
                                    <div class="form-check form-check-inline" v-for="option in formSchema.isNitrox.options" :key="option">
                                        <Field
                                            :class="{ 'is-invalid': errors[formSchema.isNitrox.label] }"
                                            class="form-check-input"
                                            :id="`${formSchema.isNitrox.name}Radio-${option}`"
                                            :name="formSchema.isNitrox.label"
                                            :type="formSchema.isNitrox.type"
                                            :value="option"
                                            :rules="formSchema.isNitrox.rules"
                                            v-model="user.isNitrox"
                                        /><label class="form-check-label" :for="`${formSchema.isNitrox.name}Radio-${option}`">{{
                                            option ? "是" : "否"
                                        }}</label>
                                    </div>
                                    <ErrorMessage :name="formSchema.isNitrox.label" class="invalid-feedback d-block"></ErrorMessage>
                                </div>
                                <div class="col-auto">
                                    <label :for="`${formSchema.cylinderTotal.name}Select`" class="form-label d-block"
                                        >{{ formSchema.cylinderTotal.label
                                        }}<span class="text-danger" v-if="formSchema.cylinderTotal.isRequired">*</span></label
                                    >
                                    <Field
                                        :class="{ 'is-invalid': errors[formSchema.cylinderTotal.label] }"
                                        class="form-select"
                                        :id="`${formSchema.cylinderTotal.name}Select`"
                                        :name="formSchema.cylinderTotal.label"
                                        :as="formSchema.cylinderTotal.as"
                                        :rules="formSchema.cylinderTotal.rules"
                                        v-model="user.cylinderTotal"
                                    >
                                        <option value="" disabled>請選擇</option>
                                        <option v-for="option in cylinderTotalOptions" :key="option" :value="option">
                                            {{ option }}
                                        </option></Field
                                    >
                                    <ErrorMessage :name="formSchema.cylinderTotal.label" class="invalid-feedback"></ErrorMessage>
                                </div>
                                <div class="col-12 text-end border-top pt-3 mt-4 mt-md-5">
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
