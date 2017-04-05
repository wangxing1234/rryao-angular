angular.module('app')
.controller('goodlistCtrl',['$scope','$http',function($scope,$http){
	$http.get('app/data/rryao.json')
	.success(function(data){
		$scope.datas = data;
	})
	$http.get('app/data/goodlist.json')
	.success(function(data){
		$scope.goods = data;
	})
}])