((app) => {
    'use strict'
    app.component("contactform", {
        templateUrl: 'js/components/contact/contact.html',
        controller: function($scope) {
            $scope.phoneNumbr =  /(0|\+33)[1-9]( *[0-9]{2}){4}/;

        }
    })
})(angular.module('app.form'))
