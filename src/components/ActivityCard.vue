<script setup></script>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<template>
    <router-link to="#" class="col">
        <div class="card custom-rectangle bg-primary">
            <img src="/示意OK.jpg" class="card-img custom-rectangle" alt="..." />
            <div class="card-img-overlay">
                <span class="fs-6 font-barlow badge rounded-pill bg-darkPrimary bg-opacity-75 text-lightPrimary border border-lightPrimary border-2">5.0</span>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";

.card-img-overlay {
    left: unset;
    right: 0;
}
</style>
