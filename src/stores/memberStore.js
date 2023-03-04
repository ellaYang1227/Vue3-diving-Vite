import { defineStore } from "pinia";
import AuthStore from "./AuthStore.js";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getTimestamp } from "../data/utilitieFunctions.js";
import statusFormat from "../handle-formats/statusFormat.js";
import router from "../router/index.js";
import axios from "axios";
const { changeCookie, getStorageUser } = AuthStore();
const user = getStorageUser();

export default defineStore("MemberStore", {
    state: () => ({
        statusFormat,
        mySignUp: []
    }),
    getters: {},
    actions: {
        // startDate 由新到舊
        getMySignUp(count) {
            axios.get("/jsons/my-sign-up.json").then(res => {
                this.mySignUp = res.data;
                //     .sort((a, b) => (a.startDate > b.startDate ? 1 : -1))
                //     .map(item => {
                //         return {
                //             ...item,
                //             ...this.statusFormat(item)
                //         };
                //     })
                //     .filter(item => item.activityStatus === "未開始" || item.activityStatus === "進行中");
                if (count) {
                    this.mySignUp = this.mySignUp.slice(0, count);
                }
            });
        },
        login(user, returnUrl) {
            console.log(returnUrl)
            return bacsRequest
                .post("login", user)
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
        getMyinfo(userId){
            return bacsRequest
                .get(`600/users/${userId}`)
                .then(res => Promise.resolve(res))
                .catch(err => Promise.reject(false));

        },
        updateActivity(body){
            body.updateDate = getTimestamp(new Date());
            let apiMethod = 'post';
            let apiUrl = `660/users/${user.id}/activities`;
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
        getActivity(activityId){
            return bacsRequest
                .get(`600/activities/${activityId}`)
                .then(res => Promise.resolve(res))
                .catch(err => Promise.reject(false));
        }
    }
});
