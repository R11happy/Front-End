$(function() {
    // 注意是加单引号
    // mouseenter:鼠标移入
    // $('#move a').mouseenter(function() {
    //     /*图标移动向上运动*/
    //     $(this).find('i').animate({top:"-25px", opacity:"0"},300,function(){
    //         接着调用回调函数，先把图标放下面
    //         $(this).css({top:"30px"});
    //         /*再让图标从下移动到原来的位置*/
    //         $(this).animate({top:"20px", opacity:"1"},200);
    //     });
    // });

    /*点击事件*/
    $('#start').click(function() {
        /* Act on the event */
        var curWidth = $('.jquery-completed').width();
        var difference = 395 - parseInt(curWidth);
        var timeInterVal = difference * 100;
        console.log('time'+timeInterVal);
        $('.jquery-completed').animate({
            width: 395},
            timeInterVal, function() {
                /* stuff to do after animation is complete */
                $(this).css({
                    width: '0',
                });
        });
        $('.jquery-jslider').animate({
            left: 395},
            timeInterVal, function() {
                /* stuff to do after animation is complete */
                $(this).css({
                    left: '0',
                });
        });
    });

    $('#pause').click(function() {
        $('.defaultbar div').stop(true);
        console.log('stop');
    });
});


