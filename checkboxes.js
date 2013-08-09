/*
 * Checkboxes v1.0.2 - jQuery Plugin
 * https://github.com/dangvanthanh/checkboxes
 * Copyright (c) 2013 Dang Van Thanh
 * Licensed under MIT
 */
(function($) {

	'use strict';

	$.fn.extend({
		checkboxes: function(options) {
			// Default options
			var defaults = {
				itemSelect: ''
			};

			var option = $.extend(defaults, options);

			return this.each(function() {
				var obj = option;
				var $selectAll = $(this);
				var $itemCheckbox = $('input[name^="' + obj.itemSelect + '"]');

				// Checked All Checkboxes Before Load Page
				if ($selectAll.is(':checked')) {
					$itemCheckbox.each(function() {
							$(this).prop('checked', true);
					});
				}

				// Select All Checkboxes
				$selectAll.change(function() {
					var _self = $(this);

					if (_self.is(':checked')) {
						$itemCheckbox.each(function() {
							$(this).prop('checked', true);
						});
					} else {
						$itemCheckbox.each(function() {
							$(this).prop('checked', false);
						});
					}
				});

				// Unchecked checkboxes for all select
				$itemCheckbox.change(function() {
					var flag = true;
					var _self = $itemCheckbox;

					if (_self.is(':checked') === false) {
						$selectAll.prop('checked', false);
					}

					_self.each(function() {
						if ($(this).is(':checked') === false) {
							flag = false;
							return;
						}
					});

					$selectAll.prop('checked', flag);
				});
			});
		}
	});
})(jQuery);