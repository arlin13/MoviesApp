(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['omdbFactory', 'NgMap'];

    /* @ngInject */
    function HomeController(omdbFactory, NgMap) {
        var vm = this;
        vm.movies = [];

        ///////////////
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });
        ///////////////

        vm.clearControl = function clearControl() {
            vm.movieName = '';
        }

        vm.searchMovie = function searchMovie() {
            omdbFactory
                .getData(vm.movieName)
                .then(function(data) {
                    vm.movies = data.Search;
                    console.log(vm.movies);
                    vm.clearControl();
                })
                .catch(function(error) {
                    console.log(error);
                })
        }

        // vm.searchMovie("sponge bob");

        activate();

        function activate() {}
    }

})();
