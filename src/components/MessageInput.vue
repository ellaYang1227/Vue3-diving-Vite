<script setup>
import formSchema from "../data/formSchema.js";
</script>

<script>
import { mapState, mapActions } from "pinia";
import LoadingStore from "../stores/LoadingStore.js";

export default {
    data() {
        return {
            isMsgFormErr: false,
            isLoadingInput: false
        }
    },
    props: {
        msgForm: {
            type: String,
            required: true
        },
        isReadonly: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ["update:msgForm"],
    computed: {
        ...mapState(LoadingStore, ["isLoadingBtn"]),
        classObj() {
            return { 
                'is-invalid': this.isMsgFormErr, 
                'form-control': !this.isReadonly, 
                'form-control-plaintext': this.isReadonly 
            };
        },
        placeholder() {
            let text = "";
            if(this.isLoadingInput) {
                text = "Loading...";
            } else if (this.isReadonly) {
                text = "";
            } else {
                text = `請輸入${formSchema.message.label}`;
            }

            return text;
        }
    },
    watch: {
        isLoadingBtn() {
            if(!this.isLoadingBtn) { this.isLoadingInput = false }
        }
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading"]),
        validateMsg(event) {
            const { value } = event.target;
            this.isMsgFormErr = value ? false : true;
        },
        emitMsgForm(event) {
            const { value } = event.target;
            if(value) {
                this.showLoading("btn");
                this.isLoadingInput = true;
                this.isMsgFormErr = false;
                this.$emit("update:msgForm", value);
            }
        }
    }
};
</script>

<template>
    <input :type="formSchema.message.type" :readonly="isReadonly" :class="classObj" :placeholder="placeholder" :value="msgForm" @keyup.enter="emitMsgForm" @input="validateMsg" :disabled="isLoadingInput" />
</template>

<style lang="scss"></style>