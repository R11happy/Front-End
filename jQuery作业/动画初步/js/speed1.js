window.onload = function(){
    var oDiv = document.getElementById('div1');
    oDiv.onmouseover = function(){
        startMove(0);
    }
    oDiv.onmouseout = function(){
        startMove(-200);
    }
}

var timer = null;   //一个定时器

function startMove(iTarget){
    window.clearInterval(timer);    //每次进来前先清空
    var oDiv = document.getElementById('div1');
    timer = window.setInterval(function(){
        var speed = (iTarget - oDiv.offsetLeft)/20; //直接写会导致小数的情况，要向下取整
        speed = speed > 0?Math.ceil(speed):Math.floor(speed);
        console.log(oDiv.offsetLeft);
        if(oDiv.offsetLeft === iTarget)
        {
            window.clearInterval(timer);   //当图像完全显示出来就关掉定时器
        }
        else
        {
            oDiv.style.left = oDiv.offsetLeft+speed+'px'; //必须加else
        }
        },30);
}
