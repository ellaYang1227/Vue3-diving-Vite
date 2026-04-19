---
# 全域規則（無 paths 限制）
---

# Git Commit 規則

## Commit Message 格式

```
<type>: <描述>
```

- 描述使用**繁體中文**，動詞開頭，簡潔說明做了什麼
- 範例：`feat: add: 新增揪團頁面搜尋篩選功能`、`fix: 修正取消報名後列表未即時更新`

## Type 類型

| Type | 使用時機 |
|------|---------|
| `feat` | 新增功能 |
| `fix` | 修復 Bug |
| `chore` | 維護性工作（重新命名、設定調整、依賴更新） |
| `refactor` | 重構（不影響功能） |
| `style` | 樣式調整（CSS/SCSS，不影響邏輯） |
| `docs` | 文件新增或修改 |
| `test` | 測試相關 |

## 禁止 Commit 的檔案

- `.env`、`.env.development`、`.env.production`（含任何環境變數檔）
- `node_modules/`
- `dist/`
- 任何含有 API Token、密碼、個人憑證的檔案
