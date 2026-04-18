# TESTING.md

## 目前狀態

本專案**尚未設置自動化測試**（無 Vitest / Jest / Cypress 等測試框架）。`package.json` 中沒有 `test` script。

## 手動測試項目

目前所有驗證依賴手動操作：

### 關鍵測試路徑

#### 認證流程
- 正確帳密登入 → 跳轉首頁、Navbar 顯示使用者名稱
- 錯誤帳密 → 顯示「找不到用戶」或「密碼錯誤」
- 登出 → Cookie 清除、localStorage 清除、跳轉登入頁
- 未登入直接訪問 `/member/*` → 跳轉 `/login?returnUrl=...`
- 登入後 URL 帶 `returnUrl` → 登入後跳轉指定頁

#### 揪團報名
- 未登入點擊報名 → 彈出警告提示登入
- 報名自己的揪團 → 顯示「您無法報名自己建立的揪團活動」
- 資格不符（certificateLevelId / isNitrox / cylinderTotalId）→ 顯示「報名資格不符」
- 正常報名 → Toast 成功通知、報名人數 +1
- 取消後重新報名（PATCH 恢復，非建立新筆）→ 報名人數 +1
- 報名截止後 → 按鈕停用，顯示「報名截止」

#### 軟刪除驗證
- 刪除揪團後 → 活動列表中消失（isDelete=1 過濾）
- 取消報名後 → 我的報名列表消失、活動詳情人數 -1
- 被刪除的活動報名 → 在我的報名列表中自動過濾（`order.activity.isDelete` 判斷）

#### 活動狀態
- 活動 `violations` 有資料 → 公開列表看不到此活動
- 過期活動（`endDate` < 今天）→ 不顯示在列表（預設 `endDate_gte=today`）

## 若要導入測試框架

推薦使用 **Vitest**（Vite 原生支援）：

```bash
npm install -D vitest @vue/test-utils jsdom
```

在 `vite.config.js` 新增：
```js
import { defineConfig } from "vite";
export default defineConfig({
  test: {
    environment: "jsdom"
  }
});
```

在 `package.json` 新增：
```json
"scripts": {
  "test": "vitest",
  "test:run": "vitest run"
}
```

### 優先撰寫測試的模組

以下為純函式，最適合作為優先測試目標：

| 檔案 | 測試重點 |
|------|----------|
| `src/handle-formats/statusFormat.js` | 各種日期組合的 activityStatus / orderStatus 判斷 |
| `src/handle-formats/dateFormat.js` | 各種日期格式轉換、補零行為 |
| `src/handle-formats/currencyFormat.js` | 貨幣格式輸出 |
| `src/data/customDefineRule.js` | 四個日期跨欄位驗證規則 |
| `src/data/utilitieFunctions.js` | `getRandom`、`getTimestamp`、`getMainImg` |

### 測試範例（statusFormat）

```js
import { describe, it, expect, vi } from "vitest";

describe("statusFormat", () => {
  it("有違規紀錄時，activityStatus 應為 0", () => {
    const activity = {
      startDate: "2026-01-01",
      endDate: "2026-12-31",
      violations: [{ id: 1 }],
      orders: []
    };
    const result = statusFormat(activity);
    expect(result.activityStatus).toBe(0);
    expect(result.orderStatus).toBe(0);
  });
});
```

### 測試陷阱

1. **statusFormat.js 依賴 AuthStore**：`isOrderPlaced` 需要 `getStorageUser()` 回傳值，測試時需 mock AuthStore
2. **日期比較使用 timestamp**：`statusFormat` 內部的 `today` 是 IIFE，在模組載入時計算，時間敏感的測試需注意
3. **axiosBase.js 在模組層級呼叫 Store**：`const { hideLoading } = LoadingStore()` 在 import 時執行，測試前需先初始化 Pinia
