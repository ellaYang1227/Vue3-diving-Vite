import{F,a as M,E as U}from"./vee-validate.esm-8ceb177b.js";import{m as N,bx as C,a as y,L as q,_ as O,r as p,o as m,an as D,w as x,d as o,b as a,c as r,as as f,bf as t,ao as n,aO as h,F as b,b3 as v}from"./dateFormat-6766bd6f.js";import{M as V}from"./MemberStore-6585b4c4.js";import{O as E}from"./OptionStore-cfa2ec0c.js";import{f as R}from"./formSchema-19c1282a.js";import{U as B}from"./UploadImg-26a08251.js";const j={data(){return{formSchema:R,certificateLevels:[],cylinderTotals:[],form:{email:"",password:"",name:"",img:"",certificateLevelId:null,isNitrox:null,cylinderTotalId:""},isLoadingSubmit:!1}},components:{VForm:F,Field:M,ErrorMessage:U,UploadImg:B},computed:{...N(C,["user"]),...N(V,["myinfo"])},watch:{myinfo(){this.setInitialFormData()}},created(){this.$watch(()=>this.$route.params,()=>{const{path:i}=this.$route;(i.indexOf("/signup")>-1||i.indexOf("/editMyinfo")>-1)&&this.fetchData()},{immediate:!0})},methods:{...y(q,["hideLoading"]),...y(E,["getCertificateLevels","getCylinderTotals"]),...y(V,["signup","updateMyinfo"]),fetchData(){Promise.all([this.getCertificateLevels(),this.getCylinderTotals()]).then(i=>{this.certificateLevels=i[0],this.cylinderTotals=i[1],this.setInitialFormData(),this.hideLoading()})},setInitialFormData(){var i,s;this.form={email:"",password:"",name:"",img:"",certificateLevelId:null,isNitrox:null,cylinderTotalId:""},(i=this.user)!=null&&i.id&&((s=this.myinfo)!=null&&s.email)&&Object.keys(this.form).forEach(S=>this.form[S]=this.myinfo[S])},onSubmit(){var i;if(this.isLoadingSubmit=!0,(i=this.user)!=null&&i.id)this.updateMyinfo(this.form).then(s=>this.isLoadingSubmit=!1);else{const{returnUrl:s}=this.$route.query;this.signup(this.form,s).then(g=>this.isLoadingSubmit=!1)}}}},z=["disabled"],A={class:"col-12"},K={class:"col-md-6"},P=["for"],G={key:0,class:"text-danger"},H={class:"col-md-6"},J=["for"],Q={key:0,class:"text-danger"},W={key:0,class:"invalid-feedback form-help"},X={class:"col-md-6"},Y=["for"],Z={key:0,class:"text-danger"},$={class:"col-12 border-top pt-3"},ee=o("div",{class:"alert alert-warning",role:"alert"},"警告：請確實勾選您的證照，出團時，須提供證件審查；如有不實，則受退團處分，且不予退費。",-1),le={class:"form-label d-block"},se={key:0,class:"text-danger"},oe=["for"],me={class:"col-12"},re={class:"form-label d-block"},ie={key:0,class:"text-danger"},ae=["for"],te={class:"col-auto"},ce=["for"],ne={key:0,class:"text-danger"},fe=o("option",{value:"",disabled:""},"請選擇",-1),de=["value"],ue={class:"col-12 text-end border-top pt-3 mt-4 mt-md-5"},he=["disabled"],pe={key:0,class:"spinner-border spinner-border-sm",role:"status"};function be(i,s,g,S,e,w){const T=p("UploadImg"),d=p("Field"),u=p("ErrorMessage"),I=p("VForm");return m(),D(I,{onSubmit:w.onSubmit},{default:x(({errors:c})=>{var k,L;return[o("fieldset",{disabled:e.isLoadingSubmit,class:"row g-3"},[o("div",A,[a(T,{errors:c,img:e.form.img,"onUpdate:img":s[0]||(s[0]=l=>e.form.img=l)},null,8,["errors","img"])]),(k=i.user)!=null&&k.id?n("",!0):(m(),r(b,{key:0},[o("div",K,[o("label",{for:e.formSchema.email.name,class:"form-label"},[f(t(e.formSchema.email.label),1),e.formSchema.email.isRequired?(m(),r("span",G,"*")):n("",!0)],8,P),a(d,{id:e.formSchema.email.name,name:e.formSchema.email.label,type:e.formSchema.email.type,class:h(["form-control",{"is-invalid":c[e.formSchema.email.label]}]),placeholder:`請輸入 ${e.formSchema.email.label}`,rules:e.formSchema.email.rules,modelValue:e.form.email,"onUpdate:modelValue":s[1]||(s[1]=l=>e.form.email=l),modelModifiers:{trim:!0}},null,8,["id","name","type","class","placeholder","rules","modelValue"]),a(u,{name:e.formSchema.email.label,class:"invalid-feedback"},null,8,["name"])]),o("div",H,[o("label",{for:e.formSchema.password.name,class:"form-label"},[f(t(e.formSchema.password.label),1),e.formSchema.password.isRequired?(m(),r("span",Q,"*")):n("",!0)],8,J),a(d,{id:e.formSchema.password.name,name:e.formSchema.password.label,type:e.formSchema.password.type,class:h(["form-control",{"is-invalid":c[e.formSchema.password.label]}]),placeholder:`請輸入${e.formSchema.password.label}`,rules:e.formSchema.password.rules.full,modelValue:e.form.password,"onUpdate:modelValue":s[2]||(s[2]=l=>e.form.password=l),modelModifiers:{trim:!0}},null,8,["id","name","type","class","placeholder","rules","modelValue"]),a(u,{name:e.formSchema.password.label,class:"invalid-feedback"},null,8,["name"]),c[e.formSchema.password.label]?n("",!0):(m(),r("span",W,t(e.formSchema.password.help),1))])],64)),o("div",X,[o("label",{for:e.formSchema.userName.name,class:"form-label"},[f(t(e.formSchema.userName.label),1),e.formSchema.userName.isRequired?(m(),r("span",Z,"*")):n("",!0)],8,Y),a(d,{id:e.formSchema.userName.name,name:e.formSchema.userName.label,type:e.formSchema.userName.type,class:h(["form-control",{"is-invalid":c[e.formSchema.userName.label]}]),placeholder:`請輸入${e.formSchema.userName.label}`,rules:e.formSchema.userName.rules,modelValue:e.form.name,"onUpdate:modelValue":s[3]||(s[3]=l=>e.form.name=l),modelModifiers:{trim:!0}},null,8,["id","name","type","class","placeholder","rules","modelValue"]),a(u,{name:e.formSchema.userName.label,class:"invalid-feedback"},null,8,["name"])]),o("div",$,[ee,o("label",le,[f(t(e.formSchema.certificateLevel.label),1),e.formSchema.certificateLevel.isRequired?(m(),r("span",se,"*")):n("",!0)]),(m(!0),r(b,null,v(e.certificateLevels,l=>(m(),r("div",{class:"form-check form-check-inline",key:l.id},[a(d,{class:h([{"is-invalid":c[e.formSchema.certificateLevel.label]},"form-check-input"]),id:`${e.formSchema.certificateLevel.name}-${l.id}`,name:e.formSchema.certificateLevel.label,type:e.formSchema.certificateLevel.type,value:l.id,rules:e.formSchema.certificateLevel.rules,modelValue:e.form.certificateLevelId,"onUpdate:modelValue":s[4]||(s[4]=_=>e.form.certificateLevelId=_)},null,8,["class","id","name","type","value","rules","modelValue"]),o("label",{class:"form-check-label",for:`${e.formSchema.certificateLevel.name}-${l.id}`},t(l.name),9,oe)]))),128)),a(u,{name:e.formSchema.certificateLevel.label,class:"invalid-feedback d-block"},null,8,["name"])]),o("div",me,[o("label",re,[f(t(e.formSchema.isNitrox.label),1),e.formSchema.isNitrox.isRequired?(m(),r("span",ie,"*")):n("",!0)]),(m(!0),r(b,null,v(e.formSchema.isNitrox.options,l=>(m(),r("div",{class:"form-check form-check-inline",key:l},[a(d,{class:h([{"is-invalid":c[e.formSchema.isNitrox.label]},"form-check-input"]),id:`${e.formSchema.isNitrox.name}-${l}`,name:e.formSchema.isNitrox.label,type:e.formSchema.isNitrox.type,value:l,rules:e.formSchema.isNitrox.rules,modelValue:e.form.isNitrox,"onUpdate:modelValue":s[5]||(s[5]=_=>e.form.isNitrox=_)},null,8,["class","id","name","type","value","rules","modelValue"]),o("label",{class:"form-check-label",for:`${e.formSchema.isNitrox.name}-${l}`},t(l?"是":"否"),9,ae)]))),128)),a(u,{name:e.formSchema.isNitrox.label,class:"invalid-feedback d-block"},null,8,["name"])]),o("div",te,[o("label",{for:e.formSchema.cylinderTotal.name,class:"form-label d-block"},[f(t(e.formSchema.cylinderTotal.label),1),e.formSchema.cylinderTotal.isRequired?(m(),r("span",ne,"*")):n("",!0)],8,ce),a(d,{class:h([{"is-invalid":c[e.formSchema.cylinderTotal.label]},"form-select"]),id:e.formSchema.cylinderTotal.name,name:e.formSchema.cylinderTotal.label,as:e.formSchema.cylinderTotal.as,rules:e.formSchema.cylinderTotal.rules,modelValue:e.form.cylinderTotalId,"onUpdate:modelValue":s[6]||(s[6]=l=>e.form.cylinderTotalId=l)},{default:x(()=>[fe,(m(!0),r(b,null,v(e.cylinderTotals,l=>(m(),r("option",{key:l.id,value:l.id},t(l.name),9,de))),128))]),_:2},1032,["class","id","name","as","rules","modelValue"]),a(u,{name:e.formSchema.cylinderTotal.label,class:"invalid-feedback"},null,8,["name"])]),o("div",ue,[o("button",{type:"submit",class:"btn btn-primary btn-custom-rectangle",disabled:e.isLoadingSubmit||Object.keys(c).length},[e.isLoadingSubmit?(m(),r("span",pe)):n("",!0),f(" "+t((L=i.user)!=null&&L.id?"編輯":"註冊"),1)],8,he)])],8,z)]}),_:1},8,["onSubmit"])}const Le=O(j,[["render",be]]);export{Le as M};