import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getRandom } from "../data/utilitieFunctions.js";
import dateFormat from "../handle-formats/dateFormat.js";
import statusFormat from "../handle-formats/statusFormat.js";
import router from "../router/index.js";

export default defineStore("ActivityStore", {
    state: () => ({
        activitiesParamsArr: [
            "_sort=updateDate",
            "_order=desc",
            "_expand=user",
            "_expand=location",
            "_expand=certificateLevel",
            "_expand=cylinderTotal",
            "_embed=violations",
            "_embed=orders",
            "isDelete=0"
        ]
    }),
    getters: {
        today: () => {
            return dateFormat(new Date(), "date", "-");
        },
        activitiesApiUrl: ({activitiesParamsArr}) => {
            return `activities?${activitiesParamsArr.join('&')}`;
        }
    },
    actions: {
        /**
         * 取得所有報名(不包含刪除活動)
         * 
         */
         getFilterIsDeleteActivities(){
            return bacsRequest.get(`activities?isDelete=0`)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        /**
         * 最新活動：只取未違規且報名截止日期(orderExpiryDate)大於等於今天，更新貼文日期由新到舊
         * 
         */
        getNewActivities(){
            const params = { orderExpiryDate_gte: this.today }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        /**
         * 熱門活動：只取未違規且結束日期(endDate)大於等於今天，更新貼文日期由新到舊
         * 
         */
        getHotActivities(){
            const params = { endDate_gte: this.today }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => {
                res = this.getHandleActivities(res);
                res.sort((a, b) => b.orders.length - a.orders.length);
                const sliceRes = res.slice(0, 3);
                return Promise.resolve(sliceRes);
            })
            .catch(err => Promise.reject(false));
        },
        /**
         * 官方推薦活動：只取未違規且報名截止日期(orderExpiryDate)大於等於今天，更新貼文日期由新到舊
         * 
         */
        getAdActivities(){
            const params = { orderExpiryDate_gte: this.today }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        /**
         * 活動列表
         * 
         * @param search Object：搜尋條件；locationId、startDate、endDat(預設大於等於今天)、tag
         */
        getActivities(search){
            const searchKeys = Object.keys(search);
            const params = searchKeys.reduce((accumulator, currentKey) => {
                if(search[currentKey]){
                    if(currentKey === "startDate"){
                        accumulator[`${currentKey}_gte`] = search[currentKey];
                    }else if(currentKey === "endDate"){
                        accumulator[`${currentKey}_lte`] = search[currentKey];
                    }else if(currentKey === "tag"){
                        accumulator.tags_like = search[currentKey];
                    }else{
                        accumulator[currentKey] = search[currentKey];
                    }
                };

                return accumulator;
            }, {});

            // 結束日期大於等於今天
            if(searchKeys.indexOf("endDate")  === -1){ 
                params.endDate_gte = this.today; 
            }

            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        /**
         * 取得指定活動 ID 的活動列表
         * 
         * @param activityIds Array：要取得活動的活動 id
         */
        getSearchActivitiesForActivityId(activityIds){
            const paramsArr = [
                "_expand=user",
                "_expand=location",
                "_embed=violations",
                "_embed=orders",
                "_embed=comments"
            ];
            
            if(activityIds.length) { paramsArr.push(activityIds.join('&')) }
            
            return bacsRequest.get(`440/activities?${paramsArr.join('&')}`)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        /**
         * 取得單一活動
         * 
         * @param activityIds Number | String：要取得活動的活動 id
         */
        getActivity(activityId){
            const paramsArr = [
                "_expand=user",
                "_expand=location",
                "_expand=certificateLevel",
                "_expand=cylinderTotal",
                "_embed=violations",
                "_embed=orders"
            ];

            return bacsRequest.get(`activities/${activityId}?${paramsArr.join('&')}`)
            .then(res => {
                if(res.isDelete) {
                    setSwalFire("popup", "error", "系統錯誤", "找不到該筆資料").then(() => router.go(-1));
                    return Promise.reject(false);
                }

                return Promise.resolve({
                    ...res,
                    ...statusFormat(res)
                });
            })
            .catch(err => Promise.reject(false));
        },
        /**
         * 廣告潛水地區
         * 
         */
        getAdLocations(){
            return bacsRequest.get("locations?isAD=true")
            .then(res => Promise.resolve(getRandom(res, 12)))
            .catch(err => Promise.reject(false));
        },
        /**
         * 統一處理 api Activities 原始資料，並過濾掉有違規紀錄的活動
         * 
         * @param activities Array：要處理的活動列表
         */
        getHandleActivities(activities) {
            activities = activities.filter(item => !item.violations.length);
            return this.handleActivitiesStatus(activities);
        },
        /**
         * 統一寫入活動狀態(ActivitiesStatus)
         * 
         * @param activities Array：要處理的活動列表
         */
        handleActivitiesStatus(activities) {
            activities.forEach(item => item.orders = item.orders.filter(order => !order.isDelete));
            return activities.map(activity => {
                return {
                    ...activity,
                    ...statusFormat(activity)
                };
            });
        }
    }
});
