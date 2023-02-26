<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "pinia";
import MemberStore from "../stores/MemberStore.js";
import LoadingStore from "../stores/LoadingStore.js";
import OptionStore from "../stores/OptionStore.js";
import UploadImg from "./UploadImg.vue";

export default {
    data() {
        return {
            userId: "",
            certificateLevels: [],
            cylinderTotals: [],
            form: {
                email: "",
                password: "",
                name: "",
                img: "",
                certificateLevels: [],
                isNitrox: null,
                cylinderTotal: ""
            }
        };
    },
    components: {
        VForm: Form,
        Field,
        ErrorMessage,
        UploadImg
    },
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"])
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {this.fetchData()},
            { immediate: true }
        );
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(OptionStore, ["getCertificateLevels", "getCylinderTotals"]),
        ...mapActions(MemberStore, ["signup","getMyinfo"]),
        fetchData() {
            this.userId = this.$route.params.userId;
            const APIs = [this.getCertificateLevels(), this.getCylinderTotals()];
            if(this.userId){ APIs.push(this.getMyinfo(this.userId)) }
            Promise.all(APIs).then(resArr => {
                console.log(resArr)
                this.certificateLevels = resArr[0];
                this.cylinderTotals = resArr[1];
                if(this.userId) { this.form = resArr[2] }
                this.hideLoading();
            });
        },
        onSubmit() {
            this.showLoading("btn");
            if(!this.userId){
                const { returnUrl } = this.$route.query;
                this.signup(this.form, returnUrl);
            }else{
                console.log('編輯', this.form)
            }
            
        }
    }
};
</script>

<template>
    <VForm v-slot="{ errors }" @submit="onSubmit">
        <fieldset :disabled="isLoadingBtn" class="row g-3">
            <div class="col-12">
                <UploadImg :errors="errors" v-model:img="form.img" />
            </div>
            <template v-if="!userId">
                <div class="col-md-6">
                    <label :for="formSchema.email.name" class="form-label"
                        >{{ formSchema.email.label }}<span class="text-danger" v-if="formSchema.email.isRequired">*</span></label
                    >
                    <Field
                        :id="formSchema.email.name"
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
                <div class="col-md-6">
                    <label :for="formSchema.password.name" class="form-label"
                        >{{ formSchema.password.label
                        }}<span class="text-danger" v-if="formSchema.password.isRequired">*</span></label
                    >
                    <Field
                        :id="formSchema.password.name"
                        :name="formSchema.password.label"
                        :type="formSchema.password.type"
                        class="form-control"
                        :class="{ 'is-invalid': errors[formSchema.password.label] }"
                        :placeholder="`請輸入${formSchema.password.label}`"
                        :rules="formSchema.password.rules.full"
                        v-model.trim="form.password"
                    ></Field>
                    <ErrorMessage :name="formSchema.password.label" class="invalid-feedback"></ErrorMessage>
                    <span v-if="!errors[formSchema.password.label]" class="invalid-feedback form-help">{{
                        formSchema.password.help
                    }}</span>
                </div>
            </template>
            <div class="col-md-6">
                <label :for="formSchema.userName.name" class="form-label"
                    >{{ formSchema.userName.label
                    }}<span class="text-danger" v-if="formSchema.userName.isRequired">*</span></label
                >
                <Field
                    :id="formSchema.userName.name"
                    :name="formSchema.userName.label"
                    :type="formSchema.userName.type"
                    class="form-control"
                    :class="{ 'is-invalid': errors[formSchema.userName.label] }"
                    :placeholder="`請輸入${formSchema.userName.label}`"
                    :rules="formSchema.userName.rules"
                    v-model.trim="form.name"
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
                <div class="form-check form-check-inline" v-for="option in certificateLevels" :key="option.value">
                    <Field
                        :class="{ 'is-invalid': errors[formSchema.certificateLevel.label] }"
                        class="form-check-input"
                        :id="`${formSchema.certificateLevel.name}-${option.value}`"
                        :name="formSchema.certificateLevel.label"
                        :type="formSchema.certificateLevel.type"
                        :value="option.value"
                        :rules="formSchema.certificateLevel.rules"
                        v-model="form.certificateLevels"
                    /><label class="form-check-label" :for="`${formSchema.certificateLevel.name}-${option.value}`">{{
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
                        :id="`${formSchema.isNitrox.name}-${option}`"
                        :name="formSchema.isNitrox.label"
                        :type="formSchema.isNitrox.type"
                        :value="option"
                        :rules="formSchema.isNitrox.rules"
                        v-model="form.isNitrox"
                    /><label class="form-check-label" :for="`${formSchema.isNitrox.name}-${option}`">{{
                        option ? "是" : "否"
                    }}</label>
                </div>
                <ErrorMessage :name="formSchema.isNitrox.label" class="invalid-feedback d-block"></ErrorMessage>
            </div>
            <div class="col-auto">
                <label :for="formSchema.cylinderTotal.name" class="form-label d-block"
                    >{{ formSchema.cylinderTotal.label
                    }}<span class="text-danger" v-if="formSchema.cylinderTotal.isRequired">*</span></label
                >
                <Field
                    :class="{ 'is-invalid': errors[formSchema.cylinderTotal.label] }"
                    class="form-select"
                    :id="formSchema.cylinderTotal.name"
                    :name="formSchema.cylinderTotal.label"
                    :as="formSchema.cylinderTotal.as"
                    :rules="formSchema.cylinderTotal.rules"
                    v-model="form.cylinderTotal"
                >
                    <option value="" disabled>請選擇</option>
                    <option v-for="option in cylinderTotals" :key="option.id" :value="option.name">
                        {{ option.name }}
                    </option></Field
                >
                <ErrorMessage :name="formSchema.cylinderTotal.label" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-12 text-end border-top pt-3 mt-4 mt-md-5">
                <button type="submit" class="btn btn-primary btn-custom-rectangle" :disabled="isLoadingBtn || Object.keys(errors).length">
                    <span class="spinner-border spinner-border-sm text-dark-primary" role="status" v-if="isLoadingBtn"></span>
                    {{ userId ? '編輯' : '註冊' }}
                </button>
            </div>
        </fieldset>
    </VForm>
</template>

<style lang="scss"></style>
