angular.module('app')
.directive('alertBox',function(){
	return{
		restrict:'A',
		templateUrl:'app/view/alert.html',
		controller:function($scope,$http,$rootScope,dataService){
			$scope.alertBox = true;
			$scope.num = 1;
			$scope.isGray = true;
			$scope.minJoin = true;
			$scope.minBuy = true;
			$scope.maxJoin = false;
			$scope.maxBuy = false;
			$scope.isAlert = function($index){	
				$scope.alertBox = false;
				$http.get('app/data/goodlist.json')
				.success(function(data){
					$scope.shoppings = data[$index];
				})
			}
			$scope.close = function(){
				$scope.alertBox = true;					
			}
			$scope.isSubtract = function(){
				$scope.num --;
				if($scope.num <= 1){
					$scope.num = 1;
					$scope.isGray = true;
				}
			}
			$scope.isNumAdd = function(){
				$scope.num ++;
				if($scope.num != 1){
					$scope.isGray = false;
				}
			}
			$scope.isAdd = function(){ 	
				var datas = new Object;
				datas.img = $scope.shoppings.img;
				datas.name = $scope.shoppings.name;
				datas.present = $scope.shoppings.present;
				datas.num = $scope.num;
				var obj = dataService.setObject('sql',datas);
				console.log(localStorage);
				var dataArr = new Array;
				dataArr.push(obj);
				$rootScope.dataArr = dataArr;
				console.log(obj);
			}
			$scope.isBuy = function(){
					
			}
		}
	}
})