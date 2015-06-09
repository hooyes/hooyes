/// <reference path="jquery-1.8.2.min.js" />
// Author: hooyes 
// Date: 2015-05-19
$(function () {
    $(".app-edit").append("<div onclick='app_edit()' class='edit'>Edit</div>");
});

function app_edit() {
    alert("Hey,调用桥,来修改这个模块");
}