import{A as q}from"./aos-1758eaf2.js";import{e as z,a8 as F,g as k,A as $,B as G,o as u,c as h,b4 as I,d as s,_ as L,i as H,r as w,an as j,w as E,b,bf as _,m as O,a as x,L as Y,F as v,b3 as y,as as T,aO as C}from"./dateFormat-6766bd6f.js";import{C as K,S as J,s as Q}from"./CornerActivityCard-e853be37.js";import{g as W,A as X}from"./ActivityStore-7cef511e.js";import{C as B}from"./decimalFormat-810d8d38.js";import{O as Z}from"./OrderStore-4de81e78.js";import{O as tt}from"./OptionStore-cfa2ec0c.js";import{p as et}from"./propsValidator-40732aba.js";import{U as st}from"./UserMugShot-c24cc398.js";import{C as it}from"./CommentCard-c0e74a50.js";import{n as at}from"./runtime-dom.esm-bundler-82de7fb5.js";import"./axiosBase-91228d64.js";import"./MemberStore-6585b4c4.js";import"./VueStarRating.common-0e75196f.js";import"./vue.runtime.esm-bundler-2834e5db.js";const ot="/Vue3-diving-Vite/assets/diving-0d7546ba.svg",nt="/Vue3-diving-Vite/assets/peoples-49273bf6.svg",rt="/Vue3-diving-Vite/assets/area-ae7a8f4a.svg",lt="/Vue3-diving-Vite/assets/license-d6779c7a.svg",ct="/Vue3-diving-Vite/assets/score-cbb8c8ca.svg",dt="/Vue3-diving-Vite/assets/comment-5747a037.png";var ut=Object.defineProperty,mt=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,M=(i,e,a)=>e in i?ut(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,U=(i,e)=>{for(var a in e||(e={}))pt.call(e,a)&&M(i,a,e[a]);if(R)for(var a of R(e))ft.call(e,a)&&M(i,a,e[a]);return i},gt=(i,e)=>mt(i,ht(e)),D=globalThis&&globalThis.__assign||function(){return(D=Object.assign||function(i){for(var e,a=1,n=arguments.length;a<n;a++)for(var t in e=arguments[a])Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i}).apply(this,arguments)},vt=function(){function i(e,a,n){var t=this;this.endVal=a,this.options=n,this.version="2.1.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(r){t.startTime||(t.startTime=r);var c=r-t.startTime;t.remaining=t.duration-c,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(c,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(c,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(c/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(c/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),c<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(r){var c,m,f,g,V=r<0?"-":"";c=Math.abs(r).toFixed(t.options.decimalPlaces);var o=(c+="").split(".");if(m=o[0],f=o.length>1?t.options.decimal+o[1]:"",t.options.useGrouping){g="";for(var d=0,A=m.length;d<A;++d)d!==0&&d%3==0&&(g=t.options.separator+g),g=m[A-d-1]+g;m=g}return t.options.numerals&&t.options.numerals.length&&(m=m.replace(/[0-9]/g,function(l){return t.options.numerals[+l]}),f=f.replace(/[0-9]/g,function(l){return t.options.numerals[+l]})),V+t.options.prefix+m+f+t.options.suffix},this.easeOutExpo=function(r,c,m,f){return m*(1-Math.pow(2,-10*r/f))*1024/1023+c},this.options=D(D({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(a),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",window!==void 0&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(r){return r()})},this.handleScroll(this)))}return i.prototype.handleScroll=function(e){if(e&&window){var a=window.innerHeight+window.scrollY,n=e.el.offsetTop+e.el.offsetHeight;n<a&&n>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay)):window.scrollY>n&&!e.paused&&e.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var a=e-this.startVal;if(Math.abs(a)>this.options.smartEasingThreshold){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(e){var a=this.formattingFn(e);this.el.tagName==="INPUT"?this.el.value=a:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=a:this.el.innerHTML=a},i.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},i.prototype.validateValue=function(e){var a=Number(e);return this.ensureNumber(a)?a:(this.error="[CountUp] invalid start or end value: "+e,null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();const _t={class:"countup-wrap"},yt={name:"CountUp"},wt=z(gt(U({},yt),{props:{endVal:null,startVal:{default:0},duration:{default:2.5},decimalPlaces:{default:0},autoplay:{type:Boolean,default:!0},loop:{type:[Boolean,Number,String],default:!1},delay:{default:0},options:{default:void 0}},emits:["init","finished"],setup(i,{expose:e,emit:a}){const n=i;let t=F(),r=F();const c=()=>{if(!t.value)return;const l=Number(n.startVal),p=Number(n.endVal),S=Number(n.duration);if(r.value=new vt(t.value,p,U({startVal:l,duration:S,decimalPlaces:n.decimalPlaces},n.options)),r.value.error){console.error(r.value.error);return}a("init",r.value)},m=l=>{var p;(p=r.value)==null||p.start(l)};k(()=>n.endVal,l=>{var p;n.autoplay&&((p=r.value)==null||p.update(l))});const f=F(!1);let g=0;const V=()=>{g++,m(()=>{typeof n.loop=="boolean"&&n.loop||n.loop>g?d(()=>{var p;(p=r.value)==null||p.reset(),V()},n.delay):f.value=!0})};k(f,l=>{l&&a("finished")}),$(()=>{c(),n.autoplay&&V()}),G(()=>{var l;cancelAnimationFrame(o),(l=r.value)==null||l.reset()});let o;const d=(l,p=1)=>{let S;function P(N){S||(S=N),N-S<p*1e3?o=requestAnimationFrame(P):l()}o=requestAnimationFrame(P)};return e({init:c,restart:()=>{c(),m()}}),(l,p)=>(u(),h("div",_t,[I(l.$slots,"prefix"),s("span",{ref_key:"elRef",ref:t},null,512),I(l.$slots,"suffix")]))}}));const Vt={data(){return{dateFormat:H,getMainImg:W}},props:{activity:{type:Object,required:!0,validator(i){return et("BottomFrameActivityCard",i,["id","title","imgs","location","startDate","endDate","user"])}}},components:{UserMugShot:st}},bt={class:"bottom-frame-card"},At={class:"img-frame mb-3"},St=s("div",{class:"outer-border custom-rectangle border border-card-border-width"},null,-1),xt={class:"card custom-rectangle"},Ft=["src","alt"],Ct=s("div",{class:"img-mask"},null,-1),Et={class:"shadow py-1 card-img-overlay d-flex align-items-center text-body bg-darkPrimary bg-opacity-80"},Dt={class:"h5 mb-1 text-primary text-truncate-row-2 fw-bold"},Pt={class:"list-unstyled text-body lh-sm"},Nt={class:"font-barlow"};function kt(i,e,a,n,t,r){const c=w("UserMugShot"),m=w("RouterLink");return u(),j(m,{to:`/activity/${a.activity.id}`,class:"col text-decoration-none card-hover"},{default:E(()=>[s("div",bt,[s("div",At,[St,s("div",xt,[s("img",{src:t.getMainImg(a.activity.imgs).img,class:"card-img custom-rectangle img-cover",alt:`[${a.activity.location.name}]${a.activity.title}`},null,8,Ft),Ct,s("div",Et,[b(c,{name:a.activity.user.name,img:a.activity.user.img,score:a.activity.score,isShowRating:!1},null,8,["name","img","score"])])])]),s("h2",Dt,_(a.activity.title),1),s("ul",Pt,[s("li",null,_(a.activity.location.name),1),s("li",Nt,_(t.dateFormat(a.activity.startDate))+" ~ "+_(t.dateFormat(a.activity.endDate)),1)])])]),_:1},8,["to"])}const It=L(Vt,[["render",kt]]);const Ot={data(){return{commentImg:dt,bannerIcons:[{title:"揪團潛水",img:ot,total:null},{title:"報名人數",img:nt,total:null},{title:"潛水地區",img:rt,total:null}],activityNavs:{hot:"熱門",new:"最新"},activeActivityNav:"hot",features:[{title:`證照門檻
找伴揪安心`,img:lt},{title:`評分機制
加團不踩雷`,img:ct}],newActivities:[],hotActivities:[],goodRatingActivities:[],adLocations:[]}},inject:["frontLayoutData"],components:{CornerActivityCard:K,BottomFrameActivityCard:It,CountUp:wt,CommentCard:it},computed:{...O(B,["initComments"]),...O(tt,["locations"]),activityCards(){let i=[];switch(this.activeActivityNav){case"new":i=this.newActivities;break;case"hot":i=this.hotActivities;break}return i},comments(){return this.initComments.slice(0,6)}},watch:{locations(){this.setBannerIconsTotal(2,this.locations.length)}},created(){this.frontLayoutData.showSearchBar=!1,this.frontLayoutData.isMainOverflowHidden=!0},mounted(){Promise.all([this.getNewActivities(),this.getHotActivities(),this.getAdLocations(),this.getComments(),this.getFilterIsDeleteActivities(),this.getFilterIsDeleteOrders()]).then(i=>{i[0]=this.setScore(i[0]),this.goodRatingActivities=this.getGoodRatingActivities(i[0]),this.newActivities=i[0].slice(0,3),this.hotActivities=this.setScore(i[1]),this.adLocations=i[2],this.setBannerIconsTotal(0,i[4].length),this.setBannerIconsTotal(1,i[5].length),this.setBannerIconsTotal(2,this.locations.length),this.setSwiper("commentSwiper"),this.setSwiper("goodRatingSwiper"),this.hideLoading(),q.init({duration:1200,easing:"ease-in-out-back"})})},methods:{...x(X,["getNewActivities","getHotActivities","getAdLocations","getFilterIsDeleteActivities"]),...x(B,["getComments","setScore"]),...x(Y,["hideLoading"]),...x(Z,["getFilterIsDeleteOrders"]),setBannerIconsTotal(i,e){this.bannerIcons[i].total=Math.floor(Math.random()*e*50)},getGoodRatingActivities([...i]){return i.sort((e,a)=>a.score-e.score).slice(0,3)},toggleActiveActivityNav(i){this.activeActivityNav=i},setSwiper(i){let e=null;i==="commentSwiper"?e={grid:{rows:2}}:i==="goodRatingSwiper"&&(e={slidesPerView:1,breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}}),new J(this.$refs[i],{...Q,...e})}}},Tt={class:"bg-img pb-5 py-lg-5"},Bt={class:"container text-center py-5","data-aos":"zoom-out-down"},Rt=s("h6",{class:"en-title text-uppercase fs-5 font-barlow mb-0"},"DIVING",-1),Mt=s("h1",{class:"main-title display-3 mb-0 fw-bold"},"潛安伴旅這裡揪",-1),Ut=s("h2",{class:"sub-title opacity-75 fs-4"},"在氣瓶海人遇見好潛伴",-1),Lt={class:"d-grid col-7 col-md-4 col-lg-3 mx-auto mt-4"},jt={class:"bg-primary bg-opacity-20 mt-3","data-aos":"fade-up","data-aos-delay":"600"},qt={class:"container py-4"},zt={class:"row gx-0 gy-4 justify-content-center"},$t=["src","alt"],Gt={class:"text-center flex-grow-1 flex-md-grow-0"},Ht={class:"d-block text-primary fw-light font-barlow display-4 lh-1"},Yt={class:"container"},Kt={"data-aos":"fade-up",class:"py-4 py-md-6"},Jt={class:"nav fs-4"},Qt=["onClick"],Wt={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},Xt={class:"row gy-4 justify-content-center py-4 py-md-6"},Zt=["data-aos"],te={class:"row g-0"},ee={class:"col-5"},se=["src","alt"],ie={class:"col fw-bold text-warning fs-1 mb-0 white-space-pre-wrap lh-sm align-self-center mt-3 mt-xl-5"},ae={class:"bg-primary bg-opacity-20 my-4 my-md-6 py-3","data-aos":"fade-up"},oe={class:"container-fluid waterfalls-flow-imgs"},ne={class:"waterfalls-flow-item-img-box"},re=["src","alt"],le={class:"position-absolute bottom-0 start-0 m-3 p-2 border border-lightPrimary bg-primary bg-opacity-20"},ce={class:"text-truncate-row-2 mb-0 text-body fs-5"},de={class:"container"},ue={class:"py-4 py-md-6","data-aos":"zoom-out"},me=s("h5",{class:"fs-4 text-center text-primary mb-5"},[s("strong",null,"聽聽其他人怎麼說"),s("small",{class:"d-block text-body fs-6"},"大家參加完潛團的想法是甚麼呢")],-1),he={class:"row justify-content-center row-cols-1 row-cols-md-2 gy-4 gy-md-0"},pe={class:"col-10 col-md text-center align-self-center","data-aos":"zoom-out"},fe=["src"],ge={class:"col","data-aos":"zoom-out"},ve={ref:"commentSwiper",class:"swiper comment-swiper offset-pagination"},_e={class:"swiper-wrapper"},ye=s("div",{class:"swiper-pagination"},null,-1),we={class:"py-4 py-md-6","data-aos":"fade-up"},Ve=s("h5",{class:"fs-4 text-center text-primary mb-3"},[s("strong",null,"好評主揪開團"),s("small",{class:"d-block text-body fs-6"},"跟著好主揪 享受安心潛旅")],-1),be={ref:"goodRatingSwiper",class:"swiper good-rating-swiper offset-pagination"},Ae={class:"swiper-wrapper"},Se=s("div",{class:"swiper-pagination"},null,-1);function xe(i,e,a,n,t,r){const c=w("RouterLink"),m=w("CountUp"),f=w("CornerActivityCard"),g=w("CommentCard"),V=w("BottomFrameActivityCard");return u(),h(v,null,[s("div",Tt,[s("div",Bt,[Rt,Mt,Ut,s("div",Lt,[b(c,{to:"addActivity",class:"btn btn-outline-lightPrimary btn-lg rounded-pill",role:"button"},{default:E(()=>[T("我要揪團")]),_:1})])]),s("div",jt,[s("div",qt,[s("div",zt,[(u(!0),h(v,null,y(t.bannerIcons,o=>(u(),h("div",{"data-aos":"flip-left","data-aos-delay":"1000",class:"col-7 col-md-4 d-flex justify-content-center align-items-center",key:o.title},[s("img",{src:o.img,alt:o.title,class:"banner-icon-size border border-style-dashed border-lightPrimary rounded-circle me-md-2"},null,8,$t),s("div",Gt,[s("span",Ht,[b(m,{endVal:o.total,duration:5},null,8,["endVal"])]),T(_(o.title),1)])]))),128))])])])]),s("div",Yt,[s("div",Kt,[s("nav",Jt,[(u(!0),h(v,null,y(t.activityNavs,(o,d,A)=>(u(),h("a",{class:C(["nav-link fw-bold",{disabled:t.activeActivityNav===d,"ps-0":!A}]),"aria-current":"page",href:"#",key:d,onClick:at(l=>r.toggleActiveActivityNav(d),["prevent"])},_(o),11,Qt))),128))]),s("div",Wt,[(u(!0),h(v,null,y(r.activityCards,(o,d)=>(u(),h("div",{"data-aos":"fade-up",key:o.id},[b(f,{activity:o,class:C({"d-block d-sm-none d-lg-block":d>=2})},null,8,["activity","class"])]))),128))])]),s("div",Xt,[(u(!0),h(v,null,y(t.features,(o,d)=>(u(),h("div",{class:"col-9 col-md col-lg-5",key:o.title,"data-aos":d%2?"fade-down-left":"fade-down-right"},[s("div",te,[s("div",ee,[s("img",{src:o.img,alt:o.title,class:"img-fluid"},null,8,se)]),s("h5",ie,_(o.title),1)])],8,Zt))),128))])]),s("div",ae,[s("div",oe,[(u(!0),h(v,null,y(t.adLocations,(o,d)=>(u(),j(c,{to:{path:"/activities",query:{locationId:`${o.id}`}},class:C(["position-relative shadow",`waterfalls-flow-item-${d+1}`]),key:o.id,"data-aos":"zoom-out-down","data-aos-delay":50*d},{default:E(()=>[s("div",ne,[s("img",{src:o.img,alt:o.name,class:"img-cover"},null,8,re)]),s("div",le,[s("h2",ce,_(o.name),1)])]),_:2},1032,["to","class","data-aos-delay"]))),128))])]),s("div",de,[s("div",ue,[me,s("div",he,[s("div",pe,[s("img",{src:t.commentImg,alt:"評論",class:"comment-img-height"},null,8,fe)]),s("div",ge,[s("div",ve,[s("div",_e,[(u(!0),h(v,null,y(r.comments,o=>(u(),h("div",{key:o.id,class:"swiper-slide align-items-start"},[b(g,{comment:o,showDate:!1},null,8,["comment"])]))),128))]),ye],512)])])]),s("div",we,[Ve,s("div",be,[s("div",Ae,[(u(!0),h(v,null,y(t.goodRatingActivities,o=>(u(),h("div",{class:"swiper-slide",key:o.id},[b(V,{"data-aos":"flip-left",activity:o},null,8,["activity"])]))),128))]),Se],512)])])],64)}const qe=L(Ot,[["render",xe]]);export{qe as default};