const electron = require('electron');
const path = require('path');
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
// require('web-ifc-viewer/dist/ifc-viewer-api');
const url = require('url');


//  const{ IfcViewerAPI }= require('web-ifc-three');
// require('web-ifc-viewer/dist/ifc-viewer-api');
//  const{ IfcViewerAPI }= require('web-ifc-viewer/dist/ifc-viewer-api');


const { app, BrowserWindow, Menu } = electron;
let mainWindow;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  const menu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(menu);
});

const mainMenuTemplate = [
  {
    label: 'Devtool',
    accelerator: 'Ctrl+D',
    click() {
      mainWindow.webContents.openDevTools();
    }
  },
  {
    label: 'Reload',
    accelerator: 'Ctrl+R',
    click() {
      mainWindow.reload();
    }
  },
  {
    label: 'Probando',
    accelerator: 'Ctrl+',
    click() {
      mainWindow.reload();
    }
  }
];
