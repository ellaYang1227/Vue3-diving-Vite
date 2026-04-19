#!/bin/bash
# Compact 提醒：context 壓縮後重新注入 CLAUDE.md 關鍵規則

CLAUDE_MD="$(dirname "$0")/../../CLAUDE.md"

if [[ -f "$CLAUDE_MD" ]]; then
  echo "=== [Compact 提醒] 專案關鍵規則已重新載入 ==="
  cat "$CLAUDE_MD"
  echo "=== [END] ==="
fi

exit 0
