// 回傳活動狀態和揪團狀態
// value：Object - 用來判斷的值
export default function (value) {
    return {
        activityStatus: getActivityStatus(value),
        groupStatus: getGroupStatus(value)
    };
}

// 活動狀態
function getActivityStatus({ startDate, endDate, isViolation }) {
    startDate = getDateParse(startDate);
    endDate = getDateParse(endDate);
    let status = "";
    if (isViolation) {
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
function getGroupStatus({ isEnable, endDate, maxApplicants, applicants, isViolation }) {
    endDate = getDateParse(endDate);
    let status = "";
    if (!isEnable) {
        status = "未上架";
    } else if (isViolation) {
        status = "系統中止";
    } else if (maxApplicants === applicants) {
        status = "已額滿";
    } else if (isEnable) {
        if (endDate >= today) {
            status = "進行中";
        } else if (today > endDate) {
            status = "已截止";
        }
    }

    return status;
}

const today = (() => {
    return getDateParse(new Date());
})();

function getDateParse(value) {
    return Date.parse(value);
}
