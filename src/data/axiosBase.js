import axios from "axios";
import { setSwalFire } from "../data/sweetalert2.js";

const { BASE_URL, VITE_API_ROOT } = import.meta.env;
const baseJsonURL = `${BASE_URL}jsons`;
const baseURL = `${VITE_API_ROOT}jsons`;

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
        setSwalFire("popup", "error", "系統錯誤", error.response.data);
        return Promise.reject(error);
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
        let errorMsg = error.response.data;
        if (!errorMsg) {
            errorMsg = "發生不明錯誤，請重新操作";
        }
        setSwalFire("popup", "error", "系統錯誤", errorMsg);
        return Promise.reject(errorMsg);
    }
);

export { baseJsonURL, baseURL, bacsRequest };
