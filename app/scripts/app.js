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
    'routeStyles',
    'firebase'
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
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDYZq0OeUhXFmm7bVLtmOZ-1bpC4yeH-0A",
      authDomain: "brianlichliter.firebaseapp.com",
      databaseURL: "https://brianlichliter.firebaseio.com",
      storageBucket: "firebase-brianlichliter.appspot.com",
      messagingSenderId: "728694720383"
    };
    firebase.initializeApp(config);
    var wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,        // default
      mobile:       false,      // default
      live:         true        // default
    }).init();
  });
