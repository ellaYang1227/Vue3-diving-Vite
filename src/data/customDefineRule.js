import dateFormat from "../handle-formats/dateFormat.js";

const today = (() => {
    return dateFormat(new Date(), "date", "-");
})();

// 需大於等於今天且小於等於結束日期(target)
const confirmedStartDate = (value, [target]) => {
        console.log(today, value, target)
    if (value >= today && target >= value) {
        return true;
    }

    return `出發日期須不能早於今天(${today})，也不能比結束日期${target ? `(${target})` : ''}晚`;
}

// 需大於等於今天與出發日期(target)
const confirmedEndDate = (value, [target]) => {
        console.log(today, value, target)
    if (value >= today && value >= target) {
        return true;
    }

    return `結束日期須不能晚於今天(${today})與出發日期${target ? `(${target})` : ''}`;
}

export default {
  confirmedStartDate,
  confirmedEndDate
}

