angular.module('app')
.controller('classifyCtrl',['$scope','$http',function($scope,$http){
	$http.get('app/data/classify.json')
	.success(function(data){
		$scope.datas = data;
	})
}])