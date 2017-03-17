(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['omdbFactory'];

    /* @ngInject */
    function HomeController(omdbFactory) {
        var vm = this;
        vm.movies=[];

        vm.searchMovie = function searchMovie() {
            omdbFactory
                .getData(vm.movieName)
                .then(function(data) {
                    vm.movies = data.Search;
                    console.log(vm.movies);
                })
                .catch(function(error) {
                    console.log(error);
                })
        }

        vm.searchMovie("sponge bob");

        activate();

        function activate() {}
    }
})();
