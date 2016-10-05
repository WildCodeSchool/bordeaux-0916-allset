((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.articles', {
            url:'/services/{{url}}',
            template: '<articles />'
        })
    }])
})(angular.module('app.articles', ['ui.router']))
