#!/bin/bash
# 通知提醒：WSL2 環境使用 PowerShell 發送 Windows 氣球通知

INPUT=$(cat)
EVENT_TYPE="${1:-notification}"  # notification 或 stop

if [[ "$EVENT_TYPE" == "stop" ]]; then
  TITLE="Claude Code — 任務完成"
  MESSAGE="Claude 已完成任務，請查看結果。"
else
  MESSAGE=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('message', 'Claude Code 需要您的確認'))
" 2>/dev/null || echo "Claude Code 需要您的確認")
  TITLE="Claude Code — 等待確認"
fi

# 使用 PowerShell 發送 Windows 系統氣球通知（WSL2 專用）
powershell.exe -NoProfile -NonInteractive -Command "
Add-Type -AssemblyName System.Windows.Forms
\$balloon = New-Object System.Windows.Forms.NotifyIcon
\$balloon.Icon = [System.Drawing.SystemIcons]::Information
\$balloon.Visible = \$true
\$balloon.ShowBalloonTip(5000, '$TITLE', '$MESSAGE', [System.Windows.Forms.ToolTipIcon]::Info)
Start-Sleep -Seconds 5
\$balloon.Dispose()
" 2>/dev/null &

exit 0
