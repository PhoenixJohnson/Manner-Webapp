TM.controller('DataRetrieve',['$scope','Items','Users',function($scope, Items,Users){

    //Initialize the add item popup window.
    $scope.itemTypeName="";
    $scope.newComes=99;
    $scope.completed=false;
    $scope.desNumber="";
    $scope.targetCompleteDate="";


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

    $scope.setTargetDate = function(completed){
        if(completed)
            $scope.targetCompleteDate = Date.now;
        else
            $scope.targetCompleteDate = "";
    }

    $scope.abc =function(x){

    }

}]);
//mannerControllers.controller('tonyTestCtrl',['$scope','Items',function($scope, Items){
//	$scope.items=Items.query();
//}]);
