// 日期格式化
// value：Date - 要格式化的值

// contents：Array - 設定要回傳的日期格式內容，預設 "date"
// "date"：只有日期
// "time"：日期 + 時間
export default function (value, contents = ["date"]) {
    value = new Date(value);
    let time = "";
    const year = value.getFullYear();
    let month = value.getMonth() + 1;
    month = handleLessTen(month);
    let date = value.getDate();
    date = handleLessTen(date);

    if (contents.includes("time")) {
        let hour = value.getHours();
        hour = handleLessTen(hour);
        let minute = value.getMinutes();
        minute = handleLessTen(minute);
        let second = value.getSeconds();
        second = handleLessTen(second);
        time = `${hour}:${minute}:${second}`;
    }

    return `${year}/${month}/${date} ${time}`;
}

// 小於 10 的數字 前面補 0
function handleLessTen(num) {
    return 10 > num ? `0${num}` : num;
}
