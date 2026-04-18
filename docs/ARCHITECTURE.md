# ARCHITECTURE.md

## 目錄結構

```
src/
├── App.vue                    # 根元件，掛載 router-view
├── main.js                    # 應用程式入口：Pinia、Router、Axios、FontAwesome、VeeValidate、AOS 全域註冊
├── router/
│   └── index.js               # 路由定義（Hash History）+ beforeEach 守衛
├── views/
│   ├── FrontLayout.vue        # 前台主版面（provide frontLayoutData 給子頁面）
│   ├── AdminLayout.vue        # 管理後台版面（目前完全未啟用）
│   ├── front/
│   │   ├── IndexView.vue      # 首頁：最新活動、熱門活動、廣告地區
│   │   ├── ActivitiesView.vue # 活動列表：搜尋、排序、分頁
│   │   ├── ActivityView.vue   # 單一活動詳情：Swiper 圖片、報名、留言、評論
│   │   ├── EditActivityView.vue # 新增 / 編輯揪團表單
│   │   ├── LoginView.vue      # 登入
│   │   ├── SignupView.vue     # 註冊
│   │   └── MemberView.vue     # 會員專區外框（含統計卡、Tab 導覽）
│   │       member/
│   │       ├── MyActivitiesView.vue # 我的揪團列表（含刪除）
│   │       ├── MyOrdersView.vue     # 我的報名列表（含取消、新增評論）
│   │       ├── MyCommentsView.vue   # 評論管理
│   │       └── EditMyinfoView.vue   # 編輯個人檔案
│   └── admin/
│       └── AdminIndexView.vue  # 管理後台首頁（未啟用）
├── components/
│   ├── HeaderNavbar.vue        # 頂部導覽列（含登入狀態、我的報名預覽）
│   ├── FooterComponent.vue
│   ├── FormUtilitieLayout.vue  # 表單頁面共用版面（含標題、麵包屑）
│   ├── MyInfoForm.vue          # 會員資料表單（複用於註冊 / 編輯個人）
│   ├── UploadImg.vue           # 圖片上傳元件（Base64 轉換）
│   ├── UserMugShot.vue         # 使用者大頭照（帶預設圖）
│   ├── NoData.vue              # 無資料狀態顯示
│   ├── Card/
│   │   ├── BottomFrameActivityCard.vue  # 底部框樣式活動卡（首頁使用）
│   │   ├── CornerActivityCard.vue       # 角落縮圖樣式活動卡（側邊推薦使用）
│   │   ├── HorizontalActivityCard.vue   # 橫向樣式活動卡（活動列表使用）
│   │   └── StatisticsCard.vue           # 統計數字卡（會員專區使用）
│   ├── Comment/
│   │   ├── CommentCard.vue     # 單筆評論卡片
│   │   └── CommentList.vue     # 評論列表（依活動主辦人 userId 篩選）
│   ├── Message/
│   │   ├── MessageCard.vue     # 單筆留言卡片（含回覆列表）
│   │   ├── MessageCardItem.vue # 單筆留言 / 回覆的行內顯示
│   │   ├── MessageInput.vue    # 留言 / 回覆輸入框
│   │   └── MessageList.vue     # 留言列表（含巢狀回覆）
│   ├── Modal/
│   │   ├── CommentModal.vue    # 新增評論 Modal（星評 + 文字）
│   │   ├── DeleteActivityModal.vue  # 確認刪除揪團 Modal
│   │   ├── DeleteOrderModal.vue     # 確認取消報名 Modal
│   │   ├── OrderModal.vue           # 活動報名清單 Modal
│   │   └── ViolationModal.vue       # 違規記錄詳情 Modal
│   └── Search/
│       ├── SearchActivityBar.vue    # 首頁 / 列表頁搜尋列（地點、日期、關鍵字）
│       └── SearchListBar.vue        # 活動列表排序 / 篩選列
├── stores/                    # Pinia 狀態管理
│   ├── AuthStore.js           # 認證：Cookie/localStorage 管理、JWT 解密
│   ├── MemberStore.js         # 會員：登入、註冊、個人資料、我的活動/報名/評論
│   ├── ActivityStore.js       # 活動：列表查詢、單一活動、廣告活動
│   ├── OrderStore.js          # 報名：新增、取消（軟刪除）
│   ├── CommentStore.js        # 評論：取得並依主辦人分組、計算平均分數
│   ├── MessageStore.js        # 留言：取得留言 + 回覆、新增/修改
│   ├── OptionStore.js         # 選項資料：地點、標籤、證照等級、潛水支數
│   ├── LoadingStore.js        # Loading 狀態（全頁 / 按鈕）
│   └── PageStore.js           # 頁面狀態（活動頁固定 Navbar 顯示控制）
├── data/                      # 工具配置（單例 / 靜態設定）
│   ├── axiosBase.js           # Axios 實例（含 request/response 攔截器）
│   ├── formSchema.js          # 所有表單欄位的 VeeValidate schema 定義
│   ├── customDefineRule.js    # 自訂 VeeValidate 跨欄位日期驗證規則
│   ├── routeGuard.js          # 路由守衛函式（guestGuard、authGuard、adminGuard）
│   ├── sweetalert2.js         # SweetAlert2 Mixin 設定 + setSwalFire 封裝
│   ├── swiperParams.js        # Swiper 共用參數
│   ├── starRatingParams.js    # vue-star-rating 共用參數
│   ├── imagePaths.js          # 所有靜態圖片路徑的統一匯出入口
│   ├── propsValidator.js      # props 共用驗證函式
│   └── utilitieFunctions.js  # 通用函式（getRandom、getTimestamp、getMainImg）
├── handle-formats/            # 純函式格式化工具
│   ├── dateFormat.js          # 日期格式化（YYYY/MM/DD 或含時間）
│   ├── currencyFormat.js      # 貨幣格式化（NT$）
│   ├── decimalFormat.js       # 小數位數格式化
│   ├── statusFormat.js        # 活動狀態 + 報名狀態計算（核心業務邏輯）
│   └── statusTextFormat.js    # 狀態數字轉顯示文字 + 按鈕文字
└── assets/
    ├── main.scss              # SCSS 主入口（@use 各子樣式檔）
    ├── styles/
    │   ├── _bootstrap-custom-variables.scss  # Bootstrap 變數覆寫
    │   ├── _bootstrap-custom-utilities.scss  # Bootstrap utilities 擴充
    │   ├── _bootstrap-custom-loop.scss       # Bootstrap 迴圈生成 class
    │   ├── _custom-variables.scss            # 專案自訂變數
    │   ├── _sweetalert2-custom-variables.scss
    │   ├── _swiper-custom.scss
    │   └── _other.scss
    └── images/                # 靜態圖片（透過 imagePaths.js 統一匯出）

public/
├── favicon/
└── jsons/
    └── vee_validate_zh_TW.json  # VeeValidate 中文錯誤訊息（非同步載入）
```

