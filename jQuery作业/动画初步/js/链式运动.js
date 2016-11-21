window.onload = function(){
    var Li1 = document.getElementById("li1");
    Li1.onmouseover = function(){
        // var _this = this; 用_this也可以
        startMove(Li1, 400, "width", function(){
            startMove(Li1,200,"height", function(){
                startMove(Li1,100,"opacity");
            });
        }); //注意这里不能用this，因为第二个this指的是函数，不是当前的li了
    };
    Li1.onmouseout = function(){
        // var Li1 = this;
        startMove(Li1, 30, "opacity", function(){
            startMove(Li1, 100, "height", function(){
                startMove(Li1, 200, "width");
            });
        });
    };
}
