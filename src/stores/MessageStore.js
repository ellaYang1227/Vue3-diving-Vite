import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("MessageStore", {
    state: () => ({
        basicParams: "?_sort=updateDate&_order=desc&_expand=user"
    }),
    getters: {},
    actions: {
        getMessages(activityId) {
            const params = { 
                // _sort: "updateDate",
                // _order: "desc",
                // _embed: "messageReplys",
                _expand: "activity",
                activityId
            };
            
            return bacsRequest.get(`messages${this.basicParams}`, { params })
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        getMessageReplys(messageId) {
            const params = { messageId };
            return bacsRequest.get(`MessageReplys${this.basicParams}`, { params })
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        }
    }
});