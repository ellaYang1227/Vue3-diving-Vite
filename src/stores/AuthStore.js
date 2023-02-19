import { defineStore } from "pinia";
import router from "../router/index.js";
const { VITE_API_PATH } = import.meta.env;

export default defineStore("AuthStore", {
    state: () => ({
        // user: {
        //     name: "ella",
        //     img: "" ///ella.jpg
        // }
        user: null
    }),
    getters: {},
    actions: {
        // setToken(){
        //     document.cookie = `${path}-token=${token}; expires=${new Date(expired)}`;
        // }
        logout() {
            console.log("logout");
            this.removeToken();
            router.push("/login");
        },
        getToken() {
            return document.cookie.replace(/(?:(?:^|.*;\s*)ella-diving-token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        },
        removeToken() {
            document.cookie = `${VITE_API_PATH}-token=${this.getToken()}; max-age=0`;
            this.user = null;
        }
    }
});
