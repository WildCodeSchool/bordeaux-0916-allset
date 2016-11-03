((app) => {
    'use strict'
    app.component("assistance", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/assistance/assistance.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.assistance'))
