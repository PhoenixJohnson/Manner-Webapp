var mannerControllers=angular.module('mannerControllers',[]);

mannerControllers.controller('demoCtrl',['$scope','Items','Users',function($scope, Items,Users){
	$scope.items =Items.query();
	$scope.users=Users.query();
}]);
//mannerControllers.controller('tonyTestCtrl',['$scope','Items',function($scope, Items){
//	$scope.items=Items.query();
//}]);