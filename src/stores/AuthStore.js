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
            if(!this.user){
                this.changeCookie("remove");
            }
            
            return this.user;
        },
        logout() {
            this.changeCookie("remove");
            router.push({ 
                path: "/login",
                query: { returnUrl: location.hash.replace('#', '') }
            });
        },
        getToken() {
            return document.cookie.replace(/(?:(?:^|.*;\s*)access-token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        },
        changeCookie(method, token, user) {
            let cookie = `access-token=${token};`;

            if (method === "remove") {
                cookie += "max-age=0";
                localStorage.removeItem("user");
                this.user = null;
            } else if (method === "add") {
                const { exp } = this.handleCrypt("decrypt", "token", token);
                cookie += `${new Date(exp)}`;
                this.setStorageUser(user);
            }

            document.cookie = cookie;
        },
        setStorageUser(user) {
            const encryptUser = this.handleCrypt("encrypt", "user", user);
            localStorage.setItem("user", encryptUser);
            this.user = user;
        },
        handleCrypt(type, decryptData, data) {
            if (type === "encrypt") {
                // 加密
                if (decryptData !== "token") {
                    // encodeURIComponent()：unicode(中文)轉 base64(避免報錯)
                    data = window.btoa(encodeURIComponent(JSON.stringify(data)));
                }

                return data;
            } else if (type === "decrypt") {
                // 解密
                if (decryptData === "token") {
                    data = window.atob(data.split(".")[1]);
                } else {
                    // encodeURIComponent()：base64 轉 unicode(中文)
                    data = decodeURIComponent(window.atob(data));
                }

                return JSON.parse(data);
            }
        }
    }
});
