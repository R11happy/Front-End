$(function () {
    // body...
    // $('div').click(function(event) {
    //     /* Act on the event */
    //     //event.pageX : 表示鼠标坐标的X
    //     //ev.which:keyCode
    //     //ev.preventDefault(); :阻止默认事件
    //     //ev.stopPropagation();
    //     //: 阻止冒泡操作
    //     //return false; //既阻止默认事件，又阻止冒泡操作

    // });



/*    $('div').one('click', function(event) {
         Act on the event
        alert(123);
        console.log('123');
    }); //只执行事件一次*/
    var left = $('#div2').offset().left;    //获取到屏幕的左距离
    var top = $('#div2').offset().top;
    console.log(left);
    console.log(top);
})
