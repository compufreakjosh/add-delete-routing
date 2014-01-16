'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {
	  
  }])
  .controller("WeatherCtrl", function ($scope, weatherService){
    //Executes when the controller is created
    $scope.Weather = {};
    $scope.getWeather = function(){
        $scope.Weath = weatherService.getWeather($scope.selectedCity).then(
        		function (data) {
                    $scope.Weather = data;
                });
    }
    $scope.getWeather();
  })

  .controller("MoviesCtrl", function ($scope, moviesService){
    //Executes when the controller is created
    $scope.movies = moviesService.movies;

    moviesService.getMovies();

    $scope.addNewMovie = function(newMovie){
        var movie = {name: newMovie.name,
        			releaseYear: newMovie.releaseYear,
        			averageRating:newMovie.averageRating
        			};
        moviesService.addNewMovie(movie);
    }
  })
  .controller("MovieDeleteCtrl", ['$scope','$routeParams','moviesService', function($scope, $routeParams, moviesService){
	  //Executes when the controller is created
	  $scope.movies = moviesService.movies;  
	  console.log("In delete controller");
	  var movieId = $routeParams.movieId;
	  var movie = {id: movieId};
	  moviesService.removeMovie(movie);
	  }]);