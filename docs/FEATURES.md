# FEATURES.md

## 功能完成狀態

| 功能區塊 | 功能 | 狀態 |
|----------|------|------|
| 首頁 | 最新活動輪播 | ✅ 完成 |
| 首頁 | 熱門活動（依報名人數） | ✅ 完成 |
| 首頁 | 廣告推薦地區（隨機 12 個） | ✅ 完成 |
| 首頁 | 統計數字動畫（CountUp） | ✅ 完成 |
| 首頁 | AOS 捲動動畫 | ✅ 完成 |
| 活動列表 | 搜尋（地點、出發日期、結束日期、關鍵字） | ✅ 完成 |
| 活動列表 | 排序（更新時間、出發時間、評論分數、報名人數） | ✅ 完成 |
| 活動列表 | 前端分頁（每頁 10 筆） | ✅ 完成 |
| 活動列表 | 廣告側欄（隨機推薦） | ✅ 完成 |
| 活動詳情 | Swiper 圖片輪播（主圖 + 縮圖導覽） | ✅ 完成 |
| 活動詳情 | 報名資格驗證 | ✅ 完成 |
| 活動詳情 | 活動狀態 / 報名狀態顯示 | ✅ 完成 |
| 活動詳情 | 滾動固定報名列（activity-havbar） | ✅ 完成 |
| 活動詳情 | 標籤快速搜尋連結 | ✅ 完成 |
| 活動詳情 | 評論列表 | ✅ 完成 |
| 活動詳情 | 留言列表（含回覆） | ✅ 完成 |
| 活動詳情 | 推薦活動側欄 | ✅ 完成 |
| 揪團管理 | 新增揪團（含多圖上傳） | ✅ 完成 |
| 揪團管理 | 編輯揪團 | ✅ 完成 |
| 揪團管理 | 刪除揪團（軟刪除） | ✅ 完成 |
| 會員認證 | 登入 | ✅ 完成 |
| 會員認證 | 註冊 | ✅ 完成 |
| 會員認證 | 登出 | ✅ 完成 |
| 會員專區 | 個人資料統計卡（報名次數、評價分數、揪團數、累積報名人數） | ✅ 完成 |
| 會員專區 | 編輯個人檔案 | ✅ 完成 |
| 會員專區 | 我的揪團列表 | ✅ 完成 |
| 會員專區 | 我的報名列表 | ✅ 完成 |
| 會員專區 | 取消報名（軟刪除） | ✅ 完成 |
| 會員專區 | 新增評論（活動結束後才可評論） | ✅ 完成 |
| 會員專區 | 評論管理 | ✅ 完成 |
| 管理後台 | 管理員路由 + 版面 | ⚠️ 架構保留，路由已完全註解 |
| AI 整合 | Claude AI 功能 | 🚧 開發中（feat/integrate-ai-claude 分支） |

---

## 功能行為描述

### 活動列表搜尋

- **地點**：使用 `vue-multiselect` 下拉，對應 `locationId` 參數
- **出發日期**：搜尋 `startDate_gte`（大於等於）
- **結束日期**：搜尋 `endDate_lte`（小於等於）
- **關鍵字**：前端過濾（非 API 查詢）
- **預設行為**：若未填結束日期，自動附加 `endDate_gte=今天`，確保僅顯示未過期活動
- **違規活動**：在 `getHandleActivities()` 中被過濾，完全不進入列表

### 活動排序

排序在**前端執行**（資料已全量取回）：
- `updateDate`：依更新時間降序（預設 API 排序）
- `startDate`：依出發日期升序
- `score`：依主辦人平均評分降序
- `orderTotal`：依有效報名人數降序

### 報名流程與資格驗證

報名在 `ActivityView.vue` 的 `submitOrder()` 執行，依序檢查：

