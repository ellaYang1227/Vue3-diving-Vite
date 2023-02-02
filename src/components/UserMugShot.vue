<script setup>
import { user } from "../data/auth.js";
import userDefaultImg from "../assets/images/user-default.svg";

defineProps({
    name: {
        type: String,
        required: false,
        default: user?.name
    },
    img: {
        type: String,
        required: false,
        default({ img }) {
            if (!img) {
                img = user?.img ? user.img : userDefaultImg;
            }

            return img;
        }
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
    },
});
</script>

<template>
    <div class="d-flex align-items-center">
        <img :style="{ width: `${widthSize}px`, height: `${widthSize}px` }" :src="img" :alt="name" class="rounded-circle border border-lightPrimary bg-lightPrimary bg-opacity-10 rounded-circle flex-shrink-0 me-1" />
        <span v-if="name && isShowName" class="text-truncate">{{ name }}</span>
    </div>
</template>

<style lang="scss"></style>
