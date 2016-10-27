((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.lesapropos', {
            url:'/qui-sommes-nous/{lesaproposUrl}',
            template: '<lesapropos />'
        })
    }])
})(angular.module('app.lesapropos', ['ui.router']))
