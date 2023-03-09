import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getTimestamp } from "../data/utilitieFunctions.js";
import dateFormat from "../handle-formats/dateFormat.js";
import router from "../router/index.js";
import ActivityStore from "./ActivityStore.js";
import AuthStore from "./AuthStore.js";
const { changeCookie, getStorageUser, setStorageUser } = AuthStore();
const { handleActivitiesStatus, getSearchActivitiesForActivityId } = ActivityStore();

export default defineStore("MemberStore", {
    state: () => ({
        myFirstThreeOrders: [],
        myOrders: [],
        myinfo: {},
        myComments: {},
        myActivities: []
    }),
    getters: {},
    actions: {
        login(user, returnUrl) {
            return bacsRequest
                .post("login", user)
                .then(({ accessToken, user }) => {
                    changeCookie("add", accessToken, user);
                    this.getMyOrders(3);

                    if(!returnUrl){
                        const { identityId } = user;
                        returnUrl = identityId === "0" ? "/admin/index" : "/index"
                    }
                    router.push(returnUrl);
                    return Promise.resolve(true);
                })
                .catch(({ data }) => {
                    if (data === "Cannot find user") {
                        data = "找不到用戶";
                    } else if (data === "Incorrect password") {
                        data = "密碼錯誤";
                    }

                    setSwalFire("popup", "error", "登入失敗", data);
                    return false;
                });
        },
        signup(user, returnUrl) {
            user.creationDate = getTimestamp(new Date());
            // "0"：管理者、"1"：一般(預設)
            user.identityId = "1";
            return bacsRequest
                .post("signup", user)
                .then(({ accessToken, user }) => {
                    changeCookie("add", accessToken, user);

                    if(!returnUrl){
                        const { identityId } = user;
                        returnUrl = identityId === "0" ? "/admin/index" : "/index"
                    }
                    router.push(returnUrl);
                    return Promise.resolve(true);
                })
                .catch(({ data }) => {
                    if (data === "Email already exists") {
                        data = "Email 信箱已註冊";
                    }

                    setSwalFire("popup", "error", "註冊失敗", data);
                    return false;
                });
        },
        getMyinfo() {
            const paramsArr = [
                "_expand=certificateLevel",
                "_expand=cylinderTotal",
                "_embed=violations",
                //"_embed=orders",
                "_embed=comments",
                //"_embed=activities"
                //"_embed=messages"
            ];

            return bacsRequest
                .get(`600/users/${getStorageUser()?.id}?${paramsArr.join('&')}`)
                .then(res => {
                    this.myinfo = res;
                    return Promise.resolve(res);
                })
                .catch(err => Promise.reject(false));

        },
        updateMyinfo(body) {
            delete body.email;
            delete body.password;
            return bacsRequest
            .patch(`600/users/${getStorageUser()?.id}`, body)
            .then(user => {
                setStorageUser(user);
                this.getMyinfo().then(res => setSwalFire("toast", "success", `更新成功`));
                return Promise.resolve(true);
            })
            .catch(({ status }) => {
                if(status !== 401){
                    setSwalFire("toast", "error", `更新失敗`);
                }

                return false;
            });
        },
        getMyOrders(count) {
            const paramsArr = [
                "_sort=creationDate",
                "_order=desc"
            ];
            
            if(count) { 
                paramsArr.push("_expand=activity");
            }

            return bacsRequest.get(`400/users/${getStorageUser()?.id}/orders?${paramsArr.join('&')}`)
                .then(orders => {
                    // navber：我的報名，結束時間大於等於今天
                    if(count) { 
                        const filterOrders = orders.filter(order => order.activity.endDate >= dateFormat(new Date(), ["data"], "-"));
                        this.myFirstThreeOrders = filterOrders.slice(0, count);
                    } 
                    
                    // member用：我的報名
                    const activityIds = orders.reduce((accumulator, currentValue) => {
                        accumulator.push(`id=${currentValue.activityId}`);
                        return accumulator;
                    }, []);
                    
                    return getSearchActivitiesForActivityId(activityIds).then(activities => {
                        activities = handleActivitiesStatus(activities);
                        this.myOrders = orders.map(order => {
                            const activity = activities.find(activity => {
                                if(order.activityId == activity.id) {
                                    const comment = activity.comments.find(comment => comment.userId == getStorageUser()?.id);
                                    activity.comment = comment;
                                    return activity;
                                }

                            });
                            
                            return {
                                ...order,
                                activity
                            };
                        });

                        return Promise.resolve(this.myOrders);
                    });
                    
                })
                .catch(err => Promise.reject(false));

        },
        updateActivity(body) {
            body.updateDate = getTimestamp(new Date());
            let apiMethod = 'post';
            let apiUrl = `660/users/${getStorageUser()?.id}/activities`;
            if(body.id){
                apiMethod = 'patch';
                apiUrl = `600/activities/${body.id}`;
            }
            
            const title = `${body.id ? '編輯': '新增'}活動`;

            return bacsRequest
                [apiMethod](apiUrl, body)
                .then(res => {
                    setSwalFire("toast", "success", `${title}成功`).then(() => {
                        router.push('/member/myActivity');
                    });
                    
                    return Promise.resolve(true);
                })
                .catch(({status}) => {
                    if(status !== 401){
                        setSwalFire("toast", "error", `${title}失敗`);
                    }

                    return false;
                });
        },
        getActivity(activityId) {
            return bacsRequest
                .get(`600/activities/${activityId}`)
                .then(res => Promise.resolve(res))
                .catch(err => Promise.reject(false));
        },
        getMyActivities() {
            const paramsArr = [
                "_sort=updateDate",
                "_order=desc",
                //"_expand=user",
                "_expand=location",
                //"_expand=certificateLevel",
                //"_expand=cylinderTotal",
                "_embed=violations",
                "_embed=orders"
            ];
            
            return bacsRequest.get(`600/users/${getStorageUser()?.id}/activities?${paramsArr.join('&')}`)
            .then(res => {
                this.myActivities = handleActivitiesStatus(res);
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(false));
        },
        addComment(body) {
            body.creationDate = getTimestamp(new Date());
            const title = '新增評論';
            return bacsRequest
                .post(`660/users/${getStorageUser()?.id}/comments`, body)
                .then(res => {
                    this.getMyOrders();
                    setSwalFire("toast", "success", `${title}成功`);
                    return Promise.resolve(true);
                })
                .catch(({status}) => {
                    if(status !== 401){
                        setSwalFire("toast", "error", `${title}失敗`);
                    }

                    return false;
                });
        },
        // getMyComments() {
        //     const paramsArr = [
        //         "_sort=creationDate",
        //         "_order=desc",
        //         "_expand=activities",
        //         "_expand=users",
        //     ];
            
        //     return bacsRequest.get(`600/users/${getStorageUser()?.id}/comments?${paramsArr.join('&')}`)
        //     .then(res => {
        //         console.log(res)
        //         return Promise.resolve(res);
        //     })
        //     .catch(err => Promise.reject(false));
        // },
    }
});
