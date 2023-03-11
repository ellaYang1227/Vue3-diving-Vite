/**
 * Vue 元件 props 驗證器 - 返回通過(true)或未通過(false)
 * 
 * @param componentName：String - 元件名稱
 * @param value：Object - 要驗證的資料
 * @param verifyKeys：Array - 要驗證資料的欄位名稱
 */
export default function (componentName, value, verifyKeys) {
    let errKeys = [];
    errKeys = verifyKeys.filter(key => !Object.prototype.hasOwnProperty.call(value, key));

    if (errKeys.length) {
        console.warn(`[${componentName} 元件警告]缺少「${errKeys.join("、")}」欄位資料`);
    }

    return errKeys.length ? false : true;
}
