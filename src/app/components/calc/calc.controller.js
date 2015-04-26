(function() {
    'use strict';
    angular.module('app.calc')
    .controller('CalcController', CalcController);

    CalcController.$inject = ['CalcService', 'CalcPdfGeneratorService', 'FormMock',
                                'ValidationMessagesService', '$window', '$scope'];

    function CalcController(CalcService, CalcPdfGeneratorService, FormMock,
                            ValidationMessagesService, $window, $scope) {
        var vm = this;
        vm.printPdf = printPdf;
        vm.selectFirstVoivodship = selectFirstVoivodship;
        vm.selectFirstDistrict = selectFirstDistrict;
        vm.selectFirstCommunity = selectFirstCommunity;
        vm.selectFirstPollingStation = selectFirstPollingStation;
        vm.addEmptyCommissionMember = addEmptyCommissionMember;
        vm.loadMockFormData = loadMockFormData;
        vm.removeCommissionMember = removeCommissionMember;
        vm.commissionMemberRoles = [];
        vm.getHardErrorMessages = getHardErrorMessages;
        vm.hardErrorsExist = hardErrorsExist;
        /*calc formData begin*/
        vm.formData = {};
        vm.formData.voivodship = null;
        vm.formData.district = null;
        vm.formData.geographyTaxonomy = null;
        vm.formData.candidates = null;
        vm.formData.pollingStationsData = null;
        vm.formData.pollingStation = null;
        vm.formData.commissionMembers = [];
        /*calc formData end*/
        initialize();

        function printPdf() {
            CalcPdfGeneratorService.generatePdf(vm.formData);
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
            vm.commissionMemberRoles = ['', 'Członek',
                        'Zastępca Przewodniczącego', 'Przewodniczący'];
            if (vm.formData.commissionMembers.length === 0) {
                addEmptyCommissionMember();
            }

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

        function addEmptyCommissionMember() {
            vm.formData.commissionMembers.push({name1:'', name2:'', surname:'', role:'',
                sign:''});
        }

        function loadMockFormData() {
            FormMock.getExampleData().then(function(response) {vm.formData = response.data;
                console.log(response.data);});
        }
        function removeCommissionMember(index) {
            console.log(vm.formData.commissionMembers[index]);
            var member = vm.formData.commissionMembers[index];
            var confirmMessage = 'Czy na pewno chcesz usunąć wybranego członka: ' +
                member.name1 + ' ' + member.name2 + ' ' + member.surname;
            if ($window.confirm(confirmMessage)) {
                vm.formData.commissionMembers.splice(index, 1);
            }
        }
        function getHardErrorMessages() {
            return ValidationMessagesService.getHardErrors();
        }
        function hardErrorsExist() {
            return ValidationMessagesService.hardErrorsExist();
        }
    }
})();
