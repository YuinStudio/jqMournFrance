"use strict";
(function ($) {
    $.fn.jqmournfrance = function () {
        $.each(this, function () {
            var $this = $(this);
            $this.addClass('mourn-france-main-box').append(jQuery.mfTemplate.mournFrance);
        });

    };
})(jQuery);