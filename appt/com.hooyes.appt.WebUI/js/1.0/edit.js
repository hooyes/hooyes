/// <reference path="jquery-1.8.2.min.js" />
// Author: hooyes
// Date: 2015-06-10
// Version: 1.0

var OS;

OS = $.Request("os");

var EditMode=$.Request("edit");


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

$(function () {
 
  if(OS=='android'){
    //$("body").append("<script src='"+JS_CDN+"/js/jsb.js'></script>");
  }
  else if(OS == "ios"){
  connectWebViewJavascriptBridge(function (bridge) {
                                 
                                 bridge.init(function (message, responseCallback) {
                                             responseCallback({})
                                             });
                                 });
  }
  
  if(EditMode=='1'){
  $('.app-edit .edit').show();
   $('.edit-img').addClass('edit-img-1');
   $('.edit-text').addClass('edit-text-1');
  }
  });

function app_edit(d) {
    
    var _obj = h5data.filter(function(_x){return _x.id==d.id});
    var _item=_obj[0];
    var data4app= {
    id:d.id,
    type:d.type,
    key:d.key,
    value:eval('_item.'+d.key),
    width:d.width,
    height:d.height
        //origin:_item
    }
    
    //alert(JSON.stringify(data4app));
    invoke_app('editor',data4app)
}




function invoke_app(method,data) {
    
    
    
    if (OS == "android") {
        jsb.require(method, { data: data }, function (response) {
                    });
    }
    else if (OS == "ios") {
        
        
        connectWebViewJavascriptBridge(function (bridge) {
        bridge.callHandler(method, { data: data  }, function (response) {
                           //alert(response);
                           });
                                       });
                           
    }else{
        alert("方法名称:\n"+method+"\n数据:"+JSON.stringify(data));
    }
    
    
    
}


