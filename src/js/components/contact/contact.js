((app) => {
    'use strict'
    app.component("contactform", {
        templateUrl: 'js/components/contact/contact.html',
        controller: function($scope) {
            $scope.phoneNumberPattern = (function() {
                var regexp = /(0|\+33)[1-9]( *[0-9]{2}){4}/;
                return {
                    test: function(value) {
                        if ($scope.requireTel === false) {
                            return true;
                        }
                        return regexp.test(value);
                    }
                };
            })();
        }
    })
})(angular.module('app.form'))
