import{s as x}from"./vue-multiselect.esm-b0efe0ed.js";import{C as v}from"./bootstrap.esm-e2f1acc9.js";import{i as k,r as V,s as D,t as M,b as L,c as N,S as O}from"./VueStarRating.common-0e75196f.js";import{m as z,a as f,L as A,_ as B,r as u,o as t,c as s,d as a,bf as C,ao as m,aO as h,b as c,F as d,as as b,b3 as y}from"./dateFormat-6766bd6f.js";import{d as F,C as S}from"./decimalFormat-810d8d38.js";import{C as I}from"./CommentCard-c0e74a50.js";const q={data(){return{decimalFormat:F,increment:k,readOnly:V,starSize:D,textClass:M,activeColor:L,inactiveColor:N,showCount:3,findComments:{data:[]},commentCollapse:null,isShowCommentCollapse:!1,selectedSort:"creationDate",sortOptions:[{label:"發文時間",value:"creationDate"},{label:"評論分數",value:"score"}]}},props:{userId:{type:String,required:!0},userName:{type:String,required:!1},isMemberStyle:{type:Boolean,required:!1,default:!1}},computed:{...z(S,["comments","initComments"]),showCommentsData(){return this.isMemberStyle?this.findComments.data:this.findComments.data.slice(0,this.showCount)},collapseCommentsData(){return this.isMemberStyle?[]:this.findComments.data.slice(this.showCount)}},watch:{userId(){this.getCommentsApi()},comments(){const i=this.comments.find(l=>l.userId==this.userId);i&&(this.findComments=i,this.findComments.data.sort((l,o)=>o[this.selectedSort]-l[this.selectedSort]))},selectedSort:{handler(i,l){if(i){const{value:o}=i;this.findComments.data.sort((p,e)=>e[o]-p[o])}}}},components:{VueMultiselect:x,StarRating:O,CommentCard:I},mounted(){this.getCommentsApi()},methods:{...f(A,["hideLoading"]),...f(S,["getComments"]),getCommentsApi(){this.getComments().then(i=>{this.selectedSort=this.sortOptions[0],this.collapseCommentsData.length&&(this.commentCollapse=new v(this.$refs.commentCollapse,{toggle:!1})),this.hideLoading()})},showCommentCollapse(){this.commentCollapse.show(),this.isShowCommentCollapse=!0}}},P={class:"list-group list-group-flush"},R={class:"list-group-item bg-transparent px-0"},E={class:"row gy-3"},T={key:0,class:"col-md-6 mb-0 fw-bold"},U={class:"fs-2 text-lightPrimary font-barlow"},j={class:"fs-2 text-lightPrimary font-barlow"},G=a("small",{class:"d-block"},"評論",-1),H={key:1,class:"ms-auto btn-group col-auto align-self-end"},J={class:"list-group list-group-flush collapse",ref:"commentCollapse"},K={key:1,class:"list-group-item bg-transparent px-0 opacity-75"};function Q(i,l,o,p,e,r){const _=u("StarRating"),w=u("VueMultiselect"),g=u("CommentCard");return t(),s("ul",P,[a("li",R,[a("div",E,[o.isMemberStyle?m("",!0):(t(),s("h5",T,"給「"+C(o.userName)+"」的評論",1)),a("div",{class:h(["d-flex flex-column align-items-center lh-sm",[o.isMemberStyle?"col col-sm-3 col-lg-2":"col"]])},[a("strong",U,C(e.decimalFormat(e.findComments.averageScore,1)),1),c(_,{"text-class":e.textClass,increment:e.increment,rating:e.findComments.averageScore,"read-only":e.readOnly,"star-size":e.starSize,"show-rating":!1,"active-color":e.activeColor,"inactive-color":e.inactiveColor},null,8,["text-class","increment","rating","read-only","star-size","active-color","inactive-color"])],2),a("div",{class:h(["text-center lh-sm",[o.isMemberStyle?"col col-sm-3 col-lg-2":"col"]])},[a("strong",j,[e.findComments.data.length?(t(),s(d,{key:0},[b(C(e.findComments.data.length),1)],64)):(t(),s(d,{key:1},[b("0")],64))]),G],2),o.isMemberStyle?(t(),s("div",H,[c(w,{modelValue:e.selectedSort,"onUpdate:modelValue":l[0]||(l[0]=n=>e.selectedSort=n),options:e.sortOptions,label:"label","track-by":"label",searchable:!1},null,8,["modelValue","options"])])):m("",!0)])]),(t(!0),s(d,null,y(r.showCommentsData,n=>(t(),s("li",{class:"list-group-item bg-transparent px-0",key:n.id},[c(g,{comment:n},null,8,["comment"])]))),128)),r.collapseCommentsData.length?(t(),s("li",{key:0,class:h(["list-group-item bg-transparent px-0",{"py-0":e.isShowCommentCollapse}])},[e.isShowCommentCollapse?m("",!0):(t(),s("button",{key:0,class:"btn btn-link text-lightPrimary p-0 opacity-75",type:"button",onClick:l[1]||(l[1]=(...n)=>r.showCommentCollapse&&r.showCommentCollapse(...n))}," 更多評論 ")),a("ul",J,[(t(!0),s(d,null,y(r.collapseCommentsData,n=>(t(),s("li",{class:"list-group-item bg-transparent px-0",key:n.id},[c(g,{comment:n},null,8,["comment"])]))),128))],512)],2)):m("",!0),r.showCommentsData.length?m("",!0):(t(),s("li",K,"目前沒有評論"))])}const te=B(q,[["render",Q]]);export{te as C};
