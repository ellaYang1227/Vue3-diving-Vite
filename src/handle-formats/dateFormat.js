// 日期格式化
// value：Date - 要格式化的值

// contents：Array - 設定要回傳的日期格式內容，預設 "date"
// "date"：只有日期
// "time"：日期 + 時間
export default function (value, contents = ["date"]) {
    value = new Date(value);
    let time = "";
    const y = value.getFullYear();
    let m = value.getMonth() + 1;
    m = handleLessTen(m);
    let d = value.getDate();
    d = handleLessTen(d);

    if (contents.includes("time")) {
        let h = value.getHours();
        h = handleLessTen(h);
        let m = value.getMinutes();
        m = handleLessTen(m);
        let s = value.getSeconds();
        s = handleLessTen(s);
        time = `${h}:${m}:${s}`;
    }

    return `${y}/${m}/${d} ${time}`;
}

// 小於 10 的數字 前面補 0
function handleLessTen(num) {
    return 10 > num ? `0${num}` : num;
}
