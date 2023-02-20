<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import { Field, ErrorMessage } from "vee-validate";

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
        img: {
            type: String,
            required: true
        }
    },
    emits: ["update:img"],
    components: {
        Field,
        ErrorMessage
    },
    methods: {
        upload(event) {
            const file = event.target.files[0];
            if (this.errors[formSchema.uploadImg.label] || !file) {
                this.setUploadErr();
            } else {
                this.isLoading = true;
                setTimeout(() => {
                    let reader = new FileReader();
                    // 轉 Base64
                    reader.onload = e => {
                        this.isLoading = false;
                        this.$emit("update:img", e.target.result);
                    };

                    reader.onerror = err => {
                        console.error(err);
                        this.setUploadErr();
                    };
                    // 讀取檔案
                    reader.readAsDataURL(file);
                }, 500);
            }
        },
        setUploadErr() {
            console.error("上船錯誤");
        }
    }
};
</script>

<template>
    <Field
        v-slot="{ field }"
        :name="formSchema.uploadImg.label"
        :type="formSchema.uploadImg.type"
        :rules="formSchema.uploadImg.rules"
        @change="upload"
    >
        <label class="file-img rounded p-1" :class="{ 'border-danger': errors[formSchema.uploadImg.label], 'cursor-pointer': !isLoading }">
            <input
                v-bind="field"
                class="form-control d-none"
                :type="formSchema.uploadImg.type"
                :accept="formSchema.uploadImg.accept"
                :disabled="isLoading"
            />
            <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <template v-if="!isLoading">
                    <img :src="img" v-if="img" class="img-cover" />
                    <font-awesome-icon v-else size="2x" icon="fa-solid fa-arrow-up-from-bracket" class="icon-color" />
                </template>
                <div v-else class="d-flex flex-column align-items-center justify-content-center icon-color">
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                    <small class="pt-1">Loading...</small>
                </div>
            </div>
        </label></Field
    >
    <ErrorMessage :name="formSchema.uploadImg.label" class="invalid-feedback d-block"></ErrorMessage>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";

.file-img {
    width: 120px;
    height: 120px;
    background-color: $input-bg;
    border: 1px dashed $input-border-color;

    &:hover {
        border-color: $input-focus-border-color;
    }

    .icon-color {
        color: $form-select-indicator-color;
    }
}
</style>
