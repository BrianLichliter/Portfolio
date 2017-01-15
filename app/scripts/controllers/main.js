'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl',['$scope', '$location', '$anchorScroll', '$firebaseObject',function ($scope, $location, $anchorScroll, $firebaseObject) {

    var ref = firebase.database().ref();
    $scope.data = $firebaseObject(ref);
    $scope.data.$loaded()
    .then(function() { 
        $scope.projects = $scope.data.results;
        $("body").fadeToggle();
    })
    .catch(function(err) {
        console.error(err);
    });

 //  	var Project = Parse.Object.extend("Project");
	// var projectQuery = new Parse.Query(Project);
	// $scope.projects = [];

	// projectQuery.find()
	// .then(function(results){
	// 	angular.forEach(results, function(result, index){
	// 		$scope.projects[index] = result.attributes;
	// 	});
	// })
 //    .then(function(){
 //        $("body").fadeToggle();
 //    });

    $( document ).ready(function() {
    	jQuery(function($) {
    		var divs = $('.fade');
    		var menu = $('#headerBar');
    		var menuBrand = $('.header.item');
    		var menuItems = $('.right.menu > .item');
    		$(window).on('scroll', function() {
    			var st = $(this).scrollTop();
    			var stMenu;
    			if (st > (screen.height - 100)) {
    				stMenu = 1;
    			} else {
    				stMenu = st/(screen.height - 100);
    			}
    			var stMenuBrand = stMenu * 100;
    			if ($(window).width() < 768) {
    				divs.css({
    					'opacity' : 1
    				});
    				menu.css({
    					'background-color' : 'hsla(210, 3%, 25%,1)'
    				});
    				menuBrand.css({
    					'color' : 'hsla(0, 0%, 100%, 1)'
    				});
    				menuItems.css({
    					'color' : 'hsla(0, 0%, 100%, 1)'
    				});
    			} else {
    				divs.css({
    					'opacity' : 1 - st/200
    				});
    				menu.css({
    					'background-color' : 'hsla(210, 3%, 25%,'+stMenu+')'
    				});
    				menuBrand.css({
    					'color' : 'hsla(0, 0%,'+ stMenuBrand +'%, 1)'
    				});
    				menuItems.css({
    					'color' : 'hsla(0, 0%,'+ stMenuBrand +'%, 1)'
    				});
    			}
    		});
    	});
    });
  }]);
