const { app, BrowserWindow } = require("electron")

function createWindow(params) {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile("index.html")
  win.on("close", () => {
    console.log("关闭窗口");
  })
}

app.on("ready", createWindow)