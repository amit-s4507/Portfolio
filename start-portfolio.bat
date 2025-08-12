@echo off
title Portfolio Development Server
color 0A

echo ========================================
echo    Portfolio Development Server
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo.
echo Starting Portfolio Development Server...
echo.
echo This will start your portfolio on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when you're done
echo.

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo Starting development server...
npm run dev

echo.
echo Server stopped. Press any key to exit...
pause >nul
