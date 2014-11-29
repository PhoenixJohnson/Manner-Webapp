TM.controller('DataRetrieve',['$scope','Items','Users',function($scope, Items,Users){
	$scope.items =Items.query();
	$scope.users=Users.query();
    $scope.slides = [
        "Personal Action List",
        "Group Action List",
        "Action Pool",
        "Expire Action List"
    ];

    $scope.showDetails = function(listName){
      alert(listName);
    };

}]);
//mannerControllers.controller('tonyTestCtrl',['$scope','Items',function($scope, Items){
//	$scope.items=Items.query();
//}]);
