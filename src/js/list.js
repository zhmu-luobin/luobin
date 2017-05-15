require(['config'],function(){
	require(['jquery','common','gdszoom','fly'],function(a,b,c,d){
		console.log(a,b,c,d);
		//加入购物车
		var carlist = getCookie('carlist');
		carlist = carlist ? JSON.parse(carlist) : [];
		$('.btnAddCar').on('click',function(){
			var myCar = $('.icon-gouwu');
						
			var $currentLi = $(this).closest('.cen-right');


			// 点击添加按钮时，是添加还是修改数量
			var currentGUID =$currentLi.attr('data-guid');
					
			// cookie中是否存在当前商品
			var hasGoods = false;
			for(var i=0;i<carlist.length;i++){
					if(carlist[i].guid === currentGUID){
						hasGoods = true;

						// 如果当前商品已经存在cookie中，则商品数量+1
						carlist[i].qty++;
						break;
					}
			}

			if(!hasGoods){
					
					var goods = {
						guid:$currentLi.data('guid'),
						name:$currentLi.children('.name').text(),
						price:$currentLi.children('.prcie').text(),
						imgurl:$currentLi.children('.imgaddcar').attr("src"),
						qty:1
					};

					// 把当前商品信息写入carlist
					carlist.push(goods);
			}

			setCookie('carlist',JSON.stringify(carlist));
			
		});

	});
});
