angular.module('app')
.directive('bannerList',function(){
	return{
		restrict:'A',
		link:function($scope,elem,attrs){;
			$(elem).swiper({
				loop: true,
				autoplay: 2000,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplayDisableOnInteraction: false,
				observer:true,
				observerParents:true
			})
		}
	}
})