
// var timer = null;
// attr:属性
// fn:执行完之后接下来要执行的函数
function startMove(obj,Json,fn)
{
    var flag = true;    //假设所有运动都到达目标值
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        for(var attr in Json)
        {
            // 1.取当前值
            var iCur = (attr != 'opacity'? parseInt(getStyle(obj,attr)) : Math.round(parseFloat(getStyle(obj,attr))*100));
            // 2.算速度
            var speed = (Json[attr] - (iCur))/8;
            speed = speed > 0? Math.ceil(speed):Math.floor(speed);
            console.log("iCur:"+iCur);
            console.log("speed"+speed);
            //有一个属性没有到达目标值，就false
            if(iCur  != Json[attr])
            {
                flag = false;
            }

            if(attr == 'opacity')
            {
                obj.style.filter ="alpha(opacity:"+(iCur+speed)+")";
                obj.style.opacity = (iCur+speed)/100;
            }
            // obj.style.attr = iCur + speed +'px'; 不行
            else obj.style[attr] = iCur + speed +'px';

        }
        // 3.检测停止
        if (flag)
        {
            clearInterval(obj.timer);
            if(fn)
            {
                fn();
            }
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
