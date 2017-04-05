angular.module('app')
.controller('mineCtrl',['$scope','$http',function($scope,$http){
	$http.get('app/data/mine.json')
	.success(function(data){
		$scope.datas = data;
	})
}])