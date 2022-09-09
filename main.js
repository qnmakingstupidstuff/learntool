const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: auto,
        height: auto
    });

    mainWindow.setTitle('Haruma's Tool');
    mainWindow.loadURL('https://harumatool.fun');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});