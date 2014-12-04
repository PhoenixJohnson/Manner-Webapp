TM.controller('reportCtrl', ['$scope', function ($scope) {

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

}]);
