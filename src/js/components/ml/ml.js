((app) => {
    'use strict'
    app.component("ml", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/ml/ml.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.ml'))
