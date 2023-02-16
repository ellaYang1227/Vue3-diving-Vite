import { defineStore } from "pinia";

import { bacsRequest } from "../data/axiosBase.js";
import statusFormat from "../handle-formats/statusFormat.js";

export default defineStore("MemberStore", {
    state: () => ({
        statusFormat,
        mySignUp: []
    }),
    getters: {},
    actions: {
        // startDate 由新到舊
        getMySignUp(count) {
            bacsRequest.get("/my-sign-up.json").then(res => {
                this.mySignUp = res
                    .sort((a, b) => (a.startDate > b.startDate ? 1 : -1))
                    .map(item => {
                        return {
                            ...item,
                            ...this.statusFormat(item)
                        };
                    })
                    .filter(item => item.activityStatus === "未開始" || item.activityStatus === "進行中");

                if (count) {
                    this.mySignUp = this.mySignUp.slice(0, count);
                }
            });
        }
    }
});
