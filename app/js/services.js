'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .factory("weatherService", function($http, Restangular){
    var _getWeather = function (selectedCity) {
    	var WeatherData =  Restangular.one('weather').get({q: selectedCity});
        //var url = "http://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&callback=JSON_CALLBACK";
        return WeatherData;
    }
    
    return{
        getWeather: _getWeather,
    };
})
  .factory("moviesService", function($http){
    var _movies = [];

    var _getMovies = function(){
        $http.get("js/data/movies.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _movies); //this is the preferred; instead of $scope.movies = result.data
            }, function(results){
                //Error
            })
    }

    var _addNewMovie = function(movie){
        _movies.splice(0, 0, movie);
    }
    var _removeMovie = function(idx){
    	var person_to_delete = _movies[idx.id];
    	_movies.splice(idx.id, 1);
    	/*
    	angular.forEach(_movies, function(value, key){
    		if(value.id == movie.id){
	  		   _movies.splice(idx, 1);
  		  	}
    	});
    	*/
    }

    return{
        movies: _movies,   // revealing module pattern applied here 
        getMovies: _getMovies,
        addNewMovie: _addNewMovie,
        removeMovie:_removeMovie
    };
});


