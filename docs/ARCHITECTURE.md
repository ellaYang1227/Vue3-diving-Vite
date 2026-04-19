# ARCHITECTURE.md

## 目錄結構

```
Vue3-diving-Vite/
├── public/
│   └── jsons/
│       └── vee_validate_zh_TW.json   # VeeValidate 中文語系（runtime 載入）
├── src/
│   ├── App.vue                       # 根元件，包含全域 VueLoading overlay
│   ├── main.js                       # 入口：註冊 Pinia、Router、Axios、FontAwesome、VeeValidate
│   ├── assets/
│   │   ├── main.scss                 # SCSS 入口，@import 所有子樣式
│   │   ├── images/                   # 靜態圖片
│   │   └── styles/
│   │       ├── _bootstrap-custom-variables.scss  # Bootstrap 變數覆寫
│   │       ├── _bootstrap-custom-loop.scss        # Bootstrap loop 覆寫
│   │       ├── _bootstrap-custom-utilities.scss   # Bootstrap utilities 擴充
│   │       ├── _custom-variables.scss             # 自訂 CSS 變數
│   │       ├── _sweetalert2-custom-variables.scss # SweetAlert2 樣式覆寫
│   │       ├── _swiper-custom.scss                # Swiper 樣式覆寫
│   │       └── _other.scss                        # 其他全域樣式
│   ├── router/
│   │   └── index.js                  # 路由定義、beforeEach 守衛、scrollBehavior
│   ├── stores/                       # Pinia stores
│   │   ├── ActivityStore.js          # 活動 CRUD、狀態計算、列表過濾
│   │   ├── AuthStore.js              # JWT/Cookie 管理、user localStorage 加解密
│   │   ├── CommentStore.js           # 評論讀取、依主辦人分組計算平均分數
│   │   ├── LoadingStore.js           # 全域 Loading overlay 與按鈕 loading 狀態
│   │   ├── MemberStore.js            # 登入、註冊、個人資料、我的活動/報名/評論
│   │   ├── MessageStore.js           # 活動留言與回覆（巢狀結構）
│   │   ├── OptionStore.js            # 靜態選項（地點、標籤、證照等級、潛水支數）
│   │   ├── OrderStore.js             # 報名 CRUD（含軟刪除）
│   │   └── PageStore.js              # 頁面狀態（目前只有 hasActivityHavbar）
│   ├── views/
│   │   ├── FrontLayout.vue           # 前台 Layout（含 Header、Footer）
│   │   ├── AdminLayout.vue           # 後台 Layout（目前路由已注解，未啟用）
│   │   ├── front/
│   │   │   ├── IndexView.vue         # 首頁（Banner、最新/熱門活動、廣告地區）
│   │   │   ├── ActivitiesView.vue    # 揪團列表（搜尋、篩選）
│   │   │   ├── ActivityView.vue      # 揪團詳情（報名、留言）
│   │   │   ├── EditActivityView.vue  # 新增／編輯揪團（共用同一 View）
│   │   │   ├── LoginView.vue         # 登入
│   │   │   ├── SignupView.vue        # 註冊
│   │   │   └── MemberView.vue        # 會員中心 Layout（含側欄）
│   │   │       member/
│   │   │       ├── MyActivitiesView.vue  # 我的揪團
│   │   │       ├── MyOrdersView.vue      # 我的報名
│   │   │       ├── MyCommentsView.vue    # 評論管理
│   │   │       └── EditMyinfoView.vue    # 編輯個人檔案
│   │   └── admin/
│   │       └── AdminIndexView.vue    # 後台首頁（未啟用）
│   ├── components/
│   │   ├── HeaderNavbar.vue          # 頂部導覽列（含登入狀態、我的報名 dropdown）
│   │   ├── FooterComponent.vue       # 頁尾
│   │   ├── FormUtilitieLayout.vue    # 登入／註冊頁面共用版型（左圖右表單）
│   │   ├── MyInfoForm.vue            # 個人資料表單（含照片上傳）
│   │   ├── NoData.vue                # 空資料提示元件
│   │   ├── UploadImg.vue             # 圖片上傳元件（preview + 主圖設定）
│   │   ├── UserMugShot.vue           # 使用者頭像顯示元件
│   │   ├── Card/
│   │   │   ├── BottomFrameActivityCard.vue  # 底框式活動卡片
│   │   │   ├── CornerActivityCard.vue       # 角框式活動卡片
│   │   │   ├── HorizontalActivityCard.vue   # 橫向活動卡片（我的揪團用）
│   │   │   └── StatisticsCard.vue           # 統計數字卡片（首頁用）
│   │   ├── Comment/
│   │   │   ├── CommentCard.vue       # 單筆評論卡片
│   │   │   └── CommentList.vue       # 評論列表
│   │   ├── Message/
│   │   │   ├── MessageCard.vue       # 留言卡片（含回覆列表）
│   │   │   ├── MessageCardItem.vue   # 單筆留言 / 回覆
│   │   │   ├── MessageInput.vue      # 留言輸入框
│   │   │   └── MessageList.vue       # 留言列表
│   │   ├── Modal/
│   │   │   ├── CommentModal.vue      # 新增評論 Modal
│   │   │   ├── DeleteActivityModal.vue  # 刪除揪團確認 Modal
│   │   │   ├── DeleteOrderModal.vue     # 取消報名確認 Modal
│   │   │   ├── OrderModal.vue           # 報名確認 Modal
│   │   │   └── ViolationModal.vue       # 違規詳情 Modal
│   │   └── Search/
│   │       ├── SearchActivityBar.vue    # 活動搜尋列（含地點、日期、關鍵字）
│   │       └── SearchListBar.vue        # 搜尋結果條件顯示列
│   ├── data/
│   │   ├── axiosBase.js              # Axios 實例（請求/回應攔截、錯誤統一處理）
│   │   ├── customDefineRule.js       # VeeValidate 自訂驗證規則
│   │   ├── formSchema.js             # 表單欄位 schema（統一管理 label、rules）
│   │   ├── imagePaths.js             # 靜態圖片路徑常數
│   │   ├── propsValidator.js         # Vue props 共用 validator 函式
│   │   ├── routeGuard.js             # 路由守衛（guestGuard、authGuard、adminGuard）
│   │   ├── starRatingParams.js       # vue-star-rating 參數設定
│   │   ├── sweetalert2.js            # SweetAlert2 統一呼叫封裝
│   │   ├── swiperParams.js           # Swiper 參數設定
│   │   └── utilitieFunctions.js      # 工具函式（getRandom、getTimestamp、getMainImg）
│   └── handle-formats/
│       ├── currencyFormat.js         # 金額格式化（千分位）
│       ├── dateFormat.js             # 日期格式化
│       ├── decimalFormat.js          # 小數格式化
│       ├── statusFormat.js           # 活動狀態 + 報名狀態 + 是否已報名 計算
│       └── statusTextFormat.js       # 狀態數字轉文字標籤
├── vite.config.js                    # Vite 設定（@ alias、base、build）
├── deploy.sh                         # GitHub Pages 部署腳本
└── index.html                        # HTML 入口
```

