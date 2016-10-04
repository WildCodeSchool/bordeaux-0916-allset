((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.contact', {
            url:'/',
            template: '<contact />'
        })
    }])
})(angular.module('app.contact', ['ui.router']))
