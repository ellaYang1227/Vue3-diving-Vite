// 回傳活動狀態和揪團狀態
// value：Object - 用來判斷的值
export default function (value) {
    console.log('value -------------------', value)
    return {
        activityStatus: getActivityStatus(value),
        orderStatus: getOrderStatus(value)
    };
}

// 活動狀態
function getActivityStatus({ startDate, endDate, violations }) {
    startDate = getDateParse(startDate);
    endDate = getDateParse(endDate);
    console.log('violations-------------', violations.length)
    console.log('startDate-------------', startDate)
    console.log('endDate-------------', endDate)
    let status = "";
    if (violations.length) {
        status = "系統中止";
    } else if (startDate > today) {
        status = "未開始";
    } else if (today >= startDate && endDate >= today) {
        status = "進行中";
    } else if (today > endDate) {
        status = "已結束";
    }

    return status;
}

// 揪團狀態
function getOrderStatus({ endDate, maxApplicants, applicants, violations }) {
    endDate = getDateParse(endDate);
    let status = "";
    if (violations.length) {
        status = "系統中止";
    } else if (applicants && maxApplicants === applicants) {
        status = "已額滿";
    } else if (endDate >= today) {
        status = "進行中";
    } else if (today > endDate) {
        status = "已截止";
    }

    return status;
}

const today = (() => {
    return getDateParse(new Date());
})();

function getDateParse(value) {
    return Date.parse(value);
}
