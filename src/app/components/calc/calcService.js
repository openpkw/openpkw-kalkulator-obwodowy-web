/*global OpenPKW, app*/
'use strict';
app.service('calcService', ['$http', function ($http) {

    this.getGeographyTaxonomy = function () {
        return $http({
            url: '/assets/resources/teryt.json'
        });
    };

    this.loadPollingStationsData = function() {
        return $http.get('/assets/resources/106101.xml').then(function (result) {
            var xml = result.data;

            return {
                candidates: OpenPKW.KlkParser.loadCandidates(xml),
                pollingStationsData: OpenPKW.KlkParser.loadPollingStationsData(xml)
            };
        });
    };

}]);