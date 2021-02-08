const { app, BrowserWindow } = require("electron")
global.storage = {
  name:"123"
};
function createWindow(params) {
  const win = new BrowserWindow({
    fullscreen: true,
    // maxWidth: 800,
    // maxHeight: 600,
    icon: "./icon.png",
    webPreferences: {
      nodeIntegration: true,//渲染进程可以使用node模块
      enableRemoteModule: true,//渲染进程可以使用remote
    },
  })
  win.loadFile("index.html")
  win.webContents.openDevTools()
}
app.on("ready", createWindow)