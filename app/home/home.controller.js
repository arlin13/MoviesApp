(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController(dependencies) {
        var vm = this;

        vm.test = "Arlin";

        activate();

        function activate() {

        }
    }
})();
