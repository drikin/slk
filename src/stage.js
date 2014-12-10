(function() {
  var $ = require('jquery');
  var gui = require('nw.gui');

  // Register is required for Notification on Win8
  gui.App.createShortcut(process.env.APPDATA + "\\Microsoft\\Windows\\Start Menu\\Programs\\node-webkit.lnk");

  // Get the current window
  var win = gui.Window.get();

  var argv = require('minimist')(gui.App.argv);
  var iframe = window.frames["main"];
  var iwindow = iframe.contentWindow;

  // forward to init team
  if (argv.team && typeof argv.team === 'string') {
    var team = argv.team;
    iframe.src = 'https://' + team + '.slack.com';
  }
  if (argv.zoom && typeof argv.zoom === 'number') {
    win.zoomLevel = argv.zoom;
  }

  // open web inspector if it's debug mode
  if (argv.debug) {
    win.showDevTools();
  }

  win.on('new-win-policy', function(frame, url, policy) {
    policy.ignore();
    gui.Shell.openExternal(url);
    //policy.forceNewWindow();
  });

  // FIXME: very hacky way to forcefully update font-family
  win.on('document-end', function() {
    $(iframe.contentDocument.head).contents().append("<style>#msg_text, #message-input, .message{font-family:'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',  Meiryo, メイリオ, sans-serif !important;}</style>");

    // notification badge
    var enableNotification = true;
    var badgeLabelNumber = 0;

    var mi = iframe.contentDocument.getElementById('message-input');
    if (mi) {
      mi.onkeydown = function(){
        badgeLabelNumber = 0;
        win.setBadgeLabel('');
      }
    }
    iwindow.Notification.prototype.show = function(title, option) {
      this.onclick = function() {
        win.focus();
      }
      if (enableNotification) {
        win.setBadgeLabel(++badgeLabelNumber);
      }
    }
  });
}).apply(this);
