var Mr=(c,a)=>()=>(a||c((a={exports:{}}).exports,a),a.exports);import{c as pr}from"./runtime-dom.esm-bundler-2f6597f6.js";import{m as ur,L as Lr,r as s4,o as dr,c as gr,a as r4,w as xr,b as D4,u as br,F as Nr,d as E2,e as q,f as Sr,h as q4,g as kr,i as yr,j as wr,k as Ar,l as Pr,n as Fr}from"./dateFormat-59b422d2.js";import"./bootstrap.esm-e2f1acc9.js";import{l as Tr}from"./loading-3e2a3ab2.js";import"./aos-bea1b623.js";import{d as R4,c as Br}from"./vee-validate.esm-3892c44f.js";import{r as Dr}from"./vue.runtime.esm-bundler-e4622f54.js";var qZ=Mr(($2,ir)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const qr=["src"],Rr=D4("p",{class:"font-barlow text-uppercase mb-0 text-center ps-4 opacity-80"},"loading...",-1),$r={computed:{...ur(Lr,["isLoading"])}},Er=Object.assign($r,{__name:"App",setup(c){return(a,e)=>{const s=s4("VueLoading"),r=s4("router-view");return dr(),gr(Nr,null,[r4(s,{active:a.isLoading,"onUpdate:active":e[0]||(e[0]=i=>a.isLoading=i),"background-color":"#083d63",opacity:.85},{default:xr(()=>[D4("img",{src:br(Tr),class:"loading-img"},null,8,qr),Rr]),_:1},8,["active","opacity"]),r4(r)],64)}}});function W1(c){return W1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},W1(c)}function _1(c,a){if(!c.vueAxiosInstalled){var e=$4(a)?Gr(a):a;if(Or(e)){var s=Wr(c);if(s){var r=s<3?Ur:_r;Object.keys(e).forEach(function(i){r(c,i,e[i])}),c.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function Ur(c,a,e){Object.defineProperty(c.prototype,a,{get:function(){return e}}),c[a]=e}function _r(c,a,e){c.config.globalProperties[a]=e,c[a]=e}function $4(c){return c&&typeof c.get=="function"&&typeof c.post=="function"}function Gr(c){return{axios:c,$http:c}}function Or(c){return W1(c)==="object"&&Object.keys(c).every(function(a){return $4(c[a])})}function Wr(c){return c&&c.version&&Number(c.version.split(".")[0])}(typeof $2>"u"?"undefined":W1($2))=="object"?ir.exports=_1:typeof define=="function"&&define.amd?define([],function(){return _1}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(_1,window.axios);function i4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function z(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?i4(Object(e),!0).forEach(function(s){k(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):i4(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function Z1(c){return Z1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Z1(c)}function Zr(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function f4(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Ir(c,a,e){return a&&f4(c.prototype,a),e&&f4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function k(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function U2(c,a){return Yr(c)||Kr(c,a)||E4(c,a)||Jr()}function L1(c){return jr(c)||Xr(c)||E4(c)||Qr()}function jr(c){if(Array.isArray(c))return b2(c)}function Yr(c){if(Array.isArray(c))return c}function Xr(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Kr(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function E4(c,a){if(c){if(typeof c=="string")return b2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b2(c,a)}}function b2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n4=function(){},_2={},U4={},_4=null,G4={mark:n4,measure:n4};try{typeof window<"u"&&(_2=window),typeof document<"u"&&(U4=document),typeof MutationObserver<"u"&&(_4=MutationObserver),typeof performance<"u"&&(G4=performance)}catch{}var ci=_2.navigator||{},l4=ci.userAgent,o4=l4===void 0?"":l4,Y=_2,d=U4,t4=_4,y1=G4;Y.document;var I=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",O4=~o4.indexOf("MSIE")||~o4.indexOf("Trident/"),w1,A1,P1,F1,T1,O="___FONT_AWESOME___",N2=16,W4="fa",Z4="svg-inline--fa",a1="data-fa-i2svg",S2="data-fa-pseudo-element",ai="data-fa-pseudo-element-pending",G2="data-prefix",O2="data-icon",m4="fontawesome-i2svg",ei="async",si=["HTML","HEAD","STYLE","SCRIPT"],I4=function(){try{return!0}catch{return!1}}(),L="classic",N="sharp",W2=[L,N];function d1(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[L]}})}var h1=d1((w1={},k(w1,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),k(w1,N,{fa:"solid",fass:"solid","fa-solid":"solid"}),w1)),V1=d1((A1={},k(A1,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(A1,N,{solid:"fass"}),A1)),M1=d1((P1={},k(P1,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(P1,N,{fass:"fa-solid"}),P1)),ri=d1((F1={},k(F1,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(F1,N,{"fa-solid":"fass"}),F1)),ii=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,j4="fa-layers-text",fi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ni=d1((T1={},k(T1,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(T1,N,{900:"fass"}),T1)),Y4=[1,2,3,4,5,6,7,8,9,10],li=Y4.concat([11,12,13,14,15,16,17,18,19,20]),oi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},p1=new Set;Object.keys(V1[L]).map(p1.add.bind(p1));Object.keys(V1[N]).map(p1.add.bind(p1));var ti=[].concat(W2,L1(p1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(Y4.map(function(c){return"".concat(c,"x")})).concat(li.map(function(c){return"w-".concat(c)})),C1=Y.FontAwesomeConfig||{};function mi(c){var a=d.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function zi(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(d&&typeof d.querySelector=="function"){var Ci=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ci.forEach(function(c){var a=U2(c,2),e=a[0],s=a[1],r=zi(mi(e));r!=null&&(C1[s]=r)})}var X4={styleDefault:"solid",familyDefault:"classic",cssPrefix:W4,replacementClass:Z4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C1.familyPrefix&&(C1.cssPrefix=C1.familyPrefix);var n1=z(z({},X4),C1);n1.autoReplaceSvg||(n1.observeMutations=!1);var C={};Object.keys(X4).forEach(function(c){Object.defineProperty(C,c,{enumerable:!0,set:function(e){n1[c]=e,v1.forEach(function(s){return s(C)})},get:function(){return n1[c]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(a){n1.cssPrefix=a,v1.forEach(function(e){return e(C)})},get:function(){return n1.cssPrefix}});Y.FontAwesomeConfig=C;var v1=[];function vi(c){return v1.push(c),function(){v1.splice(v1.indexOf(c),1)}}var j=N2,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hi(c){if(!(!c||!I)){var a=d.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=d.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return d.head.insertBefore(a,s),c}}var hi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u1(){for(var c=12,a="";c-- >0;)a+=hi[Math.random()*62|0];return a}function o1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function Z2(c){return c.classList?o1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function K4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vi(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(K4(c[e]),'" ')},"").trim()}function K1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function I2(c){return c.size!==U.size||c.x!==U.x||c.y!==U.y||c.rotate!==U.rotate||c.flipX||c.flipY}function Mi(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function pi(c){var a=c.transform,e=c.width,s=e===void 0?N2:e,r=c.height,i=r===void 0?N2:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&O4?l+="translate(".concat(a.x/j-s/2,"em, ").concat(a.y/j-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):l+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),l+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var ui=`:root, :host {
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
}`;function Q4(){var c=W4,a=Z4,e=C.cssPrefix,s=C.replacementClass,r=ui;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var z4=!1;function L2(){C.autoAddCss&&!z4&&(Hi(Q4()),z4=!0)}var Li={mixout:function(){return{dom:{css:Q4,insertCss:L2}}},hooks:function(){return{beforeDOMElementCreation:function(){L2()},beforeI2svg:function(){L2()}}}},W=Y||{};W[O]||(W[O]={});W[O].styles||(W[O].styles={});W[O].hooks||(W[O].hooks={});W[O].shims||(W[O].shims=[]);var $=W[O],J4=[],di=function c(){d.removeEventListener("DOMContentLoaded",c),I1=1,J4.map(function(a){return a()})},I1=!1;I&&(I1=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),I1||d.addEventListener("DOMContentLoaded",di));function gi(c){I&&(I1?setTimeout(c,0):J4.push(c))}function g1(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?K4(c):"<".concat(a," ").concat(Vi(s),">").concat(i.map(g1).join(""),"</").concat(a,">")}function C4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var xi=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},d2=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?xi(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function bi(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function k2(c){var a=bi(c);return a.length===1?a[0].toString(16):null}function Ni(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function v4(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function y2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=v4(a);typeof $.hooks.addPack=="function"&&!r?$.hooks.addPack(c,v4(a)):$.styles[c]=z(z({},$.styles[c]||{}),i),c==="fas"&&y2("fa",a)}var B1,D1,q1,r1=$.styles,Si=$.shims,ki=(B1={},k(B1,L,Object.values(M1[L])),k(B1,N,Object.values(M1[N])),B1),j2=null,c6={},a6={},e6={},s6={},r6={},yi=(D1={},k(D1,L,Object.keys(h1[L])),k(D1,N,Object.keys(h1[N])),D1);function wi(c){return~ti.indexOf(c)}function Ai(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!wi(r)?r:null}var i6=function(){var a=function(i){return d2(r1,function(n,f,l){return n[l]=d2(f,i,{}),n},{})};c6=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),a6=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),r6=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in r1||C.autoFetchSvg,s=d2(Si,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});e6=s.names,s6=s.unicodes,j2=Q1(C.styleDefault,{family:C.familyDefault})};vi(function(c){j2=Q1(c.styleDefault,{family:C.familyDefault})});i6();function Y2(c,a){return(c6[c]||{})[a]}function Pi(c,a){return(a6[c]||{})[a]}function c1(c,a){return(r6[c]||{})[a]}function f6(c){return e6[c]||{prefix:null,iconName:null}}function Fi(c){var a=s6[c],e=Y2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function X(){return j2}var X2=function(){return{prefix:null,iconName:null,rest:[]}};function Q1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?L:e,r=h1[s][c],i=V1[s][c]||V1[s][r],n=c in $.styles?c:null;return i||n||null}var H4=(q1={},k(q1,L,Object.keys(M1[L])),k(q1,N,Object.keys(M1[N])),q1);function J1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},k(a,L,"".concat(C.cssPrefix,"-").concat(L)),k(a,N,"".concat(C.cssPrefix,"-").concat(N)),a),n=null,f=L;(c.includes(i[L])||c.some(function(t){return H4[L].includes(t)}))&&(f=L),(c.includes(i[N])||c.some(function(t){return H4[N].includes(t)}))&&(f=N);var l=c.reduce(function(t,o){var m=Ai(C.cssPrefix,o);if(r1[o]?(o=ki[f].includes(o)?ri[f][o]:o,n=o,t.prefix=o):yi[f].indexOf(o)>-1?(n=o,t.prefix=Q1(o,{family:f})):m?t.iconName=m:o!==C.replacementClass&&o!==i[L]&&o!==i[N]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var V=n==="fa"?f6(t.iconName):{},M=c1(t.prefix,t.iconName);V.prefix&&(n=null),t.iconName=V.iconName||M||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!r1.far&&r1.fas&&!C.autoFetchSvg&&(t.prefix="fas")}return t},X2());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===N&&(r1.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=c1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=X()||"fas"),l}var Ti=function(){function c(){Zr(this,c),this.definitions={}}return Ir(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=z(z({},e.definitions[f]||{}),n[f]),y2(f,n[f]);var l=M1[L][f];l&&y2(l,n[f]),i6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(m){typeof m=="string"&&(e[f][m]=t)}),e[f][l]=t}),e}}]),c}(),h4=[],i1={},f1={},Bi=Object.keys(f1);function Di(c,a){var e=a.mixoutsTo;return h4=c,i1={},Object.keys(f1).forEach(function(s){Bi.indexOf(s)===-1&&delete f1[s]}),h4.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),Z1(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){i1[n]||(i1[n]=[]),i1[n].push(i[n])})}s.provides&&s.provides(f1)}),e}function w2(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=i1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function e1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=i1[c]||[];r.forEach(function(i){i.apply(null,e)})}function Z(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return f1[c]?f1[c].apply(null,a):void 0}function A2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||X();if(a)return a=c1(e,a)||a,C4(n6.definitions,e,a)||C4($.styles,e,a)}var n6=new Ti,qi=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,e1("noAuto")},Ri={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(e1("beforeI2svg",a),Z("pseudoElements2svg",a),Z("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,gi(function(){Ei({autoReplaceSvgRoot:e}),e1("watch",a)})}},$i={icon:function(a){if(a===null)return null;if(Z1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:c1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=Q1(a[0]);return{prefix:s,iconName:c1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(C.cssPrefix,"-"))>-1||a.match(ii))){var r=J1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:c1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=X();return{prefix:i,iconName:c1(i,a)||a}}}},F={noAuto:qi,config:C,dom:Ri,parse:$i,library:n6,findIconDefinition:A2,toHtml:g1},Ei=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?d:e;(Object.keys($.styles).length>0||C.autoFetchSvg)&&I&&C.autoReplaceSvg&&F.dom.i2svg({node:s})};function c2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return g1(s)})}}),Object.defineProperty(c,"node",{get:function(){if(I){var s=d.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Ui(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(I2(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=K1(z(z({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function _i(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(C.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},r),{},{id:n}),children:s}]}]}function K2(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,m=c.extra,V=c.watchable,M=V===void 0?!1:V,u=s.found?s:e,x=u.width,w=u.height,v=r==="fak",H=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(_){return m.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(m.classes).join(" "),p={children:[],attributes:z(z({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:H,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(w)})},b=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(x/w*16*.0625,"em")}:{};M&&(p.attributes[a1]=""),l&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(o||u1())},children:[l]}),delete p.attributes.title);var g=z(z({},p),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:z(z({},b),m.styles)}),D=s.found&&e.found?Z("generateAbstractMask",g)||{children:[],attributes:{}}:Z("generateAbstractIcon",g)||{children:[],attributes:{}},P=D.children,m1=D.attributes;return g.children=P,g.attributes=m1,f?_i(g):Ui(g)}function V4(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=z(z(z({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[a1]="");var o=z({},n.styles);I2(r)&&(o.transform=pi({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var m=K1(o);m.length>0&&(t.style=m);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),i&&V.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),V}function Gi(c){var a=c.content,e=c.title,s=c.extra,r=z(z(z({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=K1(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var g2=$.styles;function P2(c){var a=c[0],e=c[1],s=c.slice(4),r=U2(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Oi={found:!1,width:512,height:512};function Wi(c,a){!I4&&!C.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function F2(c,a){var e=a;return a==="fa"&&C.styleDefault!==null&&(a=X()),new Promise(function(s,r){if(Z("missingIconAbstract"),e==="fa"){var i=f6(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&g2[a]&&g2[a][c]){var n=g2[a][c];return s(P2(n))}Wi(c,a),s(z(z({},Oi),{},{icon:C.showMissingIcons&&c?Z("missingIconAbstract")||{}:{}}))})}var M4=function(){},T2=C.measurePerformance&&y1&&y1.mark&&y1.measure?y1:{mark:M4,measure:M4},z1='FA "6.2.1"',Zi=function(a){return T2.mark("".concat(z1," ").concat(a," begins")),function(){return l6(a)}},l6=function(a){T2.mark("".concat(z1," ").concat(a," ends")),T2.measure("".concat(z1," ").concat(a),"".concat(z1," ").concat(a," begins"),"".concat(z1," ").concat(a," ends"))},Q2={begin:Zi,end:l6},G1=function(){};function p4(c){var a=c.getAttribute?c.getAttribute(a1):null;return typeof a=="string"}function Ii(c){var a=c.getAttribute?c.getAttribute(G2):null,e=c.getAttribute?c.getAttribute(O2):null;return a&&e}function ji(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(C.replacementClass)}function Yi(){if(C.autoReplaceSvg===!0)return O1.replace;var c=O1[C.autoReplaceSvg];return c||O1.replace}function Xi(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function Ki(c){return d.createElement(c)}function o6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Xi:Ki:e;if(typeof c=="string")return d.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(o6(n,{ceFn:s}))}),r}function Qi(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var O1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(o6(r),e)}),e.getAttribute(a1)===null&&C.keepOriginalSource){var s=d.createComment(Qi(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~Z2(e).indexOf(C.replacementClass))return O1.replace(a);var r=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===C.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return g1(f)}).join(`
`);e.setAttribute(a1,""),e.innerHTML=n}};function u4(c){c()}function t6(c,a){var e=typeof a=="function"?a:G1;if(c.length===0)e();else{var s=u4;C.mutateApproach===ei&&(s=Y.requestAnimationFrame||u4),s(function(){var r=Yi(),i=Q2.begin("mutate");c.map(r),i(),e()})}}var J2=!1;function m6(){J2=!0}function B2(){J2=!1}var j1=null;function L4(c){if(t4&&C.observeMutations){var a=c.treeCallback,e=a===void 0?G1:a,s=c.nodeCallback,r=s===void 0?G1:s,i=c.pseudoElementsCallback,n=i===void 0?G1:i,f=c.observeMutationsRoot,l=f===void 0?d:f;j1=new t4(function(t){if(!J2){var o=X();o1(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!p4(m.addedNodes[0])&&(C.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&p4(m.target)&&~oi.indexOf(m.attributeName))if(m.attributeName==="class"&&Ii(m.target)){var V=J1(Z2(m.target)),M=V.prefix,u=V.iconName;m.target.setAttribute(G2,M||o),u&&m.target.setAttribute(O2,u)}else ji(m.target)&&r(m.target)})}}),I&&j1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ji(){j1&&j1.disconnect()}function cf(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function af(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=J1(Z2(c));return r.prefix||(r.prefix=X()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Pi(r.prefix,c.innerText)||Y2(r.prefix,k2(c.innerText))),!r.iconName&&C.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function ef(c){var a=o1(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return C.autoA11y&&(e?a["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(s||u1()):(a["aria-hidden"]="true",a.focusable="false")),a}function sf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function d4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=af(c),s=e.iconName,r=e.prefix,i=e.rest,n=ef(c),f=w2("parseNodeAttributes",{},c),l=a.styleParser?cf(c):[];return z({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var rf=$.styles;function z6(c){var a=C.autoReplaceSvg==="nest"?d4(c,{styleParser:!1}):d4(c);return~a.extra.classes.indexOf(j4)?Z("generateLayersText",c,a):Z("generateSvgReplacementMutation",c,a)}var K=new Set;W2.map(function(c){K.add("fa-".concat(c))});Object.keys(h1[L]).map(K.add.bind(K));Object.keys(h1[N]).map(K.add.bind(K));K=L1(K);function g4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var e=d.documentElement.classList,s=function(m){return e.add("".concat(m4,"-").concat(m))},r=function(m){return e.remove("".concat(m4,"-").concat(m))},i=C.autoFetchSvg?K:W2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(rf));i.includes("fa")||i.push("fa");var n=[".".concat(j4,":not([").concat(a1,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(a1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=o1(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=Q2.begin("onTree"),t=f.reduce(function(o,m){try{var V=z6(m);V&&o.push(V)}catch(M){I4||M.name==="MissingIcon"&&console.error(M)}return o},[]);return new Promise(function(o,m){Promise.all(t).then(function(V){t6(V,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(V){l(),m(V)})})}function ff(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z6(c).then(function(e){e&&t6([e],a)})}function nf(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:A2(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:A2(r||{})),c(s,z(z({},e),{},{mask:r}))}}var lf=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?U:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,m=e.title,V=m===void 0?null:m,M=e.titleId,u=M===void 0?null:M,x=e.classes,w=x===void 0?[]:x,v=e.attributes,H=v===void 0?{}:v,p=e.styles,b=p===void 0?{}:p;if(a){var g=a.prefix,D=a.iconName,P=a.icon;return c2(z({type:"icon"},a),function(){return e1("beforeDOMElementCreation",{iconDefinition:a,params:e}),C.autoA11y&&(V?H["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(u||u1()):(H["aria-hidden"]="true",H.focusable="false")),K2({icons:{main:P2(P),mask:l?P2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:D,transform:z(z({},U),r),symbol:n,title:V,maskId:o,titleId:u,extra:{attributes:H,styles:b,classes:w}})})}},of={mixout:function(){return{icon:nf(lf)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=g4,e.nodeCallback=ff,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?d:s,i=e.callback,n=i===void 0?function(){}:i;return g4(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,o=s.mask,m=s.maskId,V=s.extra;return new Promise(function(M,u){Promise.all([F2(r,f),o.iconName?F2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var w=U2(x,2),v=w[0],H=w[1];M([e,K2({icons:{main:v,mask:H},prefix:f,iconName:r,transform:l,symbol:t,maskId:m,title:i,titleId:n,extra:V,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=K1(f);l.length>0&&(r.style=l);var t;return I2(n)&&(t=Z("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},tf={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return c2({type:"layer"},function(){e1("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(L1(i)).join(" ")},children:n}]})}}}},mf={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,o=s.styles,m=o===void 0?{}:o;return c2({type:"counter",content:e},function(){return e1("beforeDOMElementCreation",{content:e,params:s}),Gi({content:e.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(L1(f))}})})}}}},zf={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?U:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,o=s.attributes,m=o===void 0?{}:o,V=s.styles,M=V===void 0?{}:V;return c2({type:"text",content:e},function(){return e1("beforeDOMElementCreation",{content:e,params:s}),V4({content:e,transform:z(z({},U),i),title:f,extra:{attributes:m,styles:M,classes:["".concat(C.cssPrefix,"-layers-text")].concat(L1(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(O4){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return C.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,V4({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},Cf=new RegExp('"',"ug"),x4=[1105920,1112319];function vf(c){var a=c.replace(Cf,""),e=Ni(a,0),s=e>=x4[0]&&e<=x4[1],r=a.length===2?a[0]===a[1]:!1;return{value:k2(r?a[0]:a),isSecondary:s||r}}function b4(c,a){var e="".concat(ai).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=o1(c.children),n=i.filter(function(P){return P.getAttribute(S2)===a})[0],f=Y.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(fi),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var m=f.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?N:L,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?V1[V][l[2].toLowerCase()]:ni[V][t],u=vf(m),x=u.value,w=u.isSecondary,v=l[0].startsWith("FontAwesome"),H=Y2(M,x),p=H;if(v){var b=Fi(x);b.iconName&&b.prefix&&(H=b.iconName,M=b.prefix)}if(H&&!w&&(!n||n.getAttribute(G2)!==M||n.getAttribute(O2)!==p)){c.setAttribute(e,p),n&&c.removeChild(n);var g=sf(),D=g.extra;D.attributes[S2]=a,F2(H,M).then(function(P){var m1=K2(z(z({},g),{},{icons:{main:P,mask:X2()},prefix:M,iconName:p,extra:D,watchable:!0})),_=d.createElement("svg");a==="::before"?c.insertBefore(_,c.firstChild):c.appendChild(_),_.outerHTML=m1.map(function(p2){return g1(p2)}).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var JW=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gs={exports:{}};(function(c){(function(a){var e=function(v,H,p){if(!t(H)||m(H)||V(H)||M(H)||l(H))return H;var b,g=0,D=0;if(o(H))for(b=[],D=H.length;g<D;g++)b.push(e(v,H[g],p));else{b={};for(var P in H)Object.prototype.hasOwnProperty.call(H,P)&&(b[v(P,p)]=e(v,H[P],p))}return b},s=function(v,H){H=H||{};var p=H.separator||"_",b=H.split||/(?=[A-Z])/;return v.split(b).join(p)},r=function(v){return u(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(H,p){return p?p.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var H=r(v);return H.substr(0,1).toUpperCase()+H.substr(1)},n=function(v,H){return s(v,H).toLowerCase()},f=Object.prototype.toString,l=function(v){return typeof v=="function"},t=function(v){return v===Object(v)},o=function(v){return f.call(v)=="[object Array]"},m=function(v){return f.call(v)=="[object Date]"},V=function(v){return f.call(v)=="[object RegExp]"},M=function(v){return f.call(v)=="[object Boolean]"},u=function(v){return v=v-0,v===v},x=function(v,H){var p=H&&"process"in H?H.process:H;return typeof p!="function"?v:function(b,g){return p(b,v,g)}},w={camelize:r,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(v,H){return e(x(r,H),v)},decamelizeKeys:function(v,H){return e(x(n,H),v,H)},pascalizeKeys:function(v,H){return e(x(i,H),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=w:a.humps=w})(JW)})(Gs);var cZ=Gs.exports,aZ=["class","style"];function eZ(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var s=e.indexOf(":"),r=cZ.camelize(e.slice(0,s)),i=e.slice(s+1).trim();return a[r]=i,a},{})}function sZ(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function J3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var s=(c.children||[]).map(function(l){return J3(l)}),r=Object.keys(c.attributes||{}).reduce(function(l,t){var o=c.attributes[t];switch(t){case"class":l.class=sZ(o);break;case"style":l.style=eZ(o);break;default:l.attrs[t]=o}return l},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,f=jW(e,aZ);return q4(c.tag,R(R(R({},a),{},{class:r.class,style:R(R({},r.style),n)},r.attrs),f),s)}var Os=!1;try{Os=!0}catch{}function rZ(){if(!Os&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function H1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?A({},c,a):{}}function iZ(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},A(a,"fa-".concat(c.size),c.size!==null),A(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),A(a,"fa-pull-".concat(c.pull),c.pull!==null),A(a,"fa-swap-opacity",c.swapOpacity),A(a,"fa-bounce",c.bounce),A(a,"fa-shake",c.shake),A(a,"fa-beat",c.beat),A(a,"fa-fade",c.fade),A(a,"fa-beat-fade",c.beatFade),A(a,"fa-flash",c.flash),A(a,"fa-spin-pulse",c.spinPulse),A(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(s){return e[s]?s:null}).filter(function(s){return s})}function A4(c){if(c&&X1(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(Y1.icon)return Y1.icon(c);if(c===null)return null;if(X1(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var fZ=E2({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var s=e.attrs,r=q(function(){return A4(a.icon)}),i=q(function(){return H1("classes",iZ(a))}),n=q(function(){return H1("transform",typeof a.transform=="string"?Y1.transform(a.transform):a.transform)}),f=q(function(){return H1("mask",A4(a.mask))}),l=q(function(){return Nf(r.value,R(R(R(R({},i.value),n.value),f.value),{},{symbol:a.symbol,title:a.title}))});Sr(l,function(o){if(!o)return rZ("Could not find one or more icon(s)",r.value,f.value)},{immediate:!0});var t=q(function(){return l.value?J3(l.value.abstract[0],{},s):null});return function(){return t.value}}});E2({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var s=e.slots,r=C6.familyPrefix,i=q(function(){return["".concat(r,"-layers")].concat(D2(a.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return q4("div",{class:i.value},s.default?s.default():[])}}});E2({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var s=e.attrs,r=C6.familyPrefix,i=q(function(){return H1("classes",[].concat(D2(a.counter?["".concat(r,"-layers-counter")]:[]),D2(a.position?["".concat(r,"-layers-").concat(a.position)]:[])))}),n=q(function(){return H1("transform",typeof a.transform=="string"?Y1.transform(a.transform):a.transform)}),f=q(function(){var t=Sf(a.value.toString(),R(R({},n.value),i.value)),o=t.abstract;return a.counter&&(o[0].attributes.class=o[0].attributes.class.replace("fa-layers-text","")),o[0]}),l=q(function(){return J3(f.value,{},s)});return function(){return l.value}}});/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */const R1={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},$1={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},E1={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},U1={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i},M2=c=>{if(c)return Array.isArray(c)?c[0]:c.locale};function B(c,a){return Array.isArray(c)?c[0]:c[a]}function S(c){return!!(c==null||c===""||Array.isArray(c)&&c.length===0)}const Ws=(c,a)=>{if(S(c))return!0;const e=M2(a);if(Array.isArray(c))return c.every(r=>Ws(r,{locale:e}));const s=String(c);return e?(R1[e]||R1.en).test(s):Object.keys(R1).some(r=>R1[r].test(s))},Zs=(c,a)=>{if(S(c))return!0;const e=M2(a);if(Array.isArray(c))return c.every(r=>Zs(r,{locale:e}));const s=String(c);return e?(U1[e]||U1.en).test(s):Object.keys(U1).some(r=>U1[r].test(s))},Is=(c,a)=>{if(S(c))return!0;const e=M2(a);if(Array.isArray(c))return c.every(r=>Is(r,{locale:e}));const s=String(c);return e?(E1[e]||E1.en).test(s):Object.keys(E1).some(r=>E1[r].test(s))},js=(c,a)=>{if(S(c))return!0;const e=M2(a);if(Array.isArray(c))return c.every(r=>js(r,{locale:e}));const s=String(c);return e?($1[e]||$1.en).test(s):Object.keys($1).some(r=>$1[r].test(s))};function nZ(c){return c?Array.isArray(c)?{min:c[0],max:c[1]}:c:{min:0,max:0}}const Ys=(c,a)=>{if(S(c))return!0;const{min:e,max:s}=nZ(a);if(Array.isArray(c))return c.every(i=>!!Ys(i,{min:e,max:s}));const r=Number(c);return Number(e)<=r&&Number(s)>=r},lZ=(c,a)=>{const e=B(a,"target");return String(c)===String(e)},Xs=(c,a)=>{if(S(c))return!0;const e=B(a,"length");if(Array.isArray(c))return c.every(r=>Xs(r,{length:e}));const s=String(c);return/^[0-9]*$/.test(s)&&s.length===Number(e)},oZ=(c,a,e)=>{const s=window.URL||window.webkitURL;return new Promise(r=>{const i=new Image;i.onerror=()=>r(!1),i.onload=()=>r(i.width===a&&i.height===e),i.src=s.createObjectURL(c)})};function tZ(c){return c?Array.isArray(c)?{width:Number(c[0]),height:Number(c[1])}:{width:Number(c.width),height:Number(c.height)}:{width:0,height:0}}const mZ=(c,a)=>{if(S(c))return!0;const{width:e,height:s}=tZ(a),r=[],i=Array.isArray(c)?c:[c];for(let n=0;n<i.length;n++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(i[n].name))return Promise.resolve(!1);r.push(i[n])}return Promise.all(r.map(n=>oZ(n,e,s))).then(n=>n.every(f=>f))},zZ=c=>{if(S(c))return!0;const a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(c)?c.every(e=>a.test(String(e))):a.test(String(c))},CZ=(c,a)=>{if(S(c))return!0;a||(a=[]);const e=new RegExp(`\\.(${a.join("|")})$`,"i");return Array.isArray(c)?c.every(s=>e.test(s.name)):e.test(c.name)},vZ=c=>{if(S(c))return!0;const a=/\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;return Array.isArray(c)?c.every(e=>a.test(e.name)):a.test(c.name)},HZ=c=>S(c)?!0:Array.isArray(c)?c.every(a=>/^-?[0-9]+$/.test(String(a))):/^-?[0-9]+$/.test(String(c)),hZ=(c,a)=>{const e=B(a,"other");return c===e},VZ=(c,a)=>{const e=B(a,"other");return c!==e};function Ks(c){return c==null}function MZ(c){return Array.isArray(c)&&c.length===0}const pZ=(c,a)=>{const e=B(a,"length");return Ks(c)?!1:(typeof c=="number"&&(c=String(c)),c.length||(c=Array.from(c)),c.length===Number(e))},Qs=(c,a)=>{if(S(c))return!0;const e=B(a,"length");return Array.isArray(c)?c.every(s=>Qs(s,{length:e})):String(c).length<=Number(e)},Js=(c,a)=>{if(S(c))return!0;const e=B(a,"max");return Array.isArray(c)?c.length>0&&c.every(s=>Js(s,{max:e})):Number(c)<=Number(e)},uZ=(c,a)=>{if(S(c))return!0;a||(a=[]);const e=new RegExp(`${a.join("|").replace("*",".+")}$`,"i");return Array.isArray(c)?c.every(s=>e.test(s.type)):e.test(c.type)},cr=(c,a)=>{if(S(c))return!0;const e=B(a,"length");return Array.isArray(c)?c.every(s=>cr(s,{length:e})):String(c).length>=Number(e)},ar=(c,a)=>{if(S(c))return!0;const e=B(a,"min");return Array.isArray(c)?c.length>0&&c.every(s=>ar(s,{min:e})):Number(c)>=Number(e)},c4=(c,a)=>S(c)?!0:Array.isArray(c)?c.every(e=>c4(e,a)):Array.from(a).some(e=>e==c),LZ=(c,a)=>S(c)?!0:!c4(c,a),dZ=/^[٠١٢٣٤٥٦٧٨٩]+$/,gZ=/^[0-9]+$/,xZ=c=>{if(S(c))return!0;const a=e=>{const s=String(e);return gZ.test(s)||dZ.test(s)};return Array.isArray(c)?c.every(a):a(c)},er=(c,a)=>{if(S(c))return!0;let e=B(a,"regex");return typeof e=="string"&&(e=new RegExp(e)),Array.isArray(c)?c.every(s=>er(s,{regex:e})):e.test(String(c))},bZ=c=>Ks(c)||MZ(c)||c===!1?!1:!!String(c).trim().length,NZ=(c,a)=>{if(S(c))return!0;let e=B(a,"size");if(e=Number(e),isNaN(e))return!1;const s=e*1024;if(!Array.isArray(c))return c.size<=s;for(let r=0;r<c.length;r++)if(c[r].size>s)return!1;return!0},SZ=(c,a)=>{var e;if(S(c))return!0;let s=B(a,"pattern");typeof s=="string"&&(s=new RegExp(s));try{new URL(c)}catch{return!1}return(e=s==null?void 0:s.test(c))!==null&&e!==void 0?e:!0},P4={alpha_dash:Zs,alpha_num:Is,alpha_spaces:js,alpha:Ws,between:Ys,confirmed:lZ,digits:Xs,dimensions:mZ,email:zZ,ext:CZ,image:vZ,integer:HZ,is_not:VZ,is:hZ,length:pZ,max_value:Js,max:Qs,mimes:uZ,min_value:ar,min:cr,not_one_of:LZ,numeric:xZ,one_of:c4,regex:er,required:bZ,size:NZ,url:SZ},l1=(()=>kr(new Date,"date","-"))(),kZ=(c,[a])=>c>l1&&a>=c?!0:`出發日期須在今天(${l1})以後，且不能比結束日期${a?`(${a})`:""}晚`,yZ=(c,[a])=>c>l1&&c>=a?!0:`結束日期須晚於今天(${l1})與出發日期${a?`(${a})`:""}`,wZ=(c,[a])=>a>c&&c>l1?!0:`報名截止日期須早於出發日期${a?`(${a})`:""}，且不能是今天(${l1})`,AZ=(c,[a])=>!c||!a||a>=c?!0:`出發日期不能比結束日期${a?`(${a})`:""}晚`,F4={start_date:kZ,end_date:yZ,order_expiry_date:wZ,search_start_date:AZ};/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function T4(c){return typeof c=="function"}const PZ=c=>c!==null&&!!c&&typeof c=="object"&&!Array.isArray(c);function B4(c,a){return c.replace(/(\d:)?{([^}]+)}/g,function(e,s,r){if(!s||!a.params)return r in a?a[r]:a.params&&r in a.params?a.params[r]:`{${r}}`;if(!Array.isArray(a.params))return r in a.params?a.params[r]:`{${r}}`;const i=Number(s.replace(":",""));return i in a.params?a.params[i]:`${s}{${r}}`})}function sr(c,a){return Object.keys(a).forEach(e=>{if(PZ(a[e])){c[e]||(c[e]={}),sr(c[e],a[e]);return}c[e]=a[e]}),c}class FZ{constructor(a,e){this.container={},this.locale=a,this.merge(e)}resolve(a){return this.format(this.locale,a)}getLocaleDefault(a,e){var s,r,i,n,f;return((i=(r=(s=this.container[a])===null||s===void 0?void 0:s.fields)===null||r===void 0?void 0:r[e])===null||i===void 0?void 0:i._default)||((f=(n=this.container[a])===null||n===void 0?void 0:n.messages)===null||f===void 0?void 0:f._default)}format(a,e){var s,r,i,n,f,l,t;let o;const{rule:m,form:V,label:M,name:u}=e,x=M||((r=(s=this.container[a])===null||s===void 0?void 0:s.names)===null||r===void 0?void 0:r[u])||u;return m?(o=((f=(n=(i=this.container[a])===null||i===void 0?void 0:i.fields)===null||n===void 0?void 0:n[u])===null||f===void 0?void 0:f[m.name])||((t=(l=this.container[a])===null||l===void 0?void 0:l.messages)===null||t===void 0?void 0:t[m.name]),o||(o=this.getLocaleDefault(a,u)||`${x} is not valid`),T4(o)?o(e):B4(o,Object.assign(Object.assign({},V),{field:x,params:m.params}))):(o=this.getLocaleDefault(a,u)||`${x} is not valid`,T4(o)?o(e):B4(o,Object.assign(Object.assign({},V),{field:x})))}merge(a){sr(this.container,a)}}let s1;function rr(c,a){s1||(s1=new FZ("en",{}));const e=s=>s1.resolve(s);return typeof c=="string"?(s1.locale=c,a&&s1.merge({[c]:a}),e):(s1.merge(c),e)}async function TZ(c){try{const a=await fetch(c,{headers:{"content-type":"application/json"}}).then(e=>e.json());if(!a.code){console.error("Could not identify locale, ensure the locale file contains `code` field");return}rr({[a.code]:a})}catch{console.error("Failed to load locale ")}}var R2={},BZ={get exports(){return R2},set exports(c){R2=c}};(function(c,a){(function(s,r){c.exports=r(Dr)})(yr,e=>(()=>{var s={657:(f,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(t,o)=>{const m=t.__vccOpts||t;for(const[V,M]of o)m[V]=M;return m}},976:f=>{f.exports=e}},r={};function i(f){var l=r[f];if(l!==void 0)return l.exports;var t=r[f]={exports:{}};return s[f](t,t.exports,i),t.exports}i.d=(f,l)=>{for(var t in l)i.o(l,t)&&!i.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:l[t]})},i.o=(f,l)=>Object.prototype.hasOwnProperty.call(f,l),i.r=f=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})};var n={};return(()=>{i.r(n),i.d(n,{Component:()=>u2,LoadingPlugin:()=>Hr,default:()=>hr,useLoading:()=>a4});var f=i(976);function l(h){var y;typeof h.remove<"u"?h.remove():(y=h.parentNode)==null||y.removeChild(h)}function t(h,y,G){let E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const Q=(0,f.h)(h,y,E),T=document.createElement("div");return T.classList.add("vld-container"),G.appendChild(T),(0,f.render)(Q,T),Q.component}function o(){return typeof window<"u"}const m=o()?window.HTMLElement:Object,V=["aria-busy"],M={class:"vl-icon"};function u(h,y,G,E,Q,T){return(0,f.openBlock)(),(0,f.createBlock)(f.Transition,{name:h.transition},{default:(0,f.withCtx)(()=>[(0,f.withDirectives)((0,f.createElementVNode)("div",{tabindex:"0",class:(0,f.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":h.isFullPage}]),"aria-busy":h.isActive,"aria-label":"Loading",style:(0,f.normalizeStyle)({zIndex:h.zIndex})},[(0,f.createElementVNode)("div",{class:"vl-background",onClick:y[0]||(y[0]=(0,f.withModifiers)(function(){return h.cancel&&h.cancel(...arguments)},["prevent"])),style:(0,f.normalizeStyle)(h.bgStyle)},null,4),(0,f.createElementVNode)("div",M,[(0,f.renderSlot)(h.$slots,"before"),(0,f.renderSlot)(h.$slots,"default",{},()=>[((0,f.openBlock)(),(0,f.createBlock)((0,f.resolveDynamicComponent)(h.loader),{color:h.color,width:h.width,height:h.height},null,8,["color","width","height"]))]),(0,f.renderSlot)(h.$slots,"after")])],14,V),[[f.vShow,h.isActive]])]),_:3},8,["name"])}const x={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(h){if(!this.isActive||h.target===this.$el||this.$el.contains(h.target))return;let y=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||y&&y.contains(h.target))&&(h.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},w=["width","height","stroke"],H=[(0,f.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function p(h,y,G,E,Q,T){return(0,f.openBlock)(),(0,f.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:h.width,height:h.height,stroke:h.color},H,8,w)}const b=(0,f.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var g=i(657);const P=(0,g.default)(b,[["render",p]]),m1=["fill","width","height"],p2=[(0,f.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function fr(h,y,G,E,Q,T){return(0,f.openBlock)(),(0,f.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:h.color,width:h.width,height:h.height},p2,8,m1)}const nr=(0,f.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),lr=(0,g.default)(nr,[["render",fr]]),or=["height","width","fill"],tr=[(0,f.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function mr(h,y,G,E,Q,T){return(0,f.openBlock)(),(0,f.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:h.height,width:h.width,fill:h.color},tr,8,or)}const zr=(0,f.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),Cr={Spinner:P,Dots:lr,Bars:(0,g.default)(zr,[["render",mr]])},vr=(0,f.defineComponent)({name:"VueLoading",mixins:[x],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,m],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:Cr,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const h=this.$el.parentElement;(0,f.render)(null,h),l(h)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(h){h.keyCode===27&&this.cancel()}},watch:{active(h){this.isActive=h},isActive(h){h?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),u2=(0,g.default)(vr,[["render",u]]);function a4(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:h,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y;const T={...h,...G,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let e4=T.container;T.container||(e4=document.body,T.isFullPage=!0);const Vr={...y,...E};return{hide:t(u2,T,e4,Vr).ctx.hide}}}}const Hr=function(h){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const E=a4(y,G);h.config.globalProperties.$loading=E,h.provide("$loading",E)},hr=u2})(),n})())})(BZ);const DZ=wr(R2);bf.add(aT,D_,ZW);Object.keys(P4).forEach(c=>{R4(c,P4[c])});Object.keys(F4).forEach(c=>{R4(c,F4[c])});TZ("./jsons/vee_validate_zh_TW.json");Br({generateMessage:rr("zh_TW"),validateOnInput:!0});const t1=pr(Er);t1.use(Ar());t1.use(Pr);t1.use(_1,Fr);t1.component("font-awesome-icon",fZ);t1.component("VueLoading",DZ);t1.mount("#app")});export default qZ();