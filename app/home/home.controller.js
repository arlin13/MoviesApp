(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['omdbFactory', 'placesFactory', 'NgMap', '$scope'];

    /* @ngInject */
    function HomeController(omdbFactory, placesFactory, NgMap, $scope) {
        var vm = this;
        vm.movies = [];
        vm.loading = true;

        // debugger;


        //
        placesFactory
            .getPlaces()
            .then(function(places) {
            })
            .catch(function(error) {
                console.log(error);
            })
        //


        NgMap.getMap().then(function(map) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    vm.lat = pos.lat;
                    vm.long = pos.lng;
                    map.setCenter(pos);
                    vm.loading = false;

                    $scope.$apply();
                });
            }
        });

        vm.clearControl = function clearControl() {
            vm.movieName = '';
        }

        vm.searchMovie = function searchMovie() {
            omdbFactory
                .getMovies(vm.movieName)
                .then(function(movies) {
                    vm.movies = movies.Search;
                    console.log(vm.movies);
                    vm.clearControl();
                })
                .catch(function(error) {
                    console.log(error);
                })
        }

        activate();

        function activate() {}
    }

})();
