---
paths:
  - "src/components/**"
  - "src/views/**"
  - "src/assets/styles/**"
---

# 前端/模板規則

## Vue 元件
- 元件命名使用 PascalCase，檔名與元件名一致
- Props 必須定義型別，複雜驗證使用 `src/data/propsValidator.js` 的共用 validator
- 事件命名使用 kebab-case（`@update-data`），emit 名稱使用 camelCase（`emits: ['updateData']`）
- 不在元件內直接使用 `axios`，一律透過 `bacsRequest`（`src/data/axiosBase.js`）
- Loading 狀態使用 `LoadingStore.showLoading()` / `hideLoading()`，不自行管理 loading 變數
- 錯誤與成功提示統一使用 `setSwalFire()`（`src/data/sweetalert2.js`），禁止使用 `alert()`

## Bootstrap 5
- 優先使用 Bootstrap 5 utility class，避免重複撰寫 CSS
- 覆寫 Bootstrap 變數在 `src/assets/styles/_bootstrap-custom-variables.scss`，不直接修改 Bootstrap 原始檔
- 新增全域樣式放入 `src/assets/styles/_other.scss`，元件私有樣式使用 `<style scoped>`

## 狀態計算
- 活動狀態（activityStatus）與報名狀態（orderStatus）一律由 `statusFormat()` 計算，禁止在元件內自行比較日期
- 格式化輸出（金額、日期、小數、狀態文字）使用 `src/handle-formats/` 下對應模組

## XSS 防護
- 禁止使用 `v-html` 渲染使用者輸入的內容
- 使用者輸入的文字內容一律透過 `{{ }}` 插值輸出（Vue 自動 escape）
