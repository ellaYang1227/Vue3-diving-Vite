export function FormatDate(date, contents = ["date"]) {
    date = new Date(date);
    let time = "";
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = handleLessTen(m);
    let d = date.getDate();
    d = handleLessTen(d);

    if (contents.includes("time")) {
        let h = date.getHours();
        h = handleLessTen(h);
        let m = date.getMinutes();
        m = handleLessTen(m);
        let s = date.getSeconds();
        s = handleLessTen(s);
        time = `${h}:${m}:${s}`;
    }

    return `${y}/${m}/${d} ${time}`;
}

// 小於 10 的數字 前面補 0
function handleLessTen(num) {
    return 10 > num ? `0${num}` : num;
}
