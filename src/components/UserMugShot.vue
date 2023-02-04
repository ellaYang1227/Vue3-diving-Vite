<script setup>
import { userDefaultImg } from "../data/imagePath.js";

defineProps({
    name: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    widthSize: {
        type: Number,
        required: false,
        default: 45
    },
    isShowName: {
        type: Boolean,
        required: false,
        default: true
    }
});
</script>

<template>
    <div class="d-flex align-items-center">
        <img
            :style="{ width: `${widthSize}px`, height: `${widthSize}px` }"
            :src="img ? img : userDefaultImg"
            :alt="name"
            class="rounded-circle border border-lightPrimary bg-lightPrimary bg-opacity-10 rounded-circle flex-shrink-0 me-1"
        />
        <span v-if="name && isShowName" class="text-truncate">{{ name }}</span>
    </div>
</template>

<style lang="scss"></style>
