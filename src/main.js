var gui = require('nw.gui');

var win = gui.Window.get();

var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });

var menu = new gui.Menu();
var closeOption = new gui.MenuItem({
	label: "Close",
	click: function() {
		gui.App.quit();
	}
});

menu.append(closeOption);
tray.menu = menu;

win.on('close', function() {
	this.hide();

	tray.on('click', function() {
		win.show();
	});
});

