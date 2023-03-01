<script setup>
import { loadingImg } from "./data/imagePaths.js";
</script>

<script>
import { mapState } from "pinia";
import LoadingStore from "./stores/LoadingStore.js";

export default {
    computed: {
        ...mapState(LoadingStore, ["isLoading"])
    },
    watch: {
        $route() {
            //  凍結 VueLoading 滾動
            //document.body.classList.add("overflow-hidden");
        }
    }
};
</script>

<template>
    <VueLoading v-model:active="isLoading" background-color="#083d63" :opacity="0.85">
        <img :src="loadingImg" class="loading-img" />
        <p class="font-barlow text-uppercase mb-0 text-center ps-4 opacity-80">loading...</p>
    </VueLoading>
    <router-view></router-view>
</template>

<style lang="scss">
.loading-img {
    width: 150px;
    opacity: 0.75;
}
</style>
