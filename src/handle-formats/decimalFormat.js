/**
 * 小數位數格式化
 *
 * @param value：Number | String - 要格式化的值，預設 0
 * @param fractionDigits：Number - 設定要回傳的小數位數，預設 0
 */
export default function (value = 0, fractionDigits = 0) {
  let num = Math.round(value);
  if (fractionDigits) {
    const pow = Math.pow(10, fractionDigits);
    num = Math.round(value * pow) / pow;
  }

  return num.toFixed(fractionDigits);
}
