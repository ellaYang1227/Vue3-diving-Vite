export default function (data) {
    return {
        activityStatus: getActivityStatus(data),
        groupStatus: getGroupStatus(data)
    };
}

// 活動狀態
function getActivityStatus({ startDate, endDate, isViolation }) {
    let status = "";
    if (startDate > today) {
        status = "未開始";
    } else if (today >= startDate && endDate >= today) {
        status = "進行中";
    } else if (today > endDate) {
        status = "已結束";
    } else if (isViolation) {
        status = "系統中止";
    }

    return status;
}

// 揪團狀態
function getGroupStatus({ isEnable, endDate, maxApplicants, applicants, isViolation }) {
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
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
})();
