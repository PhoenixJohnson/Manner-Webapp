/**
 * Created by phoenix on 14/11/8.
 */
reports.config(['$routeProvider',  function ($routeProvider) {


//    $routeProvider.when('/reports/3dchart',{
//        templateUrl: 'reports/3dchart.html'
//    });

    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo: 'reports/Main.html'
    });
}]);