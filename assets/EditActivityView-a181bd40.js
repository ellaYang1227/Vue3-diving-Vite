import{F as U,a as N,E as R}from"./vee-validate.esm-8ceb177b.js";import{_ as q,m as L,L as T,a as x,an as F,w as b,r as S,o as l,b as a,d as i,as as f,bf as m,c as s,ao as r,b3 as p,aO as d,F as v}from"./dateFormat-6766bd6f.js";import{O as I}from"./OptionStore-cfa2ec0c.js";import{M as C}from"./MemberStore-6585b4c4.js";import{f as B}from"./formSchema-19c1282a.js";import{a as A}from"./routeGuard-f40f08ef.js";import{a as j}from"./ActivityStore-7cef511e.js";import{U as P}from"./UploadImg-26a08251.js";import{F as z}from"./FormUtilitieLayout-f4e04d91.js";import{n as V}from"./runtime-dom.esm-bundler-82de7fb5.js";import"./axiosBase-91228d64.js";const G="/Vue3-diving-Vite/assets/activity-1f5eba6e.jpg";const K={data(){return{formSchema:B,activityImg:G,title:"",activityId:"",certificateLevels:[],cylinderTotals:[],form:{}}},inject:["frontLayoutData"],computed:{...L(T,["isLoadingBtn"]),...L(I,["locations","tags"])},components:{VForm:U,Field:N,ErrorMessage:R,UploadImg:P,FormUtilitieLayoutVue:z},beforeRouteEnter(c,o,_){A(c,o,_)},created(){this.$watch(()=>this.$route.params,(c,o)=>{const{path:_}=this.$route;(_.indexOf("/addActivity")>-1||_.indexOf("/editActivity")>-1)&&(this.frontLayoutData.showSearchBar=!1),this.showLoading(),this.setInitform(),this.activityId=c.activityId,this.activityId?(this.getActivity(this.activityId).then(D=>this.form=D),this.hideLoading()):this.hideLoading()},{immediate:!0}),this.fetchData()},methods:{...x(T,["showLoading","hideLoading"]),...x(I,["getCertificateLevels","getCylinderTotals","getLocations","getTags"]),...x(C,["updateActivity","getActivity"]),setInitform(){this.form={title:"",imgs:{img_1:{img:"",isMain:!0}},locationId:"",features:"",content:"",startDate:"",endDate:"",orderExpiryDate:"",maxOrderTotal:null,cost:null,certificateLevelId:null,cylinderTotalId:"",isNitrox:null,tags:[]}},fetchData(){this.title=this.activityId?"編輯":"新增",Promise.all([this.getCertificateLevels(),this.getCylinderTotals()]).then(c=>{this.certificateLevels=c[0],this.cylinderTotals=c[1],this.hideLoading()})},changeImg(c){if(c)delete this.form.imgs[c];else{const o=`img_${j(new Date)}`;this.form.imgs[o]={img:"",isMain:!1}}},setMainImg(c){Object.keys(this.form.imgs).forEach(o=>{this.form.imgs[o].isMain=o===c})},showImgsErrMsg(c){return Object.keys(c).some(o=>o.indexOf("img")>-1)},onSubmit(){this.showLoading("btn"),this.updateActivity(this.form)}}},H=["disabled"],J={class:"col-12"},Q={class:"form-label d-block"},W={key:0,class:"text-danger"},X={class:"row g-3"},Y=["disabled","onClick"],Z=["disabled","onClick"],$={key:1,class:"fs-8"},ee={key:0,class:"col-auto"},te=["disabled"],ie={key:0,class:"invalid-feedback d-block"},oe={class:"col-md-12"},le=["for"],se={key:0,class:"text-danger"},ae={class:"col-md-12"},me=["for"],ce={key:0,class:"text-danger"},re={class:"col-md-12"},ne=["for"],fe={key:0,class:"text-danger"},de={class:"col-md-4"},ue=["for"],he={key:0,class:"text-danger"},ye={class:"col-md-4"},ve=["for"],be={key:0,class:"text-danger"},Se={class:"col-md-4"},pe=["for"],_e={key:0,class:"text-danger"},ge={class:"col-md-4"},ke=["for"],xe={key:0,class:"text-danger"},Ve=i("option",{value:"",disabled:""},"請選擇",-1),De=["value"],Le={key:0,class:"invalid-feedback form-help"},Te={class:"col-md-4"},Ie=["for"],Oe={key:0,class:"text-danger"},Ee={key:0,class:"invalid-feedback form-help"},we={class:"col-md-4"},Me=["for"],Ue={key:0,class:"text-danger"},Ne={class:"input-group"},Re=i("span",{class:"input-group-text"},"NT$",-1),qe={class:"col-md-4"},Fe=["for"],Ce={key:0,class:"text-danger"},Be=i("option",{value:"",disabled:""},"請選擇",-1),Ae=["value"],je={key:0,class:"invalid-feedback form-help"},Pe={class:"col-md-4"},ze=["for"],Ge={key:0,class:"text-danger"},Ke=i("option",{value:""},"請選擇",-1),He=["value"],Je={class:"col-md-4 align-self-center"},Qe={class:"form-label d-block"},We={key:0,class:"text-danger"},Xe=["for"],Ye={class:"col-md-12"},Ze=["for"],$e={key:0,class:"text-danger"},et={class:"row g-1"},tt=["for"],it={class:"col-12 text-end border-top pt-3 mt-4 mt-md-5"},ot=["disabled"],lt={key:0,class:"spinner-border spinner-border-sm",role:"status"};function st(c,o,_,D,e,g){const O=S("UploadImg"),E=S("font-awesome-icon"),u=S("Field"),h=S("ErrorMessage"),w=S("VForm"),M=S("FormUtilitieLayoutVue");return l(),F(M,{title:`${e.title}揪團`,"en-title":"Activity",img:e.activityImg},{body:b(()=>[a(w,{onSubmit:g.onSubmit},{default:b(({errors:n})=>[i("fieldset",{disabled:c.isLoadingBtn,class:"row g-3"},[i("div",J,[i("label",Q,[f(m(e.formSchema.activity.imgs.label),1),e.formSchema.activity.imgs.isRequired?(l(),s("span",W,"*")):r("",!0)]),i("div",X,[(l(!0),s(v,null,p(e.form.imgs,(t,y)=>(l(),s("div",{class:"col-auto",key:y},[a(O,{errors:n,showErrMsg:!1,isRequired:t.isMain&&!t.img,inputName:y,img:t.img,"onUpdate:img":k=>t.img=k},{imgFunctions:b(()=>[i("div",{class:d(["img-functions cursor-default",{"opacity-90":t.isMain}]),onClick:o[0]||(o[0]=V(()=>{},["prevent","self"]))},[t.isMain?(l(),s("span",$,"封面")):(l(),s(v,{key:0},[i("button",{type:"button",class:"btn btn-link btn-sm fs-8 text-lightPrimary text-decoration-none flex-shrink-0 px-0",disabled:c.isLoadingBtn,onClick:V(k=>g.setMainImg(y),["self"])}," 設為封面 ",8,Y),i("button",{type:"button",class:"btn btn-link btn-sm fs-8 text-lightPrimary text-decoration-none flex-shrink-0 px-0",disabled:c.isLoadingBtn,onClick:V(k=>g.changeImg(y),["self"])}," 刪除 ",8,Z)],64))],2)]),_:2},1032,["errors","isRequired","inputName","img","onUpdate:img"])]))),128)),3>Object.keys(e.form.imgs).length?(l(),s("div",ee,[i("button",{type:"button",class:"btn opacity-50 file-img",disabled:c.isLoadingBtn,onClick:o[1]||(o[1]=t=>g.changeImg())},[a(E,{icon:"fa-solid fa-plus",size:"2x",class:"icon-color"})],8,te)])):r("",!0)]),g.showImgsErrMsg(n)?(l(),s("span",ie,"須為圖片格式，且檔案須小於 1024 KB")):r("",!0)]),i("div",oe,[i("label",{for:e.formSchema.activity.title.name,class:"form-label"},[f(m(e.formSchema.activity.title.label),1),e.formSchema.activity.title.isRequired?(l(),s("span",se,"*")):r("",!0)],8,le),a(u,{id:e.formSchema.activity.title.name,name:e.formSchema.activity.title.label,type:e.formSchema.activity.title.type,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.title.label]}]),placeholder:`請輸入${e.formSchema.activity.title.label}`,rules:e.formSchema.activity.title.rules,modelValue:e.form.title,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.title=t),modelModifiers:{trim:!0}},null,8,["id","name","type","class","placeholder","rules","modelValue"]),a(h,{name:e.formSchema.activity.title.label,class:"invalid-feedback"},null,8,["name"])]),i("div",ae,[i("label",{for:e.formSchema.activity.features.name,class:"form-label"},[f(m(e.formSchema.activity.features.label),1),e.formSchema.activity.features.isRequired?(l(),s("span",ce,"*")):r("",!0)],8,me),a(u,{id:e.formSchema.activity.features.name,name:e.formSchema.activity.features.label,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.features.label]}]),as:e.formSchema.activity.features.as,placeholder:`請輸入${e.formSchema.activity.features.label}`,rules:e.formSchema.activity.features.rules,modelValue:e.form.features,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.features=t),modelModifiers:{trim:!0},rows:"10"},null,8,["id","name","as","class","placeholder","rules","modelValue"]),a(h,{name:e.formSchema.activity.features.label,class:"invalid-feedback"},null,8,["name"])]),i("div",re,[i("label",{for:e.formSchema.activity.content.name,class:"form-label"},[f(m(e.formSchema.activity.content.label),1),e.formSchema.activity.content.isRequired?(l(),s("span",fe,"*")):r("",!0)],8,ne),a(u,{id:e.formSchema.activity.content.name,name:e.formSchema.activity.content.label,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.content.label]}]),as:e.formSchema.activity.features.as,placeholder:`請輸入${e.formSchema.activity.content.label}`,rules:e.formSchema.activity.content.rules,modelValue:e.form.content,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.content=t),modelModifiers:{trim:!0},rows:"10"},null,8,["id","name","as","class","placeholder","rules","modelValue"]),a(h,{name:e.formSchema.activity.content.label,class:"invalid-feedback"},null,8,["name"])]),i("div",de,[i("label",{for:e.formSchema.activity.startDate.name,class:"form-label"},[f(m(e.formSchema.activity.startDate.label),1),e.formSchema.activity.startDate.isRequired?(l(),s("span",he,"*")):r("",!0)],8,ue),a(u,{id:e.formSchema.activity.startDate.name,name:e.formSchema.activity.startDate.label,type:e.formSchema.activity.startDate.type,as:e.formSchema.activity.startDate.as,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.startDate.label]}]),rules:e.formSchema.activity.startDate.rules,modelValue:e.form.startDate,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.startDate=t)},null,8,["id","name","type","as","class","rules","modelValue"]),a(h,{name:e.formSchema.activity.startDate.label,class:"invalid-feedback"},null,8,["name"])]),i("div",ye,[i("label",{for:e.formSchema.activity.endDate.name,class:"form-label"},[f(m(e.formSchema.activity.endDate.label),1),e.formSchema.activity.endDate.isRequired?(l(),s("span",be,"*")):r("",!0)],8,ve),a(u,{id:e.formSchema.activity.endDate.name,name:e.formSchema.activity.endDate.label,type:e.formSchema.activity.endDate.type,as:e.formSchema.activity.endDate.as,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.endDate.label]}]),rules:e.formSchema.activity.endDate.rules,modelValue:e.form.endDate,"onUpdate:modelValue":o[6]||(o[6]=t=>e.form.endDate=t)},null,8,["id","name","type","as","class","rules","modelValue"]),a(h,{name:e.formSchema.activity.endDate.label,class:"invalid-feedback"},null,8,["name"])]),i("div",Se,[i("label",{for:e.formSchema.activity.orderExpiryDate.name,class:"form-label"},[f(m(e.formSchema.activity.orderExpiryDate.label),1),e.formSchema.activity.orderExpiryDate.isRequired?(l(),s("span",_e,"*")):r("",!0)],8,pe),a(u,{id:e.formSchema.activity.orderExpiryDate.name,name:e.formSchema.activity.orderExpiryDate.label,type:e.formSchema.activity.orderExpiryDate.type,as:e.formSchema.activity.orderExpiryDate.as,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.orderExpiryDate.label]}]),rules:e.formSchema.activity.orderExpiryDate.rules,modelValue:e.form.orderExpiryDate,"onUpdate:modelValue":o[7]||(o[7]=t=>e.form.orderExpiryDate=t)},null,8,["id","name","type","as","class","rules","modelValue"]),a(h,{name:e.formSchema.activity.orderExpiryDate.label,class:"invalid-feedback"},null,8,["name"])]),i("div",ge,[i("label",{for:e.formSchema.activity.locationId.name,class:"form-label"},[f(m(e.formSchema.activity.locationId.label),1),e.formSchema.activity.locationId.isRequired?(l(),s("span",xe,"*")):r("",!0)],8,ke),a(u,{id:e.formSchema.activity.locationId.name,name:e.formSchema.activity.locationId.label,as:e.formSchema.activity.locationId.as,class:d(["form-select",{"is-invalid":n[e.formSchema.activity.locationId.label]}]),rules:e.formSchema.activity.locationId.rules,modelValue:e.form.locationId,"onUpdate:modelValue":o[8]||(o[8]=t=>e.form.locationId=t)},{default:b(()=>[Ve,(l(!0),s(v,null,p(c.locations,t=>(l(),s("option",{key:t.id,value:t.id},m(t.name),9,De))),128))]),_:2},1032,["id","name","as","class","rules","modelValue"]),a(h,{name:e.formSchema.activity.locationId.label,class:"invalid-feedback"},null,8,["name"]),n[e.formSchema.activity.locationId.label]?r("",!0):(l(),s("span",Le,m(e.formSchema.activity.locationId.help),1))]),i("div",Te,[i("label",{for:e.formSchema.activity.maxOrderTotal.name,class:"form-label"},[f(m(e.formSchema.activity.maxOrderTotal.label),1),e.formSchema.activity.maxOrderTotal.isRequired?(l(),s("span",Oe,"*")):r("",!0)],8,Ie),a(u,{id:e.formSchema.activity.maxOrderTotal.name,name:e.formSchema.activity.maxOrderTotal.label,type:e.formSchema.activity.maxOrderTotal.type,min:e.formSchema.activity.maxOrderTotal.min,as:e.formSchema.activity.maxOrderTotal.as,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.maxOrderTotal.label]}]),rules:e.formSchema.activity.maxOrderTotal.rules,modelValue:e.form.maxOrderTotal,"onUpdate:modelValue":o[9]||(o[9]=t=>e.form.maxOrderTotal=t),modelModifiers:{number:!0}},null,8,["id","name","type","min","as","class","rules","modelValue"]),a(h,{name:e.formSchema.activity.maxOrderTotal.label,class:"invalid-feedback"},null,8,["name"]),n[e.formSchema.activity.maxOrderTotal.label]?r("",!0):(l(),s("span",Ee,m(e.formSchema.activity.maxOrderTotal.help),1))]),i("div",we,[i("label",{for:e.formSchema.activity.cost.name,class:"form-label"},[f(m(e.formSchema.activity.cost.label),1),e.formSchema.activity.cost.isRequired?(l(),s("span",Ue,"*")):r("",!0)],8,Me),i("div",Ne,[Re,a(u,{id:e.formSchema.activity.cost.name,name:e.formSchema.activity.cost.label,type:e.formSchema.activity.cost.type,min:e.formSchema.activity.cost.min,as:e.formSchema.activity.cost.as,class:d(["form-control",{"is-invalid":n[e.formSchema.activity.cost.label]}]),rules:e.formSchema.activity.cost.rules,modelValue:e.form.cost,"onUpdate:modelValue":o[10]||(o[10]=t=>e.form.cost=t),modelModifiers:{number:!0}},null,8,["id","name","type","min","as","class","rules","modelValue"])]),a(h,{name:e.formSchema.activity.cost.label,class:"invalid-feedback d-block"},null,8,["name"])]),i("div",qe,[i("label",{for:e.formSchema.activity.certificateLevel.name,class:"form-label"},[f(m(e.formSchema.activity.certificateLevel.label),1),e.formSchema.activity.certificateLevel.isRequired?(l(),s("span",Ce,"*")):r("",!0)],8,Fe),a(u,{id:e.formSchema.activity.certificateLevel.name,name:e.formSchema.activity.certificateLevel.label,as:e.formSchema.activity.certificateLevel.as,class:d(["form-select",{"is-invalid":n[e.formSchema.activity.certificateLevel.label]}]),rules:e.formSchema.activity.certificateLevel.rules,modelValue:e.form.certificateLevelId,"onUpdate:modelValue":o[11]||(o[11]=t=>e.form.certificateLevelId=t)},{default:b(()=>[Be,(l(!0),s(v,null,p(e.certificateLevels,t=>(l(),s("option",{key:t.id,value:t.id},m(t.name),9,Ae))),128))]),_:2},1032,["id","name","as","class","rules","modelValue"]),a(h,{name:e.formSchema.activity.certificateLevel.label,class:"invalid-feedback"},null,8,["name"]),n[e.formSchema.activity.certificateLevel.label]?r("",!0):(l(),s("span",je,m(e.formSchema.activity.certificateLevel.help),1))]),i("div",Pe,[i("label",{for:e.formSchema.cylinderTotal.name,class:"form-label d-block"},[f(m(e.formSchema.cylinderTotal.label),1),e.formSchema.cylinderTotal.isRequired?(l(),s("span",Ge,"*")):r("",!0)],8,ze),a(u,{class:d([{"is-invalid":n[e.formSchema.cylinderTotal.label]},"form-select"]),id:e.formSchema.cylinderTotal.name,name:e.formSchema.cylinderTotal.label,as:e.formSchema.cylinderTotal.as,rules:e.formSchema.cylinderTotal.rules,modelValue:e.form.cylinderTotalId,"onUpdate:modelValue":o[12]||(o[12]=t=>e.form.cylinderTotalId=t)},{default:b(()=>[Ke,(l(!0),s(v,null,p(e.cylinderTotals,t=>(l(),s("option",{key:t.id,value:t.id},m(t.name),9,He))),128))]),_:2},1032,["class","id","name","as","rules","modelValue"]),a(h,{name:e.formSchema.cylinderTotal.label,class:"invalid-feedback"},null,8,["name"])]),i("div",Je,[i("label",Qe,[f(m(e.formSchema.isNitrox.label),1),e.formSchema.isNitrox.isRequired?(l(),s("span",We,"*")):r("",!0)]),(l(!0),s(v,null,p(e.formSchema.isNitrox.options,t=>(l(),s("div",{class:"form-check form-check-inline",key:t},[a(u,{class:d([{"is-invalid":n[e.formSchema.isNitrox.label]},"form-check-input"]),id:`${e.formSchema.isNitrox.name}-${t}`,name:e.formSchema.isNitrox.label,type:e.formSchema.isNitrox.type,value:t,rules:e.formSchema.isNitrox.rules,modelValue:e.form.isNitrox,"onUpdate:modelValue":o[13]||(o[13]=y=>e.form.isNitrox=y)},null,8,["class","id","name","type","value","rules","modelValue"]),i("label",{class:"form-check-label",for:`${e.formSchema.isNitrox.name}-${t}`},m(t?"是":"否"),9,Xe)]))),128)),a(h,{name:e.formSchema.isNitrox.label,class:"invalid-feedback d-block"},null,8,["name"])]),i("div",Ye,[i("label",{for:e.formSchema.activity.tags.name,class:"form-label d-block"},[f(m(e.formSchema.activity.tags.label),1),e.formSchema.activity.tags.isRequired?(l(),s("span",$e,"*")):r("",!0)],8,Ze),i("div",et,[(l(!0),s(v,null,p(c.tags,t=>(l(),s("div",{class:"col-auto",key:t},[a(u,{id:`${e.formSchema.activity.tags.name}-${t}`,name:e.formSchema.activity.tags.label,type:e.formSchema.activity.tags.type,as:e.formSchema.activity.tags.as,class:d(["btn-check",{"is-invalid":n[e.formSchema.activity.tags.label]}]),value:t,rules:e.formSchema.activity.tags.rules,modelValue:e.form.tags,"onUpdate:modelValue":o[14]||(o[14]=y=>e.form.tags=y)},null,8,["id","name","type","as","value","class","rules","modelValue"]),i("label",{class:"btn btn-outline-primary btn-sm rounded-0",for:`${e.formSchema.activity.tags.name}-${t}`},m(t),9,tt)]))),128))]),a(h,{name:e.formSchema.activity.tags.label,class:"invalid-feedback d-block"},null,8,["name"])]),i("div",it,[i("button",{type:"submit",class:"btn btn-primary btn-custom-rectangle",disabled:c.isLoadingBtn||Object.keys(n).length},[c.isLoadingBtn?(l(),s("span",lt)):r("",!0),f(" "+m(e.title),1)],8,ot)])],8,H)]),_:1},8,["onSubmit"])]),_:1},8,["title","img"])}const bt=q(K,[["render",st]]);export{bt as default};
