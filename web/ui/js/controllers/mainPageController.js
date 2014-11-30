TM.controller('DataRetrieve',['$scope','Items','Users',function($scope, Items,Users){

    $scope.itemTypeName="";
    $scope.newComes=99;
    $scope.completed=true;
    $scope.desNumber="";


    $scope.items =Items.query();
	$scope.users=Users.query();
    $scope.slides = [
        "Personal Action List",
        "Group Action List",
        "Action Pool",
        "Expire Action List"
    ];
    $scope.itemTypeNames =[
      "Pro Ticket",
      "ALM Ticket",
      "Documentation",
      "US Design",
      "Building",
      "Escalation Issue"
    ];

    $scope.showDetails = function(listName){
      alert(listName);
    };

    $scope.selectType = function(typeName){
       $scope.itemTypeName=typeName;
    };

    $scope.isTicket = function(){
      if($scope.itemTypeName.indexOf("Ticket")>0)
        return true;
      else
        return false;
    };

}]);
//mannerControllers.controller('tonyTestCtrl',['$scope','Items',function($scope, Items){
//	$scope.items=Items.query();
//}]);
