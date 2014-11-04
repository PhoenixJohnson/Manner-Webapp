// declare top-level module which depends on filters,and services
var TM = angular.module('TM',
    [   'TM.filters',
        'TM.directives', // custom directives
        'ngRoute',
        'ngGrid', // angular grid
//        'ui', // angular ui
//        'ngSanitize', // for html-bind in ckeditor
//        'ui.ace', // ace code editor
//        'ui.bootstrap', // jquery ui bootstrap
//        '$strap.directives', // angular strap
        'mannerControllers',
        'mannerServices'
    ]);

var filters = angular.module('TM.filters', []);
var directives = angular.module('TM.directives', []);

// bootstrap angular
TM.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    // TODO use html5 *no hash) where possible
    // $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'partials/home.html'
    });

    $routeProvider.when('/fs2', {
        templateUrl: 'partials/fs2/fs2.html',
        controller: 'FS2Controller'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'partials/contact.html'
    });
    $routeProvider.when('/about', {
        templateUrl: 'partials/about.html'
    });
    $routeProvider.when('/faq', {
        templateUrl: 'partials/faq.html'
    });
    $routeProvider.when('/demo', {
        templateUrl: 'partials/demo.html',
        controller:"demoCtrl"
    });
//    $routeProvider.when('/tonyTest',{
//    	templateUrl:"test/tonyTest.html",
//    	controller:"tonyTestCtrl"
//    });
    $routeProvider.when('/httpdemo',{
    	templateUrl: 'partials/httpdemo.html'
    });

    // note that to minimize playground impact on app.js, we
    // are including just this simple route with a parameterized 
    // partial value (see playground.js and playground.html)
    $routeProvider.when('/playground/:widgetName', {
        templateUrl: 'playground/playground.html',
        controller: 'PlaygroundCtrl'
    });

    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);

// this is run after angular is instantiated and bootstrapped
TM.run(function ($rootScope, $location, $http, $timeout, AuthService, RESTService) {

    // *****
    // Eager load some data using simple REST client
    // *****

    $rootScope.restService = RESTService;

    // async load constants
    $rootScope.constants = [];
    $rootScope.restService.get('data/constants.json', function (data) {
            $rootScope.constants = data[0];
        }
    );

    // async load data do be used in table (playgound grid widget)
    $rootScope.listData = [];
    $rootScope.restService.get('data/generic-list.json', function (data) {
            $rootScope.listData = data;
        }
    );

    // *****
    // Initialize authentication
    // *****
    $rootScope.authService = AuthService;

    // text input for login/password (only)
    $rootScope.loginInput = 'user@gmail.com';
    $rootScope.passwordInput = 'complexpassword';

    $rootScope.$watch('authService.authorized()', function () {

        // if never logged in, do nothing (otherwise bookmarks fail)
        if ($rootScope.authService.initialState()) {
            // we are public browsing
            return;
        }

        // instantiate and initialize an auth notification manager
        $rootScope.authNotifier = new NotificationManager($rootScope);

        // when user logs in, redirect to home
        if ($rootScope.authService.authorized()) {
            $location.path("/");
            $rootScope.authNotifier.notify('information', 'Welcome ' + $rootScope.authService.currentUser() + "!");
        }

        // when user logs out, redirect to home
        if (!$rootScope.authService.authorized()) {
            $location.path("/");
            $rootScope.authNotifier.notify('information', 'Thanks for visiting.  You have been signed out.');
        }

    }, true);

    // TODO move this out to a more appropriate place
    $rootScope.faq = [
        {key: "What is Angular-Enterprise-Seed?", value: "A starting point for server-agnostic, REST based or static/mashup UI."},
        {key: "What are the pre-requisites for running the seed?", value: "Just an HTTP server.  Add your own backend."},
        {key: "How do I change styling (css)?", value: "Change Bootstrap LESS and rebuild with the build.sh script.  This will update the appropriate css/image/font files."}
    ];
    
    // demo.html test data
    $rootScope.postBoard = [
        {status: "danger", type: "SA", desc: "Lorem ipsum dolor sit amet", date:"2014/09/11"},
        {status: "warning", type: "A", desc: "Consectetur adipiscing elit", date:"2014/09/12"},
        {status: "info", type: "R", desc: "Sed do eiusmod tempor incididunt ut", date:"2014/09/13"},
        {status: "danger", type: "T", desc: "Sed ut perspiciatis unde omnis", date:"2014/09/14"},
        {status: "warning", type: "C", desc: "Velit esse quam nihil molestiae consequatur", date:"2014/09/15"}
	];
    $rootScope.latest = [
        {id: "1", status: "star", desc: "Lorem ipsum dolor sit amet", date:"2014/09/11"},
        {id: "2", status: "star-empty", desc: "Lorem ipsum dolor sit amet", date:"2014/09/12"},
        {id: "3", status: "star", desc: "Lorem ipsum dolor sit amet", date:"2014/09/12"},
        {id: "4", status: "star-empty", desc: "Lorem ipsum dolor sit amet", date:"2014/09/14"},
        {id: "5", status: "star-empty", desc: "Lorem ipsum dolor sit amet", date:"2014/09/16"}
    ];
});