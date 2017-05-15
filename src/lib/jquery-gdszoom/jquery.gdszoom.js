;(function($){
	$.fn.gdszoom = function(options){
		var defaults = {
			//大图的位置
			//position:'bottom',

			//大图与小图的间距
			gap:10,

			//放大区域的大小
			// width:500,
			// height:400
		}
		// 遍历jquery对象
		return this.each(function(){
			// 扩展默认值
			var opt = $.extend({},defaults,options);

			var $zoom = $(this).addClass('gds-zoom');
            var $smallPic = $zoom.children('img');

            // 全局变量

            // 放大镜
            var $minZoom;

            // 大图显示区域
            var $bigZoom;

            // 大图
            var $bigPic;

            // 大图与小图的比率
            var ratio;

            // 初始化
            // 创建放大镜
            // 并写入.zoom
            $minZoom = $('<span/>').addClass('minzoom');
            $zoom.append($minZoom);

            // 创建大图
            $bigZoom = $('<div/>').addClass('gds-bigzoom');
            $bigPic = $('<img/>');
            $bigPic.attr('src',$smallPic.attr('data-big'));
            $bigZoom.append($bigPic);

            // 设置样式
            $bigZoom.css({
            	width:opt.width,
            	height:opt.height
            });

            if(opt.position === 'right'){
            	$bigZoom.css({
            		left:$smallPic.offset().left + $smallPic.outerWidth() + opt.gap,
            		top:$smallPic.offset().top
            	});
            }else if(opt.position === 'left'){
            	$bigZoom.css({
            		left:$smallPic.offset().left - $bigZoom.outerWidth() - opt.gap,
            		top:$smallPic.offset().top
            	});
            }

            // $('body').append($bigZoom);
            $bigZoom.appendTo('body');


            // 2）鼠标移入小图
            $zoom.on('mouseenter',function(){
            	$bigPic.attr('src',$smallPic.attr('data-big'));

            	$bigZoom.show();
            	$minZoom.show();

				ratio = $bigPic.width()/$smallPic.width();

				// 改变放大镜的宽高
				$minZoom.css({
					width:$bigZoom.outerWidth()/ratio*0.8,
					height:$bigZoom.outerHeight()/ratio*0.8
				});
            });

            // 3）鼠标移动
            $zoom.on('mousemove',function(e){
            	 // 计算移动的距离
                var left = e.clientX - $zoom.offset().left - $minZoom.outerWidth()/2;
                var top = e.clientY - $zoom.offset().top + $(window).scrollTop() - $minZoom.outerHeight()/2;

                // 放置移出小图之外的区域
                if(left<0){
                    left = 0;
                }else if(left > $smallPic.outerWidth() - $minZoom.outerWidth()){
                    left = $smallPic.outerWidth() - $minZoom.outerWidth()
                }

                if(top<0){
                    top = 0;
                }else if(top>$smallPic.outerHeight() - $minZoom.outerHeight()){
                    top = $smallPic.outerHeight() - $minZoom.outerHeight();
                }

                // 放大镜跟随效果
                $minZoom.css({
                	left:left,
                	top:top
                });

                // 显示大图对应区域
                $bigPic.css({
                	left:-left*ratio,
                	top:-top*ratio
                });

            });

            // 4）鼠标离开小图
            $zoom.on('mouseleave',function(){
            	$bigZoom.hide();
            	$minZoom.hide();
            });
		});
	}
})(jQuery);

