(function(){
    'use strict';
    angular
        .module('pocKalkulator')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/calc/calcView.html',
                    controller: 'CalcController'
                })
                .when('/info', {
                    templateUrl: 'app/components/info/infoView.html',
                    controller: 'InfoController'
                })
                .otherwise({
                    redirectTo: '/calc'
                });
        }]);
})();