---

## 啟動流程

```
index.html
  └── src/main.js
        ├── createPinia()            # 初始化狀態管理
        ├── createRouter()           # 初始化路由（Hash History）
        ├── VueAxios(axios)          # 全域 axios（views 可用 this.axios，但推薦用 bacsRequest）
        ├── FontAwesomeIcon          # 全域註冊圖標元件
        ├── VueLoading               # 全域 loading overlay 元件
        └── VeeValidate configure    # 載入 zh_TW 語系、validateOnInput: true
```

---

## 路由總覽

| 路徑 | View | 守衛 | 說明 |
|------|------|------|------|
| `/` | FrontLayout | — | 前台根路由 |
| `/index` | IndexView | — | 首頁 |
| `/activities` | ActivitiesView | — | 揪團列表 |
| `/activity/:activityId` | ActivityView | — | 揪團詳情 |
| `/addActivity` | EditActivityView | — | 新增揪團 |
| `/editActivity/:activityId` | EditActivityView | — | 編輯揪團 |
| `/member` | MemberView | — | 會員中心 Layout |
| `/member/myActivities` | MyActivitiesView | — | 我的揪團 |
| `/member/myOrders` | MyOrdersView | — | 我的報名 |
| `/member/myComments` | MyCommentsView | — | 評論管理 |
| `/member/editMyinfo` | EditMyinfoView | — | 編輯個人檔案 |
| `/login` | LoginView | — | 登入 |
| `/signup` | SignupView | — | 註冊 |
| `/:pathMatch(.*)` | — | — | 重新導向 `/index` |

