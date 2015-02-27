define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name requireAppApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the requireAppApp
   */
  angular.module('requireAppApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
