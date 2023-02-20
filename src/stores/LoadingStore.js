import { defineStore } from "pinia";

export default defineStore("LoadingStore", {
    state: () => ({
        isLoading: true
    }),
    actions: {
        showLoading() {
            this.isLoading = true;
        },
        hideLoading() {
            this.isLoading = false;
        }
    }
});
