const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const filePath = path.join('file://', __dirname, './index.html')
  let win = new BrowserWindow({ frame: false, fullscreen: true })
  win.on('close', () => { win = null })
  win.loadURL(filePath)
  win.show()
  return win;
}

function start() {
  let win = createWindow();
  setTimeout(() => {
    win.close()
  }, 5000)
}

app.whenReady().then(start)
