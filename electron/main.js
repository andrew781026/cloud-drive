// Modules to control application life and create native browser window
const {app, ipcMain, dialog, BrowserWindow} = require('electron');
const path = require('path');
const log4js = require('log4js');
const logger = log4js.getLogger();
require('./log4js').initLog4js({log4js});

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        icon: path.join(__dirname, './app/favicon.ico'),
        width: 800,
        height: 610,
        webPreferences: {
            preload: path.join(__dirname, './app/preload.js')
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile('./app/index.html');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
}

app.on('ready', () => createWindow()) // Main Process 準備 OK 後 , 建立一個 瀏覽器視窗 顯示給使用者
app.on('window-all-closed', () =>  app.quit()) // 所有 BrowserWindow 關閉後 , 結束 Main Process

// log the uncaught error
process.on('uncaughtExceptionMonitor', (err, origin) => logger.error(origin, err));
