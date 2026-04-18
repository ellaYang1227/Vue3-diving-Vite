# CHANGELOG.md

本文件記錄專案的重要變更。格式參考 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)。

---

## [Unreleased]

### 開發中
- feat/integrate-ai-claude 分支：整合 Claude AI 功能

### Fixed
- **CornerActivityCard X 軸卷軸**：`a.card-hover .img-mask` 的 `right: -150px` 使元素右邊界延伸至卡片外 150px，即使 `width: 0` 仍計入瀏覽器捲動寬度，導致 `/activity/:id` 頁面出現 X 軸卷軸。修復方式：於 `src/assets/main.scss` 的 `a.card-hover` 區塊加入 `.card { overflow: hidden; }`，將 img-mask 限制在卡片範圍內。同步修復 `BottomFrameActivityCard`、`HorizontalActivityCard` 的潛在相同問題。

---

## 歷史提交摘要

> 以下依 git log 整理，尚未建立正式版本號。

### 2024（主要功能建立期）

#### 新增
- 水肺潛水揪團平台核心功能：
  - 活動列表（搜尋、排序、分頁）
  - 活動詳情（Swiper 圖片、報名、留言、評論）
  - 揪團 CRUD（新增 / 編輯 / 軟刪除）
  - 會員系統（登入、註冊、個人資料管理）
  - 我的揪團 / 我的報名 / 評論管理
  - 留言與回覆（兩層巢狀結構）
  - 首頁（最新活動、熱門活動、廣告地區）
  - 活動狀態系統（activityStatus / orderStatus）
  - 軟刪除機制（避免 json-server 刪除 bug）
  - JWT 認證（Cookie + localStorage btoa 加密）

#### 優化
- 優化分頁功能（前端分頁，每頁 10 筆）
- 重新命名：`MyinfoForm.vue` → `MyInfoForm.vue`
- 重新命名：`memberStore.js` → `MemberStore.js`

#### 設定
- 新增 Claude Code 設定（`.claude/` 目錄）
- 更新 `.gitignore`

---

## 版本命名規範（未來使用）

```
[主版本.次版本.修訂版] - YYYY-MM-DD

### 新增 (Added)
### 變更 (Changed)
### 修復 (Fixed)
### 移除 (Removed)
```
