<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
import { increment, showRating, textClass, activeColor, inactiveColor } from "../../data/starRatingParams.js";
</script>

<script>
import * as bootstrap from "bootstrap";
import StarRating from "vue-star-rating";
import { mapActions } from "pinia";
import MemberStore from '../../stores/MemberStore.js';
let commentModal = null;

export default {
    data() {
        return {
            comment: {
                score: 0,
                content: ""
            },
            isLoading: false
        }
    },
    props: {
        activity: {
            type: Object,
            required: false
        }
    },
    components: {
        StarRating
    },
    computed: {
    },
    watch: {
        activity() {
            console.log(this.activity)
            this.setDefaultCurrentComment();
        }
    },
    mounted() {
        console.log('commentModal')
        //this.$refs.commentModal
        commentModal = new bootstrap.Modal(document.getElementById('commentModal'), {
            keyboard: false
        });
        console.log(commentModal)
        //commentModal.show();
        this.setDefaultCurrentComment();
    },
    methods: {
        ...mapActions(MemberStore, ["addComment"]),
        setDefaultCurrentComment() {
            const { comment } = this.activity;
            this.comment = {
                score: comment ? comment.score : 0,
                content: comment ? comment.content : ""
            };

            console.log(this.comment)
        },
        openModal() {
            console.log(commentModal)
            commentModal.show();
            console.log('openModal')
        },
        onSubmit() {
            this.isLoading = true;
            console.log(this.activity)
            //const { id } = this.activity;
            this.comment.activityId = 12;
            console.log('updateComment', this.comment)
            this.addComment(this.comment).then(success => commentModal.hide());
        }
    },
};
</script>

<template>
    <div class="modal fade" id="commentModal" aria-labelledby="commentModalLabel" :data-bs-backdrop="isLoading ? true : 'static'" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <template v-if="!activity.comment">新增</template>評論
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body py-2">
                <ul class="list-group list-group-flush p-0">
                    <li class="list-group-item px-0">
                        <ul class="list-unstyled lh-sm">
                            <li class="mb-2">
                                <small class="opacity-75">活動名稱</small>
                                <h1 class="fw-bold fs-4 text-primary">{{ activity.title }}</h1>
                            </li>
                            <li class="mb-2">
                                <small class="opacity-75">活動地點</small>
                                <span class="d-block">{{ activity.location?.name }}</span>
                            </li>
                            <li class="mb-2">
                                <small class="opacity-75">活動日期</small>
                                <span class="d-block font-barlow">{{ `${dateFormat(activity.startDate)} ~ ${dateFormat(activity.endDate)}` }}</span>
                            </li>
                            <li class="mb-2">
                                <small class="opacity-75">主揪人</small>
                                <span class="d-block">{{ activity.user?.name }}</span>
                            </li>
                        </ul>
                    </li>
                    <li class="list-group-item px-0">
                        <p class="mb-2">給「{{ activity.user?.name }}」一些回饋或鼓勵的話...</p>
                        <star-rating
                        :text-class="textClass"
                        :increment="increment"
                        :rating="comment.score"
                        :star-size="20"
                        :show-rating="showRating"
                        :active-color="activeColor"
                        :inactive-color="inactiveColor"></star-rating>
                    </li>
                    <div class="mb-3">
                        <textarea class="form-control" rows="5" v-model.trim="comment.content" :class="{ 'is-invalid': !comment.content }"></textarea>
                        <span class="invalid-feedback">必填欄位</span>
                    </div>
                </ul>
            </div>
            <div class="modal-footer" v-if="!activity.comment">
                <button type="button" class="btn btn-outline-lightPrimary rounded-0" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-custom-rectangle" :disabled="isLoading || !comment.content" @click="onSubmit">
                    <span class="spinner-border spinner-border-sm" role="status" v-if="isLoading"></span>
                    新增
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
