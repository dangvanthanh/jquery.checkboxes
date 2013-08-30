/*
* Checkboxes jQuery Plugin
* Copyright (c) 2013 Dang Van Thanh
* Version: 1.0.4
* Source: git@github.com:dangvanthanh/jquery.checkboxes.git
 *Licensed under MIT 
*/
(function($) {

	'use strict';

	$.fn.extend({
		checkboxes: function(options) {
			// Default option
			var defaults = {
				itemChild: ''
			};

			var option = $.extend(defaults, options);

			// Checked value function
			function checkedValue(element, bool) {
				if (bool) {
					return element.each(function() {
						$(this).prop('checked', true);
					});
				} else {
					return element.each(function() {
						$(this).prop('checked', false);
					});
				}
			}

			// Return checked or unchecked
			return this.each(function() {
				var obj = option,
						$itemAll = $(this),
						$itemChild = $('input[name^="' + obj.itemChild + '"]');

				// Checked all checkbox before parent checked load page
				if ($itemAll.is(':checked')) {
					checkedValue($itemChild, true);
				}

				// Checked all or unchecked checkbox when parent checkbox checked or unchecked
				$itemAll.change(function() {
					var $self = $(this);

					if ($self.is(':checked')) {
						checkedValue($itemChild, true);
					} else {
						checkedValue($itemChild, false);
					}
				});

				// Checked parent checkbox when all child checkbox checked
				$itemChild.change(function() {
					var flag = true;

					if (!$itemChild.is(':checked')) {
						$itemAll.prop('checked', false);
					}

					$itemChild.each(function() {
						var $self = $(this);
						if (!$self.is(':checked')) {
							flag = false;
							return;
						}
					});

					$itemAll.prop('checked', flag);
				});
				
			});
		}
	});
})(jQuery);