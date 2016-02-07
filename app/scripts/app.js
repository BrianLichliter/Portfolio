'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'parse-angular',
    'door3.css'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'views/main.html',
        css: 'styles/main.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function() {
    Parse.initialize("nEhMEIVMRAFaBP0Do8Vw6OMnBqEg0I8vY9fJ6axC", "oxxdfINTpl2bpX2oRndRGMM6byuJ1DInhSOhSlXN"); 
    var wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,          // default
      mobile:       false,      // default
      live:         true        // default
    }).init();
  });
