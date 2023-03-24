/**
 * 日期格式化 - 返回通過(true)或未通過(false)
 *
 * @param value：Date - 要格式化的值
 * @param contents：Array - 設定要回傳的日期格式內容，預設 "date"；date 表示只有日期，time 表示日期 + 時間
 * @param splitStyle：日期的樣式 "/" 或 "-"，預設 "/"
 */

export default function (value, contents = ["date"], splitStyle = "/") {
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
    time = ` ${hour}:${minute}:${second}`;
  }

  return `${year}${splitStyle}${month}${splitStyle}${date}${time}`;
}

// 小於 10 的數字 前面補 0
function handleLessTen(num) {
  return 10 > num ? `0${num}` : num;
}
