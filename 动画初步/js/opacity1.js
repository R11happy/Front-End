window.onload = function(){
    var oDiv = document.getElementsByTagName("div");
    for(var i = 0; i<oDiv.length; i++)
    {
        oDiv[i].timer = null;
        oDiv[i].alpha = 30;
        oDiv[i].onmouseover = function(){
            startMove(this,100);
        }
        oDiv[i].onmouseout = function(){
            startMove(this,30);
        }
    }
}

// var timer = null;
// var alpha = 30;
function startMove(obj,iTarget)
{
    clearInterval(obj.timer);
    // var oDiv = document.getElementById("div1");
    obj.timer = setInterval(function(){
        var speed = obj.alpha > iTarget? -10:10;
        if(obj.alpha == iTarget)    clearInterval(obj.timer);
        else
        {
            obj.alpha += speed;
            obj.style.filter = "obj.alpha(opacity:"+obj.alpha+")";  //IE中
            obj.style.opacity = obj.alpha/100; //火狐+Chrome


        }
    },30);
}
