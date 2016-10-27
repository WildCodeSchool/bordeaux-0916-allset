((app) => {
    'use strict'
    app.component("myservices", {
        templateUrl: 'js/components/myservices/myservices.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.common'))
