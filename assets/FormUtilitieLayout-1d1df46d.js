import{o as n,c,b as t,aL as r,u as a,bd as s,b2 as l}from"./dateFormat-59b422d2.js";const d={class:"container py-4 py-md-5"},_={class:"row justify-content-center"},m={class:"form-card card"},u={class:"form-img-box position-relative d-flex justify-content-center"},g=["src","alt"],f={class:"card-img-overlay d-flex flex-column justify-content-end align-items-end opacity-80 text-shadow"},y={class:"card-title fw-bold fs-4 mb-0"},p={class:"font-barlow text-uppercase fw-normal ms-1"},v={class:"card-body pt-4 pt-md-5"},h={props:{title:{type:String,required:!0},enTitle:{type:String,required:!0},img:{type:String,required:!0}}},E=Object.assign(h,{__name:"FormUtilitieLayout",setup(e){const{VITE_COMPANY_NAME:i}={VITE_COMPANY_NAME:"氣瓶海人 水肺潛水揪團",VITE_API_ROOT:"https://vue3-diving-vite.onrender.com/",BASE_URL:"/Vue3-diving-Vite/",MODE:"production",DEV:!1,PROD:!0};return(o,b)=>(n(),c("div",d,[t("div",_,[t("div",{class:r(["col-md-11 col-lg-10",e.enTitle==="signup"?"col-xxl-8":"col-xxl-10"])},[t("div",m,[t("div",u,[t("img",{src:e.img,class:"form-img card-img-top border border-card-border-width login-img img-cover shadow",alt:`${a(i)}-${e.title}`},null,8,g),t("div",f,[t("h5",y,s(e.title),1),t("span",p,s(e.enTitle),1)])]),t("div",v,[l(o.$slots,"body")])])],2)])]))}});export{E as _};