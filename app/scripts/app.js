define([
    'angular',
    'controllers/main',
    'controllers/about'
  ],
  function(angular, MainCtrl, AboutCtrl) {

    var requiredApp = angular
      .module('requireAppApp', [
        'ngResource',
        'ngRoute',
        'ngAnimate',
        'requireAppApp.controllers.MainCtrl',
        'requireAppApp.controllers.AboutCtrl'
      ])
      .config(function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      });

    return requiredApp;

  });
