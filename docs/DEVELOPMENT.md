# DEVELOPMENT.md

## 環境變數

| 變數 | 用途 | 必要 | 預設值 |
|------|------|------|--------|
| `VITE_COMPANY_NAME` | 網站名稱（用於 document.title） | 是 | 氣瓶海人 水肺潛水揪團（`.env`） |
| `VITE_API_ROOT` | API 伺服器根網址 | 是 | `https://vue3-diving-vite.onrender.com/`（`.env.development` / `.env.production`） |
| `VITE_LOCALHOST_API_ROOT` | 本地 json-server 網址 | 否 | `http://localhost:3000/`（僅 `.env.development`，需手動切換） |

切換至本地 API 時，須修改 `src/data/axiosBase.js` 第 16 行：
```js
// 切換為本地
const baseURL = `${VITE_LOCALHOST_API_ROOT}`;
```

## 命名規則

### 檔案與目錄

| 類型 | 規則 | 範例 |
|------|------|------|
| Vue 元件 | PascalCase | `HeaderNavbar.vue`、`CommentCard.vue` |
| Vue 頁面（Views） | PascalCase + View 結尾 | `ActivitiesView.vue`、`EditMyinfoView.vue` |
| Pinia Store | PascalCase + Store 結尾 | `ActivityStore.js`、`MemberStore.js` |
| 工具函式檔案 | camelCase | `dateFormat.js`、`utilitieFunctions.js` |
| SCSS 片段 | `_` 前綴 + kebab-case | `_bootstrap-custom-variables.scss` |

### JavaScript / Vue

| 類型 | 規則 | 範例 |
|------|------|------|
| 變數 / 函式 | camelCase | `getMyOrders`、`setSwalFire` |
| Pinia store ID | 與檔名一致（PascalCase） | `"ActivityStore"` |
| 常數（環境變數解構） | UPPER_SNAKE_CASE | `VITE_COMPANY_NAME`、`VITE_API_ROOT` |
| Props | camelCase（Vue 內）/ kebab-case（template） | `:user-id`、`userIdProps` |
| 事件 | camelCase | `@submitOrder`、`@hideModal` |

### CSS class

本專案以 Bootstrap 5 為基礎，自訂 class 使用 kebab-case。Bootstrap 變數覆寫集中在 `_bootstrap-custom-variables.scss`，自訂 utilities 在 `_bootstrap-custom-utilities.scss`。

## 模組系統

使用 **ES Modules**（`import` / `export`）。Vite 設定 `@` alias 指向 `src/`：

```js
import formSchema from "@/data/formSchema.js";
import AuthStore from "@/stores/AuthStore.js";
```

## 新增功能步驟

### 新增 API 方法

1. 判斷屬於哪個 Store（Activity / Order / Member / Comment / Message / Option）
2. 在對應 Store 的 `actions` 中新增方法
3. 選擇正確的 API 端點前綴（參考 ARCHITECTURE.md 的端點前綴規則）
4. 若涉及刪除，**使用 PATCH + isDelete 而非 DELETE**
5. 在 View 元件中用 `mapActions` 取得方法

### 新增路由頁面

1. 在 `src/views/front/` 新增 View 元件
2. 在 `src/router/index.js` 的 FrontLayout children 中新增路由
3. 若頁面需登入，在 `beforeRouteEnter` 呼叫 `authGuard`
4. 若頁面需隱藏搜尋列，在 `created` 中設定 `this.frontLayoutData.showSearchBar = false`

### 新增表單欄位

1. 在 `src/data/formSchema.js` 新增欄位 schema（含 name、label、rules、as）
2. 若需跨欄位驗證，在 `src/data/customDefineRule.js` 新增自訂規則
3. 在 `main.js` 中，自訂規則已透過迴圈自動全域註冊，無需額外操作

### 新增 Store

1. 在 `src/stores/` 新增 `XxxStore.js`
2. 使用 `defineStore("XxxStore", { state, getters, actions })` 結構
3. 在需要的元件中用 `mapState` / `mapActions` 取用

## JSDoc 格式規範

本專案採用 JSDoc 為 Store actions 撰寫說明，格式如下：

```js
/**
 * 簡短說明此 action 的用途
 *
 * @param paramName Type 說明
 * @returns Type 說明（若有回傳值）
 */
actionName(paramName) {
  // ...
}
```

Store actions 的 Promise 回傳慣例：
- 成功：`Promise.resolve(data)` 或 `Promise.resolve(true)`
- 失敗：`Promise.reject(false)` 或直接 `return false`

## 計畫歸檔流程

1. **計畫檔案命名格式**：`YYYY-MM-DD-<feature-name>.md`
   - 例：`2026-04-18-ai-integration.md`

2. **計畫文件結構**：
   ```markdown
   # [功能名稱]
   
   ## User Story
   身為 [角色]，我想要 [功能]，以便 [目的]。
   
   ## Spec（規格）
   - [技術細節說明]
   
   ## Tasks
   - [ ] Task 1
   - [ ] Task 2
   ```

3. **開發中**：計畫檔案放在 `docs/plans/`

4. **功能完成後**：
   - 將計畫檔案移至 `docs/plans/archive/`
   - 更新 `docs/FEATURES.md`（標記功能為完成）
   - 更新 `docs/CHANGELOG.md`（記錄版本變更）

## 程式碼規範

- **ESLint**：`plugin:vue/vue3-essential` + `eslint:recommended` + `@vue/eslint-config-prettier`
- **Prettier**：設定於 `.prettierrc.json`
- **驗證時機**：VeeValidate 設定 `validateOnInput: true`（即時驗證）
- **元件選項式 API**：本專案使用 Options API（非 Composition API）

## SweetAlert2 使用規範

統一使用 `src/data/sweetalert2.js` 的 `setSwalFire` 函式，禁止直接呼叫 `Swal.fire`：

```js
import { setSwalFire } from "@/data/sweetalert2.js";

// Toast（輕量通知，右下角，1.5 秒）
setSwalFire("toast", "success", "更新成功");
setSwalFire("toast", "error", "更新失敗");

// Popup（彈跳視窗，3 秒，預設有關閉按鈕）
setSwalFire("popup", "error", "系統錯誤", "找不到該筆資料");

// HTML 內容
setSwalFire("popup", "warning", "標題", "<b>HTML內容</b>", true);

// 不自動關閉
setSwalFire("popup", "error", "標題", "內容", false, true);
```
