import { defineStore } from "pinia";

export default defineStore("LoadingStore", {
  state: () => ({
    isLoading: true,
    isLoadingBtn: false
  }),
  actions: {
    /**
     * 顯示 Loading
     *
     * @param stype String：Loading 類型，如果是按鈕類型，需傳入 "btn"
     */
    showLoading(stype) {
      this.isLoadingBtn = true;

      if (stype !== "btn") {
        this.isLoading = true;
        document.body.classList.add("overflow-hidden");
      }
    },
    /**
     * 隱藏 Loading
     *
     * @param stype String：Loading 類型，如果是按鈕類型，需傳入 "btn"
     */
    hideLoading(stype) {
      this.isLoadingBtn = false;

      if (stype !== "btn") {
        this.isLoading = false;
        document.body.classList.remove("overflow-hidden");
      }
    }
  }
});
