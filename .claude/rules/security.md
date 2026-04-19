---
# 全域規則（無 paths 限制）
---

# 安全性規則

## 敏感資料處理
- JWT Token 存於 cookie（`access-token`），禁止存於 `localStorage` 或暴露在 URL query string
- User 資料存於 `localStorage` 前必須經過 `handleCrypt("encrypt")` base64 編碼，讀取時解碼
- 禁止在程式碼中 hardcode API 金鑰、Token、密碼等敏感資訊，一律使用 `import.meta.env`
- 禁止將 `.env` 檔案納入版本控制

## 輸入驗證
- 所有使用者輸入的表單欄位必須定義 VeeValidate 驗證規則（`src/data/formSchema.js`）
- 新增自訂驗證規則至 `src/data/customDefineRule.js`，統一管理

## XSS 防護
- 禁止使用 `v-html` 渲染任何使用者輸入的文字內容
- 禁止使用 `innerHTML` 直接插入不可信來源的字串

## API 請求安全
- 所有需要認證的 API 使用對應前綴（`400/`、`440/`、`600/`、`660/`），禁止跳過認證層直接存取資源
- 更新個人資料（`updateMyinfo`）時強制排除 `email`、`password` 欄位，禁止透過 PATCH 修改帳號憑證

## 軟刪除
- 刪除活動與報名一律使用 `patch { isDelete: 1 }`，禁止使用 HTTP DELETE（避免 json-server bug 連帶刪除關聯資源）
