const app = require('electron').app;
app.commandLine.appendSwitch('ignore-certificate-errors');

var BrowserWindow = require('electron').BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('login', function(event, webContents, request, authInfo, callback) {
    event.preventDefault();
    var username, password; 
    webContents.executeJavascript("username = prompt('Enter username:', '');");
    console.log(username + " " + password);
    callback();//document.getElementById('username'), document.getElementById('password'));
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
                        width: 900,
                        height: 600,
                        center: true,
                        resizable: true,
                        title: 'Remote Messages',
                        icon: 'img/icon.png',
                        webPreferences : {
                            webSecurity: false
                        }
                   });
    //mainWindow.setMenu(null);

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    var webContents = mainWindow.webContents;
 
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
