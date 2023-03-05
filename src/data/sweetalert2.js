import Swal from "sweetalert2/dist/sweetalert2.js";

export const swalPopup = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-lightPrimary"
    },
    buttonsStyling: false,
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: "關閉",
    timer: 3000,
    timerProgressBar: true,
    reverseButtons: true
});

export const swalToast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    position: "bottom-end",
    timer: 2000,
    timerProgressBar: true
});

/**
 * 設定 Swal
 * 
 * @param stype：String - Swal 樣式；toast(吐司)或(popup)彈跳視窗
 * @param icon：String - Swal icon 狀態；success、error、warning、info、question
 * @param title：String - 標題
 * @param text：String ｜HTML　- 內文
 * @param isHTML：Boolean - 是否 text 為 HTML 格式，預設 "false"
 * @param isCloseTimer：Boolean - 是否關閉計時器，預設 "false"
 */
export function setSwalFire(stype, icon, title, text, isHTML = false, isCloseTimer = false) {
    const currentSwal = stype === "toast" ? swalToast : swalPopup;
    const options = {
        icon,
        title,
        text: isHTML ? null : text,
        html: isHTML ? text : null
    };

    if (isCloseTimer) {
        options.timer = null;
    }

    return currentSwal.fire(options);
}
