/*global app,md5*/
'use strict';
app.controller('CalcController', ['$scope', '$http', '$window', 'calcService', function ($scope, $http, $window, calcService) {
    
    var m = {
        voivodship: null,
        district: null,
        geographyTaxonomy: null,
        candidates: null,
        pollingStationsData: null,
        pollingStation: null
    };
    $scope.m = m;

    $scope.showAsPdf = function () {
        var exampleData = {
            komisja: {
                kodTerytorialnyGminy: '180801',
                numerObwoduGlosowania: '5',
                siedzibaObwodowejKomisjiWyborczej: 'Gimnazjum Miejskie im. Władysława Jagiełły, Leżajsk ul. Skłodowskiej 8, 37-300 Leżajsk',
                gminaDzielnica: 'm. Leżajsk',
                powiat: 'leżajski',
                wojewodztwo: 'podkarpackie'
            }
        };

        $http.post('/backend/service/protocol', exampleData, {
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'arraybuffer'
        }).success(function (data) {
            var blob = new Blob([data], {type: 'application/pdf'});
            var url = URL.createObjectURL(blob);
            $window.open(url);
        }).error(function () {
            $window.alert('Nie udało się wygenerować PDFa.');
        });
    };

    var ctrl = {};
    $scope.ctrl = ctrl;

    calcService.getGeographyTaxonomy().success(function (data) {
        m.geographyTaxonomy = data;
        ctrl.selectFirstVoivodship();
    });

    calcService.loadPollingStationsData().then(function (data) {
        m.candidates = data.candidates;
        m.pollingStationsData = data.pollingStationsData;

        ctrl.selectFirstPollingStation();
    });

    ctrl.selectFirstVoivodship = function () {
        if (typeof (m.geographyTaxonomy[0]) !== 'undefined') {
            m.voivodship = m.geographyTaxonomy[0];
        } else {
            m.voivodship = null;
        }
        ctrl.selectFirstDistrict();
    };

    ctrl.selectFirstDistrict = function () {
        if (typeof (m.voivodship.children[0]) !== 'undefined') {
            m.district = m.voivodship.children[0];
        } else {
            m.district = null;
        }

        ctrl.selectFirstCommunity();
    };

    ctrl.selectFirstCommunity = function () {
        if (typeof (m.district.children[0]) !== 'undefined') {
            m.community = m.district.children[0];
        } else {
            m.community = null;
        }
    };

    ctrl.selectFirstPollingStation = function () {
        if (typeof (m.pollingStationsData[0]) !== 'undefined') {
            m.pollingStation = m.pollingStationsData[0];
        } else {
            m.pollingStation = null;
        }

    };

    $('#barcode').JsBarcode(md5('OPENPKW PROOF OF CONCEPT'),{
                width:  1,
                height: 25,
                quite: 5,
                format: 'CODE128',
                displayValue: true,
                font:'Tahoma',
                textAlign:'center',
                fontSize: 10,
                backgroundColor:'',
                lineColor:'#000'
            }).attr('src');
}]);