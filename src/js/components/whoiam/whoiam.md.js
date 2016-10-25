((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.whoiam', {
            url:'/qui-sommes-nous',
            template: '<whoiam />'
        })
    }])
})(angular.module('app.whoiam', ['ui.router']))
