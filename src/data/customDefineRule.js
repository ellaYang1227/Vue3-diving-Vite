import dateFormat from "../handle-formats/dateFormat.js";

const today = (() => {
    return dateFormat(new Date(), "date", "-");
})();

// 須大於今天且小於等於結束日期(target)
const start_date = (value, [target]) => {
    if (value > today && target >= value) {
        return true;
    }

    return `出發日期須在今天(${today})以後，且不能比結束日期${target ? `(${target})` : ''}晚`;
}

// 須大於今天且大於等於出發日期(target)
const end_date = (value, [target]) => {
    if (value > today && value >= target) {
        return true;
    }

    return `結束日期須晚於今天(${today})與出發日期${target ? `(${target})` : ''}`;
}

// 須小於出發日期(target)且大於今天
const order_expiry_date = (value, [target]) => {
    if (target > value && value > today) {
        return true;
    }

    return `報名截止日期須早於出發日期${target ? `(${target})` : ''}，且不能是今天(${today})`;
}

// 小於結束日期(target)
const search_start_date = (value, [target]) => {
    if (target >= value) {
        return true;
    }

    return `出發日期不能比結束日期${target ? `(${target})` : ''}晚`;
}

export default {
    start_date,
    end_date,
    order_expiry_date,
    search_start_date
}

