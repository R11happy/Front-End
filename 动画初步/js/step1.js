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
    var speed = oDiv.offsetLeft > iTarget? -10 : 10;
    timer = window.setInterval(function(){
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
