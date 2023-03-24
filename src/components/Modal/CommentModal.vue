<script>
import * as bootstrap from "bootstrap";
import StarRating from "vue-star-rating";
import { mapActions } from "pinia";
import MemberStore from "@/stores/MemberStore.js";
import dateFormat from "@/handle-formats/dateFormat.js";
import { increment, readOnly, showRating, textClass, activeColor, inactiveColor } from "@/data/starRatingParams.js";

export default {
  data() {
    return {
      dateFormat,
      increment,
      readOnly,
      showRating,
      textClass,
      activeColor,
      inactiveColor,
      modal: null,
      comment: {
        score: 0,
        content: ""
      },
      isLoading: false
    };
  },
  props: {
    activity: {
      type: Object,
      required: false
    }
  },
  expose: ["openModal"],
  components: {
    StarRating
  },
  watch: {
    activity() {
      this.setDefaultCurrentComment();
    }
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: "static"
    });

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
    },
    openModal() {
      this.modal.show();
    },
    onSubmit() {
      this.isLoading = true;
      const activityId = this.activity.id;
      this.addComment({ ...this.comment, activityId }).then(success => {
        this.modal.hide();
        this.isLoading = false;
      });
    }
  }
};
</script>

<template>
  <div class="modal fade" ref="modal" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ activity.comment ? "查看" : "新增" }}評論</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" :disabled="isLoading"></button>
        </div>
        <div class="modal-body py-2">
          <ul class="list-group list-group-flush p-0">
            <li class="list-group-item px-0">
              <ul class="list-unstyled lh-sm">
                <li class="mb-2">
                  <small class="opacity-75">活動名稱</small>
                  <h1 class="fw-bold fs-5 text-primary">{{ activity.title }}</h1>
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
              <StarRating
                :text-class="textClass"
                :increment="increment"
                :star-size="20"
                :read-only="activity.comment ? readOnly : false"
                :show-rating="showRating"
                :active-color="activeColor"
                :inactive-color="inactiveColor"
                v-model:rating="comment.score"
              ></StarRating>
            </li>
          </ul>
          <div class="mb-3">
            <textarea
              class="form-control"
              rows="5"
              v-model.trim="comment.content"
              :class="{ 'is-invalid': !comment.content }"
              :disabled="activity.comment"
            ></textarea>
            <span class="invalid-feedback">必填欄位</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-lightPrimary rounded-0" data-bs-dismiss="modal" :disabled="isLoading">
            {{ activity.comment ? "關閉" : "取消" }}
          </button>
          <button
            type="button"
            class="btn btn-primary btn-custom-rectangle"
            :disabled="isLoading || !comment.content"
            @click="onSubmit"
            v-if="!activity.comment"
          >
            <span class="spinner-border spinner-border-sm" role="status" v-if="isLoading"></span>
            新增
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
