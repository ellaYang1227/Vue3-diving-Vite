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
        /**
         * 登入
         * 
         * @param user Object：使用者輸入的資料，Email、密碼
         * @param returnUrl String：登入後，指定跳轉的路徑
         */
        login(user, returnUrl) {
            return bacsRequest
                .post("login", user)
                .then(({ accessToken, user }) => {
                    changeCookie("add", accessToken, user);
                    this.getMyOrders(3);

                    // if(!returnUrl){
                    //     const { identityId } = user;
                    //     returnUrl = identityId === "0" ? "/admin/index" : "/index"
                    // }
                    router.push("/index");
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
        /**
         * 註冊
         * 
         * @param user Object：使用者輸入的資料
         * @param returnUrl String：登入後，指定跳轉的路徑
         */
        signup(user, returnUrl) {
            user.creationDate = getTimestamp(new Date());
            // "0"：管理者、"1"：一般(預設)
            user.identityId = "1";
            return bacsRequest
                .post("signup", user)
                .then(({ accessToken, user }) => {
                    changeCookie("add", accessToken, user);

                    // if(!returnUrl){
                    //     const { identityId } = user;
                    //     returnUrl = identityId === "0" ? "/admin/index" : "/index"
                    // }
                    router.push("/index");
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
        /**
         * 我的個人資訊
         * 
         */
        getMyinfo() {
            const paramsArr = [
                "_expand=certificateLevel",
                "_expand=cylinderTotal",
                "_embed=violations",
                "_embed=comments"
            ];

            return bacsRequest
                .get(`600/users/${getStorageUser()?.id}?${paramsArr.join('&')}`)
                .then(res => {
                    this.myinfo = res;
                    return Promise.resolve(res);
                })
                .catch(err => Promise.reject(false));

        },
        /**
         * 更新個人資訊
         * 
         * @param body Object 要更新的個人資訊
         */
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
        /**
         * 我的訂單 更新時間降序
         * 
         */
        getMyOrders(count) {
            const paramsArr = [
                "_sort=updateDate",
                "_order=desc",
                "isDelete=0",
                "_expand=activity"
            ];

            return bacsRequest.get(`400/users/${getStorageUser()?.id}/orders?${paramsArr.join('&')}`)
                .then(orders => {
                    // 過濾活動已刪除
                    orders = orders.filter(order => !order.activity.isDelete);
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
        /**
         * 我的單一活動
         * 
         * @param activityId String | Number 取得活動的活動 id
         */
        getActivity(activityId) {
            return bacsRequest
                .get(`600/activities/${activityId}`)
                .then(res => Promise.resolve(res))
                .catch(err => Promise.reject(false));
        },
        
        updateActivity(body) {
            body.updateDate = getTimestamp(new Date());
            let apiMethod = "post";
            let apiUrl = `660/users/${getStorageUser()?.id}/activities`;
            if(!body.id) {
                // 避免之後刪除活動時 會刪除掉該活動(json-server 刪除 bug)
                body.isDelete = 0;
            } else {
                apiMethod = "patch";
                apiUrl = `600/activities/${body.id}`;
            }
            
            const title = `${body.id ? '編輯': '新增'}活動`;

            return bacsRequest
                [apiMethod](apiUrl, body)
                .then(res => {
                    setSwalFire("toast", "success", `${title}成功`).then(() => {
                        router.push('/member/myActivities');
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
        // 解決 json-server 刪除 bug：使用 patch(非 delete) & isDelete 避免刪除揪團時 會刪掉其他活動
        /**
         * 刪除單一活動
         * 
         * @param activityId String | Number 刪除活動的活動 id
         */
        delActivity(activityId) {
            const title = `刪除揪團`;
            return bacsRequest
                .patch(`600/activities/${activityId}`, { isDelete: 1 })
                .then(res => {
                    setSwalFire("toast", "success", `${title}成功`);
                    this.getMyActivities();
                    return Promise.resolve(true);
                })
                .catch(({status}) => {
                    if(status !== 401){
                        setSwalFire("toast", "error", `${title}失敗`);
                    }

                    return false;
                });
        },
        /**
         * 我的活動列表
         * 
         */
        getMyActivities() {
            const paramsArr = [
                "_sort=updateDate",
                "_order=desc",
                "_expand=location",
                "_embed=violations",
                "_embed=orders",
                "isDelete=0"
            ];
            
            return bacsRequest.get(`600/users/${getStorageUser()?.id}/activities?${paramsArr.join('&')}`)
            .then(res => {
                this.myActivities = handleActivitiesStatus(res);
                return Promise.resolve(res);
            })
            .catch(err => Promise.reject(false));
        },
        /**
         * 新增評論
         * 
         * @param body Object 要新增的內容
         */
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
        /**
         * 取得單筆違規
         * 
         * @param violationId Number | String 違規 id
         */
         getViolation(violationId) {
            return bacsRequest
                .get(`440/violations/${violationId}?_expand=activity`)
                .then(res => {
                    this.myinfo = res;
                    return Promise.resolve(res);
                })
                .catch(err => Promise.reject(false));
        }
    }
});
