import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
const { VITE_HEXSCHOOL_API_URL, VITE_HEXSCHOOL_API_PATH } = import.meta.env;

export default defineStore("HexschoolUploadStore", {
    state: () => ({
        hexschoolToken: "",
        file: {}
    }),
    getters: {},
    actions: {
        uploadImg(file) {
            this.file = file;
            bacsRequest.defaults.baseURL = VITE_HEXSCHOOL_API_URL;

            if (!this.hexschoolToken) {
                return this.signin();
            } else {
                return this.uploadImgAPI();
            }
        },
        signin() {
            const user = {};

            return bacsRequest
                .post(`/admin/signin`, user)
                .then(res => {
                    console.log(res);
                    this.hexschoolToken = res.token;
                    this.uploadImgAPI();
                })
                .catch(error => {
                    console.dir(error);
                    console.error(error.message);
                    return false;
                });
        },
        uploadImgAPI() {
            const formData = new FormData();
            formData.append("file-to-upload", this.file);
            bacsRequest.defaults.headers.common["Authorization"] = this.hexschoolToken;
            bacsRequest
                .post(`/api/${VITE_HEXSCHOOL_API_PATH}/admin/upload`, formData)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(error => {
                    console.dir(error);
                    console.error(error.message);
                    return false;
                });
        }
    }
});
