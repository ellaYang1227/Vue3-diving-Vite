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
        /**
         * 取得指定活動 id 的所有報名
         * 
         * @param activityId Number | string 指定活動 id
         */
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
        /**
         * 更新單筆報名
         * 
         * @param activityId Number | string 活動 id
         * @param orderId Number | string 報名 id，更新活動才需傳入，如果是新增免傳
         */
        updateOrder(activityId, orderId){
            const body = {
                updateDate: getTimestamp(new Date()),
                isDelete: 0 // 避免之後取消報名時 會刪除掉該活動(json-server 刪除 bug)
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
        // 解決 json-server 刪除 bug：使用 patch(非 delete) & isDelete 避免取消報名時 會刪掉該活動
        /**
         * 刪除單筆報名
         * 
         * @param orderId Number | string 報名 id，
         */
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
