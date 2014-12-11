TM.
controller('personalActionController', function($scope, $filter,ngTableParams,$http) {
    $scope.data=[];
    $scope.columns = [
                      {title:'title',field:'title',visible:true,filter:{'title':'text'}},
                      {title:'content',field:'content',visible:true,filter:{'content':'text'}},
                      {title:'itemType',field:'itemType',visible:true,filter:{'itemType':'text'}},
                      {title:'owner',field:'owner',visible:true,filter:{'owner':'text'}},
                      {title:'createdBy',field:'createdBy',visible:true,filter:{'createdBy':'text'}},
                      {title:'createdDate',field:'createdDate',visible:true,filter:{'createdDate':'text'}},
                      {title:'lastModifiedBy',field:'lastModifiedBy',visible:true,filter:{'lastModifiedBy':'text'}},
                      {title:'lastModifiedDate',field:'lastModifiedDate',visible:true,filter:{'lastModifiedDate':'text'}},
                      {title:'group',field:'group',visible:true,filter:{'group':'text'}},
                      {title:'status',field:'status',visible:true,filter:{'status':'text'}},
                      {title:'percentage',field:'percentage',visible:true,filter:{'percentage':'text'}},
                      {title:'dueDate',field:'dueDate',visible:true,filter:{'dueDate':'text'}},
                      {title:'priority',field:'priority',visible:true,filter:{'priority':'text'}},
                      {title:'remarks',field:'remarks',visible:true,filter:{'remarks':'text'}}
                      ];
    
    $http.get('data/personalAction.json').success(function (largeLoad) {
    	$scope.data = largeLoad
    });
    
    $scope.$watch('data',function(){
    	console.log(1);
    	$scope.tableParams.reload();
    	console.log($scope.tableParams);
    });
   
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10          // count per page
    }, {
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
    
//	    $scope.data = [{name: "Moroni", age: 50, role: 'Administrator'},
//	                {name: "Tiancum", age: 43, role: 'Administrator'},
//	                {name: "Jacob", age: 27, role: 'Administrator'},
//	                {name: "Nephi", age: 29, role: 'Moderator'},
//	                {name: "Enos", age: 34, role: 'User'},
//	                {name: "Tiancum", age: 43, role: 'User'},
//	                {name: "Jacob", age: 27, role: 'User'},
//	                {name: "Nephi", age: 29, role: 'Moderator'},
//	                {name: "Enos", age: 34, role: 'User'},
//	                {name: "Tiancum", age: 43, role: 'Moderator'},
//	                {name: "Jacob", age: 27, role: 'User'},
//	                {name: "Nephi", age: 29, role: 'User'},
//	                {name: "Enos", age: 34, role: 'Moderator'},
//	                {name: "Tiancum", age: 43, role: 'User'},
//	                {name: "Jacob", age: 27, role: 'User'},
//	                {name: "Nephi", age: 29, role: 'User'},
//	                {name: "Enos", age: 34, role: 'User'}];
//
//	    $scope.tableParams = new ngTableParams({
//	        page: 1,            // show first page
//	        count: 10          // count per page
//	    }, {
//	        groupBy: 'role',
//	        total: $scope.data.length,
//	        getData: function($defer, params) {
//	            var orderedData = params.sorting() ?
//	                    $filter('orderBy')($scope.data, $scope.tableParams.orderBy()) :
//	                    	$scope.data;
//
//	            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//	        }
//	    });
//	
	
});