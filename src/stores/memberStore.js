import { defineStore } from "pinia";
import AuthStore from "../stores/AuthStore.js";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import statusFormat from "../handle-formats/statusFormat.js";
import router from "../router/index.js";
const { changeCookie } = AuthStore();

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
        signup(user) {
            console.log(user);
            user.creationDate = new Date().getTime();

            return bacsRequest
                .post("signup", user)
                .then(({ accessToken, user }) => {
                    changeCookie("add", accessToken, user);
                    router.push("/index");
                    return true;
                })
                .catch(({ data }) => {
                    if (data === "Email already exists") {
                        data = "Email 信箱已註冊";
                    }

                    setSwalFire("popup", "error", "註冊失敗", data);
                    return false;
                });
        }
    }
});
