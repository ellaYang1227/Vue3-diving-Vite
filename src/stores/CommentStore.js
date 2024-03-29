import { defineStore } from "pinia";
import { bacsRequest } from "@/data/axiosBase.js";

export default defineStore("CommentStore", {
  state: () => ({
    initComments: [],
    comments: []
  }),
  getters: {},
  actions: {
    /**
     * 取得所有評論
     *
     */
    getComments() {
      const paramsArr = ["_expand=activity", "_expand=user", "_sort=score", "_order=desc"];

      return bacsRequest
        .get(`comments?${paramsArr.join("&")}`)
        .then(res => {
          this.initComments = res;
          this.comments = res.reduce((accumulator, currentValue) => {
            const { score } = currentValue;
            const { userId } = currentValue.activity;
            const findComment = accumulator.find(item => item.userId == userId);

            if (!findComment) {
              const data = [];
              data.push(currentValue);
              accumulator.push({
                userId,
                data,
                totalScore: score,
                averageScore: score
              });
            } else {
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
    /**
     * 每筆活動加入評論分數
     *
     * @param activities Array：要處理的活動列表
     */
    setScore(activities) {
      return activities.map(activity => {
        const findComment = this.comments.find(item => item.userId == activity.userId);
        activity.score = findComment ? findComment.averageScore : 0;
        return activity;
      });
    }
  }
});
