/**
 * jquery-toast
 */
;(function($) {
    $.extend({
        toast: function(txt, opt) {
            var toastEl = $('#mToast');
            option = $.extend({
                timeout: 3000,
                transitionTime: 800,
                cls:'mtoast'
            }, opt);
            if (toastEl.size() > 0) {
                clearTimeout(toastEl.data('timer'))
                toastEl.remove();
            }
            toastEl = $('<div id="mToast" class="'+ option.cls +'" style="position: fixed;bottom: 40%;left: 5%;right: 5%;text-align: center;z-index: 999999;pointer-events: none;"><span style="display: inline-block;box-sizing: border-box;background-color: rgba(0,0,0,.5);color: #fff;padding: 5px 8px;max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + txt + '</span></div>');
            $('body').append(toastEl);
            toastEl.fadeIn(option.transitionTime);
            toastEl.data('timer', setTimeout(function() {
                toastEl.fadeOut(option.transitionTime, function() {
                    toastEl.remove();
                });
            }, option.timeout));
        }
    })
})(jQuery);
