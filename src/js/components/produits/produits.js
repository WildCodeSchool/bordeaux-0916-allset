((app) => {
    'use strict'
    app.component("produits", {
        templateUrl: 'js/components/produits/produits.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.produits'))
