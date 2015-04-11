(function() {
    'use strict';
    angular
        .module('app.calc')
        .service('CalcDataLoader', CalcDataLoader);

    function CalcDataLoader() {
        this.loadCandidates = function(xmlDoc) {
            var result = [];
            var candidateElements = $(xmlDoc).find('kandydat');
            candidateElements.each(function(index) {
                result.push({
                    positionOnList : parseInt($(this).attr('kdtNumerNaKarcie')),
                    firstName : $(this).find('imiona')[0].innerHTML,
                    lastName : $(this).find('nazwisko')[0].innerHTML
                });
            });

            return result;
        };

        this.loadPollingStationsData = function(xmlDoc) {
            if (typeof(xmlDoc) === 'string') {
                xmlDoc = $.parseXML(xmlDoc);
            }

            var numberOfPollingStations = this.getNumberOfNodes(xmlDoc,
                'count(/kalkulator/akcja/jednostka/jednostka/jednostka/obwod)');
            var result = [];
            for (var idx = 0; idx < numberOfPollingStations; idx++) {
                var pollingStationData = this.loadPollingStationData(xmlDoc, idx + 1);
                result[idx] = pollingStationData;
            }

            return result;
        };

        this.loadPollingStationData = function(xmlDoc, idx) {
            var result = [];

            var xml = xmlDoc;
            var kodGminy = this.getAttribute(xml, '/kalkulator/akcja/jednostka/' +
                'jednostka/jednostka/@jnsKod');
            var nrObwodu = this.getAttribute(xml, '/kalkulator/akcja/jednostka/jednostka' +
                '/jednostka/obwod[' + idx + ']/@obdNumer');
            var siedzibaKomisjiObwodowej = this.getAttribute(xml, '/kalkulator/akcja' +
                '/jednostka/jednostka/jednostka/obwod[' + idx + ']/obdAdres');
            var gmina = this.getAttribute(xml, '/kalkulator/akcja/jednostka' +
                '/jednostka/jednostka/jnsNazwa');
            var powiat = '?';
            var wojewodztwo = this.getAttribute(xml,
                '/kalkulator/akcja/jednostka/jednostka/jnsNazwa');
            var numerKomisjiOkregowej = this.getAttribute(xml, '/kalkulator/akcja' +
                '/jednostka/jednostka/jednostka/organWyborczy/slownik/wpis[@typ=\'NUMER\']');
            var siedzibaKomisjiOkregowej = this.getAttribute(xml, '/kalkulator/akcja' +
                '/jednostka/jednostka/jednostka/organWyborczy/slownik/' +
                'wpis[@typ=\'MIEJSCOWNIK_W\']');
            var liczbaWyborcow = this.getAttribute(xml, '/kalkulator/akcja/' +
                'jednostka/jednostka/jednostka/obwod[' + idx + ']/obwodPzt/@oodLiczbaWyborcow');

            return {
                kodGminy : kodGminy,
                nrObwodu : nrObwodu,
                siedzibaKomisjiObwodowej : siedzibaKomisjiObwodowej,
                gmina : gmina,
                powiat : powiat,
                wojewodztwo : wojewodztwo,
                numerKomisjiOkregowej : numerKomisjiOkregowej,
                siedzibaKomisjiOkregowej : siedzibaKomisjiOkregowej,
                liczbaWyborcow : liczbaWyborcow
            };
        };

        this.getAttribute = function(document, path) {
            return document.evaluate(path, document, null, XPathResult.ANY_TYPE, null)
                .iterateNext()
                .textContent;
        };

        this.getNumberOfNodes = function(document, path) {
            return document.evaluate(path, document, null, XPathResult.ANY_TYPE, null)
                .numberValue;
        };
    }

})();
