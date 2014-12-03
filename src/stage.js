(function() {
  var $ = require('jquery');
  var gui = require('nw.gui');

  var argv = require('minimist')(gui.App.argv);
  var iframe = window.frames["main"];

  // forward to init channel
  if (argv.channel && typeof argv.channel === 'string') {
    var channel = argv.channel;
    iframe.src = 'https://' + channel + '.slack.com';
  }

  // Get the current window
  var win = gui.Window.get();

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
    var iwindow = iframe.contentWindow;
    iwindow. Notification.prototype.show = function(title, option) {
      if (enableNotification) {
        win.setBadgeLabel(++badgeLabelNumber);
      }
    }
  });
}).apply(this);
