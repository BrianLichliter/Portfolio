'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl',['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

  	var Project = Parse.Object.extend("Project");
	var projectQuery = new Parse.Query(Project);
	$scope.projects = [];

	projectQuery.find()
	.then(function(results){ 
		angular.forEach(results, function(result, index){
			$scope.projects[index] = result.attributes;
		});
	});

	$scope.goToSection = function(section) {
		console.log('we did it!');
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(section);

      // call $anchorScroll()
      $anchorScroll();
    };

  }]);