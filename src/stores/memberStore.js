import { defineStore } from "pinia";
import AuthStore from "./AuthStore.js";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import statusFormat from "../handle-formats/statusFormat.js";
import router from "../router/index.js";
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
            // bacsRequest.get("/my-sign-up.json").then(res => {
            //     this.mySignUp = res
            //         .sort((a, b) => (a.startDate > b.startDate ? 1 : -1))
            //         .map(item => {
            //             return {
            //                 ...item,
            //                 ...this.statusFormat(item)
            //             };
            //         })
            //         .filter(item => item.activityStatus === "未開始" || item.activityStatus === "進行中");
            //     if (count) {
            //         this.mySignUp = this.mySignUp.slice(0, count);
            //     }
            // });
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
            user.creationDate = new Date().getTime();
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
            body.updateDate = new Date().getTime();
            let apiMethod = 'post';
            let apiUrl = `664/users/${user.id}/activitys`;
            if(body.id){
                apiMethod = 'patch';
                apiUrl = `600/activitys/${body.id}`;
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
                .get(`600/activitys/${activityId}`)
                .then(res => Promise.resolve(res))
                .catch(err => Promise.reject(false));
        }
    }
});
