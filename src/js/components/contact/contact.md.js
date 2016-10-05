((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.form', {
            url:'/contact',
            template: '<contactform />'
        })
    }])
})(angular.module('app.form', ['ui.router']))
