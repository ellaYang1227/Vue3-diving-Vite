function r(a,e){let t="立即報名";return e!==2&&(a===0?t="系統中止":a===2||a===3?t=`活動${a===2?"進行":"結束"}`:(e===1||e===3)&&(t=`報名${e===1?"額滿":"截止"}`)),t}function s(a){let e="";switch(a){case 0:e="系統中止";break;case 1:e="未開始";break;case 2:e="進行中";break;case 3:e="已結束";break}return e}function c(a){let e="";switch(a){case 0:e="系統中止";break;case 1:e="已額滿";break;case 2:e="進行中";break;case 3:e="已截止";break}return e}export{s as a,c as o,r as s};