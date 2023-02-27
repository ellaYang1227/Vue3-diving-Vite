import { defineStore } from "pinia";
import AuthStore from "../stores/AuthStore.js";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import router from "../router/index.js";
import statusFormat from "../handle-formats/statusFormat.js";
const { user } = AuthStore();

export default defineStore("ActivityStore", {
    state: () => ({
        statusFormat,
        // activitys: [],
        // locations: [],
        activitys: []
    }),
    getters: {
        // 揪團進行中
        newActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.groupStatus === "進行中");
            return filter.slice(0, 3);
        },
        // 不包含活動已結束(亂數處理)
        hotActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.activityStatus !== "已結束");
            return filter.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 3);
        },
        adActivitys: ({ activitys }) => {
            const filter = activitys.filter(activity => activity.activityStatus !== "已結束" && activity.orderStatus !== "已額滿");
            return filter.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 2);
        }
    },
    actions: {
        // 只取已啟用且未違規，更新貼文日期由新到舊
        // getActivitys() {
        //     bacsRequest.get("/activitys.json").then(res => {
        //         this.activitys = res
        //             .reverse()
        //             .filter(item => item.isEnable && !item.isViolation)
        //             .map(item => {
        //                 return {
        //                     ...item,
        //                     ...this.statusFormat(item)
        //                 };
        //             });
        //     });
        // },
        getLocations() {
            bacsRequest.get("/locations.json").then(res => {
                this.locations = res;
            });
        },
        // 只取已啟用且未違規，更新貼文日期由新到舊
        getActivitys(search, sort){
            console.log('search', search, 'sort', sort)
            const params = Object.keys(search).reduce((accumulator, currentKey) => {
                console.log(accumulator, currentKey)
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

            console.log(params)
            
            return bacsRequest.get(`activitys?_sort=${this.sort}&_order=desc&_expand=user&_expand=location&_embed=violations`, { params })
            .then(res => {
                console.log(res)
                // 過濾掉有違規紀錄的活動
                res = res.filter(item => !item.violations.length);
                this.activitys = this.handleActivityStatus(res);
                console.log(this.activitys)
                return Promise.resolve(this.activitys);
            })
            .catch(err => Promise.reject(false));
        },
        getAdLocations(){
            return bacsRequest.get("locations?isAD=true")
            .then(res => {
                // 亂數處理
                res =  res.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 12);
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(false));
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
