import axios from "axios";

const baseJsonURL = `${import.meta.env.BASE_URL}jsons`;
// 創建 axios 實例
const bacsRequest = axios.create({
    baseURL: baseJsonURL
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
        return Promise.reject(error.response.data);
    }
);

export { baseJsonURL, bacsRequest };
