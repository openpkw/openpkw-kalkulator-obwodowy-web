/*global app */
'use strict';
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $routeProvider.
    when('/',{
        templateUrl:'app/components/calc/calcView.html',
        controller: 'CalcController'
    })
    .when('/info',{
        templateUrl:'app/components/info/infoView.html',
        controller: 'InfoController'
    })
    .otherwise({
        reditectTo: '/calc'
    });

    $locationProvider.html5Mode(true);
}]);
