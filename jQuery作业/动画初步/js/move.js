
// var timer = null;
// attr:属性
// fn:执行完之后接下来要执行的函数
function startMove(obj,iTarget,attr,fn)
{
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        // 1.取当前值
        var iCur = (attr != 'opacity'? parseInt(getStyle(obj,attr)) : Math.round(parseFloat(getStyle(obj,attr))*100));
        // 2.算速度
        var speed = (iTarget - (iCur))/8;
        speed = speed > 0? Math.ceil(speed):Math.floor(speed);
        console.log("iCur:"+iCur);
        console.log("speed"+speed);
        // 3.检测停止
        if(iCur  == iTarget)
        {
            clearInterval(obj.timer);
            if(fn)
            {
                fn();
            }
        }
        else
        {
            if(attr == 'opacity')
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
