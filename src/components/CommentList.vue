<script setup>
import decimalFormat from "../handle-formats/decimalFormat.js";
import dateFormat from "../handle-formats/dateFormat.js";
import { increment, readOnly, starSize, showRating, textClass, activeColor, inactiveColor } from "../data/starRatingParams.js";
</script>

<script>
import { mapState } from "pinia";
import StarRating from "vue-star-rating";
import CommentStore from "../stores/CommentStore.js";
import UserMugShot from "../components/UserMugShot.vue";

export default {
    props: {
        userId: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: false
        }
    },
    computed: {
        ...mapState(CommentStore, ["comments", "initComments"]),
        organiserComments() {
            console.log(this.initComments, this.comments)
            console.log(this.comments.find(comment => comment.userId == this.userId))
            return this.comments.find(comment => comment.userId == this.userId);
        }
    },
    components: {
        UserMugShot,
        StarRating
    }
};
</script>

<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-transparent px-0">
            <div class="row gy-3">
                <h5 class="col-md-6 mb-0">給<strong>「{{ userName }}」</strong>的評價</h5>
                <div class="col d-flex flex-column align-items-center lh-sm">
                    <strong class="fs-2 text-lightPrimary font-barlow">{{ decimalFormat(organiserComments?.averageScore, 1) }}</strong>
                    <star-rating
                        :text-class="textClass"
                        :increment="increment"
                        :rating="organiserComments?.averageScore"
                        :read-only="readOnly"
                        :star-size="starSize"
                        :show-rating="false"
                        :active-color="activeColor"
                        :inactive-color="inactiveColor"></star-rating>
                </div>
                <div class="col text-center lh-sm">
                    <strong class="fs-2 text-lightPrimary font-barlow">
                        <template v-if="organiserComments?.data?.length">
                            {{ organiserComments?.data?.length }}
                        </template>
                        <template v-else>0</template>
                    </strong>
                    <small class="d-block">評論</small>
                </div>
            </div>
        </li>
        <li class="list-group-item bg-transparent px-0" v-for="comment in organiserComments?.data" :key="comment.id">
            <div class="row justify-content-between align-items-end">
                <div class="col-8 col-sm-9">
                    <UserMugShot :name="comment.user?.name" :img="comment.user?.img" :score="comment.score" />
                </div>
                <div class="col-auto font-barlow text-sm-end mt-2 mt-sm-0">{{ dateFormat(comment.creationDate) }}</div>
                <h2 class="col-12 fs-6 mb-0 text-primary text-truncate mt-2 ">{{
                    comment.activity?.title }}</h2>
                <p class="mb-0 col-12 text-truncate-row-4">{{ comment.content }}</p>
            </div>
        </li>
        <li class="list-group-item bg-transparent px-0" v-if="organiserComments?.data?.length > 3">
            <button class="btn btn-link text-lightPrimary text-decoration-none p-0 opacity-80" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">更多評論</button>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";

</style>
