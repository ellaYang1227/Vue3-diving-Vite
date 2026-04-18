# 氣瓶海人 水肺潛水揪團

水肺潛水揪團平台，讓潛水愛好者可以建立活動揪伴、瀏覽報名揪團、互相留言評論。

- **前台網站**：https://ellayang1227.github.io/Vue3-diving-Vite/#/
- **API 伺服器**：https://vue3-diving-vite.onrender.com/（json-server + json-server-auth，部署於 Render）

## 技術棧

| 類別 | 套件 |
|------|------|
| 框架 | Vue 3.2.45 + Vite 4.0 |
| 狀態管理 | Pinia 2.0.28 |
| 路由 | Vue Router 4.1.6（Hash History） |
| HTTP | Axios 1.2.6 + vue-axios |
| 表單驗證 | VeeValidate 4.7.4 + @vee-validate/rules + @vee-validate/i18n |
| CSS 框架 | Bootstrap 5.2.3 + SASS |
| 圖示 | FontAwesome 6.2.1 |
| 通知 | SweetAlert2 11.7.2 |
| 輪播 | Swiper 9.0.5 |
| 動畫 | AOS 2.3.4 |
| 下拉選單 | vue-multiselect 3.0.0-beta.1 |
| 評分 | vue-star-rating 2.1.0 |
| Loading | vue-loading-overlay 6.0.3 |
| 數字動畫 | vue-countup-v3 1.1.0 |

## 環境需求

- Node.js v20.10.0

## 快速開始

```bash
# 1. 取得專案
git clone git@github.com:ellaYang1227/Vue3-diving-Vite.git
cd Vue3-diving-Vite

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev
# → http://localhost:5173/
```

## 常用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器（連接遠端 Render API） |
| `npm run build` | 生產環境建置（輸出至 `dist/`） |
| `npm run preview` | 預覽生產建置結果 |
| `npm run lint` | ESLint 自動修正 |
| `npm run format` | Prettier 格式化 `src/**/*.{js,vue,scss}` |

## 部署

```bash
bash deploy.sh
```

`deploy.sh` 執行 `npm run build` 後，將 `dist/` 推送至 GitHub Pages 的 `gh-pages` 分支。

## 文件索引

| 文件 | 說明 |
|------|------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 架構、目錄結構、資料流、API 機制 |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | 開發規範、命名規則、計畫歸檔流程 |
| [FEATURES.md](./FEATURES.md) | 功能列表與完成狀態 |
| [TESTING.md](./TESTING.md) | 測試規範與指南 |
| [CHANGELOG.md](./CHANGELOG.md) | 更新日誌 |
