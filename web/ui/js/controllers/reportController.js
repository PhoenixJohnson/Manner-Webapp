TM.controller('reportCtrl', ['$scope','ReoprtData','Groups','Members','Items',function ($scope) {

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
    $scope.searchReport=function(){
		ReoprtData.query({email:$scope.email},function(e){
			$scope.reportData=e;
		});
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
	$scope.searchItemsByOwner=function(){
		Items.query({userId:$scope.userId},function(e){
			$scope.reportData=e;
		});
	}
	$scope.searchItemsByGroup=function(){
		Items.query({groupId:$scope.groupId},function(e){
			$scope.reportData=e;
		});
	}
	$scope.searchItemsByDate=function(){
		Items.queryBefore({ownerId:$scope.ownerId,date:$scope.date},function(e){
			$scope.reportData=e;
		});
	}
}]);
