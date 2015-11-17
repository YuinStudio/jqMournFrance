(function ($) {
    'use strict';
    var defaultOpt = {
        effect: 'hide',
        duration: 0,
        leaveTime: 3000
    }, idList = {};

    $.fn.jqmournfrance = function (options) {
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