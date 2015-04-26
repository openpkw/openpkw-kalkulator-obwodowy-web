(function() {
    'use strict';
    angular
        .module('validation.messages', [])
        .service('ValidationMessagesService', ValidatorMessagesService);

    function ValidatorMessagesService() {
        var hardErrors = {};
        var softErrors = {};

        var service = {
            addHardError: addHardError,
            getHardErrors: getHardErrors,
            hardErrorsExist: hardErrorsExist,
            softErrorsExist: softErrorsExist,
            getSoftErrors: getSoftErrors
        };

        function addHardError(key, message) {
            hardErrors[key] = {key:key, message:message};
        }
        function getHardErrors() {
            return hardErrors;
        }
        function hardErrorsExist() {
            return !angular.equals({}, hardErrors);
        }
        function getSoftErrors() {
            return softErrors;
        }
        function softErrorsExist() {
            return !angular.equals({}, softErrors);
        }

        return service;
    }
})();
