'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ang-drag-drop',
  'dragularModule',
  'ngMaterial',
  'myApp.view1',
  'myApp.animated',
  'myApp.main'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/animated'});
}]);
