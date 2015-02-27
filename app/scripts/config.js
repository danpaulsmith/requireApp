/*jshint unused: vars */
require.config({
  paths: {
    'angular': '/bower_components/angular/angular',
    'angular-route': '/bower_components/angular-route/angular-route',
    'angular-resource': '/bower_components/angular-resource/angular-resource',
    'angular-animate': '/bower_components/angular-animate/angular-animate'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route': ['angular'],
    'angular-resource': ['angular'],
    'angular-animate': ['angular'],
    'angular-mocks': {
      deps:['angular'],
      'exports':'angular.mock'
    }
  },
  priority: [
    'angular'
  ]
});
