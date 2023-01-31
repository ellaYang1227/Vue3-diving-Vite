<script setup>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import FooterComponent from "./components/FooterComponent.vue";

console.log(import.meta.env.VITE_TITLE);
console.log(import.meta.env.VITE_TEXT);
</script>

<template>
  <div class="min-vh-100 d-flex flex-column">
    <HeaderNavbar />
    <div class="flex-fill fixed-margin-top-headerHeight ">
      <router-view></router-view>
    </div>
    <FooterComponent />
  </div>
</template>

<style></style>