## 啟動流程

```
main.js
 ├─ 全域插件註冊：Pinia、Vue Router、VueAxios
 ├─ FontAwesome：fas + fab + far 全量引入，掛載為 <font-awesome-icon>
 ├─ VeeValidate：
 │   ├─ 引入 @vee-validate/rules 所有規則
 │   ├─ 引入 customDefineRule.js 自訂規則
 │   └─ loadLocaleFromURL('./jsons/vee_validate_zh_TW.json')（非同步）
 ├─ vue-loading-overlay 全域元件 <VueLoading>
 └─ import './assets/main.scss'（Bootstrap + 自訂樣式）

Router beforeEach（每次路由切換）
 ├─ 更新 document.title（依 meta.title + 路徑前綴組合）
 └─ AuthStore.getStorageUser()（從 localStorage 同步 user 狀態至 store）

FrontLayout.vue created()
 ├─ OptionStore.getLocations()
 ├─ OptionStore.getTags()
 └─ MemberStore.getMyOrders(3)（已登入才執行，取最新 3 筆供 Navbar 顯示）
```

## API 機制

### 基礎設定

- **baseURL**：從 `VITE_API_ROOT` 環境變數取得
  - development：`https://vue3-diving-vite.onrender.com/`
  - production：`https://vue3-diving-vite.onrender.com/`
  - 若需本地 json-server：手動改用 `VITE_LOCALHOST_API_ROOT`（`http://localhost:3000/`）

### json-server-auth 端點前綴規則

json-server-auth 以 URL 數字前綴控制 JWT 驗證與資源存取：

| 前綴 | 權限 | 用途範例 |
|------|------|----------|
| 無前綴 | 公開讀取 | `activities`、`locations`、`tags`、`comments` |
| `400/` | 僅限本人讀取 | `400/users/:id/orders` — 取得自己的訂單 |
| `440/` | 任何人可讀（含關聯） | `440/activities?id=1&id=2` — 不需登入的關聯查詢 |
| `600/` | 需登入（完整 CRUD） | `600/activities/:id` — 需登入才能修改 |
| `660/` | 需登入（巢狀建立） | `660/users/:id/activities` — 以登入者身分建立子資源 |

### Request / Response 攔截器（axiosBase.js）

**Request**：自動附加 `Authorization: Bearer <token>`，Token 從 `document.cookie` 取得。

**Response 錯誤處理**：

| HTTP 狀態 | 行為 |
|-----------|------|
| 400 | 不彈窗，由各 Store action 自行處理（如登入密碼錯誤） |
| 401 | 彈窗「驗證失敗」→ 執行 `logout()` 並跳轉登入頁 |
| 404 | 彈窗「找不到該筆資料」→ `router.go(-1)` |
| 其他 | 彈窗「發生不明錯誤」 |

成功 response 直接解包為 `response.data`，無需各 Store 再存取 `.data`。

### 軟刪除機制

json-server 有已知 bug：對有巢狀關係的資源使用 `DELETE` 時，可能連帶刪除關聯資料。因此本專案**一律不使用 DELETE 方法**：

