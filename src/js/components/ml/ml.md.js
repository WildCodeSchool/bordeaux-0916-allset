((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.ml', {
            url:'/mentions-legales',
            template: '<ml />'
        })
    }])
})(angular.module('app.ml', ['ui.router']))
