# vue3-diving（氣瓶海人）

潛水揪團平台前端，提供潛水愛好者發布揪團活動、搜尋活動、報名、留言及評論的完整功能。

## 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | Vue 3.2（Composition API / Options API 混用） |
| 建構工具 | Vite 4 |
| 狀態管理 | Pinia 2 |
| 路由 | Vue Router 4（Hash History） |
| CSS 框架 | Bootstrap 5.2 + 自訂 SCSS |
| HTTP Client | Axios 1.x + vue-axios |
| 表單驗證 | VeeValidate 4 + @vee-validate/i18n（zh_TW） |
| UI 元件 | Swiper 9、SweetAlert2 11、FontAwesome 6、AOS 2、vue-loading-overlay 6 |
| 其他 | vue-multiselect、vue-star-rating、vue-countup-v3 |

## 快速開始

```bash
# 安裝依賴
npm install

# 複製環境變數（需自行設定 API 根路徑）
cp .env.example .env   # 若無範本，手動建立 .env

# 啟動開發伺服器
npm run dev
```

`.env` 必填變數：

```
VITE_API_ROOT=http://localhost:3000/   # json-server API 根路徑
VITE_COMPANY_NAME=氣瓶海人              # 頁面 title 顯示的公司名稱
```

## 常用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動 Vite 開發伺服器 |
| `npm run build` | 打包（production base: `/Vue3-diving-Vite/`） |
| `npm run preview` | 本地預覽打包結果 |
| `npm run lint` | ESLint 自動修正 |
| `npm run format` | Prettier 格式化 |

## 文件索引

| 文件 | 說明 |
|------|------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 架構、目錄結構、資料流、路由總覽 |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | 開發規範、命名規則、環境變數 |
| [FEATURES.md](./FEATURES.md) | 功能列表與完成狀態 |
| [TESTING.md](./TESTING.md) | 測試規範與指南 |
| [CHANGELOG.md](./CHANGELOG.md) | 更新日誌 |
| [plans/](./plans/) | 進行中開發計畫 |
| [plans/archive/](./plans/archive/) | 已完成計畫歸檔 |
