/**
 * 活動按鈕顯示文字
 *
 * @param activityStatus：Number - 活動狀態
 * @param orderStatus：Number - 報名狀態
 * @returns String
 */
export function statusBtnTextFormat(activityStatus, orderStatus) {
  let text = "立即報名";
  if (orderStatus !== 2) {
    if (activityStatus === 0) {
      text = "系統中止";
    } else {
      if (activityStatus === 2 || activityStatus === 3) {
        text = `活動${activityStatus === 2 ? "進行" : "結束"}`;
      } else if (orderStatus === 1 || orderStatus === 3) {
        text = `報名${orderStatus === 1 ? "額滿" : "截止"}`;
      }
    }
  }

  return text;
}

/**
 * 活動狀態顯示文字
 *
 * @param activityStatus：Number - 活動狀態
 * @returns String
 */
export function activityStatusTextFormat(activityStatus) {
  let text = "";
  switch (activityStatus) {
    case 0:
      text = "系統中止";
      break;
    case 1:
      text = "未開始";
      break;
    case 2:
      text = "進行中";
      break;
    case 3:
      text = "已結束";
      break;
  }

  return text;
}

/**
 * 報名狀態顯示文字
 *
 * @param orderStatus：Number - 報名狀態
 * @returns String
 */
export function orderStatusTextFormat(activityStatus) {
  let text = "";
  switch (activityStatus) {
    case 0:
      text = "系統中止";
      break;
    case 1:
      text = "已額滿";
      break;
    case 2:
      text = "進行中";
      break;
    case 3:
      text = "已截止";
      break;
  }

  return text;
}
