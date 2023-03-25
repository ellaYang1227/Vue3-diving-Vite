<script>
import { loadingImg } from "@/data/imagePaths.js";
import { mapState, mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";

export default {
  data() {
    return {
      loadingImg
    };
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading", "progressValue"])
  },
  mounted() {
    this.setIntervalProgress();
  },
  methods: {
    ...mapActions(LoadingStore, ["setIntervalProgress"])
  }
};
</script>

<template>
  <VueLoading v-model:active="isLoading" background-color="#083d63" :opacity="0.85">
    <img :src="loadingImg" class="loading-img" alt="loading" />
    <div class="progress ms-2 my-2">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        :aria-valuenow="progressValue"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: `${progressValue}%` }"
      ></div>
    </div>
    <p class="font-barlow text-uppercase mb-0 text-center ps-4 opacity-80">loading...</p>
  </VueLoading>
  <RouterView />
</template>

<style lang="scss">
.loading-img {
  width: 150px;
  opacity: 0.75;
}
</style>
