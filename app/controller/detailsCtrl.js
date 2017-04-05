angular.module('app')
.controller('detailsCtrl',['$scope','$http','$routeParams','$rootScope',function($scope,$http,$routeParams,$rootScope){
	$http.get('app/data/goodlist.json')
	.success(function(data){
		var i = $routeParams.goodId-1;
		$scope.goods = data[i]
	}),
	$scope.current = 1,
	$scope.setCurrent = function(param){
		$scope.current = param;
	}
	$scope.isAdd = function(){
		console.log($rootScope.dataArr)
	}
}])