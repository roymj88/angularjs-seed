(function() {

    'use strict'

    function config($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/components/home/homeView.html",
                controllerAs: 'vm',
                controller: "homeController"
            });

    }

    angular.module('myApp').config(config);

})();