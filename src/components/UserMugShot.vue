<script setup>
import { user } from "../data/auth.js";
import userDefaultImg from "../assets/images/user-default.svg";

defineProps({
    widthSize: { type: Number, required: false, default: 45 },
});
</script>

<template>
    <img :style="{ width: `${widthSize}px`, height: `${widthSize}px` }" :src="user?.img ? user.img : userDefaultImg" :alt="user?.name ? user.name : ''" class="rounded-circle border border-lightPrimary bg-lightPrimary bg-opacity-10 rounded-circle flex-shrink-0" />
</template>

<style lang="scss"></style>
