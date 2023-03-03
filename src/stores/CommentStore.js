import { defineStore } from "pinia";
import { bacsRequest } from "../data/axiosBase.js";

export default defineStore("CommentStore", {
    state: () => ({
        initComments: [],
        comments: []
    }),
    getters: {},
    actions: {
        getComments(){
            const params = { 
                _sort: "score",
                _order: "desc"
            };

            return bacsRequest.get(`comments?_expand=activity&_expand=user`, { params })
            .then(res => {
                this.initComments = res;
                this.comments = res.reduce((accumulator, currentValue) => {
                    const { score } = currentValue;
                    const { userId } = currentValue.activity;
                    const findComment = accumulator.find(item => item.userId === userId);

                    if(!findComment){
                        const data = [];
                        data.push(currentValue);
                        accumulator.push({
                            userId,
                            data,
                            totalScore: score,
                            averageScore: score,
                        });
                    }else{
                        findComment.data.push(currentValue);
                        findComment.totalScore += score;
                        findComment.averageScore = findComment.totalScore / findComment.data.length;
                    }
    
                    return accumulator;
                }, []);

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
        setScore(activities){
            return activities.map(activity => {
                const findComment = this.comments.find(item => item.userId == activity.userId);
                activity.score = findComment ? findComment.averageScore : 0;
                return activity;
            });
        }
    }
});