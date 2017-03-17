(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('placesFactory', placesFactory);

    placesFactory.$inject = ['$http'];

    /* @ngInject */
    function placesFactory($http) {
        var service = {
            getPlaces: getPlaces
        };

        return service;

        //key:
        //AIzaSyCxWskDwzfW43MiAe0dZN60jR6RN36t3Ps
        //https://maps.googleapis.com/maps/api/place/nearbysearch/output?AIzaSyCxWskDwzfW43MiAe0dZN60jR6RN36t3Ps&123,123&50&restaurant

        function getPlaces() {
            var url = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyCxWskDwzfW43MiAe0dZN60jR6RN36t3Ps&q=record+stores+in+Seattle';

            return $http
                .get(url)
                .then(function(response) {
                    console.log("PLACES API");
                    console.log(response.data);
                    return response.data;
                });
        }
    }
})();
