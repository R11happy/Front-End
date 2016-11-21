window.onload = function()
{
    var Li1 = document.getElementById("li1");
    var Li2 = document.getElementById("li2");
    var Li3 = document.getElementById("li3");
    Li1.onmouseover = function(){
        startMove(this,400,'height');
    }
    Li1.onmouseout = function(){
        startMove(this,100,'height');
    }
    Li2.onmouseover = function(){
        startMove(this,400,'width');
    }
    Li2.onmouseout = function(){
        startMove(this,200,'width');
    }
    Li3.onmouseover = function(){
        startMove(this,100,'opacity');
    }
    Li3.onmouseout = function(){
        startMove(this,30,'opacity');
    }
}

// var timer = null;
function startMove(obj,iTarget,attr)
{
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        // 1.取当前值
        var iCur = attr != 'opacity'? parseInt(getStyle(obj,attr)) : Math.round(parseFloat(getStyle(obj,attr))*100);
        // 2.算速度
        var speed = (iTarget - (iCur))/8;
        speed = speed > 0? Math.ceil(speed):Math.floor(speed);
        console.log("iCur:"+iCur);
        console.log("speed"+speed);
        // 3.检测停止
        if(iCur  === iTarget) clearInterval(obj.timer);
        else
        {
            if(attr === 'opacity')
            {
                obj.style.filter ="alpha(opacity:"+(iCur+speed)+")";
                obj.style.opacity = (iCur+speed)/100;
            }
            // obj.style.attr = iCur + speed +'px'; 不行
            else obj.style[attr] = iCur + speed +'px';
        }
    },30);
}


/*getStyle函数用于获取样式*/
function getStyle(obj,attr)
{
    if(obj.currentStyle)    //针对IE
    {
        return obj.currentStyle[attr];
    }
    else return getComputedStyle(obj,false)[attr];  //针对Firefox
}