// ;(function(){ 
//         $.fn.zoom = function(object){ 
//                 this.zoomArea=$(".zoom",object);//保存促发放大效果的区域 
//                 this.moveArea=$(".move",object);//保存移动区域 
//                 this.zoomDetail=$(".zoomDetail",object);//保存放大镜区域 
//                 this.zoomDetailImg=$("img",this.zoomDetail);//保存放大镜里面的图 
//                 this.zoomAreaWidth=this.zoomArea.width(); 
//                 this.moveAreaWidth=this.moveArea.width(); 
//                 this.zoomAreaHeight=this.zoomArea.height(); 
//                 this.moveAreaHeight=this.moveArea.height(); 
//                 this.zoomDetailWidth=this.zoomDetail.width(); 
//                 this.zoomDetailHeight=this.zoomDetail.height(); 
//                 this.zoomAreaOffset=this.zoomArea.offset();//初始化放大区域在视口中的相对偏移; 
//                 this.XY=null;//初始化鼠标相对于放大区域的偏移偏移值 
//                 this.moveBili=null;// 
//                 var _this_=this; 
//                 this.zoomArea.mousemove(function(e){//当鼠标在放大区域移动的时候执行 
//                                                  _this_.move(e.pageX,e.pageY);    
//                                         }).mouseover(function(){ 
//                                             _this_.moveArea.show(); 
//                                             _this_.zoomDetail.show(); 
//                                             }).mouseout(function(){ 
//                                                 _this_.moveArea.hide(); 
//                                                 _this_.zoomDetail.hide();                                                
//                                                 }); 
//                 this.calculate();//初始化并计算出需要的比例值 
//                 //以下是小图部分的功能实现 
//                 this.l=0; 
//                 this.scrollObj=$(".slideMain ul",object);//保存ul滚动对象 
//                 this.lis=this.scrollObj.children();//保存小图片列表 
//                 this.btnR=$(".btnR",object);//保存右边按钮 
//                 this.btnL=$(".btnL",object);//保存左边边按钮 
//                 this.lis.click(function(){ 
//                                         _this_.changeImgSrc(this); 
//                                         }); 
//                 if(this.lis.length>6){//判断图片数是否超出显示区域，是的话就注册滚动事件 
//                     this.s=this.lis.length-6;//获取多余出来的图片数 
//                     this.scrollObj.width(60*this.lis.length+"px");//当图片数超出默认值时，设置ul的宽度 
//                     this.btnL.click(function(){_this_.scrollRight();}).mouseover(function(){$(this).addClass("hover")}).mouseout(function(){$(this).removeClass("hover");}); 
//                     this.btnR.click(function(){_this_.scrollLeft();}).mouseover(function(){$(this).addClass("hover")}).mouseout(function(){$(this).removeClass("hover");});; 
//                 } 
//               }; 
//         Zoom.prototype={ 
//             scrollLeft:function(){ 
//                 if(Math.abs(this.l)==this.s){return}; 
//                 this.l--; 
//                 this.scrollObj.animate({left:this.l*58+"px"},"fast");    
//                 }, 
//             scrollRight:function(){ 
//                 if(this.l==0){return}; 
//                 this.l++; 
//                 this.scrollObj.animate({left:this.l*58+"px"},"fast"); 
//                 }, 
//             changeImgSrc:function(o){ 
//                 //改变标识样式 
//                 $(o).addClass("selected").siblings().removeClass("selected"); 
//                 this.zoomArea.find("img").attr("src",$(o).find("img").attr("medium-img")); 
//                 this.zoomDetailImg.attr("src",$(o).find("img").attr("medium-img")); 

//                 }, 
//             move:function(x,y){//鼠标在放大区域移动的时候执行的函数 
//                     this.XY=this.mousePosAndSetPos(x,y);//计算出鼠标相对于放大区域的x,y值 
//                     //设置滑块的位置 
//                     this.moveArea.css({ 
//                                       left:this.XY.offsetX+"px", 
//                                       top:this.XY.offsetY+"px"
//                                       }); 
//                     //设置大图在细节位置 
//                     this.zoomDetailImg.css({ 
//                                            marginLeft:-this.XY.offsetX*this.moveBili+"px", 
//                                            marginTop:-this.XY.offsetY*this.moveBili+"px"
//                                            }); 
//                 }, 
//             mousePosAndSetPos:function(x,y){//实时计算并设置滑块的位置 
//                 x=x-this.zoomAreaOffset.left-this.moveArea.width()/2; 
//                 y=y-this.zoomAreaOffset.top-this.moveArea.height()/2; 
//                 x=x<0?0:x; 
//                 y=y<0?0:y; 
//                 x=x>(this.zoomAreaWidth-this.moveAreaWidth)?this.zoomAreaWidth-this.moveAreaWidth:x; 
//                 y=y>(this.zoomAreaHeight-this.moveAreaHeight)?this.zoomAreaHeight-this.moveAreaHeight:y; 
//                 return { 
//                         offsetX:x, 
//                         offsetY:y 
//                         };   
//                 }, 
//             calculate:function(){//计算函数 
//                     var widthBili,heightBili; 
//                     //计算移动的滑块与放大镜铺面显示的比例宽高 
//                     widthBili=(this.zoomAreaWidth*this.zoomDetailWidth)/this.moveAreaWidth; 
//                     heightBili=(this.zoomAreaHeight*this.zoomDetailHeight)/this.moveAreaHeight; 
//                     //把比出来的宽高 
//                     this.zoomDetailImg.css({width:widthBili+"px",height:heightBili+"px"}); 
//                     //返回移动的比例 
//                     this.moveBili=(widthBili-this.zoomDetailWidth)/(this.zoomAreaWidth-this.moveAreaWidth); 
//                 } 
//             }; 
//           var zoom=new Zoom($(".ZoomMain").eq(0));     
// })();
// 
// 

