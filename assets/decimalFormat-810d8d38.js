import{by as c}from"./dateFormat-6766bd6f.js";import{b as d}from"./axiosBase-91228d64.js";const p=c("CommentStore",{state:()=>({initComments:[],comments:[]}),getters:{},actions:{getComments(){const s=["_expand=activity","_expand=user","_sort=score","_order=desc"];return d.get(`comments?${s.join("&")}`).then(e=>(this.initComments=e,this.comments=e.reduce((t,o)=>{const{score:m}=o,{userId:a}=o.activity,r=t.find(n=>n.userId==a);if(r)r.data.push(o),r.totalScore+=m,r.averageScore=r.totalScore/r.data.length;else{const n=[];n.push(o),t.push({userId:a,data:n,totalScore:m,averageScore:m})}return t},[]),Promise.resolve(this.comments))).catch(e=>Promise.reject(!1))},setScore(s){return s.map(e=>{const t=this.comments.find(o=>o.userId==e.userId);return e.score=t?t.averageScore:0,e})}}});function S(s=0,e=0){let t=Math.round(s);if(e){const o=Math.pow(10,e);t=Math.round(s*o)/o}return t.toFixed(e)}export{p as C,S as d};