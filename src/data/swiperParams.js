export default {
    slidesPerView: 1, // 同时顯示的 slides 數量
    spaceBetween: 30, // slide 間距
    resistanceRatio: 0, // 邊緣抵抗力大小(0 完全無法拖離)
    freeMode: true, // slide 会根据慣性滑动且不會貼合
    // autoplay: {
    //     delay: 5000 // 自動輪播
    // },
    mousewheel: true, // 滑鼠控制輪播
    watchOverflow: true, // 只有 1 個 slide，swiper 無效且隱藏導航(圓點分頁、左右導航)
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
};
