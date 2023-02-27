<script>
import HeaderNavbar from "../components/HeaderNavbar.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SearchActivityBar from "../components/SearchActivityBar.vue";

export default {
    data() {
        return {
            isVerticalMiddle: false,
            showSearchBar: true,
            isMainOverflowHidden: false,
        };
    },
    provide() {
        return {
            frontLayoutData: this
        };
    },
    components: {
        HeaderNavbar,
        FooterComponent,
        SearchActivityBar
    },
    created() {
        this.$watch(
            () => this.$route,
            () => { 
                console.log('created')
                this.isVerticalMiddle = false;
                this.showSearchBar = true;
                this.isMainOverflowHidden = false;
            },
            { immediate: true }
        );

    },
};
</script>

<template>
    <div class="min-vh-100 d-flex flex-column" :class="{ 'overflow-hidden': isMainOverflowHidden }">
        <HeaderNavbar />
        <div class="flex-fill fixed-margin-top-headerHeight" :class="{ 'd-flex flex-column justify-content-center': isVerticalMiddle }">
            <SearchActivityBar v-if="showSearchBar" />
            <router-view></router-view>
        </div>
        <FooterComponent />
    </div>
</template>

<style lang="scss"></style>
