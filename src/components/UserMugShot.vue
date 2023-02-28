<script setup>
import { userDefaultImg } from "../data/imagePaths.js";
import { increment, readOnly, starSize, showRating, textClass, activeColor, inactiveColor } from "../data/starRatingParams.js";
import StarRating from "vue-star-rating";
</script>

<script>
export default {
    props: {
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
        },
        score: {
            type: Number,
            required: false
        },
        isShowRating: {
            type: Boolean,
            required: false,
            default: showRating
        }
    },
    components: {
        StarRating
    }
};
</script>

<template>
    <div class="text-truncate d-flex align-items-center">
        <img
            :style="{ width: `${widthSize}px`, height: `${widthSize}px` }"
            :src="img ? img : userDefaultImg"
            :alt="name"
            class="rounded-circle border border-lightPrimary bg-lightPrimary bg-opacity-10 rounded-circle flex-shrink-0"
        />
        <div :class="{ 'ms-1': isShowName }" class="text-truncate">
            <span v-if="name && isShowName" class="text-truncate fw-normal">{{ name }}</span>
            <star-rating
                :text-class="textClass"
                :increment="increment"
                :rating="score"
                :read-only="readOnly"
                :star-size="starSize"
                :show-rating="isShowRating"
                :active-color="activeColor"
                :inactive-color="inactiveColor"
                v-if="score"
            ></star-rating>
        </div>
    </div>
</template>

<style lang="scss"></style>
