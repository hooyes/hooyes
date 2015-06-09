/// <reference path="jquery.min.js" />
function LoadProductHTML() {
    $("#globalproductList").load("/nav-product.html");
}

$(function () {
    LoadProductHTML();
});