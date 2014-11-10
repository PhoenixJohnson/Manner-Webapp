TM.controller('reportCtrl',['$scope',function($scope){

    $scope.reportName = '3dchart';

    var reportList = {"report1":"3dchart","report2":"piechart" }

    this.changeReport = function(){
        $scope.reportName = "report2";
    }

}]);
//mannerControllers.controller('tonyTestCtrl',['$scope','Items',function($scope, Items){
//	$scope.items=Items.query();
//}]);