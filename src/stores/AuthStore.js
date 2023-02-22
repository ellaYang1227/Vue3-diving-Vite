import { defineStore } from "pinia";
import router from "../router/index.js";

export default defineStore("AuthStore", {
    state: () => ({
        user: null
    }),
    getters: {
        // user() {
        //     const encryptUser = localStorage.getItem("user");
        //     return encryptUser ? this.handleCrypt("decrypt", localStorage.getItem("user")) : null;
        // }
    },
    actions: {
        // getUser() {
        //     const encryptUser = localStorage.getItem("user");
            
        //     console.log(encryptUser)
        //     return encryptUser ? this.handleCrypt("decrypt", localStorage.getItem("user")) : null;
        // },
        logout() {
            console.log("logout");
            this.changeCookie("remove");
            router.push("/login");
        },
        getCookie() {
            return document.cookie.replace(/(?:(?:^|.*;\s*)ella-diving-token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        },
        changeCookie(method, token, user) {
            let cookie = `access-token=${token};`;

            if (method === "remove") {
                cookie += "max-age=0";
                localStorage.removeItem("user");
                this.$patch({ user: null });
            } else if (method === "add") {
                const { exp } = this.handleCrypt("decrypt", token, "token");
                cookie += `${new Date(exp)}`;

                const encryptUser = this.handleCrypt("encrypt", user);
                localStorage.setItem("user", encryptUser);
                this.$patch({ user });
            }

            document.cookie = cookie;
            
        },
        handleCrypt(type, data, decryptData) {
            console.log(type, data);
            if (type === "encrypt") {
                // 加密
                return window.btoa(JSON.stringify(data));
            } else if (type === "decrypt") {
                // 解密
                if (decryptData === "token") {
                    data = data.split(".")[1];
                }

                return JSON.parse(window.atob(data));
            }
        }
    }
});
