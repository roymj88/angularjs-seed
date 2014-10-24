(function() {
    var modules = [
        'ui.router', // Router component
    ];

    angular.module('myApp', modules);

    function config($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "templates/page-home.html",
                controller: "mainController"
            })
            .state("about", {
                url: "/about",
                templateUrl: "templates/page-about.html",
                controller: "aboutController"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "templates/page-contact.html",
                controller: "contactController"
            });

    }

    function run($rootScope, $state, $log) { 


    }


    angular.module('myApp').config(config);
    angular.module('myApp').run(run);

})();