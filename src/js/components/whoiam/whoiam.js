((app) => {
    'use strict'
    app.component("whoiam", {
        templateUrl: 'js/components/whoiam/whoiam.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.whoiam'))
