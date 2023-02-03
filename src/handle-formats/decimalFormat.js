// 小數位數格式化
// value：Number | String - 要格式化的值

// fractionDigits：Number - 設定要回傳的小數位數，預設 0

export default function (value, fractionDigits = 0) {
    let num = Math.round(value);
    if (fractionDigits) {
        const pow = Math.pow(10, fractionDigits);
        num = Math.round(value * pow) / pow;
    }

    return num.toFixed(fractionDigits);
}
