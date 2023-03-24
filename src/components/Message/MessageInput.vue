<script>
import { mapState, mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import formSchema from "@/data/formSchema.js";

export default {
  data() {
    return {
      formSchema,
      isMsgFormErr: false,
      isLoadingInput: false
    };
  },
  props: {
    msgForm: {
      type: String,
      required: true
    }
  },
  emits: ["update:msgForm"],
  computed: {
    ...mapState(LoadingStore, ["isLoadingBtn"])
  },
  watch: {
    isLoadingBtn() {
      if (!this.isLoadingBtn) {
        this.isLoadingInput = false;
      }
    }
  },
  methods: {
    ...mapActions(LoadingStore, ["showLoading"]),
    validateMsg(event) {
      const { value } = event.target;
      this.isMsgFormErr = value.trim() ? false : true;
    },
    emitMsgForm(event) {
      const { value } = event.target;
      if (value) {
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
  <input
    :type="formSchema.message.type"
    class="form-control"
    :class="{ 'is-invalid': isMsgFormErr }"
    :placeholder="isLoadingInput ? 'Loading...' : '請輸入內容'"
    :value="msgForm"
    @keyup.enter="emitMsgForm"
    @input="validateMsg"
    :disabled="isLoadingInput"
  />
</template>

<style lang="scss"></style>
