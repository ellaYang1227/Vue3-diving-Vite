import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("OtherStore", {
    state: () => ({
        initComments: [],
        comments: {}
    }),
    getters: {},
    actions: {
        getComments(){
            return bacsRequest.get(`comments`)
            .then(res => {
                this.initComments = res;
                this.comments = res.reduce((accumulator, currentValue) => {
                    const { userId } = currentValue;
                    const key = `userId_${userId}`;
                    if(!accumulator[key]){
                        accumulator[key] = {
                            data: [],
                            totalScore: 0
                        };
                    }

                    let { data } = accumulator[key];
                    data.push(currentValue);
                    accumulator[key].totalScore += currentValue.score;
                    accumulator[key].averageScore = accumulator[key].totalScore / data.length;
    
                    return accumulator;
                }, {});

                return Promise.resolve(this.comments);
            })
            .catch(err => Promise.reject(false));
        },
        getSingleUserComments(userId){
            const params = { userId }
            return bacsRequest.get(`comments`, { params })
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(false));
        },
        setScore(activitys){
            return activitys.map(activity => {
                const comments = this.comments[`userId_${activity.userId}`];
                activity.score = comments ? comments.averageScore : 0;
                return activity;
            });
        }
    }
});
