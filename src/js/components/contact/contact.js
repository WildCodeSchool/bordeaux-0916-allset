((app) => {
    'use strict'
    app.component("contactform", {
        templateUrl: 'js/components/contact/contact.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {
                },
                saveUser() {
                  var message = this.contactInfo;
                  console.log('SEND !!', message);
                }
            })
        }]
    })
})(angular.module('app.form'))



// angular.module('validateForm', [])
//     .controller: function($scope) {
//         $scope.phoneNumbr = /(0|\+33)[1-9]( *[0-9]{2}){4}/;
//
//     }
