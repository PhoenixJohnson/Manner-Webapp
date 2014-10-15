var mannerServices=angular.module('mannerServices', [ 'ngResource']);

//Items
mannerServices.factory('Items', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/manner-ci/api/items', {}, {
		'query' : {
			method : 'GET',
			isArray : false,
			cache : false,
			responseType:'json'
		},
		'update' : {}
	});
} ]);
//Users
mannerServices.factory('Users', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/manner-ci/api/users', {}, {
		'query' : {
			method : 'GET',
			isArray : false,
			cache : false,
			responseType:'json'
		},
		'update' : {}
	});
} ]);