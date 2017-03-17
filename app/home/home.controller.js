(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['omdbFactory'];

    /* @ngInject */
    function HomeController(omdbFactory) {
        var vm = this;


        vm.searchMovie = function searchMovie(movieName) {
            omdbFactory
                .getData(movieName)
                .then(function(data) {
                    console.log(data);
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
