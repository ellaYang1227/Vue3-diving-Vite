# TESTING.md

## 現況

本專案目前**尚未建立自動化測試**，`package.json` 中無測試框架（無 Vitest、Jest 等）。

---

## 建議引入的測試框架

若要為本專案加入測試，推薦使用 **Vitest**（與 Vite 原生整合）：

```bash
npm install -D vitest @vue/test-utils jsdom
```

`vite.config.js` 新增 test 設定：

```js
export default defineConfig({
  // ... 現有設定
  test: {
    environment: "jsdom",
    globals: true
  }
})
```

`package.json` 新增指令：

```json
"test": "vitest",
"test:run": "vitest run"
```

---

## 建議測試範圍

### Store 單元測試（優先）

最值得先測試的邏輯：

| 目標 | 說明 |
|------|------|
| `statusFormat.js` | `activityStatus` / `orderStatus` 狀態計算，有明確輸入/輸出邊界 |
| `AuthStore.handleCrypt` | 加解密邏輯，確保 encrypt → decrypt 為 roundtrip |
| `ActivityStore.getHandleActivities` | 違規過濾 + 狀態寫入邏輯 |
| `CommentStore.getComments` | 依 userId 分組 + 平均分計算 |

### 元件測試

| 目標 | 說明 |
|------|------|
| `NoData.vue` | 無資料時是否正確渲染 |
| `StatisticsCard.vue` | 傳入數字是否正確顯示 |
| Form schema 驗證 | 密碼規則、日期順序規則 |

---

## 撰寫 Vitest 單元測試範例

```js
// tests/statusFormat.test.js
import { describe, it, expect } from "vitest";
import statusFormat from "@/handle-formats/statusFormat.js";

describe("statusFormat", () => {
  it("violations > 0 時 activityStatus 應為 0", () => {
    const activity = {
      violations: [{ id: 1 }],
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      orders: []
    };
    const { activityStatus } = statusFormat(activity);
    expect(activityStatus).toBe(0);
  });
});
```

---

## 常見陷阱

- `statusFormat.js` 在模組頂層初始化 `today` 常數（IIFE），測試時需 mock `Date` 才能控制 today 值
- `AuthStore.handleCrypt` 依賴 `window.btoa` / `window.atob`，需要 jsdom 環境
- Store 中的 `bacsRequest` 需 mock（vi.mock）避免實際發出 HTTP 請求
- json-server 的軟刪除邏輯（`isDelete`）需在測試資料中明確設定
