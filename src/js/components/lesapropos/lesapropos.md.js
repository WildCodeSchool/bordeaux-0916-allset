((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.lesapropos', {
            url:'/lesapropos/{lesaproposUrl}',
            template: '<lesapropos />'
        })
    }])
})(angular.module('app.lesapropos', ['ui.router']))
