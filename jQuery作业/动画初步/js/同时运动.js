window.onload = function(){
    var oLi = document.getElementById("li1");
    oLi.onmouseover = function(){
        startMove(oLi, {width:400, height:200, opacity:100});
    };
    oLi.onmouseout = function(){
        startMove(oLi, {width:200, height:100, opacity:30});
    };
};


