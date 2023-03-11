import axios from "axios";
import { setSwalFire } from "../data/sweetalert2.js";
import router from "../router/index.js";
import AuthStore from "../stores/AuthStore.js";
import LoadingStore from "../stores/LoadingStore.js";
const { hideLoading } = LoadingStore();
const { getToken, logout } = AuthStore();

const { BASE_URL, VITE_API_ROOT } = import.meta.env;
const baseJsonURL = `${BASE_URL}jsons`;
const baseURL = `${VITE_API_ROOT}`;

// 創建 axios 實例
const bacsRequest = axios.create({
    //baseURL: baseJsonURL
    baseURL
});

// 請求攔截
bacsRequest.interceptors.request.use(
    request => {
        request.headers['Authorization'] = `Bearer ${getToken()}`;
        return request;
    },
    error => {
        console.dir(error);
        setSwalFire("popup", "error", "系統錯誤", error.request);
        return Promise.reject({
            success: false,
            ...error.request
        });
    }
);

// 攔截 API response 的回傳
bacsRequest.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        console.dir(error);
        hideLoading();
        const { status, statusText } = error.response;

        if (status !== 400) {
            let title = "系統錯誤";
            let errorMsg = "";
            let isRedirectLogin = false;
            let isBackPage = false;

            if (status === 404) {
                errorMsg = "找不到該筆資料";
                isBackPage = true;
            } else if (status === 401){
                title = "驗證失敗";
                errorMsg = "您的身分驗證失敗，請重新登入";
                isRedirectLogin = true;
            } else {
                errorMsg = "發生不明錯誤，請重新操作";
            }

            setSwalFire("popup", "error", title, errorMsg).then(() => {
                if (isRedirectLogin) {
                    logout();
                }else if(isBackPage){
                    router.go(-1);
                }
            });
        }

        console.error(status);
        return Promise.reject({
            success: false,
            ...error.response
        });
    }
);

export { baseJsonURL, baseURL, bacsRequest };

