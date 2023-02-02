import { defineStore } from "pinia";

import { bacsRequest } from "../api/base.js";

export default defineStore("activityStore", {
    state: () => ({}),
    actions: {
        getActivitys(filter) {
            bacsRequest.get("/activitys.json").then(res => {
                console.log(filter);
                console.log(res);
            });
        }
    }
});
