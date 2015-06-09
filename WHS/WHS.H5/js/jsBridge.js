
// ios连接桥初始化
function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(WebViewJavascriptBridge)
        }, false)
    }
}

function init() {
    
    if ($.Request("AppDevice") == "ios") {
        connectWebViewJavascriptBridge(function (bridge) {
            
            bridge.init(function (message, responseCallback) {
                responseCallback({})
            });

            // app realdy
            // 调用App的LoadFinish方法
            bridge.callHandler('LoadFinish', {}, function (response) {
 
            });
        });
    }
    else {
        jsb.require('getAccountInfo', {}, function (response) {
            // app realdy
                    // 调用App的LoadFinish方法
                    jsb.require('LoadFinish', {}, function (response) {
                                });
        });
    }


}
 

 

