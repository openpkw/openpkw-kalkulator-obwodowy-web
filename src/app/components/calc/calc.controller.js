(function() {
    'use strict';
    angular.module('app.calc').controller('CalcController', CalcController);

    CalcController.$inject = ['CalcService', 'CalcPdfGeneratorService'];

    function CalcController(CalcService, CalcPdfGeneratorService) {
        var vm = this;
        vm.printPdf = printPdf;
        vm.selectFirstVoivodship = selectFirstVoivodship;
        vm.selectFirstDistrict = selectFirstDistrict;
        vm.selectFirstCommunity = selectFirstCommunity;
        vm.selectFirstPollingStation = selectFirstPollingStation;
        vm.voivodship = null;
        vm.district = null;
        vm.geographyTaxonomy = null;
        vm.candidates = null;
        vm.pollingStationsData = null;
        vm.pollingStation = null;
        initialize();

        function printPdf() {
            CalcPdfGeneratorService.generatePdf(getMockFormData());
        }

        function selectFirstVoivodship() {
            var voivodship = vm.geographyTaxonomy[0];
            vm.voivodship = angular.isUndefined(voivodship) ? null : voivodship;
            vm.selectFirstDistrict();
        }

        function selectFirstDistrict() {
            var district = vm.voivodship.children[0];
            vm.district = angular.isUndefined(district) ? null : district;
            vm.selectFirstCommunity();
        }

        function selectFirstCommunity() {
            var community = vm.district.children[0];
            vm.community = angular.isUndefined(community) ? null : community;
            vm.selectFirstPollingStation();
        }

        function selectFirstPollingStation() {
            var poolingStation = vm.pollingStationsData[0];
            vm.pollingStation = angular.isUndefined(poolingStation) ? null : poolingStation;
        }

        function initialize() {
            loadPoolingStationsData()
                .then(loadGeographyTaxonomy()
                    .then(console.log('finish initialize data of CalcController')));
        }

        function loadGeographyTaxonomy() {
            return CalcService.getGeographyTaxonomy().then(function(response) {
                vm.geographyTaxonomy = response.data;
                vm.selectFirstVoivodship();
                vm.selectFirstDistrict();
                vm.selectFirstCommunity();
            });
        }

        function loadPoolingStationsData() {
            return CalcService.loadPollingStationsData().then(function(data) {
                vm.pollingStationsData = data.pollingStationsData;
                vm.candidates = data.candidates;
                vm.selectFirstPollingStation();
            });
        }

        function getMockFormData() {
            return {
                komisja: {
                    kodTerytorialnyGminy: '180801',
                    numerObwoduGlosowania: '5',
                    siedzibaObwodowejKomisjiWyborczej: 'Gimnazjum Miejskie im. ' +
                        'Władysława Jagiełły, ' +
                        'Leżajsk ul. Skłodowskiej 8, 37-300 Leżajsk',
                    gminaDzielnica: 'm. Leżajsk',
                    powiat: 'leżajski',
                    wojewodztwo: 'podkarpackie'
                },
                akcjaWyborcza: {
                    dataGlosowania: '24 czerwca 2015 r.',
                    dzienMiesiacGlosowania: '24 czerwca',
                    rokGlosowania: '15',
                    godzinaGlosowaniaOd: '9:00',
                    godzinaGlosowaniaDo: '21:00'
                },
                rozliczenieKart: {
                    pole1: '17',
                    pole2: '18',
                    pole3: '19',
                    pole4: '20',
                    pole5: '21',
                    pole6: '22',
                    pole7: '23',
                    pole8: '24',
                    pole8a: '25',
                    pole8b: '26',
                    pole8c: '27',
                    pole8d: '28',
                    pole8e: '29'
                },
                wynikiGlosowania: {
                    pole9: '101',
                    pole9a: '102',
                    pole10: '103',
                    pole11: '104',
                    pole12: '105',
                    pole13: '106',
                    pole14: [{
                        imionaINazwisko: 'Bronisław Komorowski',
                        sumaGlosowWaznych: '901'
                    }],
                    sumaGlosowWaznych: '1024'
                },
                uwagiIAdnotacje: {
                    pole15: 'Brak uwag.',
                    pole16: 'Brak uwag.',
                    pole17: 'Brak uwag.',
                    pole18: 'Brak zarządzeń.',
                    pole19: 'Brak zarzutów.',
                    pole20: 'Brak zarzutów.',
                    pole21: 'Brak uwag.'
                },
                czlonkowieKomisji: [{
                    imionaINazwisko: 'Euzebiusz Szybki',
                    funkcjaWKomisji: 'Przewodniczący komisji'
                }]
            };
        }
    }
})();
