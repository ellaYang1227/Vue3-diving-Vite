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
    //timer: 3000,
    timerProgressBar: true
});

export const swalToast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    position: "bottom-end",
    timer: 3000,
    timerProgressBar: true
});

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

    currentSwal.fire(options);
}
