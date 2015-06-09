/// <reference path="dummy-data.js" />
/// <reference path="jquery-1.8.2.min.js" />
/// <reference path="v2.1.js" />
/// <reference path="jquery-ui.js" />

/*
 verions:1.0
 Author: hooyes
 Create Date:2015-05-15
 Update Date:2015-05-15

*/

$.extend({
    Request: function (m) {
        var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
        return sValue ? sValue[1] : sValue;
    }
});

var OS = $.Request("os");

var Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var f_html = [];
var iStart = 0;
var LDATA = JSONDATA.Data.SequenceDetails;
//var QCount= LDATA.length; 
var QStart = 2;
var QCount = QStart + 10;
var QCurrent = 0;
for (var i = QStart; i < QCount; i++) {
    QCurrent = i;
    var template_id = "#t_" + LDATA[i].Question.QuestionType;
    var html = $(template_id).html();
    var option_li = [];
    var ID = LDATA[i].Question.QuestionId;

    if (iStart == 0) {
        html = html.replace(/\{\$zcurrent\$\}/g, 'z-current');
    } else {
        html = html.replace(/\{\$zcurrent\$\}/g, '');
    }

    html = html.replace(/\{\$id\$\}/g, LDATA[i].Question.QuestionId);
    html = html.replace(/\{\$QuestionBody\$\}/g, LDATA[i].Question.QuestionBody);
    html = html.replace(/\{\$QuestionType\$\}/g, LDATA[i].Question.QuestionType);
    html = html.replace(/\{\$CurrentPage\$\}/g, i);

    if (QCurrent == QCount - 1) {
        html = html.replace(/\{\$suveyF\$\}/g, "suvey-btn-next-3");
        html = html.replace(/\{\$suveyF4\$\}/g, "suvey-btn-next-4");
    } else {
        html = html.replace(/\{\$suveyF\$\}/g, "");
        html = html.replace(/\{\$suveyF4\$\}/g, "");
    }


    for (var k = 0; k < LDATA[i].Question.QuestionOptions.length && k < 6; k++) {
        var QOD = LDATA[i].Question.QuestionOptions[k];
        option_li.push('<li onclick="t_multi(this,' + ID + ',' + k + ',\'' + LDATA[i].Question.QuestionType + '\')" class="def">'
            + '<span class="letter">' + Letters[k] + "</span>"
            + QOD.OptionText + '</li>');
    }
    html = html.replace(/\{\$QuestionOptions_Li\$\}/g, option_li.join(''));

    f_html.push(html);
    iStart++;
}

$("#main_page_container").prepend(f_html.join(''));




function t_check(obj, id, b, CurrentPage) {
    $(obj).siblings().removeClass('div-' + !b + '-selected');
    $(obj).addClass('div-' + b + '-selected');
    setTimeout(function () {
        t_nextPage(CurrentPage);
    }, 200);
}

function t_input(obj, id) {
    var value = $(obj).val();
    if (value != null && value != "") {
        s_show_next_btn(id, true);
    } else {
        s_show_next_btn(id, false);
    }
}

function t_multi(obj, id, k, Qt) {
    switch (Qt) {
        case "multiple-choice":
            $("#QOptions_" + id).find("li").removeClass("active");
            break;
        case "multi-selection":
            break;
        default:
            break;
    }
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
    } else {
        $(obj).addClass('active');//.effect("highlight", "slow");;
    }

    var effect = "";
    if (Qt != "blank-filling") {
        effect = "bounce";
    }

    if ($("#QOptions_" + id).find(".active").length > 0) {
        s_show_next_btn(id, true, effect);
    } else {
        s_show_next_btn(id, false, effect);
    }
}
function s_show_next_btn(id, b, effect) {
    if (b) {
        $('#next-1-' + id).hide();
        if (effect != '') {
            $('#next-2-' + id).show().effect(effect, "slow");
        } else {
            $('#next-2-' + id).show();
        }

    } else {
        $('#next-1-' + id).show();
        $('#next-2-' + id).hide();
    }
}

function t_finish(obj) {

    $(obj).effect("puff", "slow", function () {

        $(obj).fadeIn();

        var MyScore = Math.round(Math.random() * 100);

        connectWebViewJavascriptBridge(function (bridge) {

            bridge.init(function (message, responseCallback) {
                responseCallback({})
            });

            // app realdy
            // 调用App的LoadFinish方法
            bridge.callHandler('getResultInfo', { score: MyScore }, function (response) {

            });
        });

    });

}

function t_nextPage(CurrentPage) {
    //alert(CurrentPage);
    if (CurrentPage == QCount - 1) {
        page_finish();
    } else {
        nextPage();
    }
}


function page_finish() {

    var MyScore = Math.round(Math.random() * 100);
   
    if (OS == "android") {
        jsb.require('getResultInfo', { score: MyScore }, function (response) {
        });
    }
    else {

        connectWebViewJavascriptBridge(function (bridge) {

            bridge.init(function (message, responseCallback) {
                responseCallback({})
            });

            // app realdy
            // 调用App的LoadFinish方法
            bridge.callHandler('getResultInfo', { score: MyScore }, function (response) {

            });
        });
    }


}


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

    $(".suvey-close").click(function () {
        //alert("hello");
    });
});



/// <reference path="dummy-data.js" />

/// <reference path="jquery-1.8.2.min.js" />
//$(function () {
//    arr = ['easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce'];
//    //$('.Q1>div').each(function () {
//    //    $(this).css({ left: $(this).offset().left, top: $(this).css("top", $(this).offset().top) })
//    //    //$(this).html(arr[$(this).index()]);
//    //});


//    var stop = 80;
//    $('.Q1>div').each(function () {
//        stop = stop + 67;
//        $(this).animate({ 'margin-top': stop },
//            {
//                queue: false, duration: 2000, easing: arr[$(this).index()]
//            });
//    });


//});