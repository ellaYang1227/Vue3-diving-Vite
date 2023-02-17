import { defineStore } from "pinia";

import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("CommentStore", {
    state: () => ({
        comments: []
    }),
    getters: {},
    actions: {
        getComments() {
            return bacsRequest.get("/comments.json").then(res => {
                return res;
                //this.comments =  res;
            });
        }
    }
});
