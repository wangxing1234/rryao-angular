angular.module('app')
.factory('dataService',['$window',function($window){
	return {
		//存储单个属性
		set:function(key,value){
			$window.localStorage[key] = value;
		},
		//读取单个属性
		get:function(key,defaultValue){
			return $window.localStorage[key] || defaultValue;
		},
		//存储对象,以json格式存储
		setObject:function(key,value){
			$window.localStorage[key] = JSON.stringify(value)
		},
		//读取对象
		getObject:function(key){
			return JSON.parse($window.localStorage[key] || '{}')
		},
		//删除单个属性
		removeItem:function(key){
			$window.localStorage.removeItem(key);	
		},
		//删除所有信息
		clean:function(){
			$window.localStorage.clean();
		}
	}
}])