@echo off
title Samet Colak Portfolio - Local Server
cd /d "%~dp0"
echo ========================================================
echo   Samet Colak Portfolyo - Yerel Sunucu Baslatiliyor...
echo   Port: 8000
echo   Adres: http://localhost:8000
echo ========================================================
echo.
echo Tarayici aciliyor...
start http://localhost:8000
echo.
echo Sunucu calisiyor. Durdurmak icin Ctrl + C tuslarina basin.
python -m http.server 8000
pause
