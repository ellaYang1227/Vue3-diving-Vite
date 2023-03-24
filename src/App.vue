<script>
import { loadingImg } from "@/data/imagePaths.js";
import { mapState } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";

export default {
  data() {
    return {
      loadingImg
    };
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading"])
  }
};
</script>

<template>
  <VueLoading v-model:active="isLoading" background-color="#083d63" :opacity="0.85">
    <img :src="loadingImg" class="loading-img" alt="loading" />
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
