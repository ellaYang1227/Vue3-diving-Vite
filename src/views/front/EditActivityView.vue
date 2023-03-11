<script setup>
import formSchema from "../../data/formSchema.js";
import { activityImg } from "../../data/imagePaths.js";
import { authGuard } from "../../data/routeGuard.js";
import { getTimestamp } from "../../data/utilitieFunctions.js";
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import OptionStore from "../../stores/OptionStore.js";
import MemberStore from "../../stores/MemberStore.js";
import UploadImg from "../../components/UploadImg.vue";
import FormUtilitieLayoutVue from "../../components/FormUtilitieLayout.vue";

export default {
    data(){
        return {
            title: "",
            activityId: "",
            certificateLevels: [],
            cylinderTotals: [],
            form: {}
        }
    },
    inject: ["frontLayoutData"],
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"]),
        ...mapState(OptionStore, ["locations", "tags"])
    },
    components: {
        VForm: Form,
        Field,
        ErrorMessage,
        UploadImg,
        FormUtilitieLayoutVue
    },
    beforeRouteEnter(to, from, next) {
        authGuard(to, from, next);
        
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                const { path } = this.$route;
                if(path.indexOf('/addActivity') > -1 || path.indexOf('/editActivity') > -1){
                    this.frontLayoutData.showSearchBar = false;
                }

                this.showLoading();
                this.setInitform();
                this.activityId = toParams.activityId;
                if(this.activityId){
                    this.getActivity(this.activityId).then(res => this.form = res);
                    this.hideLoading();
                }else{
                    this.hideLoading();
                }
            },
            { immediate: true }
        );

        this.fetchData();

    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(OptionStore, ["getCertificateLevels", "getCylinderTotals", "getLocations", "getTags"]),
        ...mapActions(MemberStore, ["updateActivity", "getActivity"]),
        setInitform(){
            this.form = {
                title: "",
                imgs: {
                    img_1: {
                        img: "",
                        isMain: true
                    }
                },
                locationId: "",
                features: "",
                content: "",
                startDate: "",
                endDate: "",
                orderExpiryDate: "",
                maxOrderTotal: null,
                cost: null,
                certificateLevelId: null,
                cylinderTotalId: "",
                isNitrox: null,
                tags: []
            };
        },
        fetchData() {
            this.title = this.activityId ? "編輯" : "新增";

            Promise.all([
                this.getCertificateLevels(),
                this.getCylinderTotals()
            ]).then(resArr => {
                this.certificateLevels = resArr[0];
                this.cylinderTotals = resArr[1];
                this.hideLoading();
            });
        },
        changeImg(key){
            if(!key){
                const newKey = `img_${getTimestamp(new Date())}`;
                this.form.imgs[newKey] = {
                    img: "",
                    isMain: false
                };
            }else{
                delete this.form.imgs[key];
            }
        },
        setMainImg(key){
            Object.keys(this.form.imgs).forEach(imgKey => {
                this.form.imgs[imgKey].isMain = imgKey === key ? true : false;
            });
        },
        showImgsErrMsg(errs){
            return Object.keys(errs).some(errKey => errKey.indexOf('img') > -1);
        },
        onSubmit() {
            this.showLoading("btn");
            this.updateActivity(this.form);
        }
    }
};
</script>

