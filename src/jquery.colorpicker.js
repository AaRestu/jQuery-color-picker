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
 			selector : '',
 			call_before : function() {},
 			call_after : function() {},
 			call_on_ready :  function() {}
 		},
 		fix_style = function() {
 		},
 		generateElement = function(opt) {
 			var element = $('<div>', {
 				class : 'colorpicker',
 				html : $('<div>', {
 					class : 'picker_color',
 					html : $('<div>', {
 						class : 'colorpicker_right',
 						html : $('<div>', {
 							class : 'colorpicker_bottom', 
 							html : $('<div>', {
 								class : 'colorpicker-circle-out',
 								html : $('<div>', {
 									class : 'colorpicker-circle'
 								})
 							})
 						})
 					})
 				})
 			}).append($('<div>', {
				class : 'picker_hue'
			}));


 			//put on selector
 			$(opt.selector).html(element);
 		},
 		init_event = function(opt) {
 			//TODO

 			$(opt.selector + " .picker_color").click(function(e) {
 				var x = e.pageX - $(this).offset().left;
				var y = e.pageY - $(this).offset().top;

				$(opt.selector + " .colorpicker-circle").css({'left' : x + 'px', 'top' : y + 'px'});
 			});
 		},
 		call_on_ready = function(func, opt) {
 			$(document).ready(function() {
 				opt.call_before();

				generateElement(opt);

				init_event(opt);

				fix_style();
				if(typeof(func) == 'function') {
					func();
				}

				opt.call_after();
			});
 		};

		return {
			init : function(opt) {
				opt = $.extend({}, default_opt, opt||{});
				opt.selector = this.selector;

				call_on_ready(opt.call_on_ready, opt);

				
			}
		}
	}();

	$.fn.extend({
		colorPicker : ColorPicker.init
	});
})(jQuery);