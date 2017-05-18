(function ($, undefined) {
    'use strict';
    var defaults = {
        /* here default option */
    };

    $.fn.thumselect = function () {
	
		//Mouse click able selected
	       $(this).find(".thumb-item").on('click', function (e) {
				$(this).addClass("selected").siblings().removeClass("selected");
			});
			
    };
}(jQuery));
