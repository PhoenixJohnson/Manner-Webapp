/**
 * Created by phoenix on 14/11/8.
 */
reports.config(['$routeProvider',  function ($routeProvider) {


    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo: 'reports/reportMain.html'
    });
}]);