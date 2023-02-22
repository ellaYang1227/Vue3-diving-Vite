import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("OtherStore", {
    state: () => ({}),
    getters: {},
    actions: {
        getCertificateLevels() {
            return bacsRequest.get("certificateLevels").then(res => res);
        },
        getCylinderTotals() {
            return bacsRequest.get("cylinderTotals").then(res => res);
        }
    }
});
