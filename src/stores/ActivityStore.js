import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { getRandom, getTimestamp } from "../data/utilitieFunctions.js";
import dateFormat from "../handle-formats/dateFormat.js";
import statusFormat from "../handle-formats/statusFormat.js";

export default defineStore("ActivityStore", {
    state: () => ({
        //statusFormat,
        activitiesParamsArr: [
            "_sort=updateDate",
            "_order=desc",
            "_expand=user",
            "_expand=location",
            "_expand=certificateLevel",
            "_expand=cylinderTotal",
            "_embed=violations",
            "_embed=orders"
        ]
    }),
    getters: {
        yesterday: () => {
            const yesterday = getTimestamp(new Date()) - 24 * 60 * 60 * 1000;
            return dateFormat(yesterday, "date", "-");
        },
        today: () => {
            return dateFormat(new Date(), "date", "-");
        },
        activitiesApiUrl: ({activitiesParamsArr}) => {
            return `activities?${activitiesParamsArr.join('&')}`;
        }
    },
    actions: {
        // 只取未違規且報名截止日期(orderExpiryDate)大於等於今天，更新貼文日期由新到舊
        getNewActivities(){
            const params = { orderExpiryDate_gte: this.today }
            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
        // 只取未違規且結束日期(endDate)大於等於今天，更新貼文日期由新到舊
        getHotActivities(){
            const params = { endDate_gte: this.today }
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
            const params = { orderExpiryDate_gte: this.today }
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

            // 結束日期大於等於今天(這裡)
            if(searchKeys.indexOf("endDate")  === -1){ 
                params.endDate_gte = this.today; 
            }

            return bacsRequest.get(`${this.activitiesApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivities(res)))
            .catch(err => Promise.reject(false));
        },
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
                res.orders = res.orders.filter(order => !order.isDelete);
                return Promise.resolve({
                    ...res,
                    ...statusFormat(res)
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
