import{bx as $,by as A,p as d,i as P}from"./dateFormat-6766bd6f.js";import{b as o,s as n}from"./axiosBase-91228d64.js";import{A as D,a as l}from"./ActivityStore-7cef511e.js";const{changeCookie:p,getStorageUser:a,setStorageUser:_}=$(),{handleActivitiesStatus:f,getSearchActivitiesForActivityId:M}=D(),j=A("MemberStore",{state:()=>({myFirstThreeOrders:[],myOrders:[],myinfo:{},myComments:{},myActivities:[]}),getters:{},actions:{login(r,t){return o.post("login",r).then(({accessToken:e,user:s})=>(p("add",e,s),this.getMyOrders(3),t||(t="/index"),d.push(t),Promise.resolve(!0))).catch(({data:e})=>(e==="Cannot find user"?e="找不到用戶":e==="Incorrect password"&&(e="密碼錯誤"),n("popup","error","登入失敗",e),!1))},signup(r,t){return r.creationDate=l(new Date),r.identityId="1",o.post("signup",r).then(({accessToken:e,user:s})=>(p("add",e,s),t||(t="/index"),d.push(t),Promise.resolve(!0))).catch(({data:e})=>(e==="Email already exists"&&(e="Email 信箱已註冊"),n("popup","error","註冊失敗",e),!1))},getMyinfo(){var t;const r=["_expand=certificateLevel","_expand=cylinderTotal","_embed=violations","_embed=comments"];return o.get(`600/users/${(t=a())==null?void 0:t.id}?${r.join("&")}`).then(e=>(this.myinfo=e,Promise.resolve(e))).catch(e=>Promise.reject(!1))},updateMyinfo(r){var t;return delete r.email,delete r.password,o.patch(`600/users/${(t=a())==null?void 0:t.id}`,r).then(e=>(_(e),this.getMyinfo().then(s=>n("toast","success","更新成功")),Promise.resolve(!0))).catch(({status:e})=>(e!==401&&n("toast","error","更新失敗"),!1))},getMyOrders(r){var e;const t=["_sort=updateDate","_order=desc","isDelete=0","_expand=activity"];return o.get(`400/users/${(e=a())==null?void 0:e.id}/orders?${t.join("&")}`).then(s=>{if(s=s.filter(i=>!i.activity.isDelete),r){const i=s.filter(c=>c.activity.endDate>=P(new Date,["data"],"-"));this.myFirstThreeOrders=i.slice(0,r)}const m=s.reduce((i,c)=>(i.push(`id=${c.activityId}`),i),[]);return M(m).then(i=>(i=f(i),this.myOrders=s.map(c=>{const v=i.find(u=>{if(c.activityId==u.id){const y=u.comments.find(g=>{var h;return g.userId==((h=a())==null?void 0:h.id)});return u.comment=y,u}});return{...c,activity:v}}),Promise.resolve(this.myOrders)))}).catch(s=>Promise.reject(!1))},getActivity(r){return o.get(`600/activities/${r}`).then(t=>Promise.resolve(t)).catch(t=>Promise.reject(!1))},updateActivity(r){var m;r.updateDate=l(new Date);let t="post",e=`660/users/${(m=a())==null?void 0:m.id}/activities`;r.id?(t="patch",e=`600/activities/${r.id}`):r.isDelete=0;const s=`${r.id?"編輯":"新增"}活動`;return o[t](e,r).then(i=>(n("toast","success",`${s}成功`).then(()=>{d.push("/member/myActivities")}),Promise.resolve(!0))).catch(({status:i})=>(i!==401&&n("toast","error",`${s}失敗`),!1))},delActivity(r){const t="刪除揪團";return o.patch(`600/activities/${r}`,{isDelete:1}).then(e=>(n("toast","success",`${t}成功`),this.getMyActivities(),Promise.resolve(!0))).catch(({status:e})=>(e!==401&&n("toast","error",`${t}失敗`),!1))},getMyActivities(){var t;const r=["_sort=updateDate","_order=desc","_expand=location","_embed=violations","_embed=orders","isDelete=0"];return o.get(`600/users/${(t=a())==null?void 0:t.id}/activities?${r.join("&")}`).then(e=>(this.myActivities=f(e),Promise.resolve(e))).catch(e=>Promise.reject(!1))},addComment(r){var e;r.creationDate=l(new Date);const t="新增評論";return o.post(`660/users/${(e=a())==null?void 0:e.id}/comments`,r).then(s=>(this.getMyOrders(),n("toast","success",`${t}成功`),Promise.resolve(!0))).catch(({status:s})=>(s!==401&&n("toast","error",`${t}失敗`),!1))},getViolation(r){return o.get(`440/violations/${r}?_expand=activity`).then(t=>(this.myinfo=t,Promise.resolve(t))).catch(t=>Promise.reject(!1))}}});export{j as M};