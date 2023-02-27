<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import VueMultiselect from 'vue-multiselect';
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "pinia";
import OptionStore from "../stores/OptionStore.js";
import LoadingStore from "../stores/LoadingStore.js";
import ActivityStore from "../stores/ActivityStore.js";

export default {
    data () {
        return {
            location: null,
            locations: [],
            tage: []
        }
    },
    props: {
    },
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"]),
        ...mapState(ActivityStore, ["search"])
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
            () => { this.setLocation() },
            { immediate: true }
        );
        
    },
    mounted() {
        Promise.all([
            this.getLocations(),
            this.getTags()
        ]).then(resArr => {
            this.locations = resArr[0];
            this.tage = resArr[1];
            this.setLocation();
        });
    },
    methods: {
        ...mapActions(OptionStore, ["getLocations", "getTags"]),
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(ActivityStore, ["getActivitys"]),
        setLocation() {
                const { locationId } = this.search.locationId = this.$route.query;
                this.location = this.locations.find(location => location.id === locationId);
        },
        updateLocation(newValue) {
            this.location = newValue;
            this.search.locationId = newValue?.id;
        },
        onSubmit() {
            this.showLoading("btn");
            const { locationId, tag } = this.search;
            if(tag){
                this.getActivitys()
                .then(res => this.hideLoading());
            }else{
                if(locationId){
                    let query = { locationId };
                    this.$router.push({ query });
                }else{
                    this.$router.push({});
                }
                
            }
            
        }
    }
};
</script>

<template>
    <div class="bg-lightPrimary bg-opacity-25 py-4">
        <div class="container">
            {{ search }} - {{ isLoadingBtn }}
            <VForm v-slot="{ errors }" @submit="onSubmit" class="pb-1">
                <fieldset :disabled="isLoadingBtn" class="row g-2">
                    <div class="col-sm-6">
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
                        <button type="submit" class="btn btn-outline-primary rounded-0" :disabled="isLoadingBtn || Object.keys(errors).length">
                            <span class="spinner-border spinner-border-sm text-dark-primary" role="status" v-if="isLoadingBtn"></span>
                            搜出好團</button>
                    </div>
                </fieldset>
            </VForm>
            <div class="row g-2">
                <div class="col-auto" v-for="(tag, index) in tage" :key="tag">
                    <input type="radio" class="btn-check" name="tagOptions" :id="`tagOption-${index}`" autocomplete="off" v-model="search.tag" :value="tag" @change="onSubmit">
                    <label class="btn btn-outline-primary btn-sm rounded-0 px-1 py-0" :for="`tagOption-${index}`">{{ tag }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";

</style>
