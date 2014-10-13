var mannerControllers=angular.module('mannerControllers',[]);

mannerControllers.controller('demoController',['$scope','$routeParams','PhoneFactory',function($scope, $routeParams,PhoneFactory){
	// $scope.phoneId = $routeParams.phoneId;
	// $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
	// $scope.phone=data;
	// $scope.mainImageUrl=data.images[0];
	// });
	$scope.phone = PhoneFactory.get({
		phoneId : $routeParams.phoneId
	}, function(phone) {
		$scope.mainImageUrl = phone.images[0];
	});
	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
	}
	$scope.hello = function(name) {
		if (name == null) {
			alert('name null');
		} else if (name == '') {
			alert('name blank');
		} else {
			alert('name not blank');
		}
		if (name) {
			alert('true');
		} else {
			alert('false');
		}
		alert('Hello' + (name || 'world') + "!");
	}
}]);