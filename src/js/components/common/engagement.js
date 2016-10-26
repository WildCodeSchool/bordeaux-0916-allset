((app) => {
    'use strict'

    app.component("engagement", {
      bindings:{
        editMode:"<",
        ngModel:"="
      },
        templateUrl: 'js/components/common/engagement.html',
      })
})(angular.module('app.common'))
