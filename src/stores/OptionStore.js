import { defineStore } from "pinia";
import { bacsRequest } from "@/data/axiosBase.js";

export default defineStore("OptionStore", {
  state: () => ({
    locations: [],
    tags: []
  }),
  getters: {},
  actions: {
    /**
     * 取得證照等級列表
     *
     */
    getCertificateLevels() {
      return bacsRequest
        .get("certificateLevels")
        .then(res => Promise.resolve(res))
        .catch(err => Promise.reject(false));
    },
    /**
     * 取得潛水支數列表
     *
     */
    getCylinderTotals() {
      return bacsRequest
        .get("cylinderTotals")
        .then(res => Promise.resolve(res))
        .catch(err => Promise.reject(false));
    },
    /**
     * 取得潛水地點
     *
     */
    getLocations() {
      return bacsRequest
        .get("locations")
        .then(res => {
          this.locations = res;
          return Promise.resolve(res);
        })
        .catch(err => Promise.reject(false));
    },
    /**
     * 取得活動標籤
     *
     */
    getTags() {
      return bacsRequest
        .get("tags")
        .then(res => {
          this.tags = res;
          return Promise.resolve(res);
        })
        .catch(err => Promise.reject(false));
    }
  }
});
