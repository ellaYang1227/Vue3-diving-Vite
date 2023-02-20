<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapActions } from "pinia";
import HexschoolUploadStore from "../stores/HexschoolUploadStore.js";

export default {
    data() {
        return {
            uploadImgUrl: "",
            errMsgs: [],
            isLoading: false
        };
    },
    props: {
        errors: {
            type: Object,
            required: true
        }
    },
    components: {
        Field,
        ErrorMessage
    },
    mounted() {},
    methods: {
        ...mapActions(HexschoolUploadStore, ["uploadImg"]),
        upload(event) {
            const file = event.target.files[0];
            console.log(file);
            this.isLoading = true;
            this.uploadImg(file).then(res => {
                console.log(res);
                this.isLoading = false;
                console.log(this.errors)
            });
            // this.errMsgs = [];
            // const { data, type, size } = this.formSchema.upload_img.validates;
            // const file = event.target.files[0];

            // if (!file) {
            //     this.errMsgs.push(data);
            // } else {
            //     // 檢查格式
            //     const regex = new RegExp("^image/(png|jpg|jpeg)$");
            //     if (!regex.test(file.type)) {
            //         this.errMsgs.push(type);
            //     }

            //     // 檢查檔案大小 小於等於 1 mb
            //     if (file.size / 1024 / 1024 > 1) {
            //         this.errMsgs.push(size);
            //     }
            // }

            // if (!this.errMsgs.length) {
            //     this.upload(file);
            // } else {
            //     this.setSwalError();
            // }
        },
        emitData() {
            const data = {
                dataKey: this.dataKey,
                uploadImgUrl: this.uploadImgUrl,
                isInputErr: this.isRequired && (this.errMsgs.length || !this.uploadImgUrl) ? true : false
            };

            this.isLoading = false;
            //this.$emit("update-image", data);
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
        @change="upload($event)"
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
                    <img :src="uploadImgUrl" v-if="uploadImgUrl" class="img-cover" />
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
