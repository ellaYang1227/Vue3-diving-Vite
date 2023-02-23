<script>
import { adminGuard } from "../data/routeGuard.js";

export default {
    beforeRouteEnter(to, from, next) {
        adminGuard(to, from, next);
    },
};
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss"></style>