- **刪除揪團**：`PATCH /600/activities/:id { isDelete: 1 }`
- **取消報名**：`PATCH /600/orders/:id { isDelete: 1 }`
- **查詢時**：加入 `isDelete=0` 過濾參數

## 認證與授權機制

### JWT 儲存

```
登入/註冊成功
  → accessToken 存入 cookie（key: "access-token"，有效期從 JWT exp 解析）
  → user 資料 btoa(encodeURIComponent(JSON.stringify(user))) 存入 localStorage（key: "user"）
```

**加密原因**：`encodeURIComponent` 處理中文字元（避免 btoa 無法處理 Unicode），再用 btoa 做簡單混淆。這**不是**安全加密，僅防止明文直接可見。

### 路由守衛（routeGuard.js）

| 守衛函式 | 用途 | 行為 |
|---------|------|------|
| `guestGuard` | 僅限未登入（登入/註冊頁） | 已登入 → 重導向 member 頁 |
| `authGuard` | 需登入 | 未登入 → 跳轉登入頁，附 `?returnUrl=` |
| `adminGuard` | 需管理員 | 未登入 → 跳轉登入；非管理員 → 跳首頁 |

使用方式：在各 View 的 `beforeRouteEnter` 呼叫，例如：
```js
beforeRouteEnter(to, from, next) {
  authGuard(to, from, next);
}
```

### identityId 判斷

- `"0"`：管理員（目前 Admin 路由已被註解，此身分在前台與一般使用者行為相同）
- `"1"`：一般使用者（預設）

## 活動狀態系統（statusFormat.js）

`statusFormat(activity)` 回傳三個屬性，**所有活動資料在存入 store 前必須經過此函式**：

```js
{
  activityStatus: 0 | 1 | 2 | 3,   // 0=系統中止 1=未開始 2=進行中 3=已結束
  orderStatus:    0 | 1 | 2 | 3,   // 0=系統中止 1=已額滿 2=進行中 3=已截止
  isOrderPlaced:  boolean            // 當前登入者是否已報名
}
```

**activityStatus 計算邏輯**：
- `violations.length > 0` → 0（系統中止，由 violations 陣列判定）
- `startDate > today` → 1（未開始）
- `today >= startDate && endDate >= today` → 2（進行中）
- `today > endDate` → 3（已結束）

**orderStatus 計算邏輯**：
- `violations.length > 0` → 0（系統中止）
- `maxOrderTotal === 有效報名數` 且 `today > orderExpiryDate` → 3（已截止）
- `maxOrderTotal === 有效報名數` 且 `orderExpiryDate >= today` → 1（已額滿）
- `orderExpiryDate >= today` → 2（進行中）
- `today > orderExpiryDate` → 3（已截止）

**違規活動過濾**：`ActivityStore.getHandleActivities()` 在寫入 store 前，先過濾掉 `violations.length > 0` 的活動，這些活動**不會出現在公開列表中**。

## 評論資料結構（CommentStore）

評論以「活動主辦人（userId）」為單位分組：

```js
// this.comments 結構
[
  {
    userId: 5,
    data: [/* 該主辦人所有活動的評論 */],
    totalScore: 18,
    averageScore: 4.5
  }
]
```

`CommentStore.setScore(activities)` 將 `averageScore` 注入到活動列表中，供活動卡片顯示評分。

## FrontLayout 的 provide/inject 機制

`FrontLayout.vue` 透過 `provide()` 將自身 `data` 物件以 `frontLayoutData` 注入所有子頁面：

```js
// FrontLayout.vue
provide() {
  return { frontLayoutData: this };
}

// 子頁面取用
inject: ["frontLayoutData"],
// 子頁面可直接修改 FrontLayout 的 data
this.frontLayoutData.showSearchBar = false;  // 隱藏搜尋列（如編輯活動頁）
```

可控制的屬性：
- `showSearchBar`：是否顯示搜尋列
- `isVerticalMiddle`：main 內容是否垂直置中
- `isMainOverflowHidden`：main 是否 overflow-hidden

## 活動圖片資料格式

活動圖片**不是陣列，而是物件**，key 為 `img_1`、`img_2` 等：

```js
imgs: {
  img_1: { img: "base64或URL字串", isMain: true },
  img_2: { img: "base64或URL字串", isMain: false }
}
```

在 `ActivityView.vue` 中，`orderImgs` computed 將物件轉為陣列並依 `isMain` 降序排列，讓主圖排在最前面。

## 分頁機制（ActivityStore / ActivitiesView）

活動列表分頁為**前端分頁**（非 API 分頁）：
- 每頁 10 筆（`perPage: 10`）
- API 一次取回全部資料後，用 `computed pagingActivities` 切片
- 排序也在前端執行（`updateDate`、`startDate`、`score`、`orderTotal`）

## 留言兩層結構（MessageStore）

```
messages（留言）
 └─ messageReplys（回覆）
```

`getMessagesfull(activityId)` 先取留言列表，再對每筆留言並發取回覆（`Promise.all`），最後合併為帶 `messageReplys` 陣列的完整結構。
