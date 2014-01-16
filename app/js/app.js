'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'restangular'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/weather', {templateUrl: 'partials/weather.html', controller: 'WeatherCtrl'});
  $routeProvider.when('/movies', {templateUrl: 'partials/movies.html', controller: 'MoviesCtrl'});
  $routeProvider.when('/movie/delete/:movieId/', {templateUrl: 'partials/movies.html', controller: 'MovieDeleteCtrl'});
  $routeProvider.when('/thankyou', {templateUrl: 'partials/thankyou.html'});
  $routeProvider.otherwise({redirectTo: '/movies'});
}])
.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://api.openweathermap.org/data/2.5');
});