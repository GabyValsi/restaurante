'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngResource',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/home', {templateUrl: 'public/partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/menu', {templateUrl: 'public/partials/menu.html', controller: 'homeCtrl'});
  $routeProvider.when('/servicio', {templateUrl: 'public/partials/servicio.html', controller: 'homeCtrl'});
  $routeProvider.when('/contacto', {templateUrl: 'public/partials/contacto.html', controller: 'MyCtrl2'});
  
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
