import{bx as n}from"./dateFormat-6766bd6f.js";const{getStorageUser:o}=n();function a(r,s,t){const e=o();if(!e)t();else{const{identityId:i}=e;t(i==="0"?"/admin/index":"/member/editMyinfo")}}function f(r,s,t){o()?t():t({path:"/login",query:{returnUrl:r.path}})}export{f as a,a as g};