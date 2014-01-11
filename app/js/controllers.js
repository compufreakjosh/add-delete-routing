'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
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
    $scope.removeMovie = function(movieId){
        var movie = {id: movieId};
        moviesService.removeMovie(movie);
    }
  })
  .controller("MovieDeleteCtrl", ['$scope','moviesService','$routeParams', function($scope, $routeParams, moviesService){
	  //Executes when the controller is created
	  $scope.movies = moviesService.movies;  
	  console.log("In delete controller");
	  $scope.movieId = $routeParams.movieId;
	    
	  $scope.removeMovie = function(movieId){
	        var movie = {id: movieId};
	        moviesService.removeMovie(movie);
	    }
	  }]);