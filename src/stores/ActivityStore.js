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
        activitys: [],
        locations: []
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
        }
    },
    actions: {
        // 只取已啟用且未違規，更新貼文日期由新到舊
        getActivitys() {
            bacsRequest.get("/activitys.json").then(res => {
                this.activitys = res
                    .reverse()
                    .filter(item => item.isEnable && !item.isViolation)
                    .map(item => {
                        return {
                            ...item,
                            ...this.statusFormat(item)
                        };
                    });
            });
        },
        getLocations() {
            bacsRequest.get("/locations.json").then(res => {
                this.locations = res;
            });
        },
        getAdLocations(){
            return bacsRequest.get("locations?isAD=true")
            .then(res => {
                // 亂數處理
                res =  res.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 12);
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(false));
        }
        // addActivity(data){
        //     console.log(user.id)
        //     data.updateDate = new Date().getTime();
        //     console.log(data)
        //     return bacsRequest
        //         .post(`664/users/${user.id}/activitys`, data)
        //         .then(res => {
        //             setSwalFire("toast", "success", "新增活動成功").then(() => {
        //                 router.push('/member/myActivity');
        //             });
                    
        //             return Promise.resolve(true);
        //         })
        //         .catch(({status}) => {
        //             if(status !== 401){
        //                 setSwalFire("toast", "error", "新增活動失敗");
        //             }

        //             return false;
        //         });
        // },
        // getActivity(activityId){
        //     return bacsRequest
        //         .get(`600/users/${activityId}`)
        //         .then(res => Promise.resolve(res))
        //         .catch(err => Promise.reject(false));
        // }
    }
});
