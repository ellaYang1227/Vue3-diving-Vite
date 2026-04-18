# CLAUDE.md

此文件提供 Claude Code (claude.ai/code) 在此專案中操作時的指引。

## 專案概述

**氣瓶海人 水肺潛水揪團** — Vue 3 + Vite + Pinia 前端專案，後端使用 json-server + json-server-auth 提供模擬 RESTful API（含 JWT 認證）。

- 前台網站：https://ellayang1227.github.io/Vue3-diving-Vite/#/
- API 伺服器：https://vue3-diving-vite.onrender.com/

## 常用指令

```bash
npm run dev       # 啟動開發伺服器 (http://localhost:5173/)
npm run build     # 生產環境建置
npm run preview   # 預覽生產建置結果
npm run lint      # ESLint 檢查並自動修正
npm run format    # Prettier 格式化 src/**/*.{js,vue,scss}
```

## 關鍵規則

### API 端點前綴（json-server-auth 規則）
所有 API 請求透過 `src/data/axiosBase.js` 的 `bacsRequest` 實例發送，會自動附加 JWT Token。json-server-auth 以 URL 前綴控制存取權限：

| 前綴 | 說明 |
|------|------|
| `400/` | 僅限本人讀取（需登入） |
| `440/` | 任何人皆可讀取（含關聯資料） |
| `600/` | 需登入（CRUD） |
| `660/` | 需登入（巢狀資源建立） |

無前綴：公開讀取（`activities`、`locations`、`tags`、`comments` 等）。

### 軟刪除（Soft Delete）模式
**禁止對 activities 和 orders 使用 DELETE 方法**，因 json-server 有 bug 會連帶刪除關聯資料。一律改用 `PATCH` 並設定 `{ isDelete: 1 }`，查詢時加入 `isDelete=0` 過濾。

### 認證機制
- JWT Token 存於 cookie（`access-token`），由 `AuthStore.changeCookie()` 管理
- 使用者資料存於 `localStorage`（`user` key），以 `btoa/atob` + `encodeURIComponent` 加密（支援中文）
- 每次路由切換前，`router.beforeEach` 會呼叫 `AuthStore.getStorageUser()` 重新同步狀態

### 活動狀態計算
`src/handle-formats/statusFormat.js` 集中計算兩個狀態：
- `activityStatus`：0=系統中止、1=未開始、2=進行中、3=已結束
- `orderStatus`：0=系統中止、1=已額滿、2=進行中、3=已截止

**凡有 `violations` 陣列不為空的活動，在 `getHandleActivities()` 中會被直接過濾掉**，不進入顯示清單。

### 報名資格驗證（前端）
在 `ActivityView.vue` 的 `submitOrder()` 中，三項條件同時比對：`certificateLevelId`、`isNitrox`、`cylinderTotalId`（數值越大代表要求越高）。活動主辦人不可報名自己的活動。

### VeeValidate 自訂規則
`src/data/customDefineRule.js` 定義四個跨欄位日期驗證規則：`start_date`、`end_date`、`order_expiry_date`、`search_start_date`。zh_TW 語系從 `public/jsons/vee_validate_zh_TW.json` 非同步載入。

### 分支命名規範

**格式**：`<type>/<kebab-case-描述>`\
**有 task 編號**：`<type>/task-<task編號>-<kebab-case-描述>`

| type | 說明 |
|------|------|
| `feat` | 新功能開發 |
| `fix` | 錯誤修正 |
| `chore` | 雜項（設定、重新命名、非功能性調整） |
| `refactor` | 重構（不影響功能） |
| `docs` | 文件變更 |
| `style` | 樣式調整（CSS/SCSS） |
| `perf` | 效能優化 |

### 範例

```
feat/integrate-ai-claude
feat/task-123-activity-search
fix/task-456-order-status-bug
chore/rename-store-files
```

### Commit 格式

**格式**：`<type>: [scope] <action>: <中文描述>`\
**有 task 編號**：`<type>: [scope] <action>: <中文描述>[#編號]`

> `[scope]` 選填，填入功能模組名稱（如 `[活動詳情]`、`[Header]`）；無法明確歸類或範圍較大時省略。

### type（類型）

| type | 說明 |
|------|------|
| `feat` | 新功能開發 |
| `fix` | 錯誤修正 |
| `chore` | 雜項（設定、重新命名、非功能性調整） |
| `refactor` | 重構（不影響功能） |
| `docs` | 文件變更 |
| `style` | 樣式調整（CSS/SCSS） |
| `perf` | 效能優化 |

### action（動作）

| action | 說明 |
|--------|------|
| `add` | 新增檔案或功能 |
| `edit` | 修改既有內容 |
| `delete` | 刪除 |

### 範例

```
feat: [活動詳情] add: 評論列表
style: [Header] edit: 文字大小
fix: [OrderModal] edit: 報名狀態顯示邏輯[#456]
chore: edit: 重新命名 MemberStore.js 檔案
docs: add: 建立 CLAUDE.md 初始文件
```

### 路由使用 Hash History
`createWebHashHistory()` — 部署在 GitHub Pages 無需 server 設定。所有未知路徑重導向至 `/index`。Admin 路由目前被完全註解（程式碼保留，但未啟用）。

## 詳細文件

- [./docs/README.md](./docs/README.md) — 項目介紹與快速開始
- [./docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — 架構、目錄結構、資料流
- [./docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md) — 開發規範、命名規則
- [./docs/FEATURES.md](./docs/FEATURES.md) — 功能列表與完成狀態
- [./docs/TESTING.md](./docs/TESTING.md) — 測試規範與指南
- [./docs/CHANGELOG.md](./docs/CHANGELOG.md) — 更新日誌
