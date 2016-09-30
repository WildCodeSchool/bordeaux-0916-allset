((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.produits', {
            url:'/produits',
            template: '<produits />'
        })
    }])
})(angular.module('app.produits', ['ui.router']))
