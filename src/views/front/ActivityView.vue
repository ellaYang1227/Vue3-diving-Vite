<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";

export default {
    inject: ["frontLayoutData"],
    created() {
        this.hideLoading();
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
    }
};
</script>

<template>活動 scss</template>

<style lang="scss"></style>
