!function(){var a=".mourn-france-main-box{position:relative}.mourn-france{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;opacity:.3}.mourn-france .cell{display:block;height:100%;float:left}.mourn-france .blue{background-color:#00f;width:33.33%}.mourn-france .white{background-color:#fff;width:33.34%}.mourn-france .red{background-color:red;width:33.33%}",b=document.createElement("style");b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),(document.head||document.getElementsByTagName("head")[0]).appendChild(b)}();
window.jQuery.mfTemplate = {};
    window.jQuery.mfTemplate = {"mournFrance":"<div class=\"mourn-france\"><div class=\"cell blue\"></div><div class=\"cell white\"></div><div class=\"cell red\"></div></div>"};
(function ($) {
    'use strict';
    $.fn.jqmournfrance = function (options) {
        // set default value
        var defaultOpt = {
            effect: 'hide',
            duration: 0,
            leaveTime: 3000
        };

        if (typeof options !== 'object') {
            options = {};
        }

        options = $.extend(defaultOpt, options);

        $.each(this, function () {
            var $this = $(this);
            $this.addClass('mourn-france-main-box').append(jQuery.mfTemplate.mournFrance);

            if (options.leaveTime > 0) {
                setTimeout(function () {
                    $this.find('> .mourn-france')[options.effect](options.duration, function () {
                        $(this).remove();
                    });
                    $this.removeClass('mourn-france-main-box');
                }, options.leaveTime);
            }

        });
    };
})(jQuery);