//获取放大容器

function GetViewPanel() {

    var panel = document.getElementById(zoomerViewPanelId);

    if (panel == null) {

        panel = document.createElement("div");

        panel.id = zoomerViewPanelId;

        document.body.appendChild(panel);

    }

    return panel;

}

//显示放大器

function ShowViewPanel(left, top) {

    var panel = GetViewPanel();

    panel.style.left = (left + 10) + "px";

    panel.style.top = top + "px";

    panel.style.display = "block";

    panel.className = "loading";

    return panel;

}

//隐藏放大容器

function HideViewPanel() {

    var panel = document.getElementById(zoomerViewPanelId);

    if (panel != null) {

        panel.style.display = "none";

    }

}

//获取对象高度

function GetHeight(ele) {

    var paddingTop = parseInt(ele.style.paddingTop);

    if (!paddingTop) {

        paddingTop = 0;

    }

    var paddingBottom = parseInt(ele.style.paddingBottom);

    if (!paddingBottom) {

        paddingBottom = 0;

    }

    return ele.clientHeight - paddingTop - paddingBottom;

}

//获取对象宽度

function GetWidth(ele) {

    var paddingLeft = parseInt(ele.style.paddingLeft);

    if (!paddingLeft) {

        paddingLeft = 0;

    }

    var paddingRight = parseInt(ele.style.paddingRight);

    if (!paddingRight) {

        paddingRight = 0;

    }

    return ele.clientWidth - paddingLeft - paddingRight;

}

//获取对象坐标

function GetAbsolutePosition(ele) {

    var rect = ele.getBoundingClientRect();

    var padding = GetPadding(ele);

    var border = GetBorder(ele);

    var position = {};

    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    position.left = rect.left + padding.left + border.left + scrollLeft;

    position.top = rect.top + padding.top + border.top + scrollTop;

    position.bottom = rect.bottom - padding.bottom - border.bottom + scrollTop;

    position.right = rect.right - padding.right - border.right + scrollLeft;

    return position;

}

//获取对象4个边距

function GetPadding(ele) {

    var padding = {};

    padding.top = parseInt(ele.style.paddingTop);

    if (!padding.top) {

        padding.top = 0;

    }

    padding.bottom = parseInt(ele.style.paddingBottom);

    if (!padding.bottom) {

        padding.bottom = 0;

    }

    padding.left = parseInt(ele.style.paddingLeft);

    if (!padding.left) {

        padding.left = 0;

    }

    padding.right = parseInt(ele.style.paddingRight);

    if (!padding.right) {

        padding.right = 0;

    }

    return padding;

}

//获取对象4个边框

function GetBorder(ele) {

    var border = {};

    border.top = parseInt(ele.style.borderTop);

    if (!border.top) {

        border.top = 0;

    }

    border.bottom = parseInt(ele.style.borderBottom);

    if (!border.bottom) {

        border.bottom = 0;

    }

    border.left = parseInt(ele.style.borderLeft);

    if (!border.left) {

        border.left = 0;

    }

    border.right = parseInt(ele.style.borderRight);

    if (!border.right) {

        border.right = 0;

    }

    return border;

}
