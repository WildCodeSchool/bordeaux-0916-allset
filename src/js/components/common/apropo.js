((app) => {
    'use strict'
    app.component("apropo", {
        bindings:{
          editMode:"<",
          ngModel:"="
        },
        templateUrl: 'js/components/common/apropo.html'
    })
})(angular.module('app.common'))
