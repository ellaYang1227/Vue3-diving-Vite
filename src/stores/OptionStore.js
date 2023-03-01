import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("OptionStore", {
    state: () => ({
        locations: [],
        tags: []
    }),
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
        },
        getLocations() {
            return bacsRequest.get("locations")
            .then(res => {
                this.locations = res;
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(false));
        },
        getTags() {
            return bacsRequest.get("tags")
            .then(res => {
                this.tags = res;
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(false));
        }
    }
});
