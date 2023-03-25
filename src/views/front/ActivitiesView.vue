<script>
import VueMultiselect from "vue-multiselect";
import { mapActions, mapState } from "pinia";
import ActivityStore from "@/stores/ActivityStore.js";
import LoadingStore from "@/stores/LoadingStore.js";
import CommentStore from "@/stores/CommentStore.js";
import { getRandom } from "@/data/utilitieFunctions.js";
import HorizontalActivityCard from "@/components/Card/HorizontalActivityCard.vue";
import NoData from "@/components/NoData.vue";

export default {
  data() {
    return {
      activities: {
        all: [],
        paging: [],
        totalPage: 0,
        currentPage: 1,
        perPage: 10
      },
      initAdActivities: [],
      adActivities: [],
      selectedSort: "",
      sortOptions: [
        {
          label: "更新時間",
          value: "updateDate"
        },
        {
          label: "出發時間",
          value: "startDate"
        },
        {
          label: "評論分數",
          value: "score"
        },
        {
          label: "報名人數",
          value: "orderTotal"
        }
      ]
    };
  },
  computed: {
    ...mapState(CommentStore, ["comments"]),
    pagingActivities() {
      const { all, currentPage, perPage } = this.activities;
      const begin = (currentPage - 1) * perPage;
      const end = currentPage * perPage;
      return all.slice(begin, end);
    }
  },
  watch: {
    selectedSort: {
      handler(val, oldVal) {
        if (val) {
          const { value } = val;
          this.activities.all.sort((a, b) => {
            if (value === "startDate") {
              return a[value] > b[value] ? 1 : -1;
            } else if (value === "orderTotal") {
              return a.orders.length > b.orders.length ? -1 : 1;
            } else {
              return a[value] > b[value] ? -1 : 1;
            }
          });

          this.activities.currentPage = 1;
          this.adActivities = getRandom(this.initAdActivities, 2);
        }
      }
    }
  },
  components: {
    VueMultiselect,
    HorizontalActivityCard,
    NoData
  },
  created() {
    this.$watch(
      () => this.$route.query,
      () => {
        const { path } = this.$route;
        if (path.indexOf("/activities") > -1) {
          this.fetchData();
        }
      },
      { immediate: true }
    );
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading"]),
    ...mapActions(ActivityStore, ["getActivities", "getAdActivities"]),
    ...mapActions(CommentStore, ["getComments", "setScore"]),
    fetchData() {
      this.selectedSort = null;
      const APIs = [this.getActivities(this.$route.query), this.getComments()];

      if (!this.initAdActivities.length) {
        APIs.push(this.getAdActivities());
      }

      Promise.all(APIs).then(resArr => {
        this.activities = {
          ...this.activities,
          currentPage: 1,
          totalPage: Math.ceil(resArr[0].length / this.activities.perPage),
          all: this.setScore(resArr[0])
        };

        if (!this.initAdActivities.length) {
          this.initAdActivities = this.setScore(resArr[2]);
        }

        this.selectedSort = this.sortOptions[0];
        this.hideLoading();
      });
    },
    updatePage(action) {
      let { currentPage } = this.activities;
      if (action === "prev") {
        currentPage -= 1;
      } else if (action === "next") {
        currentPage += 1;
      } else {
        currentPage = action;
      }

      this.activities.currentPage = currentPage;
    }
  }
};
</script>

<template>
  <div class="container py-4 py-md-5">
    <div class="row align-items-center mb-2">
      <h5 class="col fw-bold fs-4 mb-0 text-warning">為您精選</h5>
      <div class="col-auto btn-group ms-auto">
        <VueMultiselect v-model="selectedSort" :options="sortOptions" label="label" track-by="label" :searchable="false" />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 gy-4">
      <HorizontalActivityCard :activity="adActivity" v-for="adActivity in adActivities" :key="adActivity.id" />
    </div>
    <div class="border-bottom opacity-30 my-4"></div>
    <template v-if="activities.all.length">
      <div class="row row-cols-1 row-cols-md-2 gy-4">
        <HorizontalActivityCard :activity="activity" v-for="activity in pagingActivities" :key="activity.id" />
      </div>
      <nav aria-label="Page navigation example" class="mt-4 mb-0">
        <ul class="pagination pagination-sm justify-content-center">
          <li class="page-item" :class="{ disabled: activities.currentPage === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage('prev')">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in activities.totalPage" :key="page" :class="{ active: activities.currentPage === page }">
            <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: activities.currentPage === activities.totalPage }">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage('next')">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </template>
    <NoData v-else text="找不到符合條件的揪團活動，試試看其他搜尋條件吧" />
  </div>
</template>

<style lang="scss"></style>
