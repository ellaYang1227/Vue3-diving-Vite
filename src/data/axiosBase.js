import axios from "axios";
import { setSwalFire } from "../data/sweetalert2.js";
import LoadingStore from "../stores/LoadingStore.js";
import router from "../router/index.js";
const { hideLoading } = LoadingStore();

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
        // API 送出前可以做最後的處理
        //request.headers['Authorization'] = '你的任何想塞進去的東西';
        return request;
    },
    error => {
        // 如果送出前失敗了，這邊就可以做一些處理
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
        // 這邊可以對回來的資料先進行驗證處理，再來決定要不要把資料給吐出去
        return Promise.resolve(response.data);
    },
    error => {
        // 這邊當 API 發生錯誤的時候就可以處理 Error handling
        console.dir(error);
        hideLoading();
        const { status, statusText } = error.response;

        if (status !== 400) {
            let title = "系統錯誤";
            let errorMsg = "";
            let redirectUrl = "";

            if (status === 404) {
                title = "請求失敗";
                errorMsg = "API 路徑錯誤";
            } else {
                errorMsg = "發生不明錯誤，請重新操作";
            }

            setSwalFire("popup", "error", title, errorMsg).then(() => {
                if (redirectUrl) {
                    router.push(redirectUrl);
                }
            });
        }

        console.log(error.response.status);
        return Promise.reject({
            success: false,
            ...error.response
        });
    }
);

export { baseJsonURL, baseURL, bacsRequest };
