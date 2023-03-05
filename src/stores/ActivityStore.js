import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { getRandom, getTimestamp } from "../data/utilitieFunctions.js";
import statusFormat from "../handle-formats/statusFormat.js";
import dateFormat from "../handle-formats/dateFormat.js";

export default defineStore("ActivityStore", {
    state: () => ({
        statusFormat,
        activitiesApiUrl: "activities?_sort=updateDate&_order=desc&_expand=user&_expand=location&_expand=certificateLevel&_expand=cylinderTotal&_embed=violations&_embed=orders",
    }),
    getters: {
        yesterday: () => {
            const yesterday = getTimestamp(new Date()) - 24 * 60 * 60 * 1000;
            return dateFormat(yesterday, "date", "-");
        },
        today: () => {
            const today = getTimestamp(new Date());
            return dateFormat(today, "date", "-");
        }
    },
    actions: {
        // 只取未違規且報名截止日期(orderExpiryDate)大於等於今天，更新貼文日期由新到舊
        getNewActivities(){
            const params = { orderExpiryDate_gte: this.yesterday }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        // 只取未違規且結束日期(endDate)大於等於今天，更新貼文日期由新到舊
        getHotActivities(){
            const params = { endDate_gte: this.yesterday }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => {
                res.sort((a, b) => b.orders.length - a.orders.length);
                const sliceRes = res.slice(0, 3);
                return Promise.resolve(this.getHandleActivities(sliceRes));
            })
            .catch(err => Promise.reject(false));
        },
        // 只取未違規且報名截止日期(orderExpiryDate)大於等於今天，更新貼文日期由新到舊
        getAdActivities(){
            const params = { orderExpiryDate_gte: this.yesterday }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        // 只取未違規且結束日期大於等於今天，更新貼文日期由新到舊
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

            // 過濾掉結束日期小於今天
            if(searchKeys.indexOf("endDate")  === -1){ 
                params.endDate_gte = this.today; 
            }

            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        getActivity(activityId){
            return bacsRequest.get(`activities/${activityId}?_expand=user&_expand=location&_expand=certificateLevel&_expand=cylinderTotal&_embed=violations&_embed=orders`)
            .then(res => {
                return Promise.resolve({
                    ...res,
                    ...this.statusFormat(res)
                });
            })
            .catch(err => Promise.reject(false));
        },
        getAdLocations(){
            return bacsRequest.get("locations?isAD=true")
            .then(res => Promise.resolve(getRandom(res, 12)))
            .catch(err => Promise.reject(false));
        },
        // 統一處理 api Activities 原始資料；過濾掉有違規紀錄的活動
        getHandleActivities(activities) {
            activities = activities.filter(item => !item.violations.length);
            return this.handleActivitiesStatus(activities);
        },
        handleActivitiesStatus(activities) {
            return activities.map(activity => {
                return {
                    ...activity,
                    ...this.statusFormat(activity)
                };
            });
        },
        /**
         * 活動按鈕顯示文字
         * 
         * @param activityStatus：Number - 活動狀態
         * @param orderStatus：Number - 報名狀態
         * @returns String
         */
        getActivityBtnText(activityStatus, orderStatus) {
            let text = "立即報名";
            if(orderStatus !== 2) {
                if(activityStatus === 0) {
                    text = "系統中止";
                } else {
                    if(activityStatus === 2 || activityStatus === 3) {
                        text = `活動${activityStatus === 2 ? "進行" : "結束"}`;
                    } else if (orderStatus === 1 || orderStatus === 3) {
                        text = `報名${orderStatus === 1 ? "額滿" : "截止"}`;
                    } else if (orderStatus === 4) {
                        text = `已報名`;
                    }
                }
            }

            return text;
        }
    }
});
