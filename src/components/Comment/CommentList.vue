<script>
import VueMultiselect from "vue-multiselect";
import * as bootstrap from "bootstrap";
import StarRating from "vue-star-rating";
import { mapActions, mapState } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import CommentStore from "@/stores/CommentStore.js";
import decimalFormat from "@/handle-formats/decimalFormat.js";
import { increment, readOnly, starSize, textClass, activeColor, inactiveColor } from "@/data/starRatingParams.js";
import CommentCard from "./CommentCard.vue";

export default {
  data() {
    return {
      decimalFormat,
      increment,
      readOnly,
      starSize,
      textClass,
      activeColor,
      inactiveColor,
      showCount: 3,
      findComments: {
        data: []
      },
      commentCollapse: null,
      isShowCommentCollapse: false,
      selectedSort: "creationDate",
      sortOptions: [
        {
          label: "發文時間",
          value: "creationDate"
        },
        {
          label: "評論分數",
          value: "score"
        }
      ]
    };
  },
  props: {
    userId: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: false
    },
    isMemberStyle: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapState(CommentStore, ["comments", "initComments"]),
    showCommentsData() {
      if (!this.isMemberStyle) {
        return this.findComments.data.slice(0, this.showCount);
      } else {
        return this.findComments.data;
      }
    },
    collapseCommentsData() {
      return !this.isMemberStyle ? this.findComments.data.slice(this.showCount) : [];
    }
  },
  watch: {
    userId() {
      this.getCommentsApi();
    },
    comments() {
      const findComments = this.comments.find(comment => comment.userId == this.userId);
      if (findComments) {
        this.findComments = findComments;
        this.findComments.data.sort((a, b) => b[this.selectedSort] - a[this.selectedSort]);
      }
    },
    selectedSort: {
      handler(val, oldVal) {
        if (val) {
          const { value } = val;
          this.findComments.data.sort((a, b) => b[value] - a[value]);
        }
      }
    }
  },
  components: {
    VueMultiselect,
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
        this.selectedSort = this.sortOptions[0];
        if (this.collapseCommentsData.length) {
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
        <h5 class="col-md-6 mb-0 fw-bold" v-if="!isMemberStyle">給「{{ userName }}」的評論</h5>
        <div class="d-flex flex-column align-items-center lh-sm" :class="[isMemberStyle ? 'col col-sm-3 col-lg-2' : 'col']">
          <strong class="fs-2 text-lightPrimary font-barlow">{{ decimalFormat(findComments.averageScore, 1) }}</strong>
          <StarRating
            :text-class="textClass"
            :increment="increment"
            :rating="findComments.averageScore"
            :read-only="readOnly"
            :star-size="starSize"
            :show-rating="false"
            :active-color="activeColor"
            :inactive-color="inactiveColor"
          ></StarRating>
        </div>
        <div class="text-center lh-sm" :class="[isMemberStyle ? 'col col-sm-3 col-lg-2' : 'col']">
          <strong class="fs-2 text-lightPrimary font-barlow">
            <template v-if="findComments.data.length">
              {{ findComments.data.length }}
            </template>
            <template v-else>0</template>
          </strong>
          <small class="d-block">評論</small>
        </div>
        <div class="ms-auto btn-group col-auto align-self-end" v-if="isMemberStyle">
          <VueMultiselect v-model="selectedSort" :options="sortOptions" label="label" track-by="label" :searchable="false" />
        </div>
      </div>
    </li>
    <!-- 非摺疊區塊 comments -->
    <li class="list-group-item bg-transparent px-0" v-for="comment in showCommentsData" :key="comment.id">
      <CommentCard :comment="comment" />
    </li>
    <!-- 摺疊區塊 comments -->
    <li class="list-group-item bg-transparent px-0" :class="{ 'py-0': isShowCommentCollapse }" v-if="collapseCommentsData.length">
      <button class="btn btn-link text-lightPrimary p-0 opacity-75" type="button" @click="showCommentCollapse" v-if="!isShowCommentCollapse">
        更多評論
      </button>
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
