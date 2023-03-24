/**
 * 隨機
 *
 * @param data：Array - 資料
 * @param len：Number- 回傳的資料長度；如果沒有設定就全部回傳
 */
export function getRandom([...data], len) {
  if (!len) {
    len = data.length;
  }
  return data.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, len);
}

/**
 * 時間轉換成時間戳
 *
 * @param value：Date
 */
export function getTimestamp(value) {
  return new Date(value).getTime();
}

/**
 * 取得主要圖片資料
 *
 * @param imgs：Array - 圖片資料
 */
export function getMainImg(imgs) {
  const findImgKey = Object.keys(imgs).find(imgKey => imgs[imgKey].isMain);
  return imgs[findImgKey];
}
