import { getTimestamp } from "../data/utilitieFunctions.js";
import dateFormat from "../handle-formats/dateFormat.js";
import AuthStore from "../stores/AuthStore.js";
const { getStorageUser } = AuthStore();
/**
 * 回傳活動狀態和揪團狀態
 * 
 * @param value：Object - 用來判斷的值
 * @returns Object - activityStatus：活動狀態、orderStatus：揪團狀態、isOrderPlaced：是否已報名
 */
export default function (value) {
    const isOrderPlaced = value.orders.some(order => order.userId == getStorageUser()?.id && !order.isDelete);

    return {
        activityStatus: getActivityStatus(value),
        orderStatus: getOrderStatus(value),
        isOrderPlaced
    };
}

/**
 * 活動狀態
 * 
 * @param startDate：Date - 出發時間
 * @param endDate：Date - 結束時間
 * @param violations：Array - 該活動違規紀錄
 * @returns Number - 0：系統中止、1：未開始、2：進行中、3：已結束
 */
function getActivityStatus({ startDate, endDate, violations }) {
    startDate = getTimestamp(startDate);
    endDate = getTimestamp(endDate);

    let status = "";
    if (violations.length) {
        status = 0;
    } else if (startDate > today) {
        status = 1;
    } else if (today >= startDate && endDate >= today) {
        status = 2;
    } else if (today > endDate) {
        status = 3;
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
 * @returns Number - 0：系統中止、1：已額滿、2：進行中、3：已截止
 */
function getOrderStatus({ orderExpiryDate, maxOrderTotal, orders, violations }) {
    orderExpiryDate = getTimestamp(orderExpiryDate);
    orders = orders.filter(order => !order.isDelete);
    
    let status = "";
    if (violations.length) {
        status = 0;
    } else {
        if (maxOrderTotal === orders?.length) {
            status = today > orderExpiryDate ? 3 : 1;
        } else if (orderExpiryDate >= today) {
            status = 2;
        } else if (today > orderExpiryDate) {
            status = 3;
        } 
    }
    

    return status;
}

const today = (() => {
    return getTimestamp(dateFormat(new Date(), ["data"], "-"));
})();
