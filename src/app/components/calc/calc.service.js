(function() {
    'use strict';
    angular
        .module('app.calc')
        .service('CalcService', ['$http', 'CalcDataLoader', CalcService]);

    function CalcService($http, CalcDataLoader) {
        var getGeographyTaxonomy = [];

        this.getGeographyTaxonomy = function() {
           return $http.get('/assets/resources/teryt.json');
        };

        this.loadPollingStationsData = function() {
            return $http.get('/assets/resources/106101.xml')
                .then(function(response) {
                    return {
                        candidates: CalcDataLoader.loadCandidates(response.data),
                        pollingStationsData: CalcDataLoader.loadPollingStationsData(response.data)
                    };
                });
        };
    }
})();
