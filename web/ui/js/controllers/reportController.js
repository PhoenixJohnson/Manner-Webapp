TM.controller('reportCtrl', ['$scope','Groups','Members','Items',function($scope,Groups,Members,Items){

    $scope.reportNames = [
        'Team Member Workload',
        'Pro ticket report',
        'ALM ticket report'

    ];
    $scope.currentReportName = "demoReport";

    $scope.getUrl = function () {
        return 'reports/' + $scope.currentReportName + '.html';
    };

    $scope.changeReport = function (rpName) {
        switch (rpName) {
            case ("Team member Workload"):

                $scope.currentReportName = "demoReport";
                break;

            case ("Pro ticket report"):

                $scope.currentReportName = "demoReport2";
                break;

            case ("ALM ticket report"):

                $scope.currentReportName = "demoReport3";
                break;

            default :
                $scope.currentReportName = "demoReport";

        }
    }
	$scope.searchGroups=function(){
		Groups.query({userId:$scope.userId},function(e){
			$scope.reportData=e;
		});
	}
	$scope.searchMembers=function(){
		Members.query({groupId:$scope.groupId},function(e){
			$scope.reportData=e;
		});
	}
	$scope.searchItemsByDate=function(){
		Items.queryBefore({ownerId:$scope.ownerId,date:$scope.date},function(e){
			$scope.reportData=e;
		});
	}
}]);
