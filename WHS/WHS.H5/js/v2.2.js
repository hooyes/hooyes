/**
 * V2 Hooyes
 * Copyright (c) 2015 
 * Licensed MIT <>
 */
function mobilecheck() {
    var a = !1;
    return function (b) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    a
}
function isWeixin() {
    var a = navigator.userAgent.toLowerCase();
    return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
}
function countCharacters(a) {
    for (var b = 0,
    c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d >= 1 && 126 >= d || d >= 65376 && 65439 >= d ? b++ : b += 2
    }
    return b
}
function playVideo(a) {
    if (a && a.bgAudio) {
        "1" == a.bgAudio.type ? $("#media").attr("src", a.bgAudio.url) : $("#media").attr("src", PREFIX_FILE_HOST + a.bgAudio.url); {
            navigator.userAgent.match(/(iPod|iPhone|iPad)/i) ? "progress" : "loadeddata"
        }
        navigator.userAgent.match(/(iPod|iPhone|iPad)/i) || $("#media").bind("loadstart",
        function () {
            $("#audio_btn").removeClass("off").addClass("loading_background"),
            $("#yinfu").addClass("loading_yinfu")
        }).bind("loadeddata",
        function () {
            $("#audio_btn").removeClass("loading_background").addClass("off"),
            $("#yinfu").removeClass("loading_yinfu")
        }),
        $("#media").bind("canplay",
        function () {
            $("#audio_btn").removeClass("off").addClass("play_yinfu"),
            $("#yinfu").addClass("rotate")
        }),
        $("#audio_btn").show().click(function () {
            $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"), $("#media")[0].pause())
        })
    }
}
function pageScroll(a) {
    scroll = !0;
    var b = $(currentPage).find(".m-img").attr("id").charAt(4),
    c = $(currentPage).siblings(".main-page").find("#page" + a);
    activePage = $(c).parent(".main-page")[0],
    b > a ? prePage() : a > b && nextPage()
}
function scrollStart(a) {
    isMobile && a && (a = event),
    theClass._isDisableFlipPage || (currentPage = theClass._$pages.filter(".z-current").get(0),
    scroll || (activePage = null), currentPage && (!$(currentPage).find("canvas")[0] || $(currentPage).find("canvas").hasClass("noOp") && !$(currentPage).find("canvas").hasClass("noMove")) && (isStart = !0, isNext = !1, isFirstTime = !0, moveDistanceX = 0, moveDistanceY = 0, a && "mousedown" == a.type ? (startX = a.pageX, startY = a.pageY) : a && "touchstart" == a.type && (startX = a.touches[0].pageX, startY = a.touches[0].pageY), currentPage.classList.add("z-move"), currentPage.style.webkitTransition = "none", currentPage.style.mozTransition = "none", currentPage.style.transition = "none"))
}
function scrollMove(a) {
    if (isMobile && a && (a = event), isStart && theClass._$pages.length > 1 && (a && "mousemove" == a.type ? (moveDistanceX = a.pageX - startX, moveDistanceY = a.pageY - startY) : a && "touchmove" == a.type && (moveDistanceX = a.touches[0].pageX - startX, moveDistanceY = a.touches[0].pageY - startY), Math.abs(moveDistanceY) > Math.abs(moveDistanceX) && (!$(currentPage).find("canvas")[0] || $(currentPage).find("canvas").hasClass("noOp") && !$(currentPage).find("canvas").hasClass("noMove")) && (!$(currentPage).find(".finger_background")[0] || $(currentPage).find(".finger_background").hasClass("noFinger")))) if (moveDistanceY > 0) {
        if (theClass._isDisableFlipPrevPage) return;
        isNext || isFirstTime ? (isNext = !1, isFirstTime = !1, activePage && (activePage.classList.remove("z-active"), activePage.classList.remove("z-move")), scroll ? triggerLoop = !0 : currentPage.previousElementSibling && currentPage.previousElementSibling.classList.contains("main-page") ? activePage = currentPage.previousElementSibling : (activePage = theClass._$pages.last().get(0), triggerLoop = !0), activePage && activePage.classList.contains("main-page") ? (activePage.classList.add("z-active"), activePage.classList.add("z-move"), activePage.style.webkitTransition = "none", activePage.style.webkitTransform = "translateY(-" + window.innerHeight + "px)", activePage.style.mozTransition = "none", activePage.style.mozTransform = "translateY(-" + window.innerHeight + "px)", activePage.style.transition = "none", activePage.style.transform = "translateY(-" + window.innerHeight + "px)", $(activePage).trigger("active"), currentPage.style.webkitTransformOrigin = "bottom center", currentPage.style.mozTransformOrigin = "bottom center", currentPage.style.transformOrigin = "bottom center") : (currentPage.style.webkitTransform = "translateY(0px) scale(1)", currentPage.style.mozTransform = "translateY(0px) scale(1)", currentPage.style.transform = "translateY(0px) scale(1)", activePage = null)) : (activePage.style.webkitTransform = "translateY(-" + (window.innerHeight - moveDistanceY) + "px)", activePage.style.mozTransform = "translateY(-" + (window.innerHeight - moveDistanceY) + "px)", activePage.style.transform = "translateY(-" + (window.innerHeight - moveDistanceY) + "px)", "1" == theClass._scrollMode && (currentPage.style.webkitTransform = "scale(" + (window.innerHeight / (window.innerHeight + moveDistanceY)).toFixed(3) + ")", currentPage.style.mozTransform = "scale(" + (window.innerHeight / (window.innerHeight + moveDistanceY)).toFixed(3) + ")", currentPage.style.transform = "scale(" + (window.innerHeight / (window.innerHeight + moveDistanceY)).toFixed(3) + ")"))
    } else if (0 > moveDistanceY) {
        //alert(moveDistanceY);
        if (theClass._isDisableFlipNextPage) return;
        !isNext || isFirstTime ? (isNext = !0, isFirstTime = !1,
        activePage && (activePage.classList.remove("z-active"),
        activePage.classList.remove("z-move")),
        scroll ? triggerLoop = !0 : currentPage.nextElementSibling && currentPage.nextElementSibling.classList.contains("main-page") ? activePage = currentPage.nextElementSibling : (activePage = theClass._$pages.first().get(0), triggerLoop = !0),
        activePage && activePage.classList.contains("main-page") ? (
        activePage.classList.add("z-active"),
        activePage.classList.add("z-move"),
        activePage.style.webkitTransition = "none",
        activePage.style.webkitTransform = "translateY(" + window.innerHeight + "px)",
        activePage.style.mozTransition = "none",
        activePage.style.mozTransform = "translateY(" + window.innerHeight + "px)",
        activePage.style.transition = "none",
        activePage.style.transform = "translateY(" + window.innerHeight + "px)",
        $(activePage).trigger("active"),
        currentPage.style.webkitTransformOrigin = "top center",
        currentPage.style.mozTransformOrigin = "top center",
        currentPage.style.transformOrigin = "top center") : (
        currentPage.style.webkitTransform = "translateY(0px) scale(1)",
        currentPage.style.mozTransform = "translateY(0px) scale(1)",
        currentPage.style.transform = "translateY(0px) scale(1)",
        activePage = null)) : (activePage.style.webkitTransform = "translateY(" + (window.innerHeight + moveDistanceY) + "px)",
        activePage.style.mozTransform = "translateY(" + (window.innerHeight + moveDistanceY) + "px)",
        activePage.style.transform = "translateY(" + (window.innerHeight + moveDistanceY) + "px)",
        "1" == theClass._scrollMode && (currentPage.style.webkitTransform = "scale(" + ((window.innerHeight + moveDistanceY) / window.innerHeight).toFixed(3) + ")",
        currentPage.style.mozTransform = "scale(" + ((window.innerHeight + moveDistanceY) / window.innerHeight).toFixed(3) + ")",
        currentPage.style.transform = "scale(" + ((window.innerHeight + moveDistanceY) / window.innerHeight).toFixed(3) + ")"))
    }
}
function scrollEnd2() {
    activePage.style.transform = "translateY(0px)";
    activePage.style.webkitTransform = "translateY(0px)";
    activePage.style.mozTransform = "translateY(0px)"
    activePage.classList.add("z-move1");
    currentPage.classList.add("z-move2");
    setTimeout(function () {
        activePage.classList.remove("z-active"),
        activePage.classList.remove("z-move"),
        activePage.classList.add("z-current"),
        currentPage.classList.remove("z-current"),
        currentPage.classList.remove("z-move"),
        currentPage.classList.remove("z-move2"),
        activePage.classList.remove("z-move1"),
        theClass._isDisableFlipPage = !1,
        theClass.$currentPage = $(activePage).trigger("current"),
        $(currentPage).trigger("hide")
    },
        1500);


    //!isStart ||
    //$(currentPage).find("canvas")[0] &&
    //!$(currentPage).find("canvas").hasClass("noOp") ||
    //$(currentPage).find(".finger_background")[0] &&
    //!$(currentPage).find(".finger_background").hasClass("noFinger") ||
    //(
    //isStart = !1, activePage ? (theClass._isDisableFlipPage = !0,
    //currentPage.style.webkitTransition = "-webkit-transform 0.4s ease-out",
    //activePage.style.webkitTransition = "-webkit-transform 0.4s ease-out",
    //currentPage.style.mozTransition = "-moz-transform 0.4s ease-out",
    //activePage.style.mozTransition = "-moz-transform 0.4s ease-out",
    //currentPage.style.transition = "transform 0.4s ease-out",
    //activePage.style.transition = "transform 0.4s ease-out",
    //Math.abs(moveDistanceY) > Math.abs(moveDistanceX) && Math.abs(moveDistanceY) > 20 ? ("1" == theClass._scrollMode ? (
    //currentPage.style.webkitTransform = "scale(0.2)",
    //activePage.style.webkitTransform = "translateY(0px)",
    //currentPage.style.mozTransform = "scale(0.2)",
    //activePage.style.mozTransform = "translateY(0px)",
    //currentPage.style.transform = "scale(0.2)",
    //activePage.style.transform = "translateY(0px)") :
    //(
    //currentPage.style.webkitTransform = "scale(1)",
    //activePage.style.webkitTransform = "translateY(0px)",
    //currentPage.style.mozTransform = "scale(1)",
    //activePage.style.mozTransform = "translateY(0px)",
    //currentPage.style.transform = "scale(1)",
    //activePage.style.transform = "translateY(0px)"),
    //$(activePage).find("canvas")[0] && !$(activePage).find("canvas").hasClass("noOp") ? $("#audio_btn").css("opacity", 0) : $(activePage).find(".finger_background")[0] && !$(activePage).find(".finger_background").hasClass("noFinger") && $("#audio_btn").css("opacity", 0),
    //setTimeout(function () {
    //    activePage.classList.remove("z-active"),
    //    activePage.classList.remove("z-move"),
    //    activePage.classList.add("z-current"),
    //    currentPage.classList.remove("z-current"),
    //    currentPage.classList.remove("z-move"),
    //    //currentPage.classList.remove("z-move2"),
    //    theClass._isDisableFlipPage = !1,
    //    theClass.$currentPage = $(activePage).trigger("current"),
    //    $(currentPage).trigger("hide")
    //},
    //    500)) : (isNext ? (currentPage.style.webkitTransform = "scale(1)",
    //activePage.style.webkitTransform = "translateY(100%)",
    //currentPage.style.mozTransform = "scale(1)",
    //activePage.style.mozTransform = "translateY(100%)",
    //currentPage.style.transform = "scale(1)",
    //activePage.style.transform = "translateY(100%)") : (
    //currentPage.style.webkitTransform = "scale(1)",
    //activePage.style.webkitTransform = "translateY(-100%)",
    //currentPage.style.mozTransform = "scale(1)",
    //activePage.style.mozTransform = "translateY(-100%)",
    //currentPage.style.transform = "scale(1)",
    //activePage.style.transform = "translateY(-100%)"),
    //setTimeout(function () {
    //    activePage.classList.remove("z-active"),
    //    activePage.classList.remove("z-move"),
    //    theClass._isDisableFlipPage = !1
    //},
    //    500))) : currentPage.classList.remove("z-move")),
    //    scroll = !1
}
function scrollEnd() {
    !isStart || $(currentPage).find("canvas")[0] && !$(currentPage).find("canvas").hasClass("noOp") || $(currentPage).find(".finger_background")[0] && !$(currentPage).find(".finger_background").hasClass("noFinger") || (
    isStart = !1, activePage ? (theClass._isDisableFlipPage = !0,
    currentPage.style.webkitTransition = "-webkit-transform 0.4s ease-out",
    activePage.style.webkitTransition = "-webkit-transform 0.4s ease-out",
    currentPage.style.mozTransition = "-moz-transform 0.4s ease-out",
    activePage.style.mozTransition = "-moz-transform 0.4s ease-out",
    currentPage.style.transition = "transform 0.4s ease-out",
    activePage.style.transition = "transform 0.4s ease-out",
    Math.abs(moveDistanceY) > Math.abs(moveDistanceX) && Math.abs(moveDistanceY) > 20 ? ("1" == theClass._scrollMode ? (
    currentPage.style.webkitTransform = "scale(0.2)",
    activePage.style.webkitTransform = "translateY(0px)",
    currentPage.style.mozTransform = "scale(0.2)",
    activePage.style.mozTransform = "translateY(0px)",
    currentPage.style.transform = "scale(0.2)",
    activePage.style.transform = "translateY(0px)") :
    (
    currentPage.style.webkitTransform = "scale(1)",
    activePage.style.webkitTransform = "translateY(0px)",
    currentPage.style.mozTransform = "scale(1)",
    activePage.style.mozTransform = "translateY(0px)",
    currentPage.style.transform = "scale(1)",
    activePage.style.transform = "translateY(0px)"),
    $(activePage).find("canvas")[0] && !$(activePage).find("canvas").hasClass("noOp") ? $("#audio_btn").css("opacity", 0) : $(activePage).find(".finger_background")[0] && !$(activePage).find(".finger_background").hasClass("noFinger") && $("#audio_btn").css("opacity", 0),
    setTimeout(function () {
        activePage.classList.remove("z-active"),
        activePage.classList.remove("z-move"),
        activePage.classList.add("z-current"),
        currentPage.classList.remove("z-current"),
        currentPage.classList.remove("z-move"),
        theClass._isDisableFlipPage = !1,
        theClass.$currentPage = $(activePage).trigger("current"),
        $(currentPage).trigger("hide")
    },
        500)) : (isNext ? (currentPage.style.webkitTransform = "scale(1)",
    activePage.style.webkitTransform = "translateY(100%)",
    currentPage.style.mozTransform = "scale(1)",
    activePage.style.mozTransform = "translateY(100%)",
    currentPage.style.transform = "scale(1)",
    activePage.style.transform = "translateY(100%)") : (
    currentPage.style.webkitTransform = "scale(1)",
    activePage.style.webkitTransform = "translateY(-100%)",
    currentPage.style.mozTransform = "scale(1)",
    activePage.style.mozTransform = "translateY(-100%)",
    currentPage.style.transform = "scale(1)",
    activePage.style.transform = "translateY(-100%)"),
    setTimeout(function () {
        activePage.classList.remove("z-active"),
        activePage.classList.remove("z-move"),
        theClass._isDisableFlipPage = !1
    },
        500))) : currentPage.classList.remove("z-move")),
        scroll = !1
}
function prePage() {
    var a = 0;
    scrollStart();
    var b = setInterval(function () {
        a += 1,
        moveDistanceY = a,
        scrollMove(),
        a >= 21 && (clearInterval(b), scrollEnd())
    },
    1)
}
function nextPage() {
    //alert(customLastPage);
    var a = 0;
    scrollStart();

    var b = setInterval(function () {
        a -= 20,
        moveDistanceY = a,
        scrollMove(),
        -21 >= a && (clearInterval(b), scrollEnd2())
    },
    1)
} !
function (a) {
    "use strict";
    a.fn.swipeSlide = function (b, c) {
        function d(a, b) {
            a.css({
                "-webkit-transition": "all " + b + "s " + C.transitionType,
                transition: "all " + b + "s " + C.transitionType
            })
        }
        function e(a, b) {
            a.css(C.axisX ? {
                "-webkit-transform": "translate3d(" + b + "px,0,0)",
                transform: "translate3d(" + b + "px,0,0)"
            } : {
                "-webkit-transform": "translate3d(0," + b + "px,0)",
                transform: "translate3d(0," + b + "px,0)"
            })
        }
        function f(a) {
            if (C.lazyLoad) {
                var b = C.ul.find("[data-src]");
                if (b.length > 0) {
                    var c = b.eq(a);
                    c.data("src") && (c.is("img") ? c.attr("src", c.data("src")).data("src", "") : c.css({
                        "background-image": "url(" + c.data("src") + ")"
                    }).data("src", ""))
                }
            }
        }
        function g(a) {
            a.touches || (a.touches = a.originalEvent.touches)
        }
        function h(a) {
            r = a.touches[0].pageX,
            s = a.touches[0].pageY
        }
        function i(a) {
            if (a.preventDefault(), C.autoSwipe && p && clearInterval(p), w = a.touches[0].pageX, x = a.touches[0].pageY, t = w - r, u = x - s, d(C.ul, 0), C.axisX) {
                if (!C.continuousScroll) {
                    if (0 == q && t > 0) return t = 0,
                    o();
                    if (q + 1 >= F && 0 > t) return t = 0,
                    o()
                }
                e(C.ul, -(D * parseInt(q) - t))
            } else {
                if (!C.continuousScroll) {
                    if (0 == q && u > 0) return u = 0,
                    o();
                    if (q + 1 >= F && 0 > u) return u = 0,
                    o()
                }
                e(C.ul, -(E * parseInt(q) - u))
            }
        }
        function j() {
            v = C.axisX ? t : u,
            Math.abs(v) <= y ? k(.3) : v > y ? n() : -y > v && m(),
            o(),
            t = 0,
            u = 0
        }
        function k(a) {
            d(C.ul, a),
            C.axisX ? e(C.ul, -q * D) : e(C.ul, -q * E)
        }
        function l() {
            C.continuousScroll ? q >= F ? (k(.3), q = 0, setTimeout(function () {
                k(0)
            },
            300)) : 0 > q ? (k(.3), q = F - 1, setTimeout(function () {
                k(0)
            },
            300)) : k(.3) : (q >= F ? q = 0 : 0 > q && (q = F - 1), k(.3)),
            c(q)
        }
        function m() {
            q++,
            l(),
            C.lazyLoad && f(C.continuousScroll ? q + 2 : q + 1)
        }
        function n() {
            if (q--, l(), A && C.lazyLoad) {
                var a = F - 1;
                for (a; F + 1 >= a; a++) f(a);
                return void (A = !1)
            } !A && C.lazyLoad && f(q)
        }
        function o() {
            C.autoSwipe && (p = setInterval(function () {
                m()
            },
            C.speed))
        }
        var p, q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 50,
        z = 0,
        A = !0,
        B = a(this),
        C = a.extend({},
        {
            ul: B.children("ul"),
            li: B.children().children("li"),
            continuousScroll: !1,
            autoSwipe: !0,
            speed: 4e3,
            axisX: !0,
            transitionType: "ease",
            lazyLoad: !1
        },
        b || {}),
        D = C.width || C.li.width(),
        E = C.li.height(),
        F = C.li.length;
        c = c ||
        function () { },
        function () {
            if (C.continuousScroll && (C.ul.prepend(C.li.last().clone()).append(C.li.first().clone()), C.axisX ? (e(C.ul.children().first(), -1 * D), e(C.ul.children().last(), D * F)) : (e(C.ul.children().first(), -1 * E), e(C.ul.children().last(), E * F))), C.lazyLoad) {
                var b = 0;
                for (z = C.continuousScroll ? 3 : 2, b; z > b; b++) f(b)
            }
            C.li.each(C.axisX ?
            function (b) {
                e(a(this), D * b)
            } : function (b) {
                e(a(this), E * b)
            }),
            o(),
            c(q, p),
            B.on("touchstart",
            function (a) {
                g(a),
                h(a)
            }),
            B.on("touchmove",
            function (a) {
                g(a),
                i(a)
            }),
            B.on("touchend",
            function () {
                j()
            })
        }()
    }
}(window.Zepto || window.jQuery),
function (a) {
    function b(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = b(a, "eqShow", Object);
        return b(c, "templateParser",
        function () {
            var a = {};
            return function (c, d) {
                if ("hasOwnProperty" === c) throw new Error("hasOwnProperty is not a valid name");
                return d && a.hasOwnProperty(c) && (a[c] = null),
                b(a, c, d)
            }
        })
    }
    function c() {
        templateParser = b(a)
    }
    var d = a.eqShow || (a.eqShow = {});
    c(d)
}(window, document),
function (a) {
    var b = a.templateParser("jsonParser",
    function () {
        function a(a) {
            return function (b, c) {
                a[b] = c
            }
        }
        function b(a, b) {
            var c;
            c = h[("" + a.type).charAt(0)](a);
            var d = $('<li comp-drag comp-rotate class="comp-resize comp-rotate inside" id="inside_' + c.id + '" num="' + a.num + '" ctype="' + a.type + '"></li>');
            3 != ("" + a.type).charAt(0) && "p" != ("" + a.type).charAt(0) && 1 != ("" + a.type).charAt(0) && d.attr("comp-resize", ""),
            1 == ("" + a.type).charAt(0) && d.removeAttr("comp-drag"),
            2 == ("" + a.type).charAt(0) && d.addClass("wsite-text"),
            4 == ("" + a.type).charAt(0) && (a.properties.imgStyle && $(c).css(a.properties.imgStyle), d.addClass("wsite-image")),
            5 == ("" + a.type).charAt(0) && d.addClass("wsite-input"),
            6 == ("" + a.type).charAt(0) && d.addClass("wsite-button"),
            8 == ("" + a.type).charAt(0) && d.addClass("wsite-button"),
            "v" == ("" + a.type).charAt(0) && d.addClass("wsite-video"),
            d.mouseenter(function () {
                $(this).addClass("inside-hover")
            }),
            d.mouseleave(function () {
                $(this).removeClass("inside-hover")
            });
            var e = $('<div class="element-box">').append($('<div class="element-box-contents">').append(c));
            return d.append(e),
            5 != ("" + a.type).charAt(0) && 6 != ("" + a.type).charAt(0) || "edit" != b || $(c).before($('<div class="element" style="position: absolute; height: 100%; width: 100%;">')),
            a.css && (d.css({
                width: 320 - parseInt(a.css.left)
            }), d.css({
                width: a.css.width,
                height: a.css.height,
                left: a.css.left,
                top: a.css.top,
                zIndex: a.css.zIndex,
                bottom: a.css.bottom,
                transform: a.css.transform
            }), e.css(a.css).css({
                width: "100%",
                height: "100%",
                transform: "none"
            }), 4 != ("" + a.type).charAt(0) && $(c).css({
                width: a.css.width,
                height: a.css.height
            })),
            d
        }
        function c(a, c, d) {
            c = c.find(".edit_area").css({
                overflow: "hidden"
            });
            var e, f = a.elements;
            if (f) for (e = 0; e < f.length; e++) if (3 == f[e].type) {
                var g = h[("" + f[e].type).charAt(0)](f[e]);
                "edit" == d && i[("" + f[e].type).charAt(0)] && i[("" + f[e].type).charAt(0)](g, f[e])
            } else {
                var l = b(f[e], d);
                c.append(l);
                for (var m = 0; m < k.length; m++) k[m](l, f[e]);
                j[("" + f[e].type).charAt(0)] && j[("" + f[e].type).charAt(0)](l, f[e]),
                "edit" == d && i[("" + f[e].type).charAt(0)] && i[("" + f[e].type).charAt(0)](l, f[e])
            }
        }
        function d() {
            return i
        }
        function e() {
            return h
        }
        function f(a) {
            k.push(a)
        }
        function g() {
            return k
        }
        var h = {},
        i = {},
        j = {},
        k = [],
        l = containerWidth = 320,
        m = containerHeight = 486,
        n = 1,
        o = 1,
        p = {
            getComponents: e,
            getEventHandlers: d,
            addComponent: a(h),
            bindEditEvent: a(i),
            bindAfterRenderEvent: a(j),
            addInterceptor: f,
            getInterceptors: g,
            wrapComp: b,
            mode: "view",
            parse: function (a) {
                var b = $('<div class="edit_wrapper"><ul id="edit_area' + a.def.id + '" comp-droppable class="edit_area weebly-content-area weebly-area-active"></div>'),
                d = this.mode = a.mode;
                this.def = a.def;
                var e = $(a.appendTo);
                return containerWidth = e.width(),
                containerHeight = e.height(),
                n = l / containerWidth,
                o = m / containerHeight,
                c(a.def, b.appendTo($(a.appendTo)), d)
            }
        };
        return p
    });
    b.addInterceptor(function (a, b) {
        if (b.properties && b.properties.anim) {
            var c = b.properties.anim;
            a = a.children(".element-box"),
            0 === c.type && a.addClass("fadeIn"),
            1 === c.type && (0 === c.direction && a.addClass("fadeInLeft"), 1 === c.direction && a.addClass("fadeInDown"), 2 === c.direction && a.addClass("fadeInRight"), 3 === c.direction && a.addClass("fadeInUp")),
            2 === c.type && (0 === c.direction && a.addClass("bounceInLeft"), 1 === c.direction && a.addClass("bounceInDown"), 2 === c.direction && a.addClass("bounceInRight"), 3 === c.direction && a.addClass("bounceInUp")),
            3 === c.type && a.addClass("bounceIn"),
            4 === c.type && a.addClass("zoomIn"),
            5 === c.type && a.addClass("rubberBand"),
            a.css("animation-duration", b.properties.anim.duration + "s"),
            a.css("animation-fill-mode", "both"),
            a.css("animation-delay", b.properties.anim.delay + "s")
        }
    }),
    b.addComponent("1",
    function (a) {
        var b = document.createElement("div");
        if (b.id = a.id, b.setAttribute("class", "element comp_title"), a.content && (b.textContent = a.content), a.css) {
            var c, d = a.css;
            for (c in d) b.style[c] = d[c]
        }
        if (a.properties.labels) for (var e = a.properties.labels,
        f = 0; f < e.length; f++) $('<a class = "label_content" style = "display: inline-block;">').appendTo($(b)).html(e[f].title).css(e[f].color).css("width", 100 / e.length + "%");
        return b
    }),
    b.addComponent("2",
    function (a) {
        var b = document.createElement("div");
        return b.id = a.id,
        b.setAttribute("ctype", a.type),
        b.setAttribute("class", "element comp_paragraph editable-text"),
        a.content && (b.innerHTML = a.content),
        b.style.cursor = "default",
        b
    }),
    b.addComponent("3",
    function (a) {
        var c = document.getElementsByClassName("edit_area")[0];
        return "view" == b.mode && (c = document.getElementById("edit_area" + b.def.id)),
        c = $(c).parent()[0],
        a.properties.bgColor && (c.style.backgroundColor = a.properties.bgColor),
        a.properties.imgSrc && (c.style.backgroundImage = /^http.*/.test(a.properties.imgSrc) ? "url(" + a.properties.imgSrc + ")" : "url(" + PREFIX_FILE_HOST + "/" + a.properties.imgSrc + ")", c.style.backgroundOrigin = "element content-box", c.style.backgroundSize = "cover", c.style.backgroundPosition = "50% 50%"),
        c
    }),
    b.addComponent("4",
    function (a) {
        var b = document.createElement("img");
        return b.id = a.id,
        b.setAttribute("ctype", a.type),
        b.setAttribute("class", "element comp_image editable-image"),
        b.src = /^http.*/.test(a.properties.src) ? a.properties.src : PREFIX_FILE_HOST + a.properties.src,
        b
    }),
    b.addComponent("v",
    function (a) {
        var b = document.createElement("a");
        return b.setAttribute("class", "element video_area"),
        b.id = a.id,
        b.setAttribute("ctype", a.type),
        a.properties.src && b.setAttribute("videourl", a.properties.src),
        b
    }),
    b.addComponent("5",
    function (a) {
        var b = document.createElement("textarea");
        return b.id = a.id,
        b.setAttribute("ctype", a.type),
        b.setAttribute("class", "element comp_input editable-text"),
        a.properties.required && b.setAttribute("required", a.properties.required),
        a.properties.placeholder && b.setAttribute("placeholder", a.properties.placeholder),
        b.setAttribute("name", "eq[f_" + a.id + "]"),
        b.style.width = "100%",
        b
    }),
    b.addComponent("p",
    function (a) {
        var b = $('<div id="' + a.id + '" class="slide element" ctype="' + a.type + '"></div>'),
        c = $("<ul>").appendTo(b),
        d = $('<div class="dot">').appendTo(b);
        for (var e in a.properties.children) {
            var f = $('<img data-src="' + PREFIX_FILE_HOST + a.properties.children[e].src + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">'),
            g = $("<div>" + a.properties.children[e].desc + "</div>").css({
                position: "absolute",
                top: 160,
                height: 155,
                padding: 10,
                overflow: "hidden",
                "word-break": "break-all",
                "font-size": 14,
                "line-height": 1.5
            });
            c.append($("<li>").append(f).append(g)),
            d.append($("<span>"))
        }
        return INTERVAL_OBJ[a.id] && (clearInterval(INTERVAL_OBJ[a.id]), delete INTERVAL_OBJ[a.id]),
        b.swipeSlide({
            autoSwipe: a.properties.autoPlay,
            continuousScroll: !0,
            speed: a.properties.interval,
            transitionType: "cubic-bezier(0.22, 0.69, 0.72, 0.88)",
            lazyLoad: !0,
            width: 320
        },
        function (b, c) {
            d.children().eq(b).addClass("cur").siblings().removeClass("cur"),
            c && (INTERVAL_OBJ[a.id] = c)
        }),
        b.get(0)
    }),
    b.addComponent("6",
    function (a) {
        var b = document.createElement("button");
        if (b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_button editable-text"), a.properties.title) {
            var c = a.properties.title.replace(/ /g, "&nbsp;");
            b.innerHTML = c
        }
        return b.style.width = "100%",
        b
    }),
    b.addComponent("8",
    function (a) {
        var c = document.createElement("a");
        if (c.id = a.id, c.setAttribute("ctype", a.type), c.setAttribute("class", "element comp_anchor editable-text"), a.properties.title) {
            var d = a.properties.title.replace(/ /g, "&nbsp;");
            $(c).html(d),
            "view" == b.mode && $(c).attr("href", "tel:" + a.properties.number)
        }
        return c.style.cursor = "default",
        c.style.width = "100%",
        c
    }),
    b.addComponent("7",
    function (a) {
        var b = document.createElement("div");
        if (b.id = "map_" + a.id, b.setAttribute("class", "element comp_map_wrapper"), a.content && (b.textContent = a.content), a.css) {
            var c, d = a.css;
            for (c in d) b.style[c] = d[c]
        }
        return b.style.height = "250px",
        b
    }),
    b.bindAfterRenderEvent("1",
    function (a, c) {
        if (a = $("div", a)[0], "view" == b.mode && 1 == c.type) {
            var d = c.properties.labels;
            for (key in d) !
            function (b) {
                $($(a).find(".label_content")[b]).on("click",
                function () {
                    pageScroll(d[b])
                })
            }(key)
        }
    }),
    b.bindAfterRenderEvent("8",
    function (a, c) {
        a = $("a", a)[0];
        var d = {
            id: c.sceneId,
            num: c.properties.number
        };
        if ("view" == b.mode) {
            var e = function () {
                $.ajax({
                    cache: !0,
                    type: "POST",
                    url: PREFIX_URL + "eqs/dial",
                    data: $.param(d),
                    async: !1,
                    error: function () {
                        alert("Connection error")
                    },
                    success: function () { }
                })
            };
            a.addEventListener("click", e)
        }
    }),
    b.bindAfterRenderEvent("4",
    function (a, c) {
        "view" == b.mode && c.properties.url && $(a).click(function () {
            isNaN(c.properties.url) ? window.open(c.properties.url) : pageScroll(c.properties.url)
        })
    }),
    b.bindAfterRenderEvent("v",
    function (a, c) {
        "view" == b.mode && $(a).click(function () {
            console.log($(a).closest(".m-img")[0]),
            $(a).hide(),
            $("#audio_btn").hide(),
            $("#media")[0].pause(),
            $('<div class="video_mask" id="mask_' + c.id + '"></div>').appendTo($(a).closest(".m-img")),
            $('<a class = "close_mask" id="close_' + c.id + '"></a>').appendTo($(a).closest(".m-img")),
            $(c.properties.src).appendTo($("#mask_" + c.id)).attr("style", "position: absolute;top:0; min-height: 45%; max-height: 100%; top: 20%;").attr("width", "100%").removeAttr("height"),
            $("#close_" + c.id).bind("click",
            function () {
                $(a).show(),
                $("#mask_" + c.id).remove(),
                $("#close_" + c.id).remove(),
                $("#audio_btn").show(function () {
                    $(this).hasClass("off") || $("#media")[0].play()
                })
            })
        })
    }),
    b.bindAfterRenderEvent("2",
    function (a) {
        for (var c = $(a).find("a[data]"), d = 0; d < c.length; d++) if (c[d] && "view" == b.mode) {
            $(c[d]).css("color", "#428bca").css("cursor", "pointer");
            var e = $(c[d]).attr("data"); !
            function (a) {
                $(c[d]).click(function () {
                    pageScroll(a)
                })
            }(e)
        }
    }),
    b.bindAfterRenderEvent("6",
    function (a, c) {
        if (a = $("button", a)[0], "view" == b.mode) {
            var d = function () {
                var b = this,
                e = !0,
                f = $(a).parents("ul"),
                g = {};
                $("textarea", f).each(function () {
                    if (e) {
                        if ("required" == $(this).attr("required") && "" == $(this).val().trim()) return alert($(this).attr("placeholder") + "为必填项"),
                        void (e = !1);
                        if ("502" == $(this).attr("ctype")) {
                            var a = new RegExp(/(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/g);
                            if (!a.test($(this).val())) return alert("手机号码格式错误"),
                            void (e = !1)
                        }
                        if ("503" == $(this).attr("ctype")) {
                            var b = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g);
                            if (!b.test($(this).val())) return alert("邮箱格式错误"),
                            void (e = !1)
                        }
                        g[$(this).attr("name")] = $(this).val()
                    }
                }),
                e && $.ajax({
                    cache: !0,
                    type: "POST",
                    url: PREFIX_URL + "eqs/r/" + c.sceneId,
                    data: $.param(g),
                    async: !1,
                    error: function () {
                        alert("Connection error")
                    },
                    success: function () {
                        b.removeEventListener("click", d),
                        $(b).click(function () {
                            alert("请不要重复提交")
                        }),
                        alert("提交成功")
                    }
                })
            };
            a.addEventListener("click", d)
        }
    }),
    b.bindAfterRenderEvent("7",
    function (a, b) {
        var c = new BMap.Map("map_" + b.id, {
            enableMapClick: !1
        }),
        d = new BMap.Point(b.properties.x, b.properties.y),
        e = new BMap.Marker(d);
        c.addOverlay(e);
        var f = new BMap.Label(b.properties.markTitle, {
            offset: new BMap.Size(20, -10)
        });
        e.setLabel(f),
        c.disableDoubleClickZoom(),
        c.centerAndZoom(d, 15)
    })
}(window.eqShow);
var currentPage = null,
activePage = null,
triggerLoop = !0,
startX = 0,
startY = 0,
moveDistanceX = 0,
moveDistanceY = 0,
isStart = !1,
isNext = !1,
isFirstTime = !0,
theClass, scroll = !1,
isMobile = mobilecheck(),
App = function (a, b) {
    this._$app = a,
    this._$pages = this._$app.find(".main-page"),
    this.$currentPage = this._$pages.eq(0),
    this._isFirstShowPage = !0,
    this._isInitComplete = !1,
    this._isDisableFlipPage = !1,
    this._isDisableFlipPrevPage = !1,
    this._isDisableFlipNextPage = !1,
    this._scrollMode = b,
    theClass = this;
    var c = $(window);
    /* 拖动事件 */

    //!
    //function () {
    //    c.on("scroll.elasticity",
    //    function (a) {
    //        a.preventDefault()
    //    }).on("touchmove.elasticity",
    //    function (a) {
    //        a.preventDefault()
    //    }),
    //    c.delegate("img", "mousemove",
    //    function (a) {
    //        a.preventDefault()
    //    })
    //}(),
    //theClass._$app.on("mousedown touchstart",
    //function (a) {
    //    scrollStart(a)
    //}).on("mousemove touchmove",
    //function (a) {
    //    scrollMove(a)
    //}).on("mouseup touchend mouseleave",
    //function (a) {
    //    scrollEnd(a)
    //})

};

!
function ($) {
    function bindWeixin() {
        function a() {
            WeixinJSBridge.invoke("sendAppMessage", {
                appid: e,
                img_url: imgUrl,
                img_width: "200",
                img_height: "200",
                link: d,
                url: d,
                desc: descContent,
                title: shareTitle
            },
            function () { })
        }
        function b() {
            WeixinJSBridge.invoke("shareTimeline", {
                img_url: imgUrl,
                img_width: "200",
                img_height: "200",
                url: d,
                link: d,
                desc: descContent,
                title: shareTitle
            },
            function () { })
        }
        function c() {
            WeixinJSBridge.invoke("shareWeibo", {
                content: descContent,
                url: d
            },
            function () { })
        }
        imgUrl = "/images/previewbg.jpg",
        descContent = "",
        shareTitle = "";
        var d = window.location.href,
        e = "";
        document.addEventListener("WeixinJSBridgeReady",
        function () {
            WeixinJSBridge.on("menu:share:appmessage",
            function () {
                a()
            }),
            WeixinJSBridge.on("menu:share:timeline",
            function () {
                b()
            }),
            WeixinJSBridge.on("menu:share:weibo",
            function () {
                c()
            })
        },
        !1)
    }
    function addElmentsForPc(a) {

        var b = document.getElementsByTagName("head")[0],
        c = document.createElement("link");
        c.href = CLIENT_CDN + "/css/pcviewer.css",
        c.rel = "stylesheet";
        //b.appendChild(c), window != window.top ? $("body").css("background-image", "none") : ($(".phoneBox").css({}),
        //$("#con").before('<div id="code"><div>扫一扫，分享给朋友！</div><img id="codeImg" src="' + PREFIX_URL + "eqs/qrcode/" + a + '.png" width="240" alt=""/><div id="view_share" class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a></div><div id="view_reg">这么漂亮的场景&nbsp;→<span><a target="_blank" href="http://hooyes.com">我也来制作</a></span></div><div id="support">技术支持 BY <a target="_blank" href="http://hooyes.com"><img id="logoSmall" src="' + CLIENT_CDN + 'view/images/bg_small.png"/></a></div></div>'),
        //$(".p-index").wrap('<div class = "phone_panel"></div>'),
        //$('<div class = "ctrl_panel"></div>').appendTo($(".phone_panel")),
        //$('<a id = "pre_page" type = "button" class = "pre_btn btn" onclick = "prePage()">上一页</a>').prependTo($(".ctrl_panel")),
        //$('<a id = "next_page" type = "button" class = "next_btn btn" onclick = "nextPage()">下一页</a>').appendTo($(".ctrl_panel"));

    }
    function getRequestUrl() {
        var a;



        return preview ? a = PREFIX_URL + "m/scene/preview/" + sceneId : (a = PREFIX_URL + "eqs/s/" + sceneId, param && (a += "?1=1", a += /\?.*/.test(param) ? "&" + param.substring(1) : /\&.*/.test(param) ? param : "&" + param)),
        a += (/\?/.test(a) ? "&" : "?") + "time=" + (new Date).getTime()
    }

    function parseJson(a) {

        customLastPage || scalePage(); {
            new App($(".nr"), 0)
        }

        $("img").on("dragstart",
        function (a) {
            a.preventDefault()
        })
    }
    function bindShare(data) { }
    function appendLastPage(a, b) { }
    function scalePage() {
        var a, b, c = 1,
        d = $(".m-img").width(),
        e = $(".m-img").height();
        if (imageWidth = $(".m-img").width(), imageHeight = $(".m-img").height(), d / e >= 320 / 486 ? (c = e / 486, a = (d / c - 320) / 2) : (c = d / 320, b = (e / c - 486) / 2), b && $(".edit_area").css({
            marginTop: b
        }), a && $(".edit_area").css({
            marginLeft: a
        }), $("#eqMobileViewport").attr("content", "width=320, initial-scale=" + c + ", maximum-scale=" + c + ", user-scalable=no"), 320 != clientWidth && clientWidth == document.documentElement.clientWidth || isWeixin() && (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") > -1)) {
            var f = 320 / d,
            g = 486 / e,
            h = Math.max(f, g);
            h = h > 1 ? h : 160 * h,
            h = parseInt(h),
            $("#eqMobileViewport").attr("content", "width=320, target-densitydpi=" + h)
        }
    }
    var url, preview, pageMode, imageHeight, imageWidth, customLastPage = !1,
    scriptLoaded = {};
    url = /[http|https]:\/\/.*\/s\//.test(window.location.href) ? window.location.href.split("/s/")[1] : window.location.href.split("?sceneId=")[1];
    /* var sceneId = url.split("#")[0].split("&")[0].split("?")[0],
       param = url.split(sceneId)[1]; param.indexOf("preview=preview") > 0 && (preview = !0),
       isWeixin() && bindWeixin(), mobilecheck() || addElmentsForPc(sceneId);
       */
    isWeixin() && bindWeixin(),
    mobilecheck() || addElmentsForPc(sceneId);
    var sceneId = 0;
    var param = "";
    var requestUrl = getRequestUrl();

    parseJson("");

    var imgUrl, descContent, shareTitle
}(jQuery),
$(".main").show(),
$.easing.jswing = $.easing.swing;
