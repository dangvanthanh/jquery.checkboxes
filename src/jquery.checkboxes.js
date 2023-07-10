/*
 * Checkboxes jQuery Plugin
 * Copyright (c) 2023 Dang Van Thanh
 * Version: 1.0.5
 * Source: git@github.com:dangvanthanh/jquery.checkboxes.git
 * Licensed under MIT
 */
;(function ($) {
  'use strict'

  $.fn.extend({
    checkboxes: function (options) {
      // Default option
      const defaults = {
        itemChild: '',
      }

      const option = $.extend(defaults, options)

      // Checked value function
      function checkedValue(element, bool) {
        return bool
          ? element.each(function () {
              $(this).prop('checked', true)
            })
          : element.each(function () {
              $(this).prop('checked', false)
            })
      }

      // Return checked or unchecked
      return this.each(function () {
        const $itemAll = $(this)
        const $itemChild = $(`input[name^=${option.itemChild}]`)

        // Checked all checkbox before parent checked load page
        if ($itemAll.is(':checked')) {
          checkedValue($itemChild, true)
        }

        // Checked all or unchecked checkbox when parent checkbox checked or unchecked
        $itemAll.change(function () {
          const $self = $(this)

          if ($self.is(':checked')) {
            checkedValue($itemChild, true)
          } else {
            checkedValue($itemChild, false)
          }
        })

        // Checked parent checkbox when all child checkbox checked
        $itemChild.change(function () {
          let flag = true

          if (!$itemChild.is(':checked')) {
            $itemAll.prop('checked', false)
          }

          $itemChild.each(function () {
            const $self = $(this)
            if (!$self.is(':checked')) {
              flag = false
              return
            }
          })

          $itemAll.prop('checked', flag)
        })
      })
    },
  })
})(jQuery)
