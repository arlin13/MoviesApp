(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('omdbFactory', omdbFactory);

    omdbFactory.$inject = ['$http'];

    /* @ngInject */
    function omdbFactory($http) {
        var service = {
            getMovies: getMovies
        };

        return service;

        function getMovies(movieName) {
            var url = 'http://www.omdbapi.com/?s=' + movieName;

            return $http
                .get(url)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
