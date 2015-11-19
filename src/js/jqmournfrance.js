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

            /*
            * if target is 'body' tag, set height to document
            * */
            if ('BODY' === $this[0].tagName) {
                $this.find('> .mourn-france').css('height', $(document).height());
            }

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