@echo off
cd /d "%~dp0"
start "" cmd /c "timeout /t 3 >nul && start http://localhost:5500/"
call npx serve -l 5500 .
pause