> 備註：`routeGuard.js` 提供 `guestGuard`、`authGuard`、`adminGuard` 三種守衛函式，但目前路由定義中尚未掛載（`router/index.js` 使用 `beforeEach` 統一處理 title 和 getStorageUser）。後台路由（`/admin`）目前已被注解停用。

---

## 認證與授權機制

### Token 儲存

- **JWT**：存於 cookie，key 為 `access-token`，有效期從 JWT payload 的 `exp` 欄位讀取
- **User 資料**：存於 `localStorage`，key 為 `user`，使用 `btoa(encodeURIComponent(JSON.stringify(user)))` 加密（base64）

### 認證流程

```
登入成功
  └── MemberStore.login()
        ├── changeCookie("add", accessToken, user)   # 寫入 cookie + localStorage
        └── getMyOrders(3)                           # 預載入前 3 筆報名
```

### API 請求攔截

`bacsRequest`（`src/data/axiosBase.js`）在每次請求時自動附加：

```
Authorization: Bearer <access-token cookie 值>
```

### API URL 前綴（json-server-auth 規則）

| 前綴 | 說明 |
|------|------|
| 無前綴 | 公開路由（登入、註冊、讀取公開資料） |
| `400/` | 需登入才能讀取（GET） |
| `440/` | 需登入，可讀取任何人的資料 |
| `600/` | 需登入，只能操作自己的資料 |
| `660/` | 需登入，建立關聯資源（例如 `/660/users/:id/activities`） |

### identityId 說明

| 值 | 角色 |
|----|------|
| `"0"` | 管理者（admin） |
| `"1"` | 一般使用者（預設） |

---

## 資料流

```
View / Component
  └── Pinia Store Action
        └── bacsRequest（Axios instance）
              ├── 請求攔截：自動帶 Authorization header
              └── 回應攔截：
                    ├── 成功：回傳 response.data
                    └── 失敗：
                          ├── 401 → SweetAlert2 提示 + 執行 logout()
                          ├── 404 → SweetAlert2 提示 + router.go(-1)
                          └── 其他 → SweetAlert2 提示
```

---

## 活動狀態（statusFormat.js）

### activityStatus（活動狀態）

| 值 | 說明 | 條件 |
|----|------|------|
| `0` | 系統中止 | `violations.length > 0` |
| `1` | 未開始 | `startDate > today` |
| `2` | 進行中 | `today >= startDate && endDate >= today` |
| `3` | 已結束 | `today > endDate` |

### orderStatus（報名狀態）

| 值 | 說明 | 條件 |
|----|------|------|
| `0` | 系統中止 | `violations.length > 0` |
| `1` | 已額滿 | `maxOrderTotal === orders.length` 且 `today <= orderExpiryDate` |
| `2` | 報名中 | `orderExpiryDate >= today` |
| `3` | 已截止 | `today > orderExpiryDate` 或人數已滿且截止 |

### isOrderPlaced

- `true` 若目前登入者在 `orders` 中且 `isDelete === false`

---

## 軟刪除機制

json-server 在巢狀資源使用 DELETE 時有 bug（會連帶刪除父資源）。本專案**一律使用軟刪除**：

```js
// 取消報名
bacsRequest.patch(`600/orders/${orderId}`, { isDelete: 1 })

// 刪除活動
bacsRequest.patch(`600/activities/${activityId}`, { isDelete: 1 })
```

所有讀取 API 必須加上 `isDelete=0` 過濾條件。
