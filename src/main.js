const app = require('electron').app;
app.commandLine.appendSwitch('ignore-certificate-errors');

var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
                        width: 900,
                        height: 600,
                        center: true,
                        resizable: true,
                        title: 'Remote Messages',
                        icon: 'img/icon.png'
                   });
    mainWindow.setMenu(null);

    mainWindow.loadURL('file://' + __dirname + '/index.html');
 
    mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