<template>
    <FormUtilitieLayoutVue :title="`${title}揪團`" en-title="Activity" :img="activityImg">
        <template #body>
            <VForm v-slot="{ errors }" @submit="onSubmit">
                <fieldset :disabled="isLoadingBtn" class="row g-3">
                    <div class="col-12">
                        <label class="form-label d-block">{{ formSchema.activity.imgs.label }}<span class="text-danger" v-if="formSchema.activity.imgs.isRequired">*</span></label
                        >      
                        <div class="row g-3">
                            <div class="col-auto" v-for="(imgItem, key) in form.imgs" :key="key" >
                                <UploadImg :errors="errors" :showErrMsg="false" :isRequired="imgItem.isMain && !imgItem.img" :inputName="key" v-model:img="imgItem.img">
                                    <template #imgFunctions>
                                        <div class="img-functions cursor-default" :class="{ 'opacity-90': imgItem.isMain }" @click.prevent.self>
                                            <template v-if="!imgItem.isMain">
                                                <button type="button" class="btn btn-link btn-sm fs-8 text-lightPrimary text-decoration-none flex-shrink-0 px-0" :disabled="isLoadingBtn" @click.self="setMainImg(key)">設為封面</button>
                                                <button type="button" class="btn btn-link btn-sm fs-8 text-lightPrimary text-decoration-none flex-shrink-0 px-0" :disabled="isLoadingBtn" @click.self="changeImg(key)">刪除</button>
                                            </template>
                                            <span v-else class="fs-8">封面</span>
                                        </div>
                                    </template>
                                </UploadImg>
                            </div>
                            <div class="col-auto" v-if="3 > Object.keys(form.imgs).length">
                                <button type="button" class="btn opacity-50 file-img" :disabled="isLoadingBtn" @click="changeImg()"><font-awesome-icon icon="fa-solid fa-plus" size="2x" class="icon-color" /></button>
                            </div>
                        </div>
                        <span class="invalid-feedback d-block" v-if="showImgsErrMsg(errors)">須為圖片格式，且檔案須小於 1024 KB</span>
                    </div>
                    <div class="col-md-12">
                        <label :for="formSchema.activity.title.name" class="form-label"
                            >{{ formSchema.activity.title.label
                            }}<span class="text-danger" v-if="formSchema.activity.title.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.title.name"
                            :name="formSchema.activity.title.label"
                            :type="formSchema.activity.title.type"
                            class="form-control"
                            :class="{ 'is-invalid': errors[formSchema.activity.title.label] }"
                            :placeholder="`請輸入${formSchema.activity.title.label}`"
                            :rules="formSchema.activity.title.rules"
                            v-model.trim="form.title"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.title.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-12">
                        <label :for="formSchema.activity.features.name" class="form-label"
                            >{{ formSchema.activity.features.label
                            }}<span class="text-danger" v-if="formSchema.activity.features.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.features.name"
                            :name="formSchema.activity.features.label"
                            class="form-control"
                            :as="formSchema.activity.features.as"
                            :class="{ 'is-invalid': errors[formSchema.activity.features.label] }"
                            :placeholder="`請輸入${formSchema.activity.features.label}`"
                            :rules="formSchema.activity.features.rules"
                            v-model.trim="form.features"
                            rows="10"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.features.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-12">
                        <label :for="formSchema.activity.content.name" class="form-label"
                            >{{ formSchema.activity.content.label
                            }}<span class="text-danger" v-if="formSchema.activity.content.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.content.name"
                            :name="formSchema.activity.content.label"
                            class="form-control"
                            :as="formSchema.activity.features.as"
                            :class="{ 'is-invalid': errors[formSchema.activity.content.label] }"
                            :placeholder="`請輸入${formSchema.activity.content.label}`"
                            :rules="formSchema.activity.content.rules"
                            v-model.trim="form.content"
                            rows="10"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.content.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.startDate.name" class="form-label"
                            >{{ formSchema.activity.startDate.label
                            }}<span class="text-danger" v-if="formSchema.activity.startDate.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.startDate.name"
                            :name="formSchema.activity.startDate.label"
                            :type="formSchema.activity.startDate.type"
                            :as="formSchema.activity.startDate.as"
                            class="form-control"
                            :class="{ 'is-invalid': errors[formSchema.activity.startDate.label] }"
                            :rules="formSchema.activity.startDate.rules"
                            v-model="form.startDate"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.startDate.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.endDate.name" class="form-label"
                            >{{ formSchema.activity.endDate.label
                            }}<span class="text-danger" v-if="formSchema.activity.endDate.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.endDate.name"
                            :name="formSchema.activity.endDate.label"
                            :type="formSchema.activity.endDate.type"
                            :as="formSchema.activity.endDate.as"
                            class="form-control"
                            :class="{ 'is-invalid': errors[formSchema.activity.endDate.label] }"
                            :rules="formSchema.activity.endDate.rules"
                            v-model="form.endDate"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.endDate.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.orderExpiryDate.name" class="form-label"
                            >{{ formSchema.activity.orderExpiryDate.label
                            }}<span class="text-danger" v-if="formSchema.activity.orderExpiryDate.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.orderExpiryDate.name"
                            :name="formSchema.activity.orderExpiryDate.label"
                            :type="formSchema.activity.orderExpiryDate.type"
                            :as="formSchema.activity.orderExpiryDate.as"
                            class="form-control"
                            :class="{ 'is-invalid': errors[formSchema.activity.orderExpiryDate.label] }"
                            :rules="formSchema.activity.orderExpiryDate.rules"
                            v-model="form.orderExpiryDate"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.orderExpiryDate.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.locationId.name" class="form-label"
                            >{{ formSchema.activity.locationId.label
                            }}<span class="text-danger" v-if="formSchema.activity.locationId.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.locationId.name"
                            :name="formSchema.activity.locationId.label"
                            :as="formSchema.activity.locationId.as"
                            class="form-select"
                            :class="{ 'is-invalid': errors[formSchema.activity.locationId.label] }"
                            :rules="formSchema.activity.locationId.rules"
                            v-model="form.locationId"
                        >
                        <option value="" disabled>請選擇</option>
                        <option v-for="option in locations" :key="option.id" :value="option.id">
                            {{ option.name }}
                        </option></Field>
                        <ErrorMessage :name="formSchema.activity.locationId.label" class="invalid-feedback"></ErrorMessage>
                        <span v-if="!errors[formSchema.activity.locationId.label]" class="invalid-feedback form-help">{{
                        formSchema.activity.locationId.help }}
                        </span>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.maxOrderTotal.name" class="form-label"
                            >{{ formSchema.activity.maxOrderTotal.label
                            }}<span class="text-danger" v-if="formSchema.activity.maxOrderTotal.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.maxOrderTotal.name"
                            :name="formSchema.activity.maxOrderTotal.label"
                            :type="formSchema.activity.cost.type"
                            :as="formSchema.activity.maxOrderTotal.as"
                            class="form-control"
                            :class="{ 'is-invalid': errors[formSchema.activity.maxOrderTotal.label] }"
                            :rules="formSchema.activity.maxOrderTotal.rules"
                            v-model.number="form.maxOrderTotal"
                        ></Field>
                        <ErrorMessage :name="formSchema.activity.maxOrderTotal.label" class="invalid-feedback"></ErrorMessage>
                        <span v-if="!errors[formSchema.activity.maxOrderTotal.label]" class="invalid-feedback form-help">{{
                        formSchema.activity.maxOrderTotal.help }}
                        </span>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.cost.name" class="form-label"
                            >{{ formSchema.activity.cost.label
                            }}<span class="text-danger" v-if="formSchema.activity.cost.isRequired">*</span></label
                        >
                        <div class="input-group">
                            <span class="input-group-text">NT$</span>
                            <Field
                                :id="formSchema.activity.cost.name"
                                :name="formSchema.activity.cost.label"
                                :type="formSchema.activity.cost.type"
                                :as="formSchema.activity.cost.as"
                                class="form-control"
                                :class="{ 'is-invalid': errors[formSchema.activity.cost.label] }"
                                :rules="formSchema.activity.cost.rules"
                                v-model.number="form.cost"
                            ></Field>
                        </div>
                        <ErrorMessage :name="formSchema.activity.cost.label" class="invalid-feedback d-block"></ErrorMessage>
                    </div>
                    <div class="col-md-4">
                        <label :for="formSchema.activity.certificateLevel.name" class="form-label"
                            >{{ formSchema.activity.certificateLevel.label
                            }}<span class="text-danger" v-if="formSchema.activity.certificateLevel.isRequired">*</span></label
                        >
                        <Field
                            :id="formSchema.activity.certificateLevel.name"
                            :name="formSchema.activity.certificateLevel.label"
                            :as="formSchema.activity.certificateLevel.as"
                            class="form-select"
                            :class="{ 'is-invalid': errors[formSchema.activity.certificateLevel.label] }"
                            :rules="formSchema.activity.certificateLevel.rules"
                            v-model="form.certificateLevelId"
                        >
                        <option value="" disabled>請選擇</option>
                        <option v-for="option in certificateLevels" :key="option.id" :value="option.id">
                            {{ option.name }}
                        </option>
                        </Field>
                        <ErrorMessage :name="formSchema.activity.certificateLevel.label" class="invalid-feedback"></ErrorMessage>
                        <span v-if="!errors[formSchema.activity.certificateLevel.label]" class="invalid-feedback form-help">{{
                        formSchema.activity.certificateLevel.help }}
                        </span>
                    </div>
                    <div class="col-md-4">
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
                            v-model="form.cylinderTotalId"
                        >
                            <option value="">請選擇</option>
                            <option v-for="option in cylinderTotals" :key="option.id" :value="option.id">
                                {{ option.name }}
                            </option></Field
                        >
                        <ErrorMessage :name="formSchema.cylinderTotal.label" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-md-4 align-self-center">
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
                    <div class="col-md-12">
                        <label :for="formSchema.activity.tags.name" class="form-label d-block"
                            >{{ formSchema.activity.tags.label
                            }}<span class="text-danger" v-if="formSchema.activity.tags.isRequired">*</span></label
                        >
                        <div class="row gx-1">
                            <div class="col-auto" v-for="tag in tags" :key="tag">
                                <Field 
                                :id="`${formSchema.activity.tags.name}-${tag}`"
                                :name="formSchema.activity.tags.label"
                                :type="formSchema.activity.tags.type"
                                :as="formSchema.activity.tags.as"
                                class="btn-check"
                                :value="tag"
                                :class="{ 'is-invalid': errors[formSchema.activity.tags.label] }"
                                :rules="formSchema.activity.tags.rules"
                                v-model="form.tags" />
                                <label class="btn btn-outline-primary btn-sm rounded-0" :for="`${formSchema.activity.tags.name}-${tag}`">{{ tag }}</label>
                                </div>
                            </div>
                        <ErrorMessage :name="formSchema.activity.tags.label" class="invalid-feedback d-block"></ErrorMessage>
                    </div>
                    <div class="col-12 text-end border-top pt-3 mt-4 mt-md-5">
                        <button type="submit" class="btn btn-primary btn-custom-rectangle" :disabled="isLoadingBtn || Object.keys(errors).length">
                            <span class="spinner-border spinner-border-sm" role="status" v-if="isLoadingBtn"></span>
                            {{ title }}
                        </button>
                    </div>
                </fieldset>
            </VForm>
        </template>
    </FormUtilitieLayoutVue>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";

.img-functions {
    position: absolute;
    bottom: 0;
    background-color: rgba($dark, 0.75);
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0;

    &:hover{
        opacity: 0.9;
        transition: all 0.5s ease-in-out;
    }
}
</style>
