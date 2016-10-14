((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.assistance', {
            url:'/assistance',
            template: '<assistance />'
        })
    }])
})(angular.module('app.assistance', ['ui.router']))
