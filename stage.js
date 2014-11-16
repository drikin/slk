(function() {
  // Load native UI library
  var gui = require('nw.gui');
  // Get the current window
  var win = gui.Window.get();

  win.on('new-win-policy', function(frame, url, policy){
    policy.ignore();
    gui.Shell.openExternal(url);
    //policy.forceNewWindow();
  });
}).apply(this);
