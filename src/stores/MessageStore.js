import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";
import { setSwalFire } from "../data/sweetalert2.js";
import { getTimestamp } from "../data/utilitieFunctions.js";
import AuthStore from "./AuthStore.js";
import LoadingStore from "./LoadingStore.js";
const { getStorageUser } = AuthStore();
const { hideLoading } = LoadingStore();

export default defineStore("MessageStore", {
    state: () => ({
        basicParams: "?_expand=user",
        messages: ""
    }),
    getters: {},
    actions: {
        /**
         * 取得指定活動的留言
         * 
         * @param activityId Number | String 活動 id
         */
        getMessages(activityId) {
            const params = {
                _sort: "updateDate",
                _order: "desc",
                _expand: "activity",
                activityId
            };
            
            return bacsRequest.get(`messages${this.basicParams}`, { params })
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        /**
         * 取得指定留言的回覆
         * 
         * @param messageId Number | String 留言 id
         */
        getMessageReplys(messageId) {
            const params = { messageId };
            return bacsRequest.get(`MessageReplys${this.basicParams}`, { params })
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        /**
         * 取得指定活動的完整留言(含回覆)
         * 
         * @param activityId Number | String 活動 id
         */
        getMessagesfull(activityId) {
            this.getMessages(activityId).then(res => {
                const apiIds = res.reduce((accumulator, currentValue) => {
                    const { id } = currentValue;
                    accumulator.push(this.getMessageReplys(id));
                    return accumulator;
                }, []);

                Promise.all(apiIds).then(resArr => {
                    this.messages = res.map((message, index) => {
                        return {
                            ...message,
                            messageReplys: resArr[index]
                        };
                    });
                });

                hideLoading();
            });
        },
        updateMessages(activityId, content, messagesId) {
            const title = `${messagesId ? '修改' : '新增'}留言`;
            const method = messagesId ? 'patch' : 'post';
            let apiUrl = `660/activities/${activityId}/messages`;
            if(messagesId){
                apiUrl = `660/messages/${messagesId}`;
            }

            const body = { 
                content,
                updateDate: getTimestamp(new Date()),
                userId: getStorageUser()?.id
            };

            return bacsRequest[method](apiUrl, body)
            .then(res => {
                setSwalFire("toast", "success", `${title}成功`);
                this.getMessagesfull(activityId);
                return Promise.resolve(true);
            })
            .catch(({status}) => {
                if(status !== 401){
                    setSwalFire("toast", "error", `${title}失敗`);
                }

                return Promise.resolve(false);
            });
        },
        updateMessageReplys(activityId, messagesId, content, messageReplysId) {
            const title = `${messageReplysId ? '修改' : '新增'}回覆`;
            const method = messageReplysId ? 'patch' : 'post';
            let apiUrl = `660/messages/${messagesId}/messageReplys`;
            if(messageReplysId){
                apiUrl = `660/messageReplys/${messageReplysId}`;
            }

            const body = { 
                content,
                updateDate: getTimestamp(new Date()),
                userId: getStorageUser()?.id
            };

            return bacsRequest[method](apiUrl, body)
            .then(res => {
                setSwalFire("toast", "success", `${title}成功`);
                this.getMessagesfull(activityId);
                return Promise.resolve(true);
            })
            .catch(({status}) => {
                if(status !== 401){
                    setSwalFire("toast", "error", `${title}失敗`);
                }

                return Promise.resolve(false);
            });
        },
    }
});