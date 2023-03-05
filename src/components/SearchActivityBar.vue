<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import VueMultiselect from 'vue-multiselect';
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "pinia";
import OptionStore from "../stores/OptionStore.js";
import LoadingStore from "../stores/LoadingStore.js";
import PageStore from "../stores/PageStore.js";

export default {
    data () {
        return {
            location: null,
            search: {
                locationId: "",
                startDate: "",
                endDate: "",
                tag: ""
            }
        }
    },
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"]),
        ...mapState(OptionStore, ["locations", "tags"]),
        ...mapState(PageStore, ["hasActivityHavbar"]),
        selectedTag() {
            return this.search.tag;
        }
    },
    components: {
        VueMultiselect,
        VForm: Form,
        Field,
        ErrorMessage,
    },
    created() {
        this.$watch(
            () => this.$route.query,
            () => {
                const { path } =  this.$route;
                if(path.indexOf('/activities') > -1){ 
                    this.setLocation()  
                }else{
                    this.location = null;
                    this.search = {
                        locationId: "",
                        startDate: "",
                        endDate: "",
                        tag: ""
                    };
                }
            },
            { immediate: true }
        );
        
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading"]),
        setLocation() {
            this.search = { ...this.$route.query };
            const { locationId } = this.search;
            const findLocation = this.locations.find(location => location.id === locationId);
            this.location = findLocation ? findLocation : '';
        },
        updateSelectedTag(event){
            const { value } = event.target;
            this.search.tag = value !== this.search.tag ? value : "";
            this.onSubmit();
        },
        updateLocation(newValue) {
            this.location = newValue;
            this.search.locationId = newValue?.id;
        },
        onSubmit() {
            this.showLoading("btn");
            const query = Object.keys(this.search).reduce((accumulator, currentKey) => {
                if(this.search[currentKey]){ accumulator[currentKey] = this.search[currentKey] }
                return accumulator;
            }, {});

            let routerPushData = { path: '/activities' }
            if(Object.keys(this.search).length){ routerPushData.query = query }
            this.$router.push(routerPushData)
        }
    }
};
</script>

<template>
    <div class="body-bg shadow-lg" :class="{ 'sticky-top sticky-top-headerHeight': !hasActivityHavbar }">
        <div class="border-top opacity-30"></div>
        <div class="container py-4">
            <VForm v-slot="{ errors }" @submit="onSubmit" class="pb-1">
                <fieldset :disabled="isLoadingBtn" class="row g-2">
                    <div class="col-md col-lg-6 col-xl-5">
                    <VueMultiselect :options="locations" :placeholder="`請輸入${formSchema.search.location.label}`" :label="formSchema.search.location.optionLabel" :track-by="formSchema.search.location.optionLabel" :disabled="isLoadingBtn" :model-value="location" @update:model-value="updateLocation">
                        <template #noResult>沒有符合條件的結果</template>
                    </VueMultiselect>
                    </div>
                    <div class="col">
                        <div class="input-group">
                            <Field
                                :id="formSchema.search.startDate.name"
                                :name="formSchema.search.startDate.label"
                                :type="formSchema.search.startDate.type"
                                :as="formSchema.search.startDate.as"
                                class="form-control"
                                :class="{ 'is-invalid': errors[formSchema.search.startDate.label] }"
                                :rules="formSchema.search.startDate.rules"
                                v-model="search.startDate"
                            ></Field>
                            <Field
                                :id="formSchema.search.endDate.name"
                                :name="formSchema.search.endDate.label"
                                :type="formSchema.search.endDate.type"
                                :as="formSchema.search.endDate.as"
                                class="form-control"
                                :class="{ 'is-invalid': errors[formSchema.search.endDate.label] }"
                                :rules="formSchema.search.endDate.rules"
                                v-model="search.endDate"
                            ></Field>
                        </div>
                            <ErrorMessage :name="formSchema.search.startDate.label" class="invalid-feedback d-block"></ErrorMessage>
                    </div>
                    <div class="col-sm-auto">
                        <button type="submit" class="btn btn-outline-warning rounded-0 w-100" :disabled="isLoadingBtn || Object.keys(errors).length">
                            <span class="spinner-border spinner-border-sm" role="status" v-if="isLoadingBtn"></span>
                            搜出好團</button>
                    </div>
                </fieldset>
            </VForm>
            <div class="row gx-2 gy-1 d-none d-md-flex">
                <div class="col-auto" v-for="(tag, index) in tags" :key="tag">
                    <input type="radio" class="btn-check" name="tagOptions" :id="`tagOption-${index}`" autocomplete="off" :value="tag" @click="updateSelectedTag" :checked="tag === selectedTag">
                    <label class="btn btn-outline-lightPrimary btn-sm rounded-0 px-1 py-0" :for="`tagOption-${index}`">{{ tag }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";

</style>
