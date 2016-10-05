((app) => {
    'use strict'
    app.component("mininavbar", {
        templateUrl: 'js/components/common/mini-navbar.html',
        controller: function($scope, $location, $anchorScroll) {
      $scope.gotoBottom = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('fixed-bottom');

        // call $anchorScroll()
        $anchorScroll();
      }
    }
}) //(window.angular);



})(angular.module('app.common'))
