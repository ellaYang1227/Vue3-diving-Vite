<script setup>
import { loadingImg } from "../data/imagePaths.js";
</script>

<script>
import { mapState } from "pinia";
import LoadingStore from "../stores/LoadingStore.js";
import HeaderNavbar from "../components/HeaderNavbar.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
    data() {
        return {
            isVerticalMiddle: false
        };
    },
    provide() {
        return {
            frontLayoutData: this
        };
    },
    computed: {
        ...mapState(LoadingStore, ["isLoading"])
    },
    components: {
        HeaderNavbar,
        FooterComponent
    }
};
</script>

<template>
    <VueLoading v-model:active="isLoading" background-color="#083d63" :opacity="0.8">
        <img :src="loadingImg" style="width: 120px; height: 120px" />
    </VueLoading>
    <div class="min-vh-100 d-flex flex-column overflow-hidden">
        <HeaderNavbar />
        <div class="flex-fill fixed-margin-top-headerHeight" :class="{ 'd-flex flex-column justify-content-center': isVerticalMiddle }">
            <router-view></router-view>
        </div>
        <FooterComponent />
    </div>
</template>

<style lang="scss"></style>
