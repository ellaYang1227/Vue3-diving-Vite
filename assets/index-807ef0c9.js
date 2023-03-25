var pr=(c,a)=>()=>(a||c((a={exports:{}}).exports,a),a.exports);import{c as ur}from"./runtime-dom.esm-bundler-82de7fb5.js";import{m as Lr,a as dr,L as r4,_ as gr,r as i4,o as xr,c as br,b as f4,w as Nr,d as G1,n as Sr,F as kr,e as U2,f as q,g as yr,h as R4,i as wr,j as Ar,k as Pr,l as Fr,p as Tr,q as Br}from"./dateFormat-6766bd6f.js";import"./bootstrap.esm-e2f1acc9.js";import{l as Dr}from"./loading-3e2a3ab2.js";import"./aos-1758eaf2.js";import{d as $4,c as qr}from"./vee-validate.esm-8ceb177b.js";import{r as Rr}from"./vue.runtime.esm-bundler-2834e5db.js";var GZ=pr((E2,fr)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const $r={data(){return{loadingImg:Dr}},computed:{...Lr(r4,["isLoading","progressValue"])},mounted(){this.setIntervalProgress()},methods:{...dr(r4,["setIntervalProgress"])}},Er=["src"],Ur={class:"progress ms-2 my-2"},Gr=["aria-valuenow"],_r=G1("p",{class:"font-barlow text-uppercase mb-0 text-center ps-4 opacity-80"},"loading...",-1);function Or(c,a,e,s,r,i){const n=i4("VueLoading"),f=i4("RouterView");return xr(),br(kr,null,[f4(n,{active:c.isLoading,"onUpdate:active":a[0]||(a[0]=l=>c.isLoading=l),"background-color":"#083d63",opacity:.85},{default:Nr(()=>[G1("img",{src:r.loadingImg,class:"loading-img",alt:"loading"},null,8,Er),G1("div",Ur,[G1("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":c.progressValue,"aria-valuemin":"0","aria-valuemax":"100",style:Sr({width:`${c.progressValue}%`})},null,12,Gr)]),_r]),_:1},8,["active","opacity"]),f4(f)],64)}const Wr=gr($r,[["render",Or]]);function Z1(c){return Z1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Z1(c)}function _1(c,a){if(!c.vueAxiosInstalled){var e=E4(a)?jr(a):a;if(Yr(e)){var s=Xr(c);if(s){var r=s<3?Zr:Ir;Object.keys(e).forEach(function(i){r(c,i,e[i])}),c.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function Zr(c,a,e){Object.defineProperty(c.prototype,a,{get:function(){return e}}),c[a]=e}function Ir(c,a,e){c.config.globalProperties[a]=e,c[a]=e}function E4(c){return c&&typeof c.get=="function"&&typeof c.post=="function"}function jr(c){return{axios:c,$http:c}}function Yr(c){return Z1(c)==="object"&&Object.keys(c).every(function(a){return E4(c[a])})}function Xr(c){return c&&c.version&&Number(c.version.split(".")[0])}(typeof E2>"u"?"undefined":Z1(E2))=="object"?fr.exports=_1:typeof define=="function"&&define.amd?define([],function(){return _1}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(_1,window.axios);function n4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function z(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?n4(Object(e),!0).forEach(function(s){k(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):n4(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function I1(c){return I1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},I1(c)}function Kr(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function l4(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Qr(c,a,e){return a&&l4(c.prototype,a),e&&l4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function k(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function G2(c,a){return ci(c)||ei(c,a)||U4(c,a)||ri()}function L1(c){return Jr(c)||ai(c)||U4(c)||si()}function Jr(c){if(Array.isArray(c))return N2(c)}function ci(c){if(Array.isArray(c))return c}function ai(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ei(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function U4(c,a){if(c){if(typeof c=="string")return N2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N2(c,a)}}function N2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function si(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ri(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o4=function(){},_2={},G4={},_4=null,O4={mark:o4,measure:o4};try{typeof window<"u"&&(_2=window),typeof document<"u"&&(G4=document),typeof MutationObserver<"u"&&(_4=MutationObserver),typeof performance<"u"&&(O4=performance)}catch{}var ii=_2.navigator||{},t4=ii.userAgent,m4=t4===void 0?"":t4,Y=_2,d=G4,z4=_4,y1=O4;Y.document;var I=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",W4=~m4.indexOf("MSIE")||~m4.indexOf("Trident/"),w1,A1,P1,F1,T1,O="___FONT_AWESOME___",S2=16,Z4="fa",I4="svg-inline--fa",a1="data-fa-i2svg",k2="data-fa-pseudo-element",fi="data-fa-pseudo-element-pending",O2="data-prefix",W2="data-icon",C4="fontawesome-i2svg",ni="async",li=["HTML","HEAD","STYLE","SCRIPT"],j4=function(){try{return!0}catch{return!1}}(),L="classic",N="sharp",Z2=[L,N];function d1(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[L]}})}var h1=d1((w1={},k(w1,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),k(w1,N,{fa:"solid",fass:"solid","fa-solid":"solid"}),w1)),V1=d1((A1={},k(A1,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(A1,N,{solid:"fass"}),A1)),M1=d1((P1={},k(P1,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(P1,N,{fass:"fa-solid"}),P1)),oi=d1((F1={},k(F1,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(F1,N,{"fa-solid":"fass"}),F1)),ti=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Y4="fa-layers-text",mi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,zi=d1((T1={},k(T1,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(T1,N,{900:"fass"}),T1)),X4=[1,2,3,4,5,6,7,8,9,10],Ci=X4.concat([11,12,13,14,15,16,17,18,19,20]),vi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},p1=new Set;Object.keys(V1[L]).map(p1.add.bind(p1));Object.keys(V1[N]).map(p1.add.bind(p1));var Hi=[].concat(Z2,L1(p1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(X4.map(function(c){return"".concat(c,"x")})).concat(Ci.map(function(c){return"w-".concat(c)})),C1=Y.FontAwesomeConfig||{};function hi(c){var a=d.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Vi(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(d&&typeof d.querySelector=="function"){var Mi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Mi.forEach(function(c){var a=G2(c,2),e=a[0],s=a[1],r=Vi(hi(e));r!=null&&(C1[s]=r)})}var K4={styleDefault:"solid",familyDefault:"classic",cssPrefix:Z4,replacementClass:I4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C1.familyPrefix&&(C1.cssPrefix=C1.familyPrefix);var n1=z(z({},K4),C1);n1.autoReplaceSvg||(n1.observeMutations=!1);var C={};Object.keys(K4).forEach(function(c){Object.defineProperty(C,c,{enumerable:!0,set:function(e){n1[c]=e,v1.forEach(function(s){return s(C)})},get:function(){return n1[c]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(a){n1.cssPrefix=a,v1.forEach(function(e){return e(C)})},get:function(){return n1.cssPrefix}});Y.FontAwesomeConfig=C;var v1=[];function pi(c){return v1.push(c),function(){v1.splice(v1.indexOf(c),1)}}var j=S2,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ui(c){if(!(!c||!I)){var a=d.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=d.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return d.head.insertBefore(a,s),c}}var Li="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u1(){for(var c=12,a="";c-- >0;)a+=Li[Math.random()*62|0];return a}function o1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function I2(c){return c.classList?o1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Q4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function di(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Q4(c[e]),'" ')},"").trim()}function Q1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function j2(c){return c.size!==U.size||c.x!==U.x||c.y!==U.y||c.rotate!==U.rotate||c.flipX||c.flipY}function gi(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function xi(c){var a=c.transform,e=c.width,s=e===void 0?S2:e,r=c.height,i=r===void 0?S2:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&W4?l+="translate(".concat(a.x/j-s/2,"em, ").concat(a.y/j-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):l+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),l+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var bi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function J4(){var c=Z4,a=I4,e=C.cssPrefix,s=C.replacementClass,r=bi;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var v4=!1;function d2(){C.autoAddCss&&!v4&&(ui(J4()),v4=!0)}var Ni={mixout:function(){return{dom:{css:J4,insertCss:d2}}},hooks:function(){return{beforeDOMElementCreation:function(){d2()},beforeI2svg:function(){d2()}}}},W=Y||{};W[O]||(W[O]={});W[O].styles||(W[O].styles={});W[O].hooks||(W[O].hooks={});W[O].shims||(W[O].shims=[]);var $=W[O],c6=[],Si=function c(){d.removeEventListener("DOMContentLoaded",c),j1=1,c6.map(function(a){return a()})},j1=!1;I&&(j1=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),j1||d.addEventListener("DOMContentLoaded",Si));function ki(c){I&&(j1?setTimeout(c,0):c6.push(c))}function g1(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?Q4(c):"<".concat(a," ").concat(di(s),">").concat(i.map(g1).join(""),"</").concat(a,">")}function H4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var yi=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},g2=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?yi(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function wi(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function y2(c){var a=wi(c);return a.length===1?a[0].toString(16):null}function Ai(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function h4(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function w2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=h4(a);typeof $.hooks.addPack=="function"&&!r?$.hooks.addPack(c,h4(a)):$.styles[c]=z(z({},$.styles[c]||{}),i),c==="fas"&&w2("fa",a)}var B1,D1,q1,r1=$.styles,Pi=$.shims,Fi=(B1={},k(B1,L,Object.values(M1[L])),k(B1,N,Object.values(M1[N])),B1),Y2=null,a6={},e6={},s6={},r6={},i6={},Ti=(D1={},k(D1,L,Object.keys(h1[L])),k(D1,N,Object.keys(h1[N])),D1);function Bi(c){return~Hi.indexOf(c)}function Di(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!Bi(r)?r:null}var f6=function(){var a=function(i){return g2(r1,function(n,f,l){return n[l]=g2(f,i,{}),n},{})};a6=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),e6=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),i6=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in r1||C.autoFetchSvg,s=g2(Pi,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});s6=s.names,r6=s.unicodes,Y2=J1(C.styleDefault,{family:C.familyDefault})};pi(function(c){Y2=J1(c.styleDefault,{family:C.familyDefault})});f6();function X2(c,a){return(a6[c]||{})[a]}function qi(c,a){return(e6[c]||{})[a]}function c1(c,a){return(i6[c]||{})[a]}function n6(c){return s6[c]||{prefix:null,iconName:null}}function Ri(c){var a=r6[c],e=X2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function X(){return Y2}var K2=function(){return{prefix:null,iconName:null,rest:[]}};function J1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?L:e,r=h1[s][c],i=V1[s][c]||V1[s][r],n=c in $.styles?c:null;return i||n||null}var V4=(q1={},k(q1,L,Object.keys(M1[L])),k(q1,N,Object.keys(M1[N])),q1);function c2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},k(a,L,"".concat(C.cssPrefix,"-").concat(L)),k(a,N,"".concat(C.cssPrefix,"-").concat(N)),a),n=null,f=L;(c.includes(i[L])||c.some(function(t){return V4[L].includes(t)}))&&(f=L),(c.includes(i[N])||c.some(function(t){return V4[N].includes(t)}))&&(f=N);var l=c.reduce(function(t,o){var m=Di(C.cssPrefix,o);if(r1[o]?(o=Fi[f].includes(o)?oi[f][o]:o,n=o,t.prefix=o):Ti[f].indexOf(o)>-1?(n=o,t.prefix=J1(o,{family:f})):m?t.iconName=m:o!==C.replacementClass&&o!==i[L]&&o!==i[N]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var V=n==="fa"?n6(t.iconName):{},M=c1(t.prefix,t.iconName);V.prefix&&(n=null),t.iconName=V.iconName||M||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!r1.far&&r1.fas&&!C.autoFetchSvg&&(t.prefix="fas")}return t},K2());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===N&&(r1.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=c1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=X()||"fas"),l}var $i=function(){function c(){Kr(this,c),this.definitions={}}return Qr(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=z(z({},e.definitions[f]||{}),n[f]),w2(f,n[f]);var l=M1[L][f];l&&w2(l,n[f]),f6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(m){typeof m=="string"&&(e[f][m]=t)}),e[f][l]=t}),e}}]),c}(),M4=[],i1={},f1={},Ei=Object.keys(f1);function Ui(c,a){var e=a.mixoutsTo;return M4=c,i1={},Object.keys(f1).forEach(function(s){Ei.indexOf(s)===-1&&delete f1[s]}),M4.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),I1(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){i1[n]||(i1[n]=[]),i1[n].push(i[n])})}s.provides&&s.provides(f1)}),e}function A2(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=i1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function e1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=i1[c]||[];r.forEach(function(i){i.apply(null,e)})}function Z(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return f1[c]?f1[c].apply(null,a):void 0}function P2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||X();if(a)return a=c1(e,a)||a,H4(l6.definitions,e,a)||H4($.styles,e,a)}var l6=new $i,Gi=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,e1("noAuto")},_i={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(e1("beforeI2svg",a),Z("pseudoElements2svg",a),Z("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,ki(function(){Wi({autoReplaceSvgRoot:e}),e1("watch",a)})}},Oi={icon:function(a){if(a===null)return null;if(I1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:c1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=J1(a[0]);return{prefix:s,iconName:c1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(C.cssPrefix,"-"))>-1||a.match(ti))){var r=c2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:c1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=X();return{prefix:i,iconName:c1(i,a)||a}}}},F={noAuto:Gi,config:C,dom:_i,parse:Oi,library:l6,findIconDefinition:P2,toHtml:g1},Wi=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?d:e;(Object.keys($.styles).length>0||C.autoFetchSvg)&&I&&C.autoReplaceSvg&&F.dom.i2svg({node:s})};function a2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return g1(s)})}}),Object.defineProperty(c,"node",{get:function(){if(I){var s=d.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Zi(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(j2(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=Q1(z(z({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Ii(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(C.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},r),{},{id:n}),children:s}]}]}function Q2(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,m=c.extra,V=c.watchable,M=V===void 0?!1:V,u=s.found?s:e,x=u.width,w=u.height,v=r==="fak",H=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(G){return m.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(m.classes).join(" "),p={children:[],attributes:z(z({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:H,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(w)})},b=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(x/w*16*.0625,"em")}:{};M&&(p.attributes[a1]=""),l&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(o||u1())},children:[l]}),delete p.attributes.title);var g=z(z({},p),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:z(z({},b),m.styles)}),D=s.found&&e.found?Z("generateAbstractMask",g)||{children:[],attributes:{}}:Z("generateAbstractIcon",g)||{children:[],attributes:{}},P=D.children,m1=D.attributes;return g.children=P,g.attributes=m1,f?Ii(g):Zi(g)}function p4(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=z(z(z({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[a1]="");var o=z({},n.styles);j2(r)&&(o.transform=xi({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var m=Q1(o);m.length>0&&(t.style=m);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),i&&V.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),V}function ji(c){var a=c.content,e=c.title,s=c.extra,r=z(z(z({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=Q1(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var x2=$.styles;function F2(c){var a=c[0],e=c[1],s=c.slice(4),r=G2(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Yi={found:!1,width:512,height:512};function Xi(c,a){!j4&&!C.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function T2(c,a){var e=a;return a==="fa"&&C.styleDefault!==null&&(a=X()),new Promise(function(s,r){if(Z("missingIconAbstract"),e==="fa"){var i=n6(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&x2[a]&&x2[a][c]){var n=x2[a][c];return s(F2(n))}Xi(c,a),s(z(z({},Yi),{},{icon:C.showMissingIcons&&c?Z("missingIconAbstract")||{}:{}}))})}var u4=function(){},B2=C.measurePerformance&&y1&&y1.mark&&y1.measure?y1:{mark:u4,measure:u4},z1='FA "6.2.1"',Ki=function(a){return B2.mark("".concat(z1," ").concat(a," begins")),function(){return o6(a)}},o6=function(a){B2.mark("".concat(z1," ").concat(a," ends")),B2.measure("".concat(z1," ").concat(a),"".concat(z1," ").concat(a," begins"),"".concat(z1," ").concat(a," ends"))},J2={begin:Ki,end:o6},O1=function(){};function L4(c){var a=c.getAttribute?c.getAttribute(a1):null;return typeof a=="string"}function Qi(c){var a=c.getAttribute?c.getAttribute(O2):null,e=c.getAttribute?c.getAttribute(W2):null;return a&&e}function Ji(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(C.replacementClass)}function cf(){if(C.autoReplaceSvg===!0)return W1.replace;var c=W1[C.autoReplaceSvg];return c||W1.replace}function af(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function ef(c){return d.createElement(c)}function t6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?af:ef:e;if(typeof c=="string")return d.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(t6(n,{ceFn:s}))}),r}function sf(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var W1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(t6(r),e)}),e.getAttribute(a1)===null&&C.keepOriginalSource){var s=d.createComment(sf(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~I2(e).indexOf(C.replacementClass))return W1.replace(a);var r=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===C.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return g1(f)}).join(`
`);e.setAttribute(a1,""),e.innerHTML=n}};function d4(c){c()}function m6(c,a){var e=typeof a=="function"?a:O1;if(c.length===0)e();else{var s=d4;C.mutateApproach===ni&&(s=Y.requestAnimationFrame||d4),s(function(){var r=cf(),i=J2.begin("mutate");c.map(r),i(),e()})}}var c3=!1;function z6(){c3=!0}function D2(){c3=!1}var Y1=null;function g4(c){if(z4&&C.observeMutations){var a=c.treeCallback,e=a===void 0?O1:a,s=c.nodeCallback,r=s===void 0?O1:s,i=c.pseudoElementsCallback,n=i===void 0?O1:i,f=c.observeMutationsRoot,l=f===void 0?d:f;Y1=new z4(function(t){if(!c3){var o=X();o1(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!L4(m.addedNodes[0])&&(C.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&L4(m.target)&&~vi.indexOf(m.attributeName))if(m.attributeName==="class"&&Qi(m.target)){var V=c2(I2(m.target)),M=V.prefix,u=V.iconName;m.target.setAttribute(O2,M||o),u&&m.target.setAttribute(W2,u)}else Ji(m.target)&&r(m.target)})}}),I&&Y1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rf(){Y1&&Y1.disconnect()}function ff(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function nf(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=c2(I2(c));return r.prefix||(r.prefix=X()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=qi(r.prefix,c.innerText)||X2(r.prefix,y2(c.innerText))),!r.iconName&&C.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function lf(c){var a=o1(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return C.autoA11y&&(e?a["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(s||u1()):(a["aria-hidden"]="true",a.focusable="false")),a}function of(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=nf(c),s=e.iconName,r=e.prefix,i=e.rest,n=lf(c),f=A2("parseNodeAttributes",{},c),l=a.styleParser?ff(c):[];return z({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var tf=$.styles;function C6(c){var a=C.autoReplaceSvg==="nest"?x4(c,{styleParser:!1}):x4(c);return~a.extra.classes.indexOf(Y4)?Z("generateLayersText",c,a):Z("generateSvgReplacementMutation",c,a)}var K=new Set;Z2.map(function(c){K.add("fa-".concat(c))});Object.keys(h1[L]).map(K.add.bind(K));Object.keys(h1[N]).map(K.add.bind(K));K=L1(K);function b4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var e=d.documentElement.classList,s=function(m){return e.add("".concat(C4,"-").concat(m))},r=function(m){return e.remove("".concat(C4,"-").concat(m))},i=C.autoFetchSvg?K:Z2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(tf));i.includes("fa")||i.push("fa");var n=[".".concat(Y4,":not([").concat(a1,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(a1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=o1(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=J2.begin("onTree"),t=f.reduce(function(o,m){try{var V=C6(m);V&&o.push(V)}catch(M){j4||M.name==="MissingIcon"&&console.error(M)}return o},[]);return new Promise(function(o,m){Promise.all(t).then(function(V){m6(V,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(V){l(),m(V)})})}function mf(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C6(c).then(function(e){e&&m6([e],a)})}function zf(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:P2(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:P2(r||{})),c(s,z(z({},e),{},{mask:r}))}}var Cf=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?U:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,m=e.title,V=m===void 0?null:m,M=e.titleId,u=M===void 0?null:M,x=e.classes,w=x===void 0?[]:x,v=e.attributes,H=v===void 0?{}:v,p=e.styles,b=p===void 0?{}:p;if(a){var g=a.prefix,D=a.iconName,P=a.icon;return a2(z({type:"icon"},a),function(){return e1("beforeDOMElementCreation",{iconDefinition:a,params:e}),C.autoA11y&&(V?H["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(u||u1()):(H["aria-hidden"]="true",H.focusable="false")),Q2({icons:{main:F2(P),mask:l?F2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:D,transform:z(z({},U),r),symbol:n,title:V,maskId:o,titleId:u,extra:{attributes:H,styles:b,classes:w}})})}},vf={mixout:function(){return{icon:zf(Cf)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=b4,e.nodeCallback=mf,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?d:s,i=e.callback,n=i===void 0?function(){}:i;return b4(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,o=s.mask,m=s.maskId,V=s.extra;return new Promise(function(M,u){Promise.all([T2(r,f),o.iconName?T2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var w=G2(x,2),v=w[0],H=w[1];M([e,Q2({icons:{main:v,mask:H},prefix:f,iconName:r,transform:l,symbol:t,maskId:m,title:i,titleId:n,extra:V,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=Q1(f);l.length>0&&(r.style=l);var t;return j2(n)&&(t=Z("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},Hf={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return a2({type:"layer"},function(){e1("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(L1(i)).join(" ")},children:n}]})}}}},hf={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,o=s.styles,m=o===void 0?{}:o;return a2({type:"counter",content:e},function(){return e1("beforeDOMElementCreation",{content:e,params:s}),ji({content:e.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(L1(f))}})})}}}},Vf={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?U:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,o=s.attributes,m=o===void 0?{}:o,V=s.styles,M=V===void 0?{}:V;return a2({type:"text",content:e},function(){return e1("beforeDOMElementCreation",{content:e,params:s}),p4({content:e,transform:z(z({},U),i),title:f,extra:{attributes:m,styles:M,classes:["".concat(C.cssPrefix,"-layers-text")].concat(L1(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(W4){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return C.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,p4({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},Mf=new RegExp('"',"ug"),N4=[1105920,1112319];function pf(c){var a=c.replace(Mf,""),e=Ai(a,0),s=e>=N4[0]&&e<=N4[1],r=a.length===2?a[0]===a[1]:!1;return{value:y2(r?a[0]:a),isSecondary:s||r}}function S4(c,a){var e="".concat(fi).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=o1(c.children),n=i.filter(function(P){return P.getAttribute(k2)===a})[0],f=Y.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(mi),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var m=f.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?N:L,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?V1[V][l[2].toLowerCase()]:zi[V][t],u=pf(m),x=u.value,w=u.isSecondary,v=l[0].startsWith("FontAwesome"),H=X2(M,x),p=H;if(v){var b=Ri(x);b.iconName&&b.prefix&&(H=b.iconName,M=b.prefix)}if(H&&!w&&(!n||n.getAttribute(O2)!==M||n.getAttribute(W2)!==p)){c.setAttribute(e,p),n&&c.removeChild(n);var g=of(),D=g.extra;D.attributes[k2]=a,T2(H,M).then(function(P){var m1=Q2(z(z({},g),{},{icons:{main:P,mask:K2()},prefix:M,iconName:p,extra:D,watchable:!0})),G=d.createElement("svg");a==="::before"?c.insertBefore(G,c.firstChild):c.appendChild(G),G.outerHTML=m1.map(function(u2){return g1(u2)}).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rZ=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Os={exports:{}};(function(c){(function(a){var e=function(v,H,p){if(!t(H)||m(H)||V(H)||M(H)||l(H))return H;var b,g=0,D=0;if(o(H))for(b=[],D=H.length;g<D;g++)b.push(e(v,H[g],p));else{b={};for(var P in H)Object.prototype.hasOwnProperty.call(H,P)&&(b[v(P,p)]=e(v,H[P],p))}return b},s=function(v,H){H=H||{};var p=H.separator||"_",b=H.split||/(?=[A-Z])/;return v.split(b).join(p)},r=function(v){return u(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(H,p){return p?p.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var H=r(v);return H.substr(0,1).toUpperCase()+H.substr(1)},n=function(v,H){return s(v,H).toLowerCase()},f=Object.prototype.toString,l=function(v){return typeof v=="function"},t=function(v){return v===Object(v)},o=function(v){return f.call(v)=="[object Array]"},m=function(v){return f.call(v)=="[object Date]"},V=function(v){return f.call(v)=="[object RegExp]"},M=function(v){return f.call(v)=="[object Boolean]"},u=function(v){return v=v-0,v===v},x=function(v,H){var p=H&&"process"in H?H.process:H;return typeof p!="function"?v:function(b,g){return p(b,v,g)}},w={camelize:r,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(v,H){return e(x(r,H),v)},decamelizeKeys:function(v,H){return e(x(n,H),v,H)},pascalizeKeys:function(v,H){return e(x(i,H),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=w:a.humps=w})(rZ)})(Os);var iZ=Os.exports,fZ=["class","style"];function nZ(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var s=e.indexOf(":"),r=iZ.camelize(e.slice(0,s)),i=e.slice(s+1).trim();return a[r]=i,a},{})}function lZ(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function c4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var s=(c.children||[]).map(function(l){return c4(l)}),r=Object.keys(c.attributes||{}).reduce(function(l,t){var o=c.attributes[t];switch(t){case"class":l.class=lZ(o);break;case"style":l.style=nZ(o);break;default:l.attrs[t]=o}return l},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,f=JW(e,fZ);return R4(c.tag,R(R(R({},a),{},{class:r.class,style:R(R({},r.style),n)},r.attrs),f),s)}var Ws=!1;try{Ws=!0}catch{}function oZ(){if(!Ws&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function H1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?A({},c,a):{}}function tZ(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},A(a,"fa-".concat(c.size),c.size!==null),A(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),A(a,"fa-pull-".concat(c.pull),c.pull!==null),A(a,"fa-swap-opacity",c.swapOpacity),A(a,"fa-bounce",c.bounce),A(a,"fa-shake",c.shake),A(a,"fa-beat",c.beat),A(a,"fa-fade",c.fade),A(a,"fa-beat-fade",c.beatFade),A(a,"fa-flash",c.flash),A(a,"fa-spin-pulse",c.spinPulse),A(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(s){return e[s]?s:null}).filter(function(s){return s})}function F4(c){if(c&&K1(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(X1.icon)return X1.icon(c);if(c===null)return null;if(K1(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var mZ=U2({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var s=e.attrs,r=q(function(){return F4(a.icon)}),i=q(function(){return H1("classes",tZ(a))}),n=q(function(){return H1("transform",typeof a.transform=="string"?X1.transform(a.transform):a.transform)}),f=q(function(){return H1("mask",F4(a.mask))}),l=q(function(){return Af(r.value,R(R(R(R({},i.value),n.value),f.value),{},{symbol:a.symbol,title:a.title}))});yr(l,function(o){if(!o)return oZ("Could not find one or more icon(s)",r.value,f.value)},{immediate:!0});var t=q(function(){return l.value?c4(l.value.abstract[0],{},s):null});return function(){return t.value}}});U2({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var s=e.slots,r=v6.familyPrefix,i=q(function(){return["".concat(r,"-layers")].concat(q2(a.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return R4("div",{class:i.value},s.default?s.default():[])}}});U2({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var s=e.attrs,r=v6.familyPrefix,i=q(function(){return H1("classes",[].concat(q2(a.counter?["".concat(r,"-layers-counter")]:[]),q2(a.position?["".concat(r,"-layers-").concat(a.position)]:[])))}),n=q(function(){return H1("transform",typeof a.transform=="string"?X1.transform(a.transform):a.transform)}),f=q(function(){var t=Pf(a.value.toString(),R(R({},n.value),i.value)),o=t.abstract;return a.counter&&(o[0].attributes.class=o[0].attributes.class.replace("fa-layers-text","")),o[0]}),l=q(function(){return c4(f.value,{},s)});return function(){return l.value}}});/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */const R1={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},$1={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},E1={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},U1={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i},p2=c=>{if(c)return Array.isArray(c)?c[0]:c.locale};function B(c,a){return Array.isArray(c)?c[0]:c[a]}function S(c){return!!(c==null||c===""||Array.isArray(c)&&c.length===0)}const Zs=(c,a)=>{if(S(c))return!0;const e=p2(a);if(Array.isArray(c))return c.every(r=>Zs(r,{locale:e}));const s=String(c);return e?(R1[e]||R1.en).test(s):Object.keys(R1).some(r=>R1[r].test(s))},Is=(c,a)=>{if(S(c))return!0;const e=p2(a);if(Array.isArray(c))return c.every(r=>Is(r,{locale:e}));const s=String(c);return e?(U1[e]||U1.en).test(s):Object.keys(U1).some(r=>U1[r].test(s))},js=(c,a)=>{if(S(c))return!0;const e=p2(a);if(Array.isArray(c))return c.every(r=>js(r,{locale:e}));const s=String(c);return e?(E1[e]||E1.en).test(s):Object.keys(E1).some(r=>E1[r].test(s))},Ys=(c,a)=>{if(S(c))return!0;const e=p2(a);if(Array.isArray(c))return c.every(r=>Ys(r,{locale:e}));const s=String(c);return e?($1[e]||$1.en).test(s):Object.keys($1).some(r=>$1[r].test(s))};function zZ(c){return c?Array.isArray(c)?{min:c[0],max:c[1]}:c:{min:0,max:0}}const Xs=(c,a)=>{if(S(c))return!0;const{min:e,max:s}=zZ(a);if(Array.isArray(c))return c.every(i=>!!Xs(i,{min:e,max:s}));const r=Number(c);return Number(e)<=r&&Number(s)>=r},CZ=(c,a)=>{const e=B(a,"target");return String(c)===String(e)},Ks=(c,a)=>{if(S(c))return!0;const e=B(a,"length");if(Array.isArray(c))return c.every(r=>Ks(r,{length:e}));const s=String(c);return/^[0-9]*$/.test(s)&&s.length===Number(e)},vZ=(c,a,e)=>{const s=window.URL||window.webkitURL;return new Promise(r=>{const i=new Image;i.onerror=()=>r(!1),i.onload=()=>r(i.width===a&&i.height===e),i.src=s.createObjectURL(c)})};function HZ(c){return c?Array.isArray(c)?{width:Number(c[0]),height:Number(c[1])}:{width:Number(c.width),height:Number(c.height)}:{width:0,height:0}}const hZ=(c,a)=>{if(S(c))return!0;const{width:e,height:s}=HZ(a),r=[],i=Array.isArray(c)?c:[c];for(let n=0;n<i.length;n++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(i[n].name))return Promise.resolve(!1);r.push(i[n])}return Promise.all(r.map(n=>vZ(n,e,s))).then(n=>n.every(f=>f))},VZ=c=>{if(S(c))return!0;const a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(c)?c.every(e=>a.test(String(e))):a.test(String(c))},MZ=(c,a)=>{if(S(c))return!0;a||(a=[]);const e=new RegExp(`\\.(${a.join("|")})$`,"i");return Array.isArray(c)?c.every(s=>e.test(s.name)):e.test(c.name)},pZ=c=>{if(S(c))return!0;const a=/\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;return Array.isArray(c)?c.every(e=>a.test(e.name)):a.test(c.name)},uZ=c=>S(c)?!0:Array.isArray(c)?c.every(a=>/^-?[0-9]+$/.test(String(a))):/^-?[0-9]+$/.test(String(c)),LZ=(c,a)=>{const e=B(a,"other");return c===e},dZ=(c,a)=>{const e=B(a,"other");return c!==e};function Qs(c){return c==null}function gZ(c){return Array.isArray(c)&&c.length===0}const xZ=(c,a)=>{const e=B(a,"length");return Qs(c)?!1:(typeof c=="number"&&(c=String(c)),c.length||(c=Array.from(c)),c.length===Number(e))},Js=(c,a)=>{if(S(c))return!0;const e=B(a,"length");return Array.isArray(c)?c.every(s=>Js(s,{length:e})):String(c).length<=Number(e)},cr=(c,a)=>{if(S(c))return!0;const e=B(a,"max");return Array.isArray(c)?c.length>0&&c.every(s=>cr(s,{max:e})):Number(c)<=Number(e)},bZ=(c,a)=>{if(S(c))return!0;a||(a=[]);const e=new RegExp(`${a.join("|").replace("*",".+")}$`,"i");return Array.isArray(c)?c.every(s=>e.test(s.type)):e.test(c.type)},ar=(c,a)=>{if(S(c))return!0;const e=B(a,"length");return Array.isArray(c)?c.every(s=>ar(s,{length:e})):String(c).length>=Number(e)},er=(c,a)=>{if(S(c))return!0;const e=B(a,"min");return Array.isArray(c)?c.length>0&&c.every(s=>er(s,{min:e})):Number(c)>=Number(e)},a4=(c,a)=>S(c)?!0:Array.isArray(c)?c.every(e=>a4(e,a)):Array.from(a).some(e=>e==c),NZ=(c,a)=>S(c)?!0:!a4(c,a),SZ=/^[٠١٢٣٤٥٦٧٨٩]+$/,kZ=/^[0-9]+$/,yZ=c=>{if(S(c))return!0;const a=e=>{const s=String(e);return kZ.test(s)||SZ.test(s)};return Array.isArray(c)?c.every(a):a(c)},sr=(c,a)=>{if(S(c))return!0;let e=B(a,"regex");return typeof e=="string"&&(e=new RegExp(e)),Array.isArray(c)?c.every(s=>sr(s,{regex:e})):e.test(String(c))},wZ=c=>Qs(c)||gZ(c)||c===!1?!1:!!String(c).trim().length,AZ=(c,a)=>{if(S(c))return!0;let e=B(a,"size");if(e=Number(e),isNaN(e))return!1;const s=e*1024;if(!Array.isArray(c))return c.size<=s;for(let r=0;r<c.length;r++)if(c[r].size>s)return!1;return!0},PZ=(c,a)=>{var e;if(S(c))return!0;let s=B(a,"pattern");typeof s=="string"&&(s=new RegExp(s));try{new URL(c)}catch{return!1}return(e=s==null?void 0:s.test(c))!==null&&e!==void 0?e:!0},T4={alpha_dash:Is,alpha_num:js,alpha_spaces:Ys,alpha:Zs,between:Xs,confirmed:CZ,digits:Ks,dimensions:hZ,email:VZ,ext:MZ,image:pZ,integer:uZ,is_not:dZ,is:LZ,length:xZ,max_value:cr,max:Js,mimes:bZ,min_value:er,min:ar,not_one_of:NZ,numeric:yZ,one_of:a4,regex:sr,required:wZ,size:AZ,url:PZ},l1=(()=>wr(new Date,"date","-"))(),FZ=(c,[a])=>c>l1&&a>=c?!0:`出發日期須在今天(${l1})以後，且不能比結束日期${a?`(${a})`:""}晚`,TZ=(c,[a])=>c>l1&&c>=a?!0:`結束日期須晚於今天(${l1})與出發日期${a?`(${a})`:""}`,BZ=(c,[a])=>a>c&&c>l1?!0:`報名截止日期須早於出發日期${a?`(${a})`:""}，且不能是今天(${l1})`,DZ=(c,[a])=>!c||!a||a>=c?!0:`出發日期不能比結束日期${a?`(${a})`:""}晚`,B4={start_date:FZ,end_date:TZ,order_expiry_date:BZ,search_start_date:DZ};/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function D4(c){return typeof c=="function"}const qZ=c=>c!==null&&!!c&&typeof c=="object"&&!Array.isArray(c);function q4(c,a){return c.replace(/(\d:)?{([^}]+)}/g,function(e,s,r){if(!s||!a.params)return r in a?a[r]:a.params&&r in a.params?a.params[r]:`{${r}}`;if(!Array.isArray(a.params))return r in a.params?a.params[r]:`{${r}}`;const i=Number(s.replace(":",""));return i in a.params?a.params[i]:`${s}{${r}}`})}function rr(c,a){return Object.keys(a).forEach(e=>{if(qZ(a[e])){c[e]||(c[e]={}),rr(c[e],a[e]);return}c[e]=a[e]}),c}class RZ{constructor(a,e){this.container={},this.locale=a,this.merge(e)}resolve(a){return this.format(this.locale,a)}getLocaleDefault(a,e){var s,r,i,n,f;return((i=(r=(s=this.container[a])===null||s===void 0?void 0:s.fields)===null||r===void 0?void 0:r[e])===null||i===void 0?void 0:i._default)||((f=(n=this.container[a])===null||n===void 0?void 0:n.messages)===null||f===void 0?void 0:f._default)}format(a,e){var s,r,i,n,f,l,t;let o;const{rule:m,form:V,label:M,name:u}=e,x=M||((r=(s=this.container[a])===null||s===void 0?void 0:s.names)===null||r===void 0?void 0:r[u])||u;return m?(o=((f=(n=(i=this.container[a])===null||i===void 0?void 0:i.fields)===null||n===void 0?void 0:n[u])===null||f===void 0?void 0:f[m.name])||((t=(l=this.container[a])===null||l===void 0?void 0:l.messages)===null||t===void 0?void 0:t[m.name]),o||(o=this.getLocaleDefault(a,u)||`${x} is not valid`),D4(o)?o(e):q4(o,Object.assign(Object.assign({},V),{field:x,params:m.params}))):(o=this.getLocaleDefault(a,u)||`${x} is not valid`,D4(o)?o(e):q4(o,Object.assign(Object.assign({},V),{field:x})))}merge(a){rr(this.container,a)}}let s1;function ir(c,a){s1||(s1=new RZ("en",{}));const e=s=>s1.resolve(s);return typeof c=="string"?(s1.locale=c,a&&s1.merge({[c]:a}),e):(s1.merge(c),e)}async function $Z(c){try{const a=await fetch(c,{headers:{"content-type":"application/json"}}).then(e=>e.json());if(!a.code){console.error("Could not identify locale, ensure the locale file contains `code` field");return}ir({[a.code]:a})}catch{console.error("Failed to load locale ")}}var $2={},EZ={get exports(){return $2},set exports(c){$2=c}};(function(c,a){(function(s,r){c.exports=r(Rr)})(Ar,e=>(()=>{var s={657:(f,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(t,o)=>{const m=t.__vccOpts||t;for(const[V,M]of o)m[V]=M;return m}},976:f=>{f.exports=e}},r={};function i(f){var l=r[f];if(l!==void 0)return l.exports;var t=r[f]={exports:{}};return s[f](t,t.exports,i),t.exports}i.d=(f,l)=>{for(var t in l)i.o(l,t)&&!i.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:l[t]})},i.o=(f,l)=>Object.prototype.hasOwnProperty.call(f,l),i.r=f=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})};var n={};return(()=>{i.r(n),i.d(n,{Component:()=>L2,LoadingPlugin:()=>hr,default:()=>Vr,useLoading:()=>e4});var f=i(976);function l(h){var y;typeof h.remove<"u"?h.remove():(y=h.parentNode)==null||y.removeChild(h)}function t(h,y,_){let E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const Q=(0,f.h)(h,y,E),T=document.createElement("div");return T.classList.add("vld-container"),_.appendChild(T),(0,f.render)(Q,T),Q.component}function o(){return typeof window<"u"}const m=o()?window.HTMLElement:Object,V=["aria-busy"],M={class:"vl-icon"};function u(h,y,_,E,Q,T){return(0,f.openBlock)(),(0,f.createBlock)(f.Transition,{name:h.transition},{default:(0,f.withCtx)(()=>[(0,f.withDirectives)((0,f.createElementVNode)("div",{tabindex:"0",class:(0,f.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":h.isFullPage}]),"aria-busy":h.isActive,"aria-label":"Loading",style:(0,f.normalizeStyle)({zIndex:h.zIndex})},[(0,f.createElementVNode)("div",{class:"vl-background",onClick:y[0]||(y[0]=(0,f.withModifiers)(function(){return h.cancel&&h.cancel(...arguments)},["prevent"])),style:(0,f.normalizeStyle)(h.bgStyle)},null,4),(0,f.createElementVNode)("div",M,[(0,f.renderSlot)(h.$slots,"before"),(0,f.renderSlot)(h.$slots,"default",{},()=>[((0,f.openBlock)(),(0,f.createBlock)((0,f.resolveDynamicComponent)(h.loader),{color:h.color,width:h.width,height:h.height},null,8,["color","width","height"]))]),(0,f.renderSlot)(h.$slots,"after")])],14,V),[[f.vShow,h.isActive]])]),_:3},8,["name"])}const x={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(h){if(!this.isActive||h.target===this.$el||this.$el.contains(h.target))return;let y=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||y&&y.contains(h.target))&&(h.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},w=["width","height","stroke"],H=[(0,f.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function p(h,y,_,E,Q,T){return(0,f.openBlock)(),(0,f.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:h.width,height:h.height,stroke:h.color},H,8,w)}const b=(0,f.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var g=i(657);const P=(0,g.default)(b,[["render",p]]),m1=["fill","width","height"],u2=[(0,f.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function nr(h,y,_,E,Q,T){return(0,f.openBlock)(),(0,f.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:h.color,width:h.width,height:h.height},u2,8,m1)}const lr=(0,f.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),or=(0,g.default)(lr,[["render",nr]]),tr=["height","width","fill"],mr=[(0,f.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function zr(h,y,_,E,Q,T){return(0,f.openBlock)(),(0,f.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:h.height,width:h.width,fill:h.color},mr,8,tr)}const Cr=(0,f.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),vr={Spinner:P,Dots:or,Bars:(0,g.default)(Cr,[["render",zr]])},Hr=(0,f.defineComponent)({name:"VueLoading",mixins:[x],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,m],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:vr,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const h=this.$el.parentElement;(0,f.render)(null,h),l(h)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(h){h.keyCode===27&&this.cancel()}},watch:{active(h){this.isActive=h},isActive(h){h?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),L2=(0,g.default)(Hr,[["render",u]]);function e4(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:h,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y;const T={...h,..._,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let s4=T.container;T.container||(s4=document.body,T.isFullPage=!0);const Mr={...y,...E};return{hide:t(L2,T,s4,Mr).ctx.hide}}}}const hr=function(h){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const E=e4(y,_);h.config.globalProperties.$loading=E,h.provide("$loading",E)},Vr=L2})(),n})())})(EZ);const UZ=Pr($2);wf.add(fT,UG,KW);Object.keys(T4).forEach(c=>{$4(c,T4[c])});Object.keys(B4).forEach(c=>{$4(c,B4[c])});$Z("./jsons/vee_validate_zh_TW.json");qr({generateMessage:ir("zh_TW"),validateOnInput:!0});const t1=ur(Wr);t1.use(Fr());t1.use(Tr);t1.use(_1,Br);t1.component("font-awesome-icon",mZ);t1.component("VueLoading",UZ);t1.mount("#app")});export default GZ();