import { defineStore } from "pinia";
import AuthStore from "../stores/AuthStore.js";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getRandom, getDateParse } from "../data/utilitieFunctions.js";
import router from "../router/index.js";
import statusFormat from "../handle-formats/statusFormat.js";
import dateFormat from "../handle-formats/dateFormat.js";
const { user } = AuthStore();

export default defineStore("ActivityStore", {
    state: () => ({
        statusFormat,
        activitysApiUrl: "activitys?_sort=updateDate&_order=desc&_expand=user&_expand=location&_expand=certificateLevel&_embed=violations&_embed=orders"
        // activitys: [],
        // locations: [],
        //activitys: []
    }),
    getters: {
        // 揪團進行中
        newActivitys: ({ activitys }) => {
            return []
            // const filter = activitys.filter(activity => activity.groupStatus === "進行中");
            // return filter.slice(0, 3);
        },
        // 不包含活動已結束(亂數處理)
        hotActivitys: ({ activitys }) => {
            return []
            // const filter = activitys.filter(activity => activity.activityStatus !== "已結束");
            // return filter.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 3);
        },
        yesterday: () => {
            const yesterday = getDateParse(new Date()) - 24 * 60 * 60 * 1000;
            return dateFormat(yesterday, "date", "-");
        },
    },
    actions: {
        getNewActivitys(){
            const params = { 
                orderExpiryDate_gte: this.yesterday,
                _start: 0,
                _end: 3 
            }
            return bacsRequest.get(`${this.activitysApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivitys(res)))
            .catch(err => Promise.reject(false));
        },
        getHotActivitys(){
            const params = { orderExpiryDate_gte: this.yesterday }
            return bacsRequest.get(`${this.activitysApiUrl}`, { params })
            .then(res => {
                res.sort((a, b) => a.orders.length - b.orders.length);
                const sliceRes = res.slice(0, 3);
                return Promise.resolve(this.getHandleActivitys(sliceRes));
            })
            .catch(err => Promise.reject(false));
        },
        // 只取未違規且報名截止日期(orderExpiryDate)大於等於今天，更新貼文日期由新到舊
        getAdActivitys(){
            const params = { orderExpiryDate_gte: this.yesterday }
            return bacsRequest.get(`${this.activitysApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivitys(res)))
            .catch(err => Promise.reject(false));
        },
        // 只取未違規且結束日期大於等於今天，更新貼文日期由新到舊
        getActivitys(search){
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
                params.endDate_gte = this.yesterday 
            }

            return bacsRequest.get(`${this.activitysApiUrl}`, { params })
            .then(res => Promise.resolve(this.getHandleActivitys(res)))
            .catch(err => Promise.reject(false));
        },
        getAdLocations(){
            return bacsRequest.get("locations?isAD=true")
            .then(res => Promise.resolve(getRandom(res, 12)))
            .catch(err => Promise.reject(false));
        },
        // 統一處理 api Activitys 原始資料；過濾掉有違規紀錄的活動
        getHandleActivitys(activitys) {
            activitys = activitys.filter(item => !item.violations.length);
            return this.handleActivityStatus(activitys);
        },
        handleActivityStatus(activitys) {
            return activitys.map(activity => {
                return {
                    ...activity,
                    ...this.statusFormat(activity)
                };
            });
        }
    }
});
