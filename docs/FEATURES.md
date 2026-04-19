# FEATURES.md

## 功能清單

| # | 功能 | 狀態 | Store | View |
|---|------|------|-------|------|
| 1 | 首頁（最新活動、熱門活動、廣告地區） | ✅ 完成 | ActivityStore, CommentStore | IndexView |
| 2 | 揪團列表（搜尋、篩選） | ✅ 完成 | ActivityStore, OptionStore | ActivitiesView |
| 3 | 揪團詳情（報名、留言、評論） | ✅ 完成 | ActivityStore, OrderStore, MessageStore | ActivityView |
| 4 | 新增 / 編輯揪團 | ✅ 完成 | MemberStore, OptionStore | EditActivityView |
| 5 | 登入 | ✅ 完成 | MemberStore, AuthStore | LoginView |
| 6 | 註冊 | ✅ 完成 | MemberStore, AuthStore | SignupView |
| 7 | 我的揪團（查看、刪除） | ✅ 完成 | MemberStore | MyActivitiesView |
| 8 | 我的報名（查看、取消、評論） | ✅ 完成 | MemberStore, OrderStore | MyOrdersView |
| 9 | 評論管理（查看我的評論） | ✅ 完成 | MemberStore | MyCommentsView |
| 10 | 編輯個人檔案 | ✅ 完成 | MemberStore | EditMyinfoView |
| 11 | 後台管理 | 🚧 未啟用（路由已注解） | — | AdminIndexView |

---

## 功能行為描述

### 1. 首頁

- **最新活動**（`getNewActivities`）：過濾 `orderExpiryDate >= today`，排除有違規紀錄（`violations.length > 0`），依 `updateDate` 降序
- **熱門活動**（`getHotActivities`）：過濾 `endDate >= today`，排除違規，依報名人數（`orders.length`）降序，取前 3 筆
- **廣告地區**（`getAdLocations`）：取 `isAD=true` 的地點，從中隨機取 12 筆（`getRandom`）
- **評論展示**（`getComments`）：所有評論依主辦人（`activity.userId`）分組，計算平均分數

### 2. 揪團列表

- 搜尋條件：地點（`locationId`）、出發日期（`startDate_gte`）、結束日期（`endDate_lte`）、關鍵字標籤（`tags_like`）
- 若未指定 `endDate`，預設加上 `endDate_gte: today`（只顯示未結束活動）
- 所有活動自動計算 `activityStatus` 和 `orderStatus`（`statusFormat`）
- 違規活動不顯示（`getHandleActivities` 過濾 `violations.length > 0`）

### 3. 揪團詳情

- 讀取單一活動（`getActivity`）：含 `user`、`location`、`certificateLevel`、`cylinderTotal`、`violations`、`orders`
- 若活動 `isDelete=true`，顯示錯誤並回上頁
- **報名邏輯**：
  - 未登入 → 引導登入
  - 已報名 → 顯示「取消報名」
  - 報名狀態 `orderStatus !== 2` → 按鈕 disabled
  - 報名（`updateOrder`）：POST 至 `/660/users/:userId/orders`
  - 取消報名（`delOrder`）：PATCH `isDelete: 1`（軟刪除）
- **留言**（`MessageStore`）：
  - 結構：留言（message）→ 回覆（messageReplys），兩層巢狀
  - 讀取：先 `getMessages(activityId)`，再對每筆 message 呼叫 `getMessageReplys(id)`
  - 新增留言：POST `/660/activities/:activityId/messages`
  - 修改留言：PATCH `/660/messages/:messagesId`
  - 新增回覆：POST `/660/messages/:messagesId/messageReplys`

### 4. 新增 / 編輯揪團

- 新增（`addActivity` via `updateActivity`）：POST `/660/users/:userId/activities`，body 帶 `isDelete: 0`
- 編輯（`updateActivity`）：PATCH `/600/activities/:id`
- 表單欄位（`formSchema.js` activity 區塊）：
  - 必填：活動圖片、活動名稱（max 25）、活動內容、出發日期、結束日期、報名截止日期、活動地點、報名人數上限（1–100）、每人費用（≥ 0）、潛水證照等級
  - 選填：活動特點、標籤（最多 5 個）
- 自訂日期驗證規則：`start_date`、`end_date`、`order_expiry_date`（`customDefineRule.js`）

### 5. 登入

- POST `/login`（json-server-auth）
- 成功：`changeCookie("add", accessToken, user)` → 預載前 3 筆我的報名 → 導向 `/index`（或 `returnUrl`）
- 錯誤對應：`"Cannot find user"` → `"找不到用戶"`，`"Incorrect password"` → `"密碼錯誤"`

### 6. 註冊

- POST `/signup`（json-server-auth），body 自動加上 `creationDate`（timestamp）、`identityId: "1"`
- 成功：自動登入（同 `changeCookie`）→ 導向 `/index`
- 錯誤對應：`"Email already exists"` → `"Email 信箱已註冊"`

### 7. 我的揪團

- 讀取（`getMyActivities`）：GET `/600/users/:userId/activities?isDelete=0&...`
- 刪除：PATCH `isDelete: 1`（`delActivity`，軟刪除）
- 活動自動加上 `activityStatus`、`orderStatus`

### 8. 我的報名

- 讀取（`getMyOrders`）：GET `/400/users/:userId/orders?isDelete=0&_expand=activity`
- 過濾已刪除活動（`order.activity.isDelete`）
- 再呼叫 `getSearchActivitiesForActivityId` 取得完整活動資訊（含 `comments`，用於判斷是否已評論）
- Navbar 顯示：只取 `endDate >= today` 的前 3 筆（`myFirstThreeOrders`）
- 評論：活動 `activityStatus === 3`（已結束）才能評論；每筆報名只能評論一次

### 9. 評論管理

- 評論由主辦人的角度呈現：讀取自己作為主辦人的活動收到的評論
- `CommentStore.getComments()` 依 `activity.userId` 分組，計算 `averageScore`

### 10. 編輯個人檔案

- 讀取（`getMyinfo`）：GET `/600/users/:userId?_expand=certificateLevel&_expand=cylinderTotal&_embed=violations&_embed=comments`
- 更新（`updateMyinfo`）：PATCH `/600/users/:userId`，body 強制排除 `email`、`password`
- 成功後重新呼叫 `getMyinfo()` 並更新 localStorage user 資料（`setStorageUser`）
- 違規資訊（`violations`）在此頁顯示，可查看違規詳情（`getViolation`）

---

## 表單驗證規則（VeeValidate）

| 欄位 | 規則 | 說明 |
|------|------|------|
| Email | `email\|required` | 標準 email 格式 |
| 密碼 | 自訂 | 8 碼以上英數混合（`/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/`） |
| 名字 | `required\|max:10` | — |
| 活動名稱 | `required\|max:25` | — |
| 報名人數上限 | `required\|integer\|min_value:1\|max_value:100` | — |
| 每人費用 | `required\|integer\|min_value:0` | — |
| 標籤 | 自訂 | 最多 5 個 |
| 出發日期 | `required\|start_date:@結束日期` | 自訂：需早於結束日期 |
| 結束日期 | `required\|end_date:@出發日期` | 自訂：需晚於出發日期 |
| 報名截止日期 | `required\|order_expiry_date:@出發日期` | 自訂：需早於出發日期 |
| 圖片 | `image\|size:1024` | 必要時加 required，size 上限 1MB |
