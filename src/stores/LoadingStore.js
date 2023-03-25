import { defineStore } from "pinia";

export default defineStore("LoadingStore", {
  state: () => ({
    isLoading: true,
    isLoadingBtn: false,
    intervalProgress: null,
    progressValue: 10
  }),
  actions: {
    /**
     * 設定 Progress Interval
     *
     */
    setIntervalProgress() {
      this.intervalProgress = setInterval(() => {
        if (75 > this.progressValue && this.isLoading) {
          this.progressValue += 5;
        }
      }, 1000);
    },
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
      this.progressValue = 100;
      this.isLoadingBtn = false;

      setTimeout(() => {
        if (stype !== "btn") {
          this.isLoading = false;
          document.body.classList.remove("overflow-hidden");
        }

        clearInterval(this.intervalProgress);
        this.progressValue = 10;
      }, 500);
    }
  }
});
