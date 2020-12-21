const { app, BrowserWindow, remote, ipcMain } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    minWidth: 1024,
    maxWidth: 1024,
    height: 768,
    minHeight: 768,
    maxHeight: 768,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  })

  mainWindow.setMenuBarVisibility(false);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on('closed', function() {
    mainWindow = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  if (mainWindow === null) createWindow()
})
