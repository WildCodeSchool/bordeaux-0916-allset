((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.myservices', {
            url:'/services/{myserviceUrl}',
            template: '<myservices />'
        })
    }])
})(angular.module('app.myservices', ['ui.router']))
