TM.
controller('personalActionController', ['$scope','$filter','ngTableParams','$http','Items',function($scope, $filter,ngTableParams,$http,Items) {
    $scope.data=[];
    $scope.columns = [
                      {title:'title',field:'title',visible:true,filter:{'title':'text'},visibleOption:false},
                      {title:'content',field:'content',visible:false,filter:{'content':'text'},visibleOption:true},
                      {title:'itemType',field:'itemType',visible:true,filter:{'itemType':'text'},visibleOption:false},
                      {title:'owner',field:'owner',visible:false,filter:{'owner':'text'},visibleOption:true},
//                      {title:'createdBy',field:'createdBy',visible:false,filter:{'createdBy':'text'},visibleOption:true},
                      {title:'createdDate',field:'createdDate',visible:false,filter:{'createdDate':'text'},visibleOption:true},
//                      {title:'lastModifiedBy',field:'lastModifiedBy',visible:false,filter:{'lastModifiedBy':'text'},visibleOption:true},
                      {title:'lastModifiedDate',field:'lastModifiedDate',visible:false,filter:{'lastModifiedDate':'text'},visibleOption:true},
//                      {title:'group',field:'group',visible:false,filter:{'group':'text'},visibleOption:true},
                      {title:'status',field:'status',visible:true,filter:{'status':'text'},visibleOption:false},
                      {title:'percentage',field:'percentage',visible:true,filter:{'percentage':'text'},visibleOption:true},
                      {title:'dueDate',field:'dueDate',visible:true,filter:{'dueDate':'text'},visibleOption:true},
                      {title:'priority',field:'priority',visible:true,filter:{'priority':'text'},visibleOption:true},
                      {title:'remarks',field:'remarks',visible:false,filter:{'remarks':'text'},visibleOption:true}
                      ];
//    $http.get('data/personalAction.json').success(function (largeLoad) {
//    	$scope.data = largeLoad
//    });
 	Items.query([],function(result){
 		$scope.data = result._embedded.items;
    }); 
    $scope.$watch('data',function(){
//    	console.log($scope.data.length);
    	if($scope.data.length>0){
    	    $scope.tableParams = new ngTableParams({
    	        page: 1,            // show first page
    	        count: 10          // count per page
    	    }, {
    	    	counts: [], // hide page counts control
    	        groupBy: 'itemType',
    	        total: $scope.data.length,
    	        getData: function($defer, params) {
    	            var orderedData = params.sorting() ?
    	                    $filter('orderBy')($scope.data, $scope.tableParams.orderBy()) :
    	                    	$scope.data;

    	            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    	        },
    	        $scope: $scope
    	    });
        	$scope.tableParams.reload();
    	}
    });
    $scope.tableParams = new ngTableParams();
    
    $scope.showDetails = function(user) {
        console.info(user);
//        var modalInstance = $modal.open({
//            templateUrl: 'myModalContent.html',
//            controller: 'ModalInstanceCtrl',
//            size: size,
//            resolve: {
//              items: function () {
//                return $scope.items;
//              }
//            }
//          });
//
//          modalInstance.result.then(function (selectedItem) {
//            $scope.selected = selectedItem;
//          }, function () {
//            $log.info('Modal dismissed at: ' + new Date());
//          });
        };
}]);











var app = angular.module('DemoMock', ['ngTable', 'ngMockE2E'])
.run(function($httpBackend, $filter, $log, ngTableParams) {
    // emulation of api server
    $httpBackend.whenGET(/data.*/).respond(function(method, url, data, headers) {
        var query = url.split('?')[1],
            requestParams = {};

        $log.log('Ajax request: ', url);

        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            requestParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        // parse url params
        for (var key in requestParams) {
            if (key.indexOf('[') >= 0) {
                var params = key.split(/\[(.*)\]/), value = requestParams[key], lastKey = '';

                angular.forEach(params.reverse(), function(name) {
                    if (name != '') {
                        var v = value;
                        value = {};
                        value[lastKey = name] = isNumber(v) ? parseFloat(v) : v;
                    }
                });
                requestParams[lastKey] = angular.extend(requestParams[lastKey] || {}, value[lastKey]);
            } else {
                requestParams[key] = isNumber(requestParams[key]) ? parseFloat(requestParams[key]) : requestParams[key];
            }
        }

        data = [{name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34}];

        var params = new ngTableParams(requestParams);
        data = params.filter() ? $filter('filter')(data, params.filter()) : data;
        data = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

        var total = data.length;
        data = data.slice((params.page() - 1) * params.count(), params.page() * params.count());

        return [200, {
            result: data,
            total: total
        }];
    });
    $httpBackend.whenGET(/.*/).passThrough();
});