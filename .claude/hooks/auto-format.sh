#!/bin/bash
# 自動格式化：編輯 .js / .vue / .scss 後執行 prettier

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('tool_input', {}).get('file_path', ''))
" 2>/dev/null || echo "")

if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

if [[ "$FILE_PATH" =~ \.(js|vue|scss)$ ]]; then
  npx prettier --write "$FILE_PATH" 2>/dev/null
fi

exit 0
