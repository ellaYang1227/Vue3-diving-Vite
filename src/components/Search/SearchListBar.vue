<script setup>
import formSchema from "../../data/formSchema.js";
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    data () {
        return {
            isLoadingSearch: false,
            search: {
                keyword: "",
                startDate: "",
                endDate: ""
            }
        }
    },
    emits: ["onSubmit"],
    components: {
        VForm: Form,
        Field,
        ErrorMessage,
    },
    methods: {
        onSubmit() {
            console.log(this.search)
            this.$emit('onSubmit', this.search)
        }
    }
};
</script>

<template>
    <VForm v-slot="{ errors }" @submit="onSubmit" class="pb-3">
        <fieldset :disabled="isLoadingSearch" class="row g-2">
            <div class="col-md col-lg-6 col-xl-5">
                <Field 
                    :id="formSchema.search.keyword.name" 
                    :name="formSchema.search.keyword.label" 
                    :type="formSchema.search.keyword.type"
                    :as="formSchema.search.startDate.as"
                    class="form-control" 
                    placeholder="請輸入活動名稱" 
                    v-model.trim="search.keyword" />
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
                <button type="submit" class="btn btn-outline-warning rounded-0 w-100" :disabled="isLoadingSearch || Object.keys(errors).length">
                    <span class="spinner-border spinner-border-sm" role="status" v-if="isLoadingSearch"></span>
                    搜尋</button>
            </div>
        </fieldset>
    </VForm>
</template>

<style lang="scss"></style>
