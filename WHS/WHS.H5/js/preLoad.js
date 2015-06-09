
var _prelist = [];
_prelist.push("/images/i6/bg_center.png");
_prelist.push("/images/i6/bg_t_center.png");
_prelist.push("/images/i6/dt1.png");
_prelist.push("/images/i6/dt2.png");
_prelist.push("/images/i6/false_active.png");
_prelist.push("/images/i6/false_def.png");
_prelist.push("/images/i6/true_active.png");
_prelist.push("/images/i6/true_def.png");
_prelist.push("/images/i6/li_active.png");
_prelist.push("/images/i6/li_def.png");
_prelist.push("/images/i6/xyt.png");
_prelist.push("/images/i6/xyt2.png");
_prelist.push("/images/i6/wc.png");
_prelist.push("/images/i6/wc_2.png");
_prelist.push("/images/i6/close1.png");

// topimages
for (var i = 1; i < 8; i++) {
    _prelist.push("/images/top/" + i + ".png");
}

for (var i = 0; i < _prelist.length; i++) {
    new Image().src = _prelist[i];
}

$("#loading").fadeOut();