import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("OtherStore", {
    state: () => ({}),
    getters: {},
    actions: {
        getCertificateLevelOptions() {
            //return bacsRequest.get("/certificate-levels.json").then(res => res);
        },
        getCylinderTotalOptions() {
            //return bacsRequest.get("/cylinder-totals.json").then(res => res);
        }
    }
});
