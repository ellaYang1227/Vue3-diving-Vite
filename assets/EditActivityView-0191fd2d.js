import{n as D}from"./runtime-dom.esm-bundler-56dfeb61.js";import{f as t}from"./formSchema-ec93e38c.js";import{a as M}from"./routeGuard-e91f4ffc.js";import{a as N}from"./ActivityStore-c530c585.js";import{F as R,a as f,E as b}from"./vee-validate.esm-f7252883.js";import{m as T,L as I,bw as L,ak as U,w as g,u as e,r as x,o,a as d,b as l,ap as u,bd as r,c as n,al as c,b1 as _,aL as v,F as h}from"./dateFormat-6c69c48f.js";import{O}from"./OptionStore-7845444d.js";import{M as q}from"./MemberStore-50669d50.js";import{_ as w}from"./UploadImg-f6143d81.js";import{_ as E}from"./FormUtilitieLayout-eacc5e4a.js";import"./axiosBase-c8bf13dd.js";const C="/Vue3-diving-Vite/assets/activity-1f5eba6e.jpg";const B=["disabled"],S={class:"col-12"},F={class:"form-label d-block"},A={key:0,class:"text-danger"},j={class:"row g-3"},P=["disabled","onClick"],z=["disabled","onClick"],G={key:1,class:"fs-8"},K={key:0,class:"col-auto"},H=["disabled"],J={key:0,class:"invalid-feedback d-block"},Q={class:"col-md-12"},W=["for"],X={key:0,class:"text-danger"},Y={class:"col-md-12"},Z=["for"],ee={key:0,class:"text-danger"},te={class:"col-md-12"},ae=["for"],ie={key:0,class:"text-danger"},le={class:"col-md-4"},se=["for"],oe={key:0,class:"text-danger"},ne={class:"col-md-4"},de=["for"],re={key:0,class:"text-danger"},ce={class:"col-md-4"},me=["for"],ue={key:0,class:"text-danger"},ye={class:"col-md-4"},ve=["for"],fe={key:0,class:"text-danger"},be=l("option",{value:"",disabled:""},"請選擇",-1),pe=["value"],he={key:0,class:"invalid-feedback form-help"},ge={class:"col-md-4"},_e=["for"],ke={key:0,class:"text-danger"},Ve={key:0,class:"invalid-feedback form-help"},De={class:"col-md-4"},Le=["for"],Te={key:0,class:"text-danger"},Ie={class:"input-group"},xe=l("span",{class:"input-group-text"},"NT$",-1),Oe={class:"col-md-4"},we=["for"],Ee={key:0,class:"text-danger"},$e=l("option",{value:"",disabled:""},"請選擇",-1),Me=["value"],Ne={key:0,class:"invalid-feedback form-help"},Re={class:"col-md-4"},Ue=["for"],qe={key:0,class:"text-danger"},Ce=l("option",{value:""},"請選擇",-1),Be=["value"],Se={class:"col-md-4 align-self-center"},Fe={class:"form-label d-block"},Ae={key:0,class:"text-danger"},je=["for"],Pe={class:"col-md-12"},ze=["for"],Ge={key:0,class:"text-danger"},Ke={class:"row g-1"},He=["for"],Je={class:"col-12 text-end border-top pt-3 mt-4 mt-md-5"},Qe=["disabled"],We={key:0,class:"spinner-border spinner-border-sm",role:"status"},Xe={data(){return{title:"",activityId:"",certificateLevels:[],cylinderTotals:[],form:{}}},inject:["frontLayoutData"],computed:{...T(I,["isLoadingBtn"]),...T(O,["locations","tags"])},components:{VForm:R,Field:f,ErrorMessage:b,UploadImg:w,FormUtilitieLayoutVue:E},beforeRouteEnter(y,a,s){M(y,a,s)},created(){this.$watch(()=>this.$route.params,(y,a)=>{const{path:s}=this.$route;(s.indexOf("/addActivity")>-1||s.indexOf("/editActivity")>-1)&&(this.frontLayoutData.showSearchBar=!1),this.showLoading(),this.setInitform(),this.activityId=y.activityId,this.activityId?(this.getActivity(this.activityId).then(k=>this.form=k),this.hideLoading()):this.hideLoading()},{immediate:!0}),this.fetchData()},methods:{...L(I,["showLoading","hideLoading"]),...L(O,["getCertificateLevels","getCylinderTotals","getLocations","getTags"]),...L(q,["updateActivity","getActivity"]),setInitform(){this.form={title:"",imgs:{img_1:{img:"",isMain:!0}},locationId:"",features:"",content:"",startDate:"",endDate:"",orderExpiryDate:"",maxOrderTotal:null,cost:null,certificateLevelId:null,cylinderTotalId:"",isNitrox:null,tags:[]}},fetchData(){this.title=this.activityId?"編輯":"新增",Promise.all([this.getCertificateLevels(),this.getCylinderTotals()]).then(y=>{this.certificateLevels=y[0],this.cylinderTotals=y[1],this.hideLoading()})},changeImg(y){if(y)delete this.form.imgs[y];else{const a=`img_${N(new Date)}`;this.form.imgs[a]={img:"",isMain:!1}}},setMainImg(y){Object.keys(this.form.imgs).forEach(a=>{this.form.imgs[a].isMain=a===y})},showImgsErrMsg(y){return Object.keys(y).some(a=>a.indexOf("img")>-1)},onSubmit(){this.showLoading("btn"),this.updateActivity(this.form)}}},rt=Object.assign(Xe,{__name:"EditActivityView",setup(y){return(a,s)=>{const k=x("font-awesome-icon"),$=x("VForm");return o(),U(E,{title:`${a.title}揪團`,"en-title":"Activity",img:e(C)},{body:g(()=>[d($,{onSubmit:a.onSubmit},{default:g(({errors:m})=>[l("fieldset",{disabled:a.isLoadingBtn,class:"row g-3"},[l("div",S,[l("label",F,[u(r(e(t).activity.imgs.label),1),e(t).activity.imgs.isRequired?(o(),n("span",A,"*")):c("",!0)]),l("div",j,[(o(!0),n(h,null,_(a.form.imgs,(i,p)=>(o(),n("div",{class:"col-auto",key:p},[d(w,{errors:m,showErrMsg:!1,isRequired:i.isMain&&!i.img,inputName:p,img:i.img,"onUpdate:img":V=>i.img=V},{imgFunctions:g(()=>[l("div",{class:v(["img-functions cursor-default",{"opacity-90":i.isMain}]),onClick:s[0]||(s[0]=D(()=>{},["prevent","self"]))},[i.isMain?(o(),n("span",G,"封面")):(o(),n(h,{key:0},[l("button",{type:"button",class:"btn btn-link btn-sm fs-8 text-lightPrimary text-decoration-none flex-shrink-0 px-0",disabled:a.isLoadingBtn,onClick:D(V=>a.setMainImg(p),["self"])},"設為封面",8,P),l("button",{type:"button",class:"btn btn-link btn-sm fs-8 text-lightPrimary text-decoration-none flex-shrink-0 px-0",disabled:a.isLoadingBtn,onClick:D(V=>a.changeImg(p),["self"])},"刪除",8,z)],64))],2)]),_:2},1032,["errors","isRequired","inputName","img","onUpdate:img"])]))),128)),3>Object.keys(a.form.imgs).length?(o(),n("div",K,[l("button",{type:"button",class:"btn opacity-50 file-img",disabled:a.isLoadingBtn,onClick:s[1]||(s[1]=i=>a.changeImg())},[d(k,{icon:"fa-solid fa-plus",size:"2x",class:"icon-color"})],8,H)])):c("",!0)]),a.showImgsErrMsg(m)?(o(),n("span",J,"須為圖片格式，且檔案須小於 1024 KB")):c("",!0)]),l("div",Q,[l("label",{for:e(t).activity.title.name,class:"form-label"},[u(r(e(t).activity.title.label),1),e(t).activity.title.isRequired?(o(),n("span",X,"*")):c("",!0)],8,W),d(e(f),{id:e(t).activity.title.name,name:e(t).activity.title.label,type:e(t).activity.title.type,class:v(["form-control",{"is-invalid":m[e(t).activity.title.label]}]),placeholder:`請輸入${e(t).activity.title.label}`,rules:e(t).activity.title.rules,modelValue:a.form.title,"onUpdate:modelValue":s[2]||(s[2]=i=>a.form.title=i),modelModifiers:{trim:!0}},null,8,["id","name","type","class","placeholder","rules","modelValue"]),d(e(b),{name:e(t).activity.title.label,class:"invalid-feedback"},null,8,["name"])]),l("div",Y,[l("label",{for:e(t).activity.features.name,class:"form-label"},[u(r(e(t).activity.features.label),1),e(t).activity.features.isRequired?(o(),n("span",ee,"*")):c("",!0)],8,Z),d(e(f),{id:e(t).activity.features.name,name:e(t).activity.features.label,class:v(["form-control",{"is-invalid":m[e(t).activity.features.label]}]),as:e(t).activity.features.as,placeholder:`請輸入${e(t).activity.features.label}`,rules:e(t).activity.features.rules,modelValue:a.form.features,"onUpdate:modelValue":s[3]||(s[3]=i=>a.form.features=i),modelModifiers:{trim:!0},rows:"10"},null,8,["id","name","as","class","placeholder","rules","modelValue"]),d(e(b),{name:e(t).activity.features.label,class:"invalid-feedback"},null,8,["name"])]),l("div",te,[l("label",{for:e(t).activity.content.name,class:"form-label"},[u(r(e(t).activity.content.label),1),e(t).activity.content.isRequired?(o(),n("span",ie,"*")):c("",!0)],8,ae),d(e(f),{id:e(t).activity.content.name,name:e(t).activity.content.label,class:v(["form-control",{"is-invalid":m[e(t).activity.content.label]}]),as:e(t).activity.features.as,placeholder:`請輸入${e(t).activity.content.label}`,rules:e(t).activity.content.rules,modelValue:a.form.content,"onUpdate:modelValue":s[4]||(s[4]=i=>a.form.content=i),modelModifiers:{trim:!0},rows:"10"},null,8,["id","name","as","class","placeholder","rules","modelValue"]),d(e(b),{name:e(t).activity.content.label,class:"invalid-feedback"},null,8,["name"])]),l("div",le,[l("label",{for:e(t).activity.startDate.name,class:"form-label"},[u(r(e(t).activity.startDate.label),1),e(t).activity.startDate.isRequired?(o(),n("span",oe,"*")):c("",!0)],8,se),d(e(f),{id:e(t).activity.startDate.name,name:e(t).activity.startDate.label,type:e(t).activity.startDate.type,as:e(t).activity.startDate.as,class:v(["form-control",{"is-invalid":m[e(t).activity.startDate.label]}]),rules:e(t).activity.startDate.rules,modelValue:a.form.startDate,"onUpdate:modelValue":s[5]||(s[5]=i=>a.form.startDate=i)},null,8,["id","name","type","as","class","rules","modelValue"]),d(e(b),{name:e(t).activity.startDate.label,class:"invalid-feedback"},null,8,["name"])]),l("div",ne,[l("label",{for:e(t).activity.endDate.name,class:"form-label"},[u(r(e(t).activity.endDate.label),1),e(t).activity.endDate.isRequired?(o(),n("span",re,"*")):c("",!0)],8,de),d(e(f),{id:e(t).activity.endDate.name,name:e(t).activity.endDate.label,type:e(t).activity.endDate.type,as:e(t).activity.endDate.as,class:v(["form-control",{"is-invalid":m[e(t).activity.endDate.label]}]),rules:e(t).activity.endDate.rules,modelValue:a.form.endDate,"onUpdate:modelValue":s[6]||(s[6]=i=>a.form.endDate=i)},null,8,["id","name","type","as","class","rules","modelValue"]),d(e(b),{name:e(t).activity.endDate.label,class:"invalid-feedback"},null,8,["name"])]),l("div",ce,[l("label",{for:e(t).activity.orderExpiryDate.name,class:"form-label"},[u(r(e(t).activity.orderExpiryDate.label),1),e(t).activity.orderExpiryDate.isRequired?(o(),n("span",ue,"*")):c("",!0)],8,me),d(e(f),{id:e(t).activity.orderExpiryDate.name,name:e(t).activity.orderExpiryDate.label,type:e(t).activity.orderExpiryDate.type,as:e(t).activity.orderExpiryDate.as,class:v(["form-control",{"is-invalid":m[e(t).activity.orderExpiryDate.label]}]),rules:e(t).activity.orderExpiryDate.rules,modelValue:a.form.orderExpiryDate,"onUpdate:modelValue":s[7]||(s[7]=i=>a.form.orderExpiryDate=i)},null,8,["id","name","type","as","class","rules","modelValue"]),d(e(b),{name:e(t).activity.orderExpiryDate.label,class:"invalid-feedback"},null,8,["name"])]),l("div",ye,[l("label",{for:e(t).activity.locationId.name,class:"form-label"},[u(r(e(t).activity.locationId.label),1),e(t).activity.locationId.isRequired?(o(),n("span",fe,"*")):c("",!0)],8,ve),d(e(f),{id:e(t).activity.locationId.name,name:e(t).activity.locationId.label,as:e(t).activity.locationId.as,class:v(["form-select",{"is-invalid":m[e(t).activity.locationId.label]}]),rules:e(t).activity.locationId.rules,modelValue:a.form.locationId,"onUpdate:modelValue":s[8]||(s[8]=i=>a.form.locationId=i)},{default:g(()=>[be,(o(!0),n(h,null,_(a.locations,i=>(o(),n("option",{key:i.id,value:i.id},r(i.name),9,pe))),128))]),_:2},1032,["id","name","as","class","rules","modelValue"]),d(e(b),{name:e(t).activity.locationId.label,class:"invalid-feedback"},null,8,["name"]),m[e(t).activity.locationId.label]?c("",!0):(o(),n("span",he,r(e(t).activity.locationId.help),1))]),l("div",ge,[l("label",{for:e(t).activity.maxOrderTotal.name,class:"form-label"},[u(r(e(t).activity.maxOrderTotal.label),1),e(t).activity.maxOrderTotal.isRequired?(o(),n("span",ke,"*")):c("",!0)],8,_e),d(e(f),{id:e(t).activity.maxOrderTotal.name,name:e(t).activity.maxOrderTotal.label,type:e(t).activity.cost.type,as:e(t).activity.maxOrderTotal.as,class:v(["form-control",{"is-invalid":m[e(t).activity.maxOrderTotal.label]}]),rules:e(t).activity.maxOrderTotal.rules,modelValue:a.form.maxOrderTotal,"onUpdate:modelValue":s[9]||(s[9]=i=>a.form.maxOrderTotal=i),modelModifiers:{number:!0}},null,8,["id","name","type","as","class","rules","modelValue"]),d(e(b),{name:e(t).activity.maxOrderTotal.label,class:"invalid-feedback"},null,8,["name"]),m[e(t).activity.maxOrderTotal.label]?c("",!0):(o(),n("span",Ve,r(e(t).activity.maxOrderTotal.help),1))]),l("div",De,[l("label",{for:e(t).activity.cost.name,class:"form-label"},[u(r(e(t).activity.cost.label),1),e(t).activity.cost.isRequired?(o(),n("span",Te,"*")):c("",!0)],8,Le),l("div",Ie,[xe,d(e(f),{id:e(t).activity.cost.name,name:e(t).activity.cost.label,type:e(t).activity.cost.type,as:e(t).activity.cost.as,class:v(["form-control",{"is-invalid":m[e(t).activity.cost.label]}]),rules:e(t).activity.cost.rules,modelValue:a.form.cost,"onUpdate:modelValue":s[10]||(s[10]=i=>a.form.cost=i),modelModifiers:{number:!0}},null,8,["id","name","type","as","class","rules","modelValue"])]),d(e(b),{name:e(t).activity.cost.label,class:"invalid-feedback d-block"},null,8,["name"])]),l("div",Oe,[l("label",{for:e(t).activity.certificateLevel.name,class:"form-label"},[u(r(e(t).activity.certificateLevel.label),1),e(t).activity.certificateLevel.isRequired?(o(),n("span",Ee,"*")):c("",!0)],8,we),d(e(f),{id:e(t).activity.certificateLevel.name,name:e(t).activity.certificateLevel.label,as:e(t).activity.certificateLevel.as,class:v(["form-select",{"is-invalid":m[e(t).activity.certificateLevel.label]}]),rules:e(t).activity.certificateLevel.rules,modelValue:a.form.certificateLevelId,"onUpdate:modelValue":s[11]||(s[11]=i=>a.form.certificateLevelId=i)},{default:g(()=>[$e,(o(!0),n(h,null,_(a.certificateLevels,i=>(o(),n("option",{key:i.id,value:i.id},r(i.name),9,Me))),128))]),_:2},1032,["id","name","as","class","rules","modelValue"]),d(e(b),{name:e(t).activity.certificateLevel.label,class:"invalid-feedback"},null,8,["name"]),m[e(t).activity.certificateLevel.label]?c("",!0):(o(),n("span",Ne,r(e(t).activity.certificateLevel.help),1))]),l("div",Re,[l("label",{for:e(t).cylinderTotal.name,class:"form-label d-block"},[u(r(e(t).cylinderTotal.label),1),e(t).cylinderTotal.isRequired?(o(),n("span",qe,"*")):c("",!0)],8,Ue),d(e(f),{class:v([{"is-invalid":m[e(t).cylinderTotal.label]},"form-select"]),id:e(t).cylinderTotal.name,name:e(t).cylinderTotal.label,as:e(t).cylinderTotal.as,rules:e(t).cylinderTotal.rules,modelValue:a.form.cylinderTotalId,"onUpdate:modelValue":s[12]||(s[12]=i=>a.form.cylinderTotalId=i)},{default:g(()=>[Ce,(o(!0),n(h,null,_(a.cylinderTotals,i=>(o(),n("option",{key:i.id,value:i.id},r(i.name),9,Be))),128))]),_:2},1032,["class","id","name","as","rules","modelValue"]),d(e(b),{name:e(t).cylinderTotal.label,class:"invalid-feedback"},null,8,["name"])]),l("div",Se,[l("label",Fe,[u(r(e(t).isNitrox.label),1),e(t).isNitrox.isRequired?(o(),n("span",Ae,"*")):c("",!0)]),(o(!0),n(h,null,_(e(t).isNitrox.options,i=>(o(),n("div",{class:"form-check form-check-inline",key:i},[d(e(f),{class:v([{"is-invalid":m[e(t).isNitrox.label]},"form-check-input"]),id:`${e(t).isNitrox.name}-${i}`,name:e(t).isNitrox.label,type:e(t).isNitrox.type,value:i,rules:e(t).isNitrox.rules,modelValue:a.form.isNitrox,"onUpdate:modelValue":s[13]||(s[13]=p=>a.form.isNitrox=p)},null,8,["class","id","name","type","value","rules","modelValue"]),l("label",{class:"form-check-label",for:`${e(t).isNitrox.name}-${i}`},r(i?"是":"否"),9,je)]))),128)),d(e(b),{name:e(t).isNitrox.label,class:"invalid-feedback d-block"},null,8,["name"])]),l("div",Pe,[l("label",{for:e(t).activity.tags.name,class:"form-label d-block"},[u(r(e(t).activity.tags.label),1),e(t).activity.tags.isRequired?(o(),n("span",Ge,"*")):c("",!0)],8,ze),l("div",Ke,[(o(!0),n(h,null,_(a.tags,i=>(o(),n("div",{class:"col-auto",key:i},[d(e(f),{id:`${e(t).activity.tags.name}-${i}`,name:e(t).activity.tags.label,type:e(t).activity.tags.type,as:e(t).activity.tags.as,class:v(["btn-check",{"is-invalid":m[e(t).activity.tags.label]}]),value:i,rules:e(t).activity.tags.rules,modelValue:a.form.tags,"onUpdate:modelValue":s[14]||(s[14]=p=>a.form.tags=p)},null,8,["id","name","type","as","value","class","rules","modelValue"]),l("label",{class:"btn btn-outline-primary btn-sm rounded-0",for:`${e(t).activity.tags.name}-${i}`},r(i),9,He)]))),128))]),d(e(b),{name:e(t).activity.tags.label,class:"invalid-feedback d-block"},null,8,["name"])]),l("div",Je,[l("button",{type:"submit",class:"btn btn-primary btn-custom-rectangle",disabled:a.isLoadingBtn||Object.keys(m).length},[a.isLoadingBtn?(o(),n("span",We)):c("",!0),u(" "+r(a.title),1)],8,Qe)])],8,B)]),_:1},8,["onSubmit"])]),_:1},8,["title","img"])}}});export{rt as default};
