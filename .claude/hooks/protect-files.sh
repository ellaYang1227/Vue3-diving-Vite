#!/bin/bash
# 敏感檔案保護：阻止編輯 .env*、*.lock、package-lock.json

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('tool_input', {}).get('file_path', ''))
" 2>/dev/null || echo "")

if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

BASENAME=$(basename "$FILE_PATH")

# 比對敏感檔案規則
if [[ "$BASENAME" == .env* ]] || \
   [[ "$BASENAME" == *.lock ]] || \
   [[ "$BASENAME" == "package-lock.json" ]]; then
  echo "{\"decision\": \"block\", \"reason\": \"敏感檔案保護：禁止直接編輯 $BASENAME，請手動修改\"}"
  exit 0
fi

exit 0
