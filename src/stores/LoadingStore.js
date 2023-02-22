import { defineStore } from "pinia";

export default defineStore("LoadingStore", {
    state: () => ({
        isLoading: true,
        isLoadingBtn: false
    }),
    actions: {
        showLoading(stype) {
            this.isLoadingBtn = true;

            if (stype !== "btn") {
                this.isLoading = true;
                document.body.classList.add("overflow-hidden");
            }
        },
        hideLoading(stype) {
            this.isLoadingBtn = false;

            if (stype !== "btn") {
                this.isLoading = false;
                document.body.classList.remove("overflow-hidden");
            }
        }
    }
});
