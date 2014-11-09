
TM.directive('reportPanel', function () {
//    var reportDirective = {};
//    var rpName = '';
//
//    reportDirective.restrict = 'E';
//    reportDirective.templateUrl = 'reports/'+rpName+'.html';
//    reportDirective.controller = function($scope,$element){
//        rpName = $scope.reportName;
//    };
//    reportDirective.compile = function(){
//        alert(rpName);
//    };
//    return reportDirective;


    return {
        restrict:'E',
        controller:'reportCtrl',
        templateUrl:'reports/3dchart.html'

    };
});