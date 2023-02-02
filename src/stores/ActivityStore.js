import { defineStore } from "pinia";

import { bacsRequest } from "../api/base.js";
import statusFormat from "../data/statusFormat.js";

export default defineStore("activityStore", {
    state: () => {
        return {
            statusFormat,
            activitys: []
        };
    },
    getters: {
        newActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.groupStatus === "進行中");
            return filter.slice(0, 3);
        },
        hotActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.activityStatus !== "未上架" && activity.groupStatus !== "未上架" && activity.groupStatus !== "系統下架");
            return filter.slice(0, 3);
        }
    },
    actions: {
        getActivitys() {
            bacsRequest.get("/activitys.json").then(res => {
                this.activitys = res.reverse().map(item => {
                    return {
                        ...item,
                        ...this.statusFormat(item)
                    };
                });
            });
        }
    }
});
