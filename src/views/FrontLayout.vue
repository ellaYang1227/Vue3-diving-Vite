<script>
import HeaderNavbar from "../components/HeaderNavbar.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
    components: {
        HeaderNavbar,
        FooterComponent
    }
};
</script>

<template>
    <div class="min-vh-100 d-flex flex-column overflow-hidden">
        <HeaderNavbar />
        <div class="flex-fill fixed-margin-top-headerHeight">
            <router-view></router-view>
        </div>
        <FooterComponent />
    </div>
</template>

<style lang="scss"></style>
