# fix: [CornerActivityCard] 修復 ActivityView X 軸卷軸

## 問題描述

`<CornerActivityCard>` 在 `/activity/:id` 頁面出現水平卷軸（X 軸 scrollbar）。

## 根本原因

`src/assets/main.scss` 的 `a.card-hover .img-mask` 設定了：

```scss
.img-mask {
  position: absolute;
  right: -150px;  /* ← 問題所在 */
  width: 0;
  ...
}
```

`.img-mask` 的 containing block 是 Bootstrap `.card`（內建 `position: relative`）。  
`right: -150px` 讓元素右邊界延伸至 `.card` 右側 150px 以外。  
即使 `width: 0; opacity: 0`（不可見），該位置仍計入瀏覽器捲動寬度（scroll width），觸發 X 軸卷軸。

**實際溢出計算（手機 390px viewport）**：
```
.card 右邊界 ≈ 378px
img-mask 右邊界 = 378 + 150 = 528px（超出 viewport 138px）
```

## 修復方式

**修改檔案**：`src/assets/main.scss`

在 `a.card-hover` 區塊內，為 `.card` 加上 `overflow: hidden`，讓 img-mask 被 clip 在卡片範圍內：

```diff
  a.card-hover {
+   .card {
+     overflow: hidden;
+   }
+
    &:hover {
      .img-mask { ... }
    }

    .img-mask { ... }
  }
```

**效果說明**：
- `overflow: hidden` 讓 img-mask 被 clip 在 `.card` 的 padding box 內，hover 光暈動效視覺上不受影響（掃光在卡片範圍內呈現即為預期效果）
- `.outer-border` 是 `.card` 的兄弟元素（直接在 `.img-frame` 下），不受 `.card` 的 overflow 影響，裝飾外框正常顯示
- 此修改同時修復 `BottomFrameActivityCard`、`HorizontalActivityCard` 的潛在相同問題

## 驗證方式

1. `npm run dev` 啟動開發伺服器
2. 前往任一活動詳情頁 `/activity/:id`
3. 確認「熱門精選」區塊無 X 軸卷軸（尤其是手機寬度）
4. hover 卡片確認光暈動效正常（在卡片範圍內掃光）
5. 確認裝飾外框（左上角 L 型邊框）顯示正常
6. 確認 IndexView 首頁卡片顯示與動效無誤
