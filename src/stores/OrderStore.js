import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getTimestamp } from "../data/utilitieFunctions.js";
import ActivityStore from "./ActivityStore.js";
import AuthStore from "./AuthStore.js";
import MemberStore from "./MemberStore.js";
const { getStorageUser } = AuthStore();
const { getActivity } = ActivityStore();
const { getMyOrders } = MemberStore();

export default defineStore("OrderStore", {
    state: () => ({}),
    getters: {},
    actions: {
        getSearchOrdersForActivityId(activityId){
            const paramsArr = [
                "_expand=user",
                "_sort=updateDate",
                "_order=desc",
                "isDelete=0",
                `activityId=${activityId}`
            ];
            
            return bacsRequest.get(`440/orders?${paramsArr.join('&')}`)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        updateOrder(activityId, orderId){
            const body = {
                updateDate: getTimestamp(new Date()),
                isDelete: 0 // 避免之後取消報名時 會刪除掉該活動
            };

            let apiMethod = "patch";
            let apiUrl = `600/orders/${orderId}`;

            if(!orderId) {
                body.activityId = +activityId;
                apiMethod = "post",
                apiUrl = `660/users/${getStorageUser()?.id}/orders`
            }
            
            const title = "報名";
            return bacsRequest
            [apiMethod](apiUrl, body)
                .then(res => {
                    setSwalFire("toast", "success", `${title}成功`);
                    return Promise.all([
                        getActivity(activityId),
                        getMyOrders(3)
                    ]);
                })
                .catch(({status}) => {
                    if(status !== 401){
                        setSwalFire("toast", "error", `${title}失敗`);
                    }

                    return false;
                });
        },
        // 使用 patch(非 delete) & isDelete 避免取消報名的時候 會刪除掉該活動，
        delOrder(orderId) {
            const title = `取消報名`;
            return bacsRequest
                .patch(`600/orders/${orderId}`, { isDelete: 1 })
                .then(res => {
                    setSwalFire("toast", "success", `${title}成功`);
                    getMyOrders();
                    return Promise.resolve(true);
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
