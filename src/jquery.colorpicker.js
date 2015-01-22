/**
 *
 * jQuery - Color Picker
 * Author: Restu Suhendar www.aarestu.com
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */

 (function($) {
 	var ColorPicker = function() {
 		var default_opt = {
 			call_before : function() {},
 			call_after : function() {}
 		};

		return {
			init : function(opt) {
				opt = $.extend({}, default_opt, opt||{});
				
				opt.call_before();

				//TODO

				opt.call_after();
			}
		}
	}();

	$.fn.extend({
		colorPicker : ColorPicker.init
	});
})(jQuery);