1. **未登入**：彈出警告，提示登入，點確認跳轉至登入頁
2. **自己的活動**：彈出警告，禁止報名自己建立的揪團
3. **資格不符**：比較三個欄位（數值越大代表要求越高）：
   - `activity.certificateLevelId > user.certificateLevelId`
   - `activity.isNitrox > user.isNitrox`
   - `activity.cylinderTotalId > user.cylinderTotalId`
   - 任一條件不符 → 彈出「報名資格不符」
4. **重複報名**：若曾有報名紀錄（含已取消），以 `PATCH` 方式恢復（不建立新紀錄）
5. **首次報名**：`POST /660/users/:userId/orders`

報名成功後，同時重新取得活動資料（更新人數顯示）和我的報名列表（更新 Navbar）。

### 活動狀態顯示按鈕邏輯

按鈕文字由 `statusBtnTextFormat(activityStatus, orderStatus)` 決定：

| activityStatus | orderStatus | 按鈕文字 |
|----------------|-------------|----------|
| 任何 | 2 | 立即報名 |
| 0 | 非 2 | 系統中止 |
| 2 | 非 2 | 活動進行 |
| 3 | 非 2 | 活動結束 |
| 非 0/2/3 | 1 | 報名額滿 |
| 非 0/2/3 | 3 | 報名截止 |

已報名者顯示「已報名」，按鈕停用。

### 揪團表單欄位與驗證

**必填欄位**（createActivity / editActivity）：
- 活動圖片（至少 1 張，不超過 1MB）
- 活動名稱（最多 25 字）
- 活動內容
- 出發日期（須在今天之後，且早於結束日期）
- 結束日期（須晚於今天與出發日期）
- 報名截止日期（須早於出發日期，且晚於今天）
- 活動地點
- 報名人數上限（1-100）
- 每人費用（整數，最小 0）
- 潛水證照等級

**選填欄位**：活動特點、標籤（最多 5 個）

### 評論機制

- 評論以「**活動主辦人（userId）**」為單位分組，非以活動為單位
- `CommentStore.comments` 儲存分組後結果，每個主辦人有 `data[]`、`totalScore`、`averageScore`
- `setScore(activities)` 將 `averageScore` 注入活動陣列，供卡片顯示
- 評論在活動結束後（activityStatus === 3）且已報名才可新增
- 每筆訂單僅能評論一次（資料庫層面）

### 留言與回覆

- 留言（messages）為第一層，回覆（messageReplys）為第二層（不支援無限巢狀）
- 頁面透過 URL hash `#messaget` 可捲動至留言區（路由 scrollBehavior 處理）
- `getMessagesfull()` 並發取回所有留言的回覆（`Promise.all`），完成後合併更新 `messages` state
- 未登入者可瀏覽留言，但無法新增

### 會員個人資料統計

`MemberView.vue` 的 `setCards()` 依以下邏輯計算：

| 統計卡 | 計算邏輯 |
|--------|----------|
| 報名揪團次數 | `myOrders.length` |
| 評價分數 | `myComments.averageScore`（取自 CommentStore，精確至小數 1 位） |
| 累積揪團數 | `myActivities.length` |
| 累積報名人數 | `myActivities` 中所有 `orders` 數量加總 |

### Navbar 報名預覽

HeaderNavbar 顯示最近 3 筆「活動結束日期大於等於今天」的報名紀錄（`myFirstThreeOrders`）。登入後由 `FrontLayout.created()` 呼叫 `getMyOrders(3)` 取得，之後每次報名/取消也會觸發更新。

### 圖片上傳（UploadImg.vue）

- 讀取為 Base64（`FileReader.readAsDataURL`）
- 存入 `form.imgs` 物件（key 格式：`img_1`、`img_2` 等）
- 每張圖有 `isMain` 布林值，主圖在 ActivityView 優先顯示
- 限制：image/* 格式，最大 1024KB

### 密碼規則

密碼須為**至少 8 碼的英數混合**（`/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/`），於 `formSchema.js` 的 `password.rules.full` 定義。
