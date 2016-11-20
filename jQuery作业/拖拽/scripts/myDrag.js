$(function () {
    // body...
    // 存鼠标距离元素的 左距离和上距离
    var disX = 0;
    var disY = 0;

    $('div').mousedown(function(event) {
        /* Act on the event */
        disX = event.pageX - $(this).offset().left;
        disY = event.pageY - $(this).offset().top;

        //给document加，不管怎么移动都不会脱离鼠标
        $(document).mousemove(function(event) {
            /* Act on the event */
            // 改变div的left和top值
            $('div').css('left', event.pageX - disX);
            $('div').css('top', event.pageY - disY);
        });
        // 当鼠标松开的时候，取消事件
        $(document).mouseup(function() {
            /* Act on the event */
            $(document).off();
        });

        return false;
    });
});


