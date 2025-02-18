const { app, BrowserWindow } = require('electron');
const { Menu } = require('electron');
const path = require('path');

// No Menu
//Menu.setApplicationMenu(null);

function createWindow() {
    const mainWindow = new BrowserWindow({
          width: 1200,
          //height: 900,
          frame: true,
          resizable: true,
          webPreferences: {
                  nodeIntegration: false,
                  contextIsolation: true,
                },
          icon: path.join(__dirname, 'icon.png')
        });

  // Load Web-App URL
  mainWindow.loadURL('https://acdp.mountai.co');
  // No Menubar
  mainWindow.setMenuBarVisibility(false)
}
  
app.whenReady().then(createWindow);
