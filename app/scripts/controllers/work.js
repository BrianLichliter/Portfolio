'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('WorkCtrl',['$scope', function ($scope) {

  	var Project = Parse.Object.extend("Project");
	var projectQuery = new Parse.Query(Project);
	$scope.projects = [];

	projectQuery.find()
	.then(function(results){ 
		angular.forEach(results, function(result, index){
			$scope.projects[index] = result.attributes;
		});
	});

  }]);
