<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import { mapState } from "pinia";
import { Field, ErrorMessage } from "vee-validate";
import LoadingStore from "../stores/LoadingStore.js";

export default {
    data() {
        return {
            isLoading: false
        };
    },
    props: {
        errors: {
            type: Object,
            required: true
        },
        inputName: {
            type: String,
            required: false,
            default: 'img_0'
        },
        img: {
            type: String,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: false,
            default: false
        },
        showErrMsg: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:img"],
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"]),
    },
    components: {
        Field,
        ErrorMessage
    },
    methods: {
        upload(event) {
            const file = event.target.files[0];

            if (this.errors[this.inputName] || !file) {
                this.handleUploadResult();
            } else {
                this.isLoading = true;
                setTimeout(() => {
                    let reader = new FileReader();
                    // 轉 Base64
                    reader.onload = e => {
                        this.handleUploadResult(e.target.result);
                    };

                    reader.onerror = err => {
                        //console.error(err);
                        this.handleUploadResult();
                    };
                    // 讀取檔案
                    reader.readAsDataURL(file);
                }, 500);
            }
        },
        handleUploadResult(img = "") {
            this.isLoading = false;
            this.$emit("update:img", img);
        }
    }
};
</script>

<template>
    <Field
        ref="provider"
        v-slot="{ field }"
        :name="inputName"
        :type="formSchema.uploadImg.type"
        :rules="formSchema.uploadImg.rules[isRequired ? 'required' : 'noRequired']"
    >
        <label class="file-img" :class="{ 'border-danger': errors[inputName], 'cursor-default': isLoading || isLoadingBtn}">
            <input
                v-bind="field"
                class="form-control d-none"
                :type="formSchema.uploadImg.type"
                :accept="formSchema.uploadImg.accept"
                :disabled="isLoading || isLoadingBtn"
                @change="upload"
            />
            <div class="w-100 h-100 p-1 d-flex flex-column align-items-center justify-content-center position-relative">
                <template v-if="!isLoading">
                    <img :src="img" v-if="img" class="img-cover" />
                    <font-awesome-icon v-else size="2x" icon="fa-solid fa-arrow-up-from-bracket" class="icon-color" />
                </template>
                <div v-else class="d-flex flex-column align-items-center justify-content-center icon-color">
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                    <small class="pt-1">Loading...</small>
                </div>
                <slot name="imgFunctions"></slot>
            </div>
        </label></Field
    >
    <ErrorMessage :name="inputName" class="invalid-feedback" :class="{ 'd-block': showErrMsg }"></ErrorMessage>
</template>

<style lang="scss"></style>
