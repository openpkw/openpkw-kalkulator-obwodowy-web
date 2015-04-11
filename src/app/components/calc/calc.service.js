(function() {
    'use strict';
    angular
        .module('app.calc')
        .service('CalcService', ['$http', 'CalcDataLoader', CalcService]);

    function CalcService($http, CalcDataLoader) {
        this.getGeographyTaxonomy = function() {
            return $http.get('/assets/resources/teryt.json');
        };

        this.loadPollingStationsData = function() {
            return $http.get('/assets/resources/106101.xml')
                .then(function(result) {
                    var xml = result.data;

                    return {
                        candidates: CalcDataLoader.loadCandidates(xml),
                        pollingStationsData: CalcDataLoader.loadPollingStationsData(xml)
                    };
                });
        };
    }
})();
