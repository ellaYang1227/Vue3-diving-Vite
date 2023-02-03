import { defineStore } from "pinia";

import { bacsRequest } from "../data/axiosBase.js";
import statusFormat from "../handle-formats/statusFormat.js";

export default defineStore("activityStore", {
    state: () => ({
        statusFormat,
        activitys: []
    }),
    getters: {
        // 揪團進行中
        newActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.groupStatus === "進行中");
            return filter.slice(0, 3);
        },
        // 不包含活動已結束(亂數處理)
        hotActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.activityStatus !== "已結束");
            return filter.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 3);
        }
    },
    actions: {
        // 只取已啟用且未違規，更新貼文日期由新到舊
        getActivitys() {
            bacsRequest.get("/activitys.json").then(res => {
                this.activitys = res
                    .reverse()
                    .filter(item => item.isEnable && !item.isViolation)
                    .map(item => {
                        return {
                            ...item,
                            ...this.statusFormat(item)
                        };
                    });
            });
        }
    }
});
