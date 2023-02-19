<script>
import HeaderNavbar from "../components/HeaderNavbar.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
    data() {
        return {
            isVerticalMiddle: false
        };
    },
    components: {
        HeaderNavbar,
        FooterComponent
    },
    watch: {
        $route() {
            this.setIsVerticalMiddle();
        }
    },
    created() {
        this.setIsVerticalMiddle();
    },
    methods: {
        setIsVerticalMiddle() {
            const { path } = this.$route;
            console.log(path);
            this.isVerticalMiddle = path.includes("login") ? true : false;
        }
    }
};
</script>

<template>
    <div class="min-vh-100 d-flex flex-column overflow-hidden">
        <HeaderNavbar />
        <div class="flex-fill fixed-margin-top-headerHeight" :class="{ 'd-flex flex-column justify-content-center': isVerticalMiddle }">
            <router-view></router-view>
        </div>
        <FooterComponent />
    </div>
</template>

<style lang="scss"></style>
