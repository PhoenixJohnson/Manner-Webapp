TM.
controller('personalActionController', function($scope, $filter,ngTableParams,$http) {
    $scope.data=[];
    $scope.columns = [
                      {title:'title',field:'title',visible:true,filter:{'title':'text'},visibleOption:false},
                      {title:'content',field:'content',visible:false,filter:{'content':'text'},visibleOption:true},
                      {title:'itemType',field:'itemType',visible:true,filter:{'itemType':'text'},visibleOption:false},
                      {title:'owner',field:'owner',visible:false,filter:{'owner':'text'},visibleOption:true},
                      {title:'createdBy',field:'createdBy',visible:false,filter:{'createdBy':'text'},visibleOption:true},
                      {title:'createdDate',field:'createdDate',visible:false,filter:{'createdDate':'text'},visibleOption:true},
                      {title:'lastModifiedBy',field:'lastModifiedBy',visible:false,filter:{'lastModifiedBy':'text'},visibleOption:true},
                      {title:'lastModifiedDate',field:'lastModifiedDate',visible:false,filter:{'lastModifiedDate':'text'},visibleOption:true},
                      {title:'group',field:'group',visible:false,filter:{'group':'text'},visibleOption:true},
                      {title:'status',field:'status',visible:true,filter:{'status':'text'},visibleOption:false},
                      {title:'percentage',field:'percentage',visible:true,filter:{'percentage':'text'},visibleOption:true},
                      {title:'dueDate',field:'dueDate',visible:true,filter:{'dueDate':'text'},visibleOption:true},
                      {title:'priority',field:'priority',visible:true,filter:{'priority':'text'},visibleOption:true},
                      {title:'remarks',field:'remarks',visible:false,filter:{'remarks':'text'},visibleOption:true}
                      ];
    
    $http.get('data/personalAction.json').success(function (largeLoad) {
    	$scope.data = largeLoad
    });
    $scope.$watch('data',function(){
    	console.log($scope.data.length);
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
});