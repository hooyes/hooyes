/// <reference path="dummy-data.js" />
/// <reference path="jquery-1.8.2.min.js" />
/// <reference path="v2.1.js" />
/// <reference path="jquery-ui.js" />

/*
 verions:1.0
 Author: hooyes
 Create Date:2015-05-15
 Update Date:2015-05-27

*/
var config_url = "http://api.whs.hooyes.net:5566/health/getsequence?sequencename={0}";
var config_url_2 = "http://api.whs.hooyes.net:5566/health/AddUserAnswer";

$.extend({
    Request: function (m) {
        var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
        return sValue ? sValue[1] : sValue;
    }
});

var JSONDATA = {}
var sequencename = $.Request("sequencename");
if (sequencename == "" || sequencename == null) {
    sequencename = "lung_default";
}
var QStart = $.Request("start");
if (QStart == "" || QStart == null || isNaN(QStart)) {
    QStart = 2;
}
var OS = $.Request("os");

var UserId = $.Request("userid");
if (UserId == "" || UserId == null) {
    UserId = "noname";
    try {
        UserId = navigator.userAgent.substr(0, 50);
    } catch (e) {

    }
}


$.ajax({
    url: config_url.replace("{0}", sequencename),
    type: "post",
    async: false,
    success: function (data) {
        JSONDATA = data;
        if (JSONDATA.Data.BaseResult.Code !== 0) {
            alert("呃...程序提示以下错，(ErrorCode:" + JSONDATA.Data.BaseResult.Code + ")" + JSONDATA.Data.BaseResult.Message);
        }
    },
    error: function (data) {
        alert("呃...网络不给力");
    }
});





var Letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
var f_html = [];
var iStart = 0;
var LDATA = JSONDATA.Data.SequenceDetails;
var QCount = LDATA.length; //QStart + 10;
var QCurrent = 0;
var Q_key_Pattern = /\$([A-Za-z0-9_])+/ig;

var html = prepareHTML(QStart);
f_html.push(html);
$("#main_page_container").append(f_html.join(''));



function prepareHTML(i) {
    QCurrent = i;
    var QuestionKey = LDATA[i].Question.QuestionKey;
    var Condition = LDATA[i].Question.Condition;
    var IsOK = true;
    if (Condition !== "" && iStart != 0) {
        try {
            Condition = Condition.replace("<>", "!=");
            var Condition_real = Condition.replace(Q_key_Pattern, r_getValue);
            IsOK = eval(Condition_real);
        }
        catch (e) {
        }
        if (!IsOK) {
            iStart++;
            QCurrent++;
            if (QCurrent < QCount) {
                return prepareHTML(QCurrent);
            } else {
                return "";
            }
        }
    }

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
    if (LDATA[i].Question.QuestionBody.length > 15) {
        html = html.replace(/\{\$text\$\}/g, "text_2");
    } else {
        html = html.replace(/\{\$text\$\}/g, "text_1");
    }

    //html = html.replace(/\{\$QuestionType\$\}/g, LDATA[i].Question.QuestionType);
    html = html.replace(/\{\$topimg\$\}/g, get_rand_img() + ".png");
    html = html.replace(/\{\$QuestionKey\$\}/g, LDATA[i].Question.QuestionKey);
    html = html.replace(/\{\$CurrentPage\$\}/g, i);

    if (QCurrent == QCount - 1) {
        html = html.replace(/\{\$suveyF\$\}/g, "suvey-btn-next-3");
        html = html.replace(/\{\$suveyF4\$\}/g, "suvey-btn-next-4");
    } else {
        html = html.replace(/\{\$suveyF\$\}/g, "");
        html = html.replace(/\{\$suveyF4\$\}/g, "");
    }


    for (var k = 0; k < LDATA[i].Question.QuestionOptions.length; k++) {
        var QOD = LDATA[i].Question.QuestionOptions[k];
        //option_li.push('<li data="' + QOD.OptionValue+ '" onclick="t_multi(this,' + ID + ',' + k + ',\'' + LDATA[i].Question.QuestionType + '\')" class="def">'
        //    + '<span class="letter">' + Letters[k] + "</span>"
        //    + QOD.OptionText + '</li>');

        var LI = '<li data="@OptionValue" onclick="t_multi(this,@ID,@k,\'@QuestionType\',\'@QuestionKey\')" class="def @defextra"><span class="letter">@letter</span>@OptionText</li>';
        LI = LI.replace("@OptionValue", QOD.OptionValue)
               .replace("@ID", ID)
               .replace("@k", k)
               .replace("@QuestionType", LDATA[i].Question.QuestionType)
               .replace("@QuestionKey", LDATA[i].Question.QuestionKey)
               .replace("@letter", Letters[k])
               .replace("@OptionText", QOD.OptionText);
        var K_length = LDATA[i].Question.QuestionOptions.length;
        if (K_length > 6) {
            LI = LI.replace("@defextra", "defextra");
        } else {
            LI = LI.replace("@defextra", "defextra_" + K_length);
        }


        option_li.push(LI);

    }
    html = html.replace(/\{\$QuestionOptions_Li\$\}/g, option_li.join(''));
    iStart++;
    QCurrent++;
    return html;
}

