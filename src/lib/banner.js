;(function($){
	$.fn.banner= function(){

            var curIndex = 0; //当前index
             //  alert(imgLen);
             // 定时器自动变换2.5秒每次
            var autoChange = setInterval(function(){ 
                show();
                //调用变换处理函数
                changeTo(curIndex); 
             },2500);
         
            $(".indexList").find("li").each(function(item){ 
                $(this).hover(function(){ 
                  clearInterval(autoChange);
                  changeTo(item);
                  curIndex = item;
                },function(){ 
                  autoChange = setInterval(function(){ 
                    if(curIndex < $(".imgList li").length-1){ 
                      curIndex ++; 
                    }else{ 
                      curIndex = 0;
                    }
                    //调用变换处理函数
                    changeTo(curIndex);

                  },2500);
                });
            });

            function show(){
                curIndex ++; 
                if(curIndex > $(".imgList li").length-1){ 
                      curIndex = 0;
                }else if(curIndex < 0 ){$(".imgList li").length-1}
              }

            function showleft(){
                curIndex --;
                if(curIndex == -1){ 
                  curIndex = $(".imgList li").length-1;
                }           
            }

            function changeTo(num){ 

                $(".imgList").find("li").hide().eq(num).fadeIn();
                $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
            }

            $('#banner').on('mouseover',function(){
                clearInterval(autoChange);
                $('.right').on('click',function(){
                    show();
                    $(".imgList li").eq(curIndex).show().siblings().hide();
                    $(".indexList").find("li").removeClass("indexOn").eq(curIndex).addClass("indexOn");
                })
                $('.left').on('click',function(){
                    showleft();
                    $(".imgList li").eq(curIndex).show().siblings().hide();
                    $(".indexList").find("li").removeClass("indexOn").eq(curIndex).addClass("indexOn");
                })
            })

          $('#banner').on('mouseleave',function(){
                autoChange = setInterval(function(){ 
                    show();
                    //调用变换处理函数
                    changeTo(curIndex); 
                 },2500);
          })

    }
})(jQuery);