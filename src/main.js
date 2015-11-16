var gui = require('nw.gui');

var win = gui.Window.get();

var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });

var menu = new gui.Menu();
var closeOption = new gui.MenuItem({
	label: "Close Button Action"
});

var closeSubMenu = new gui.Menu();
closeSubMenu.append(new gui.MenuItem({ type: "checkbox", label: "Minimize to System Tray" }));
closeSubMenu.append(new gui.MenuItem({ type: "checkbox", label: "Quit" }));

menu.append(closeOption);
tray.menu = menu;

win.on('close', function() {
	this.hide();

	tray.on('click', function() {
		win.show();
	});
});