function r_getValue(k) {
    k = k.replace("$", "");
    return "'" + $("#" + k).val() + "'";
}


function t_check(obj, id, b, CurrentPage, QuestionKey) {
    $("#" + QuestionKey).val(b);
    $(obj).siblings().removeClass('div-' + !b + '-selected');
    $(obj).addClass('div-' + b + '-selected');
    setTimeout(function () {
        t_nextPage(CurrentPage);
    }, 200);
}

function t_input(obj, id, QuestionKey) {
    var value = $(obj).val();
    $("#" + QuestionKey).val(value);
    if (value != null && value != "") {
        s_show_next_btn(id, true);
    } else {
        s_show_next_btn(id, false);
    }
}

function t_multi(obj, id, k, Qt, QuestionKey) {
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

    // $("#" + QuestionKey).val(value);

    var val = [];
    $("#QOptions_" + id).find(".active").each(function (i, n) {
        val.push($(n).attr("data"));
    });

    $("#" + QuestionKey).val(val.join(','));
    if ($("#QOptions_" + id).find(".active").length > 0) {
        s_show_next_btn(id, true, effect);
    } else {
        s_show_next_btn(id, false, effect);
    }
}
function s_show_next_btn(id, b, effect) {
    if (b) {
        //$('#next-1-' + id).hide();
        if (effect != '') {
            //$('#next-2-' + id).hide().removeClass(effect);
            $('#next-2-' + id).show().addClass(effect);
        } else {
            $('#next-2-' + id).show();
        }

    } else {
        //$('#next-1-' + id).show();
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

    if (CurrentPage == QCount - 1) {
        page_finish();
    } else {
        var html = prepareHTML(QCurrent);
        if (html != "") {
            $("#main_page_container").append(html);
            var t = $(window).height() - 40;
            $(".suvey-btn-next").css("top", t + 'px');
            //$(".suvey-btn-next-1").show();
            new App($(".nr"), 0);
            nextPage();
        } else {
            page_finish();
        }
    }
}


function page_finish() {

    var MyScore = Math.round(Math.random() * 100);
    //alert('Hey,你的得分:' + MyScore);

    //var Data = $("#f1").serializeArray();
    //alert(Data);
    if (MyScore < 40) {
        MyScore = MyScore + 39;
    }

    post_data();

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

function post_data() {
    var s_data = { UserId: UserId, SubjectId: 1, Answer: JSON.stringify($("#f1").serializeArray()) };
    $.ajax({
        url: config_url_2,
        type: "post",
        data: s_data,
        async: true,
        success: function (data) {
            //alert(data);
        },
        error: function (data) {

        }
    });

}


function page_close() {

    //alert("关闭窗口");

    if (OS == "android") {
        jsb.require('closeViewer', { s: 0 }, function (response) {
        });
    }
    else {

        connectWebViewJavascriptBridge(function (bridge) {

            bridge.init(function (message, responseCallback) {
                responseCallback({})
            });


            bridge.callHandler('closeViewer', { s: 0 }, function (response) {

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

    Url_InitData();

    var t = $(window).height() - 40;
    $(".suvey-btn-next").css("top", t + 'px');
    //$(".suvey-btn-next-1").show();


});


function Url_InitData() {
    $("#k_gender").val($.Request("gender"));
    $("#k_age").val($.Request("age"));
    $("#k_weight").val($.Request("weight"));
    $("#k_height").val($.Request("height"));

}

function get_rand_img() {
    var x = Math.random() * 10;
    x = Math.round(x);
    if (x < 1) {
        x = 1;
    }
    if (x > 7) {
        x = 7;
    }
    return x;
}



