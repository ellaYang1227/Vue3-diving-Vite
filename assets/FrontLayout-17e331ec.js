import{m as f,bv as k,bw as w,r as g,o as d,c as u,b as e,a as r,w as c,u as s,ap as h,aL as b,ak as O,al as y,F as _,bd as v,b1 as V,g as C,L as B}from"./dateFormat-6c69c48f.js";import{O as N}from"./OptionStore-7845444d.js";import{M}from"./MemberStore-50669d50.js";import{n as D}from"./runtime-dom.esm-bundler-56dfeb61.js";import{g as I}from"./ActivityStore-c530c585.js";import{O as P}from"./bootstrap.esm-e2f1acc9.js";import{_ as L}from"./UserMugShot-05128f3d.js";import{f as l}from"./formSchema-ec93e38c.js";import{s as A}from"./vue-multiselect.esm-43659109.js";import{F as R,a as S,E}from"./vee-validate.esm-f7252883.js";import{P as U}from"./PageStore-004aef17.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./axiosBase-c8bf13dd.js";import"./VueStarRating.common-17b108e4.js";import"./vue.runtime.esm-bundler-a61ba88c.js";const $="/Vue3-diving-Vite/assets/氣瓶海人logo-a9e19c9e.svg";const q={class:"container"},Y=["src","alt"],z=e("span",{class:"navbar-toggler-icon"},null,-1),W=[z],G={class:"offcanvas-navbar offcanvas offcanvas-start border-0",tabindex:"-1",ref:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},J={class:"offcanvas-body px-0 pt-0"},Q={class:"navbar-nav ms-auto align-items-md-center"},X={class:"nav-link dropdown-toggle dropdown-hide-arrow d-flex align-items-center border-bottom border-color-dropdown",href:"#",id:"dropUser",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false"},Z={class:"fs-5 d-md-none mb-0 text-truncate text-primary"},x=["src","alt"],K=e("button",{type:"button",class:"btn-close btn-close-white d-md-none ms-auto flex-shrink-0","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),ee={class:"dropdown-header fs-6 text-truncate text-primary d-none d-md-block"},te=e("li",null,[e("hr",{class:"dropdown-divider"})],-1),ae=e("li",null,[e("hr",{class:"dropdown-divider"})],-1),se={class:"nav-item"},oe={key:0,class:"nav-item dropdown d-none d-md-block"},ne={class:"dropdown-menu dropdown-menu-md-end","aria-labelledby":"dropMyOrders"},re={class:"list-group list-group-flush mx-3"},ie={class:"row gx-2 align-items-center"},le={class:"col-4"},de={class:"custom-rectangle border-card-border-width border"},ce=["src","alt"],me={class:"col"},he={class:"fw-bold h6 mb-0 text-primary text-truncate-row-2"},ue={class:"font-barlow text-white"},pe={class:"nav-item"},be={class:"nav-item"};const ve={class:"nav-item d-md-none border-top border-color-dropdown"},fe={data(){return{offcanvasNavbar:null,hasHavbarBg:!1}},props:{showSearchBar:{type:Boolean,required:!0}},inject:["frontLayoutData"],components:{UserMugShot:L},computed:{...f(M,["myFirstThreeOrders"]),...f(k,["user"])},watch:{showSearchBar(){this.setShowSearchBar()}},mounted(){this.setShowSearchBar(),window.addEventListener("scroll",this.scrollEvent),this.offcanvasNavbar=new P(this.$refs.offcanvasNavbar,{keyboard:!1})},methods:{...w(k,["logout"]),setShowSearchBar(){this.hasHavbarBg=this.showSearchBar},scrollEvent(){this.frontLayoutData.showSearchBar||(this.hasHavbarBg=window.scrollY>0)},toggleOffcanvasNavbar(){768>document.body.clientWidth&&this.offcanvasNavbar.toggle()}}},ge=Object.assign(fe,{__name:"HeaderNavbar",setup(n){const{VITE_COMPANY_NAME:a}={VITE_COMPANY_NAME:"氣瓶海人 水肺潛水揪團",VITE_API_ROOT:"https://vue3-diving-vite.onrender.com/",BASE_URL:"/Vue3-diving-Vite/",MODE:"production",DEV:!1,PROD:!0};return(t,m)=>{var p;const o=g("router-link");return d(),u("nav",{class:b(["fixed-top navbar navbar-expand-md navbar-dark p-0",{"show-bg body-bg":t.hasHavbarBg,"shadow-lg":!n.showSearchBar&&t.hasHavbarBg}])},[e("div",q,[r(o,{class:"navbar-brand",to:"/index"},{default:c(()=>[e("img",{src:s($),alt:s(a),class:"mb-md-2 logo-img"},null,8,Y)]),_:1}),r(o,{class:"btn btn-primary btn-custom-rectangle ms-auto me-3 me-md-0 ms-md-2 order-md-last",to:"/addActivity",role:"button"},{default:c(()=>[h("我要揪團")]),_:1}),e("button",{class:"navbar-toggler",type:"button","aria-controls":"offcanvasNavbar",onClick:m[0]||(m[0]=(...i)=>t.toggleOffcanvasNavbar&&t.toggleOffcanvasNavbar(...i))},W),e("div",G,[e("div",J,[e("ul",Q,[e("li",{class:b(["nav-item dropdown order-md-last",{"d-md-none":!t.user}])},[e("a",X,[t.user?(d(),O(L,{key:0,"is-show-name":!1,name:t.user.name,img:t.user.img,class:"me-2"},null,8,["name","img"])):y("",!0),e("h5",Z,[t.user?(d(),u(_,{key:1},[h(v(t.user.name),1)],64)):(d(),u("img",{key:0,src:s($),alt:s(a),class:"logo-img"},null,8,x))]),K]),e("ul",{class:b(["dropdown-menu dropdown-menu-md-end",{"d-none":!t.user}]),"aria-labelledby":"dropUser"},[e("li",null,[e("h5",ee,v((p=t.user)==null?void 0:p.name),1)]),e("li",null,[r(o,{class:"dropdown-item",to:"/member/editMyinfo",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("編輯個人資料")]),_:1},8,["onClick"])]),e("li",null,[r(o,{class:"dropdown-item",to:"/member/editMyinfo",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("我的潛水證照")]),_:1},8,["onClick"])]),te,e("li",null,[r(o,{class:"dropdown-item",to:"/member/myActivities",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("我的揪團")]),_:1},8,["onClick"])]),e("li",null,[r(o,{class:"dropdown-item",to:"/member/myOrders",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("我的報名")]),_:1},8,["onClick"])]),e("li",null,[r(o,{class:"dropdown-item",to:"/member/myComments",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("評論管理")]),_:1},8,["onClick"])]),ae,e("li",null,[e("a",{class:"dropdown-item d-none d-md-block",href:"#",onClick:m[1]||(m[1]=D((...i)=>t.logout&&t.logout(...i),["prevent"]))},"登出")])],2)],2),e("li",se,[r(o,{class:"nav-link",to:"/activities",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("找揪團")]),_:1},8,["onClick"])]),t.user?(d(),u("li",oe,[r(o,{class:b(["nav-link",{"dropdown-toggle dropdown-hide-arrow":t.myFirstThreeOrders.length}]),id:"dropMyOrders",role:"button","data-bs-toggle":t.myFirstThreeOrders.length?"dropdown":"","data-bs-display":"static","aria-expanded":"false",to:"/member/myOrders"},{default:c(()=>[h(" 我的報名 ")]),_:1},8,["class","data-bs-toggle"]),e("div",ne,[e("div",re,[(d(!0),u(_,null,V(t.myFirstThreeOrders,i=>(d(),O(o,{to:`/activity/${i.activityId}`,class:"list-group-item list-group-item-action bg-transparent px-0 py-3",key:i.id},{default:c(()=>[e("div",ie,[e("div",le,[e("div",de,[e("img",{src:s(I)(i.activity.imgs).img,alt:i.activity.title,class:"custom-rectangle img-cover"},null,8,ce)])]),e("div",me,[e("h2",he,v(i.activity.title),1),e("small",ue,v(s(C)(i.activity.startDate))+" ~ "+v(s(C)(i.activity.endDate)),1)])])]),_:2},1032,["to"]))),128))]),r(o,{class:"py-2 d-block text-center text-decoration-none bg-lightPrimary bg-opacity-20 text-body border-top border-color-dropdown",to:"/member/myOrders"},{default:c(()=>[h("更多我的報名")]),_:1})])])):y("",!0),t.user?(d(),u(_,{key:2},[(t.user.identityId,y("",!0)),e("li",ve,[e("a",{class:"nav-link",href:"#",onClick:m[2]||(m[2]=D(i=>{t.toggleOffcanvasNavbar(),t.logout()},["prevent"]))},"登出")])],64)):(d(),u(_,{key:1},[e("li",pe,[r(o,{class:"nav-link",to:"/login",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("登入")]),_:1},8,["onClick"])]),e("li",be,[r(o,{class:"nav-link",to:"/signup",onClick:t.toggleOffcanvasNavbar},{default:c(()=>[h("註冊")]),_:1},8,["onClick"])])],64))])])],512)])],2)}}}),_e={class:"bg-primary bg-opacity-20 text-center py-2 fs-7"},ye={class:"d-block"},we=e("span",null,"資料、圖片、來源皆來自網路，僅用來做為學習用途",-1),ke={__name:"FooterComponent",setup(n){const{VITE_COMPANY_NAME:a}={VITE_COMPANY_NAME:"氣瓶海人 水肺潛水揪團",VITE_API_ROOT:"https://vue3-diving-vite.onrender.com/",BASE_URL:"/Vue3-diving-Vite/",MODE:"production",DEV:!1,PROD:!0};return(t,m)=>(d(),u("div",_e,[e("span",ye,"© 2022 "+v(s(a))+". All Rights Reserved.",1),we]))}},Oe=e("div",{class:"border-top opacity-30"},null,-1),Ne={class:"container py-4"},Se=["disabled"],Ce={class:"col-md col-lg-6 col-xl-5"},Be={class:"col"},De={class:"input-group"},$e={class:"col-sm-auto"},Ve=["disabled"],Me={key:0,class:"spinner-border spinner-border-sm",role:"status"},Le={class:"row gx-2 gy-1 d-none d-md-flex"},Ae=["id","value","checked"],Ee=["for"],Te={data(){return{location:null,search:{locationId:"",startDate:"",endDate:"",tag:""}}},computed:{...f(B,["isLoadingBtn"]),...f(N,["locations","tags"]),...f(U,["hasActivityHavbar"]),selectedTag(){return this.search.tag}},components:{VueMultiselect:A,VForm:R,Field:S,ErrorMessage:E},created(){this.$watch(()=>this.$route.query,()=>{const{path:n}=this.$route;n.indexOf("/activities")>-1?this.setLocation():(this.location=null,this.search={locationId:"",startDate:"",endDate:"",tag:""})},{immediate:!0})},methods:{...w(B,["showLoading"]),setLocation(){this.search={...this.$route.query};const{locationId:n}=this.search,a=this.locations.find(t=>t.id===n);this.location=a||""},updateSelectedTag(n){const{value:a}=n.target;this.search.tag=a!==this.search.tag?a:"",this.onSubmit()},updateLocation(n){this.location=n,this.search.locationId=n==null?void 0:n.id},onSubmit(){this.showLoading("btn");const n=Object.keys(this.search).reduce((t,m)=>(this.search[m]&&(t[m]=this.search[m]),t),{});let a={path:"/activities"};Object.keys(this.search).length&&(a.query=n),this.$router.push(a)}}},Fe=Object.assign(Te,{__name:"SearchActivityBar",setup(n){return(a,t)=>{const m=g("VForm");return d(),u("div",{class:b(["body-bg shadow-lg",{"sticky-top sticky-top-headerHeight":!a.hasActivityHavbar}])},[Oe,e("div",Ne,[r(m,{onSubmit:a.onSubmit,class:"pb-1"},{default:c(({errors:o})=>[e("fieldset",{disabled:a.isLoadingBtn,class:"row g-2"},[e("div",Ce,[r(s(A),{options:a.locations,placeholder:`請輸入${s(l).search.location.label}`,label:s(l).search.location.optionLabel,"track-by":s(l).search.location.optionLabel,disabled:a.isLoadingBtn,"model-value":a.location,"onUpdate:modelValue":a.updateLocation},{noResult:c(()=>[h("沒有符合條件的結果")]),_:1},8,["options","placeholder","label","track-by","disabled","model-value","onUpdate:modelValue"])]),e("div",Be,[e("div",De,[r(s(S),{id:s(l).search.startDate.name,name:s(l).search.startDate.label,type:s(l).search.startDate.type,as:s(l).search.startDate.as,class:b(["form-control",{"is-invalid":o[s(l).search.startDate.label]}]),rules:s(l).search.startDate.rules,modelValue:a.search.startDate,"onUpdate:modelValue":t[0]||(t[0]=p=>a.search.startDate=p)},null,8,["id","name","type","as","class","rules","modelValue"]),r(s(S),{id:s(l).search.endDate.name,name:s(l).search.endDate.label,type:s(l).search.endDate.type,as:s(l).search.endDate.as,class:b(["form-control",{"is-invalid":o[s(l).search.endDate.label]}]),rules:s(l).search.endDate.rules,modelValue:a.search.endDate,"onUpdate:modelValue":t[1]||(t[1]=p=>a.search.endDate=p)},null,8,["id","name","type","as","class","rules","modelValue"])]),r(s(E),{name:s(l).search.startDate.label,class:"invalid-feedback d-block"},null,8,["name"])]),e("div",$e,[e("button",{type:"submit",class:"btn btn-outline-warning rounded-0 w-100",disabled:a.isLoadingBtn||Object.keys(o).length},[a.isLoadingBtn?(d(),u("span",Me)):y("",!0),h(" 搜出好團")],8,Ve)])],8,Se)]),_:1},8,["onSubmit"]),e("div",Le,[(d(!0),u(_,null,V(a.tags,(o,p)=>(d(),u("div",{class:"col-auto",key:o},[e("input",{type:"radio",class:"btn-check",name:"tagOptions",id:`tagOption-${p}`,autocomplete:"off",value:o,onClick:t[2]||(t[2]=(...i)=>a.updateSelectedTag&&a.updateSelectedTag(...i)),checked:o===a.selectedTag},null,8,Ae),e("label",{class:"btn btn-outline-lightPrimary btn-sm rounded-0 px-1 py-0",for:`tagOption-${p}`},v(o),9,Ee)]))),128))])])],2)}}}),He={data(){return{isVerticalMiddle:!1,showSearchBar:!0,isMainOverflowHidden:!1}},provide(){return{frontLayoutData:this}},computed:{...f(N,["locations","tags"]),...f(k,["user"])},components:{HeaderNavbar:ge,FooterComponent:ke,SearchActivityBar:Fe},created(){var a;this.$watch(()=>this.$route.params,()=>{this.isVerticalMiddle=!1,this.showSearchBar=!0,this.isMainOverflowHidden=!1},{immediate:!0});const n=[this.getLocations(),this.getTags()];(a=this.user)!=null&&a.id&&n.push(this.getMyOrders(3)),Promise.all(n)},methods:{...w(N,["getLocations","getTags"]),...w(M,["getMyOrders"])}};function Ie(n,a,t,m,o,p){const i=g("HeaderNavbar"),T=g("SearchActivityBar"),F=g("router-view"),H=g("FooterComponent");return d(),u("div",{class:b(["min-vh-100 d-flex flex-column",{"overflow-hidden":o.isMainOverflowHidden}])},[r(i,{"show-search-bar":o.showSearchBar},null,8,["show-search-bar"]),e("div",{class:b(["flex-fill fixed-margin-top-headerHeight",{"d-flex flex-column justify-content-center":o.isVerticalMiddle}])},[o.showSearchBar?(d(),O(T,{key:0})):y("",!0),r(F)],2),r(H)],2)}const et=j(He,[["render",Ie]]);export{et as default};
