import{bv as g,g as c,bx as f,l as h}from"./dateFormat-59b422d2.js";import{b as a,s as m}from"./axiosBase-f2705e80.js";function v([...e],t){return t||(t=e.length),e.sort(()=>Math.random()>.5?-1:1).slice(0,t)}function o(e){return new Date(e).getTime()}function j(e){const t=Object.keys(e).find(i=>e[i].isMain);return e[t]}const{getStorageUser:u}=g();function l(e){const t=e.orders.some(i=>{var s;return i.userId==((s=u())==null?void 0:s.id)&&!i.isDelete});return{activityStatus:A(e),orderStatus:p(e),isOrderPlaced:t}}function A({startDate:e,endDate:t,violations:i}){e=o(e),t=o(t);let s="";return i.length?s=0:e>n?s=1:n>=e&&t>=n?s=2:n>t&&(s=3),s}function p({orderExpiryDate:e,maxOrderTotal:t,orders:i,violations:s}){e=o(e),i=i.filter(d=>!d.isDelete);let r="";return s.length?r=0:t===(i==null?void 0:i.length)?r=n>e?3:1:e>=n?r=2:n>e&&(r=3),r}const n=(()=>o(c(new Date,["data"],"-")))(),b=f("ActivityStore",{state:()=>({activitiesParamsArr:["_sort=updateDate","_order=desc","_expand=user","_expand=location","_expand=certificateLevel","_expand=cylinderTotal","_embed=violations","_embed=orders","isDelete=0"]}),getters:{today:()=>c(new Date,"date","-"),activitiesApiUrl:({activitiesParamsArr:e})=>`activities?${e.join("&")}`},actions:{getFilterIsDeleteActivities(){return a.get("activities?isDelete=0").then(e=>Promise.resolve(e)).catch(e=>Promise.reject(!1))},getNewActivities(){const e={orderExpiryDate_gte:this.today};return a.get(`${this.activitiesApiUrl}`,{params:e}).then(t=>Promise.resolve(this.getHandleActivities(t))).catch(t=>Promise.reject(!1))},getHotActivities(){const e={endDate_gte:this.today};return a.get(`${this.activitiesApiUrl}`,{params:e}).then(t=>{t=this.getHandleActivities(t),t.sort((s,r)=>r.orders.length-s.orders.length);const i=t.slice(0,3);return Promise.resolve(i)}).catch(t=>Promise.reject(!1))},getAdActivities(){const e={orderExpiryDate_gte:this.today};return a.get(`${this.activitiesApiUrl}`,{params:e}).then(t=>Promise.resolve(this.getHandleActivities(t))).catch(t=>Promise.reject(!1))},getActivities(e){const t=Object.keys(e),i=t.reduce((s,r)=>(e[r]&&(r==="startDate"?s[`${r}_gte`]=e[r]:r==="endDate"?s[`${r}_lte`]=e[r]:r==="tag"?s.tags_like=e[r]:s[r]=e[r]),s),{});return t.indexOf("endDate")===-1&&(i.endDate_gte=this.today),a.get(`${this.activitiesApiUrl}`,{params:i}).then(s=>Promise.resolve(this.getHandleActivities(s))).catch(s=>Promise.reject(!1))},getSearchActivitiesForActivityId(e){const t=["_expand=user","_expand=location","_embed=violations","_embed=orders","_embed=comments"];return e.length&&t.push(e.join("&")),a.get(`440/activities?${t.join("&")}`).then(i=>Promise.resolve(i)).catch(i=>Promise.reject(!1))},getActivity(e){const t=["_expand=user","_expand=location","_expand=certificateLevel","_expand=cylinderTotal","_embed=violations","_embed=orders"];return a.get(`activities/${e}?${t.join("&")}`).then(i=>i.isDelete?(m("popup","error","系統錯誤","找不到該筆資料").then(()=>h.go(-1)),Promise.reject(!1)):Promise.resolve({...i,...l(i)})).catch(i=>Promise.reject(!1))},getAdLocations(){return a.get("locations?isAD=true").then(e=>Promise.resolve(v(e,12))).catch(e=>Promise.reject(!1))},getHandleActivities(e){return e=e.filter(t=>!t.violations.length),this.handleActivitiesStatus(e)},handleActivitiesStatus(e){return e.forEach(t=>t.orders=t.orders.filter(i=>!i.isDelete)),e.map(t=>({...t,...l(t)}))}}});export{b as A,o as a,v as b,j as g};
