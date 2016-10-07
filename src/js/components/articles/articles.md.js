((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.articles', {
            url:'/services/ + articles.url',
            template: '<articles />'
        })
    }])
})(angular.module('app.articles', ['ui.router']))
