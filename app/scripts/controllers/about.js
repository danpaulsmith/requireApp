define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name requireAppApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the requireAppApp
   */
  angular.module('requireAppApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
