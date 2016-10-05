((app) => {
    'use strict'

    var references = [
        {
            name : 'Groupe Chèque Déjeuner',
            image: 'http://www.crt.asso.fr/fileadmin/user_upload/img/UP_ChequeDejuner_2L.jpg'
        },{
            name : 'Etanco',
            image: 'http://static.iquesta.com/logo/iquesta/Etanco_Logo.jpg'
        },{
            name : 'Sage',
            image: 'http://www.sage.co.uk/~/media/markets/uk/images/corporate/sage-green-logo.jpg'
        },{
            name : 'Bayern LB',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bayernlb-logo.svg/2000px-Bayernlb-logo.svg.png'
        }
    ]

    app.component("references", {
        templateUrl: 'js/components/common/references.html',
        controller: function($scope) {
            $scope.references = references
        }
    })
})(angular.module('app.common'))
