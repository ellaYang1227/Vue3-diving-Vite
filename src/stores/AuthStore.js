import { defineStore } from "pinia";
import router from "../router/index.js";

export default defineStore("AuthStore", {
    state: () => ({
        user: null
    }),
    getters: {},
    actions: {
        getStorageUser() {
            const encryptUser = localStorage.getItem("user");
            this.user = encryptUser ? this.handleCrypt("decrypt", "user", encryptUser) : null;
            return this.user;
        },
        logout() {
            this.changeCookie("remove");
            router.push("/login");
        },
        getToken() {
            return document.cookie.replace(/(?:(?:^|.*;\s*)access-token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        },
        changeCookie(method, token, user) {
            console.log(method)
            let cookie = `access-token=${token};`;

            if (method === "remove") {
                console.log(method)
                cookie += "max-age=0";
                localStorage.removeItem("user");
                this.user = null;
            } else if (method === "add") {
                console.log(method)
                const { exp } = this.handleCrypt("decrypt", "token", token);
                cookie += `${new Date(exp)}`;
                console.log(exp)
                console.log(user)
                const encryptUser = this.handleCrypt("encrypt", "user", user);
                console.log(encryptUser)
                localStorage.setItem("user", encryptUser);
                this.user = user;
            }

            console.log(this.user)
            document.cookie = cookie;
            
        },
        handleCrypt(type, decryptData, data) {
            console.log(data)
            if (type === "encrypt") {
                console.log(type)
                // 加密
                console.log(window.btoa(encodeURIComponent(JSON.stringify(data))))
                // encodeURIComponent()：unicode(中文)轉 base64(避免報錯)
                return window.btoa(encodeURIComponent(JSON.stringify(data)));
            } else if (type === "decrypt") {
                console.log(type)
                // 解密
                let decryptRes = '';
                if (decryptData === "token") {
                    decryptRes = window.atob(data);
                }else if(decryptData === "user"){
                    decryptRes = decodeURIComponent(window.atob(data))
                }

                console.log(decryptRes)
                return JSON.parse(decryptRes);
            }
        },
    }
});
