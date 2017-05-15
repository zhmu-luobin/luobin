require(['config'],function(){
	require(['jquery','common'],function(){
		var $myYt = $('.myYt');
		var $myLo = $('.myLo');
		var $yinTi = $('.yinTi');
		$('.list').hide();
		$('.list').on('mouseleave',function(){$('.list').hide();});

		$('.fenlei').on('mouseenter',function(){$('.list').show()})
		$('.fenlei').on('mouseleave',function(){$('.list').hide()})
		$yinTi.on('mouseenter',function(){
				$myYt.show();
				$yinTi.css({'backgroundColor':'white','z-index':99});

		})
		$yinTi.on('mouseleave', function(){
				$myYt.hide();
				$yinTi.css({backgroundColor:'#D6D6D6'});				
		})

		$('.fenlei .list').on('mouseenter','>li',function(){
			$(this).css({backgroundColor:'#FE044C'});
			$(this).children('span').hide();
			$(this).children('.juti').show(500);
			$(this).siblings().children('.juti').hide();
		})

		$('.fenlei .list').on('mouseleave','>li',function(){
			$(this).css({backgroundColor:'#333333'});
			$(this).children('span').show();
			$(this).children('.juti').hide();
		})

		$('#fix-right li').on('mouseenter','>a',function(){
			$(this).css({backgroundColor:'#FE044C'});
			$(this).children('i').hide();
			$(this).children('p').show();
		})

		$('#fix-right li').on('mouseleave','>a',function(){
			$(this).css({backgroundColor:'#ccc'});
			$(this).children('p').hide();
			$(this).children('i').show();
		})

		$(window).scroll(function() {
			if($(window).scrollTop() >= $('#banner').height()){
				$('#fix-right').css({'display':'block'});
			}else{$('#fix-right').css({'display':'none'});}
		})

	});
});