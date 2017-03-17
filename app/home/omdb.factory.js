(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('omdbFactory', omdbFactory);

    omdbFactory.$inject = ['$http'];

    /* @ngInject */
    function omdbFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData(movieName) {
            var url = 'http://www.omdbapi.com/?s=' + movieName;

            return $http
                .get(url)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
