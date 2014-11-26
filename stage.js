(function() {
  var $ = require('jquery');
  var gui = require('nw.gui');

  // Get the current window
  var win = gui.Window.get();

  win.on('new-win-policy', function(frame, url, policy) {
    policy.ignore();
    gui.Shell.openExternal(url);
    //policy.forceNewWindow();
  });

  // FIXME: very hacky way to forcefully update font-family
  win.on('document-end', function() {
    var iframe = window.frames["main"];
    $(iframe.contentDocument.head).contents().append("<style>#message-input, .message{font-family:'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',  Meiryo, メイリオ, sans-serif !important;}</style>");

    // FIXME: forcefully disable Notification for avoiding crash
    window.Notification = iframe.contentWindow.Notification = function(title, options) {
        this.title = title;
        this.options = options;

        return {
            "show": function() { console.log(title, options); },
            "permission": "granted",
            "close": function() { console.log("close", title); }
        }
    };
    window.Notification.requestPermission = function(callback) {
        console.log('requestPermission');
        callback("granted");
    }
  });
}).apply(this);
