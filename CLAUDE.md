# CLAUDE.md

## 專案概述

vue3-diving（氣瓶海人）— Vue 3 + Vite + Pinia + Bootstrap 5 潛水揪團平台前端

## 常用指令

```bash
npm run dev       # 啟動開發伺服器（Vite）
npm run build     # 打包（production base: /Vue3-diving-Vite/）
npm run preview   # 預覽打包結果
npm run lint      # ESLint 修正（.vue/.js）
npm run format    # Prettier 格式化 src/**/*.{js,vue,scss}
```

## 關鍵規則

- API 請求統一透過 `src/data/axiosBase.js` 的 `bacsRequest` 實例，勿直接使用 axios
- 刪除活動／報名一律使用 `patch { isDelete: 1 }`，**禁止使用 DELETE**（json-server bug）
- 身分驗證狀態從 `AuthStore.getStorageUser()` 取得，Token 存於 cookie（`access-token`），user 資料存於 localStorage（base64 編碼）
- 新增功能請先在 `docs/plans/` 建立計畫文件，完成後移至 `docs/plans/archive/`
- production 部署至 GitHub Pages，base 為 `/Vue3-diving-Vite/`

## 詳細文件

- ./docs/README.md — 項目介紹與快速開始
- ./docs/ARCHITECTURE.md — 架構、目錄結構、資料流、路由總覽
- ./docs/DEVELOPMENT.md — 開發規範、命名規則、環境變數、計畫歸檔流程
- ./docs/FEATURES.md — 功能列表與完成狀態
- ./docs/TESTING.md — 測試規範與指南
- ./docs/CHANGELOG.md — 更新日誌

## 必要遵守項目

- 元件命名使用 PascalCase（`MyInfoForm.vue`），Store 檔案命名為 `XxxStore.js`
- 狀態管理 action 回傳 `Promise.resolve()` / `Promise.reject(false)`，錯誤由 store 統一顯示 SweetAlert2
- 格式化工具統一使用 `src/handle-formats/` 下的模組（日期、金額、狀態等）
- 活動狀態（activityStatus）與報名狀態（orderStatus）由 `statusFormat()` 計算，勿在元件內自行計算
- 路由守衛邏輯集中在 `src/data/routeGuard.js`，新路由需確認是否需要加上守衛
