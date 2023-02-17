<script setup>
import { userDefaultImg } from "../data/imagePaths.js";
import { increment, readOnly, starSize, showRating, textClass } from "../data/starRatingParams.js";
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
        }
    },
    components: {
        StarRating
    }
};
</script>

<template>
    <div class="d-flex align-items-center">
        <img
            :style="{ width: `${widthSize}px`, height: `${widthSize}px` }"
            :src="img ? img : userDefaultImg"
            :alt="name"
            class="rounded-circle border border-lightPrimary bg-lightPrimary bg-opacity-10 rounded-circle flex-shrink-0"
        />
        <div :class="{ 'ms-2': isShowName }" class="text-truncate">
            <strong v-if="name && isShowName" class="text-truncate">{{ name }}</strong>
            <star-rating
                :text-class="textClass"
                :increment="increment"
                :rating="score"
                :read-only="readOnly"
                :star-size="starSize"
                :show-rating="showRating"
                v-if="score"
            ></star-rating>
        </div>
    </div>
</template>

<style lang="scss"></style>
