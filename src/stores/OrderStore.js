import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getTimestamp } from "../data/utilitieFunctions.js";
import AuthStore from "./AuthStore.js";
import ActivityStore from "./ActivityStore.js";
const { getStorageUser } = AuthStore();
const { getActivity } = ActivityStore();

export default defineStore("OrderStore", {
    state: () => ({}),
    getters: {},
    actions: {
        addOrder(activityId){
            activityId = +activityId;
            const creationDate = getTimestamp(new Date());
            const title = "報名";
            return bacsRequest.post(`660/users/${getStorageUser()?.id}/orders`, { activityId, creationDate })
                .then(res => {
                    setSwalFire("toast", "success", `${title}成功`);
                    return getActivity(activityId);
                })
                .catch(({status}) => {
                    if(status !== 401){
                        setSwalFire("toast", "error", `${title}失敗`);
                    }

                    return false;
                });
        }
    }
});
