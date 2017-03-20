(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('placesFactory', placesFactory);

    placesFactory.$inject = ['$http'];

    /* @ngInject */
    function placesFactory($http) {
        var key = "AIzaSyCxWskDwzfW43MiAe0dZN60jR6RN36t3Ps";
        var service = {
            getPlaces: getPlaces
        };

        return service;

        //key:
        //AIzaSyCxWskDwzfW43MiAe0dZN60jR6RN36t3Ps
        //https://maps.googleapis.com/maps/api/place/nearbysearch/output?AIzaSyCxWskDwzfW43MiAe0dZN60jR6RN36t3Ps&123,123&50&restaurant

        function getPlaces() {
            var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/' +
                'json?key=' + key +
                '&location=32.715736,-117.161087' +
                // '&location=32.715736,-117.161087' +
                '&radius=2000' +
                '&type=restaurant';

            return $http
                .get(url)
                .then(function(response) {
                    return response.data.results;
                });
        }
    }
})();
