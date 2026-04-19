# DEVELOPMENT.md

## 命名規則

| 類型 | 規則 | 範例 |
|------|------|------|
| Vue 元件 | PascalCase | `MyInfoForm.vue`、`HeaderNavbar.vue` |
| Pinia Store 檔案 | PascalCase + Store 後綴 | `ActivityStore.js`、`MemberStore.js` |
| 普通 JS 模組 | camelCase | `axiosBase.js`、`utilitieFunctions.js` |
| 格式化模組 | camelCase + Format 後綴 | `dateFormat.js`、`statusFormat.js` |
| CSS class | Bootstrap 5 規範（kebab-case） | `.btn-primary`、`.text-center` |
| 路由路徑 | camelCase | `/myActivities`、`/editMyinfo` |
| Pinia store id | PascalCase + Store 後綴字串 | `"ActivityStore"`、`"AuthStore"` |

---

## 模組系統

專案使用 ES Module（`import`/`export`）。`@` alias 指向 `src/`（由 `vite.config.js` 設定）。

### 常用 import 路徑

```js
import { bacsRequest } from "@/data/axiosBase.js";
import { setSwalFire } from "@/data/sweetalert2.js";
import AuthStore from "@/stores/AuthStore.js";
```

---

## 新增 API 呼叫步驟

1. 確認目標資源屬於哪個 Store（依功能分類）
2. 在 Store 的 `actions` 新增函式，命名格式：`動詞 + 資源名稱`（`getActivities`、`updateOrder`）
3. 使用 `bacsRequest` 呼叫，回傳 `Promise.resolve()` / `Promise.reject(false)`
4. 需要認證的路由加上對應前綴（`400/`、`440/`、`600/`、`660/`）
5. 讀取列表 API 加上 `isDelete=0` 參數避免取到軟刪除資料

```js
// 範例：新增 Store action
getXxx(id) {
  return bacsRequest
    .get(`600/xxx/${id}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(false));
}
```

---

## 新增 Vue 元件步驟

1. 依元件用途放入對應目錄（`Card/`、`Modal/`、`Search/`、`Message/`、`Comment/`）
2. 命名使用 PascalCase
3. Props 驗證使用 `src/data/propsValidator.js` 的共用 validator
4. 若元件需要顯示 Loading，使用 `LoadingStore` 的 `showLoading()` / `hideLoading()`
5. 錯誤提示統一使用 `setSwalFire()`，不自行 alert 或 console.error

---

## 新增路由步驟

1. 在 `src/router/index.js` 的 `routes` 陣列加入新路由
2. 設定 `meta.title`（用於 `document.title`）
3. 若需要認證，在 `beforeEnter` 掛上 `routeGuard.js` 的對應守衛
4. 若是會員專區子路由，確認放在 `/member` children 下

---

## 環境變數

| 變數 | 用途 | 必要 | 說明 |
|------|------|------|------|
| `VITE_API_ROOT` | API 根路徑 | 是 | json-server 位址，例如 `http://localhost:3000/` |
| `VITE_COMPANY_NAME` | 頁面 title 後綴 | 是 | 顯示於 `document.title`，例如 `氣瓶海人` |

> 環境變數以 `VITE_` 開頭才會被 Vite 暴露給前端程式碼（透過 `import.meta.env`）。

---

## JSDoc 說明與範例

本專案 Store 的 actions 使用 JSDoc 說明參數，格式如下：

```js
/**
 * 動作說明
 *
 * @param paramName Type 說明
 * @returns Type 說明
 */
actionName(paramName) {
  // ...
}
```

範例（來自 `ActivityStore.js`）：

```js
/**
 * 取得單一活動
 *
 * @param activityId Number | String 要取得活動的活動 id
 */
getActivity(activityId) {
  return bacsRequest
    .get(`activities/${activityId}?...`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(false));
}
```

---

## 計畫歸檔流程

1. 計畫檔案命名格式：`YYYY-MM-DD-<feature-name>.md`
2. 計畫文件結構：User Story → Spec → Tasks
3. 功能完成後：移至 `docs/plans/archive/`
4. 更新 `docs/FEATURES.md` 和 `docs/CHANGELOG.md`

---

## 部署

GitHub Pages 部署透過 `deploy.sh`，production build 的 `base` 固定為 `/Vue3-diving-Vite/`（`vite.config.js`）。

```bash
npm run build
bash deploy.sh
```
