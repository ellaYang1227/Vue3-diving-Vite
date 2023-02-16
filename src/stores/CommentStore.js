import { defineStore } from "pinia";

import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("CommentStore", {
    state: () => ({
        comments: []
    }),
    getters: {},
    actions: {
        getComments() {
            bacsRequest.get("/activitys.json").then(res => {
                console.error("錯誤內容");
                this.activitys = res
                    .reverse()
                    .filter(item => item.isEnable && !item.isViolation)
                    .map(item => {
                        return item;
                    });
            });
        }
    }
});
