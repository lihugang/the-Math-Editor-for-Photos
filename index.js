const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const debugFlag = (process.argv.indexOf('--debug') != -1) ? true : false;
const path = require('path');


let mainWindow = null;
app.on('ready', () => {
    Menu.setApplicationMenu(null);
    mainWindow = new BrowserWindow({
        width: 450,
        height: 800,
        resizable: true,
        minimizable: true,
        maximizable: true,
        closeable: true,
        fullscreen: false,
        fullscreenable: true,
        alwaysOnTop: false,
        skipTaskbar: false,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            contextIsolation: false,
            webSecurity: false,
        }
    });
    if (debugFlag) mainWindow.webContents.openDevTools();

    mainWindow.loadURL(path.join(__dirname, 'page', 'index.html'));
});

electron.ipcMain.on('newWindow', () => {
    const w = new BrowserWindow({
        width: 450,
        height: 800,
        resizable: true,
        minimizable: true,
        maximizable: true,
        closeable: true,
        fullscreen: false,
        fullscreenable: true,
        alwaysOnTop: false,
        skipTaskbar: false,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            contextIsolation: false,
            webSecurity: false,
        }
    });
    if (debugFlag) w.webContents.openDevTools();

    w.loadURL(path.join(__dirname, 'page', 'index.html'));
})