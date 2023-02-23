import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("OtherStore", {
    state: () => ({}),
    getters: {},
    actions: {
        getCertificateLevels() {
            return bacsRequest.get("certificateLevels")
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        getCylinderTotals() {
            return bacsRequest.get("cylinderTotals")
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        }
    }
});
