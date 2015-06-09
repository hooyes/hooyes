/*
 * Lazy Load - jQuery plugin for lazy loading table's background attribute
 * jquery的lazyload插件修改版
 *
 */
(function($) {

    $.fn.tablebglazyload = function(options) {
        var settings = {
            threshold    : 0,
            failurelimit : 0,
            event        : "scroll",
            effect       : "show",
            container    : window
        };
                
        if(options) {
            $.extend(settings, options);
        }

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        var elements = this;
        if ("scroll" == settings.event) {
            $(settings.container).bind("scroll", function(event) {
                
                var counter = 0;
                elements.each(function() {
                    if ($.abovethetop(this, settings) ||
                        $.leftofbegin(this, settings)) {
                            /* Nothing. */
                    } else if (!$.belowthefold(this, settings) &&
                        !$.rightoffold(this, settings)) {
                            $(this).trigger("appear");
                    } else {
                        if (counter++ > settings.failurelimit) {
                            return false;
                        }
                    }
                });
                /* Remove image from array so it is not looped next time. */
                var temp = $.grep(elements, function(element) {
                    return !element.loaded;
                });
                elements = $(temp);
            });
        }
        
        this.each(function() {
            var self = this;
            
            /* Save realbg only if it is not defined in HTML. */
            if (undefined == $(self).attr("realbg")) {
                $(self).attr("realbg", $(self).attr("background"));     
            }

            if ("scroll" != settings.event || 
                    undefined == $(self).attr("background") || 
                    settings.placeholder == $(self).attr("background") || 
                    ($.abovethetop(self, settings) ||
                     $.leftofbegin(self, settings) || 
                     $.belowthefold(self, settings) || 
                     $.rightoffold(self, settings) )) {
                        
                if (settings.placeholder) {
                    $(self).attr("background", settings.placeholder);      
                } else {
                    $(self).removeAttr("background");
                }
				//table的加载与否不需要判断，所以这两处“ self.loaded = false;”注释掉，并统一设置为“self.loaded = false;”
                //self.loaded = false;
            } /*else {
                self.loaded = true;
            }*/
            self.loaded = false;
			
            /* When appear is triggered load realbg image. */
			/*第92行修改：.removeAttr("realbg")*/
            $(self).one("appear", function() {
                if (!this.loaded) {
                    //$("<table />") .bind("load", function() {
                            $(self)
                                .hide()
                                .attr("background", $(self).attr("realbg"))
                                [settings.effect](settings.effectspeed).removeAttr("realbg") ;
                            self.loaded = true;
                       // })
                        $("<table />").attr("background", $(self).attr("realbg"));
                };
            });

            /* When wanted event is triggered load realbg image */
            /* by triggering appear.                              */
            if ("scroll" != settings.event) {
                $(self).bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $(self).trigger("appear");
                    }
                });
            }
        });
        
        /* Force initial check if images should appear. */
        $(settings.container).trigger(settings.event);
        
        return this;

    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window})

    $.belowthefold = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    }; */
    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something()

    $.extend($.expr[':'], {
        "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
    }); */
    
})(jQuery);
