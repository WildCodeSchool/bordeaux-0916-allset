((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.form', {
            url:'/form',
            template: '<form />'
        })
    }])
})(angular.module('app.form', ['ui.router']))
