/**
 * 貨幣格式化
 *
 * @param value：Number - 要格式化的值
 */
export default function (value) {
  return `$ ${value ? value.toLocaleString() : 0}`;
}
