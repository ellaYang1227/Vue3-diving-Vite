<script>
import { adminGuard } from "@/data/routeGuard.js";

export default {
  beforeRouteEnter(to, from, next) {
    adminGuard(to, from, next);
  }
};
</script>

<template>
  <RouterView />
</template>

<style lang="scss"></style>
