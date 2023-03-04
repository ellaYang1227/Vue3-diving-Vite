<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
import propsValidator from "../data/propsValidator.js";
</script>

<script>
import UserMugShot from "../components/UserMugShot.vue";

export default {
    props: {
        comment: {
            type: Object,
            required: true,
            validator(value) {
                const verifyKeys = ["user", "activity", "score", "creationDate", "content"];
                return propsValidator(value, verifyKeys);
            }
        },
        showDate: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    components: {
        UserMugShot
    }
};
</script>

<template>
    <div class="row justify-content-between align-items-end">
        <div :class="[showDate ? 'col-7' : 'col-sm-5 col-md-6 col-lg-5']">
            <UserMugShot :name="comment.user?.name" :img="comment.user?.img" :score="comment.score" :isShowRating="showDate" />
        </div>
        <small class="col-auto opacity-80 font-barlow mt-2 mt-sm-0" v-if="showDate">{{ dateFormat(comment.creationDate, ["date", "time"]) }}</small>
        <h2 class="fs-6 mb-0 text-primary text-truncate mt-2" :class="[showDate ? 'col-12' : 'col-sm-7 col-md-6 col-lg-7 mt-sm-0 text-sm-end']">{{ comment.activity?.title }}</h2>
        <p class="mb-0 col-12" :class="{ 'mt-sm-2 text-truncate-row-4': !showDate }">{{ comment.content }}</p>
    </div>
</template>

<style lang="scss"></style>
