import{o as a,c as x,w as k,a as e,t as n,u as _,b as A,_ as V,d as y,e as o,F as d,f as h,r as f,g as b,h as C,s as j,i as I,m as S,j as F,k as g,n as w,l as M}from"./index-e4e350ae.js";const P="/Vue3-diving-Vite/assets/diving-0d7546ba.svg",O="/Vue3-diving-Vite/assets/peoples-49273bf6.svg",B="/Vue3-diving-Vite/assets/area-ae7a8f4a.svg",D="/Vue3-diving-Vite/assets/license-d6779c7a.svg",T="/Vue3-diving-Vite/assets/score-cbb8c8ca.svg";function z(t,s=0){let i=Math.round(t);if(s){const l=Math.pow(10,s);i=Math.round(t*l)/l}return i.toFixed(s)}function K(t,s){let i=[];return i=s.filter(l=>!Object.prototype.hasOwnProperty.call(t,l)),i.length&&console.warn(`[ActivityCard 元件警告]缺少「${i.join("、")}」欄位資料`),!i.length}const q={class:"img-frame-card"},E={class:"img-frame mb-3"},G=e("div",{class:"outer-border"},null,-1),L={class:"card custom-rectangle bg-primary"},R=["src","alt"],U={class:"card-img-overlay"},H={class:"fs-6 font-barlow badge rounded-pill bg-darkPrimary bg-opacity-75 text-body border border-lightPrimary border-2"},J={class:"h5 mb-1 text-primary text-truncate-row-2"},Q={class:"list-unstyled text-body lh-sm"},W={class:"font-barlow"},X={class:"row align-items-center fw-bold pt-3"},Y={class:"col text-truncate"},Z={class:"col-auto font-barlow"},tt={props:{activity:{type:Object,required:!0,validator(t){return K(t,["id","title","imgs","location","startDate","endDate","isNitrox","cylinderTotal","user"])}}},components:{UserMugShot:V},data(){return{}},mounted(){},methods:{}},et=Object.assign(tt,{__name:"ActivityCard",setup(t){return(s,i)=>{const l=f("router-link");return a(),x(l,{to:"#",class:"col text-decoration-none"},{default:k(()=>{var r,v,m;return[e("div",q,[e("div",E,[G,e("div",L,[e("img",{src:t.activity.imgs[0],class:"card-img custom-rectangle img-cover",alt:`[${t.activity.location}]${t.activity.title}`},null,8,R),e("div",U,[e("span",H,n(_(z)((r=t.activity.user)==null?void 0:r.score,1)),1)])])]),e("h2",J,n(t.activity.title),1),e("ul",Q,[e("li",null,n(t.activity.location),1),e("li",W,n(_(b)(t.activity.startDate))+" ~ "+n(_(b)(t.activity.endDate)),1),e("li",X,[e("div",Y,[A(V,{"width-size":25,name:(v=t.activity.user)==null?void 0:v.name,img:(m=t.activity.user)==null?void 0:m.img},null,8,["name","img"])]),e("div",Z,[y(n(t.activity.grade)+" ",1),t.activity.isNitrox?(a(),o(d,{key:0},[y("高氧")],64)):h("",!0),t.activity.cylinderTotal!=="不限"?(a(),o(d,{key:1},[y(n(t.activity.cylinderTotal),1)],64)):h("",!0)])])])])]}),_:1})}}}),p=C("activityStore",{state:()=>({statusFormat:j,activitys:[]}),getters:{newActivitys:({activitys:t})=>t.filter(i=>i.groupStatus==="進行中").slice(0,3),hotActivitys:({activitys:t})=>t.filter(i=>i.activityStatus!=="已結束").sort(()=>Math.random()>.5?-1:1).slice(0,3)},actions:{getActivitys(){I.get("/activitys.json").then(t=>{this.activitys=t.reverse().filter(s=>s.isEnable&&!s.isViolation).map(s=>({...s,...this.statusFormat(s)}))})}}});const st=(t,s)=>{const i=t.__vccOpts||t;for(const[l,r]of s)i[l]=r;return i},it={data(){return{bannerIcons:[{title:"揪團潛水",img:P,total:1005},{title:"報名人數",img:O,total:14186},{title:"潛水地區",img:B,total:84}],activityNavs:{hot:"熱門",new:"最新"},activeActivityNav:"hot",features:[{title:`證照門檻
找伴揪安心`,img:D},{title:`評分機制
加團不踩雷`,img:T}]}},mounted(){this.getActivitys()},computed:{...S(p,["newActivitys","hotActivitys"]),activityCards(){let t=[];switch(this.activeActivityNav){case"new":t=this.newActivitys;break;case"hot":t=this.hotActivitys;break}return t}},methods:{...F(p,["getActivitys"]),toggleActiveActivityNav(t){this.activeActivityNav=t}},components:{ActivityCard:et}},ct={class:"bg-img pb-5 py-lg-5"},at={class:"container text-center py-5"},ot=e("h6",{class:"en-title text-uppercase fs-5 font-barlow mb-0"},"DIVING",-1),nt=e("h1",{class:"main-title display-3 mb-0"},"潛安伴旅這裡揪",-1),lt=e("h2",{class:"sub-title opacity-75 fs-4"},"在氣瓶海人遇見好潛伴",-1),rt={class:"d-grid col-7 col-md-4 col-lg-3 mx-auto mt-4"},dt={class:"bg-lightPrimary bg-opacity-20 mt-3"},vt={class:"container py-4"},ut={class:"row gx-0 gy-4 justify-content-center"},yt=["src"],mt={class:"text-center flex-grow-1 flex-md-grow-0"},gt={class:"d-block text-primary fw-light font-barlow display-4 lh-1"},_t={class:"container"},ht={class:"nav fs-5"},ft=["onClick"],bt={key:0,class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},wt={class:"row gy-4 justify-content-center py-4 py-md-5"},pt={class:"row g-0"},xt={class:"col-5"},kt=["src","alt"],At={class:"col fw-bold text-warning fs-1 mb-0 word-break-keep-all lh-sm align-self-center mt-3 mt-xl-5"};function Vt(t,s,i,l,r,v){const m=f("router-link"),$=f("ActivityCard");return a(),o(d,null,[e("div",ct,[e("div",at,[ot,nt,lt,e("div",rt,[A(m,{to:"addGroup",class:"btn btn-outline-lightPrimary btn-lg rounded-pill opacity-75",role:"button"},{default:k(()=>[y("我要揪團")]),_:1})])]),e("div",dt,[e("div",vt,[e("div",ut,[(a(!0),o(d,null,g(r.bannerIcons,c=>(a(),o("div",{class:"col-7 col-md-4 d-flex justify-content-center align-items-center",key:c.title},[e("img",{src:c.img,class:"banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2"},null,8,yt),e("div",mt,[e("span",gt,n(c.total),1),y(n(c.title),1)])]))),128))])])])]),e("div",_t,[e("nav",ht,[(a(!0),o(d,null,g(r.activityNavs,(c,u,N)=>(a(),o("a",{class:w(["nav-link",{disabled:r.activeActivityNav===u,"ps-0":!N}]),"aria-current":"page",href:"#",key:u,onClick:M($t=>v.toggleActiveActivityNav(u),["prevent"])},n(c),11,ft))),128))]),v.activityCards.length?(a(),o("div",bt,[(a(!0),o(d,null,g(v.activityCards,(c,u)=>(a(),x($,{key:c.title,activity:c,class:w({"d-block d-sm-none d-lg-block":u>=2})},null,8,["activity","class"]))),128))])):h("",!0),e("div",wt,[(a(!0),o(d,null,g(r.features,c=>(a(),o("div",{class:"col-9 col-md col-lg-5",key:c.title},[e("div",pt,[e("div",xt,[e("img",{src:c.img,alt:c.title,class:"img-fluid"},null,8,kt)]),e("h5",At,n(c.title),1)])]))),128))])])],64)}const Ct=st(it,[["render",Vt]]);export{Ct as default};
