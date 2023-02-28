import { getDateParse } from "../data/utilitieFunctions.js";
import dateFormat from "../handle-formats/dateFormat.js";
/**
 * 回傳活動狀態和揪團狀態
 * 
 * @param value：Object - 用來判斷的值
 */

export default function (value) {
    //console.log('value -------------------', value)
    return {
        activityStatus: getActivityStatus(value),
        orderStatus: getOrderStatus(value)
    };
}

/**
 * 活動狀態
 * 
 * @param startDate：Date - 出發時間
 * @param endDate：Date - 結束時間
 * @param violations：Array - 該活動違規紀錄
 */
function getActivityStatus({ startDate, endDate, violations }) {
    startDate = getDateParse(startDate);
    endDate = getDateParse(endDate);
    // console.log('violations-------------', violations.length)
    // console.log('startDate-------------', startDate)
    // console.log('endDate-------------', endDate)
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

/**
 * 報名狀態
 * 
 * @param orderExpiryDate：Date - 報名截止日期
 * @param maxOrderTotal：Number - 報名人數上限
 * @param orders：Array - 該活動所有報名人資訊
 * @param violations：Array - 該活動違規紀錄
 */
function getOrderStatus({ orderExpiryDate, maxOrderTotal, orders, violations }) {
    orderExpiryDate = getDateParse(orderExpiryDate);
    let status = "";
    if (violations.length) {
        status = "系統中止";
    } else if (maxOrderTotal === orders?.length) {
        status = "已額滿";
    } else if (orderExpiryDate >= today) {
        status = "進行中";
    } else if (today > orderExpiryDate) {
        status = "已截止";
    }

    return status;
}

const today = (() => {
    return getDateParse(dateFormat(new Date()));
})();
