<script setup>
import decimalFormat from "../handle-formats/decimalFormat.js";
import { increment, readOnly, starSize, showRating, textClass, activeColor, inactiveColor } from "../data/starRatingParams.js";
</script>

<script>
import * as bootstrap from "bootstrap";
import StarRating from "vue-star-rating";
import { mapActions, mapState } from "pinia";
import LoadingStore from "../stores/LoadingStore.js";
import CommentStore from "../stores/CommentStore.js";
import CommentCard from "../components/CommentCard.vue";

export default {
    data() {
        return {
            showCount: 3,
            findComments: {
                data: []
            },
            commentCollapse: null,
            isShowCommentCollapse: false
        }
    },
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
        showCommentsData() {
            return this.findComments.data.slice(0, this.showCount);
        },
        collapseCommentsData() {
            return this.findComments.data.slice(this.showCount);
        }
    },
    watch: {
        userId() {
            this.getCommentsApi();
        },
        comments() {
            const findComments = this.comments.find(comment => comment.userId == this.userId);
            if(findComments){
                this.findComments = findComments;
                this.findComments.data.sort((a, b) => b.creationDate - a.creationDate);
            }
            
        }
    },
    components: {
        StarRating,
        CommentCard
    },
    mounted() {
        this.getCommentsApi();

    },
    methods: {
        ...mapActions(LoadingStore, ["hideLoading"]),
        ...mapActions(CommentStore, ["getComments"]),
        getCommentsApi() {
            this.getComments().then(res => {
                if(this.collapseCommentsData.length) {
                    this.commentCollapse = new bootstrap.Collapse(this.$refs.commentCollapse, {
                        toggle: false
                    });
                }

                this.hideLoading();
            });
        },
        showCommentCollapse() {
            this.commentCollapse.show();
            this.isShowCommentCollapse = true;
        }
    }
};
</script>

<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-transparent px-0">
            <div class="row gy-3">
                <h5 class="col-md-6 mb-0 fw-bold">給「{{ userName }}」的評論</h5>
                <div class="col d-flex flex-column align-items-center lh-sm">
                    <strong class="fs-2 text-lightPrimary font-barlow">{{ decimalFormat(findComments.averageScore, 1) }}</strong>
                    <star-rating
                        :text-class="textClass"
                        :increment="increment"
                        :rating="findComments.averageScore"
                        :read-only="readOnly"
                        :star-size="starSize"
                        :show-rating="false"
                        :active-color="activeColor"
                        :inactive-color="inactiveColor"></star-rating>
                </div>
                <div class="col text-center lh-sm">
                    <strong class="fs-2 text-lightPrimary font-barlow">
                        <template v-if="findComments.data.length">
                            {{ findComments.data.length }}
                        </template>
                        <template v-else>0</template>
                    </strong>
                    <small class="d-block">評論</small>
                </div>
            </div>
        </li>
        <!-- 非摺疊區塊 comments -->
        <li class="list-group-item bg-transparent px-0" v-for="comment in showCommentsData" :key="comment.id">
            <CommentCard :comment="comment" />
        </li>
        <!-- 摺疊區塊 comments -->
        <li class="list-group-item bg-transparent px-0" :class="{ 'py-0': isShowCommentCollapse }" v-if="collapseCommentsData.length">
            <button class="btn btn-link text-lightPrimary p-0 opacity-75" type="button" @click="showCommentCollapse" v-if="!isShowCommentCollapse">更多評論</button>
            <ul class="list-group list-group-flush collapse" ref="commentCollapse">
                <li class="list-group-item bg-transparent px-0" v-for="comment in collapseCommentsData" :key="comment.id">
                    <CommentCard :comment="comment" />
                </li>
            </ul>
        </li>
        <!-- 沒有資料 -->
        <li class="list-group-item bg-transparent px-0 opacity-75" v-if="!showCommentsData.length">目前沒有評論</li>
    </ul>
</template>

<style lang="scss"></style>
