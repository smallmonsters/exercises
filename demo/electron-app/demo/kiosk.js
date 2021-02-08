const { remote } = require("electron")

const setKiosk = () => {
  console.log(global.storage,remote.getGlobal("storage"));
  const win = remote.getCurrentWindow()
  win.setKiosk(!win.isKiosk())
}