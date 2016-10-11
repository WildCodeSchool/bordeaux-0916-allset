((app) => {
    'use strict'
    app.component("myservice", {
        templateUrl: 'js/components/common/myservice.html',
        controller: ['$stateParams', function($stateParams) {
            angular.extend(this, {
                myservices: {
                    'allset-cabling-and-security': {
                        title: 'AllSet Cabling & Security',
                        subtitle: 'AllSet Cabling & Security',
                        image: 'AllSet Cabling & Security',
                        texte: 'AllSet Cabling & Security'

                    },
                    'allset-integrateur-de-service': {
                        title: 'AllSet Intégrateur de Service',
                        subtitle: 'AllSet Intégrateur de Service',
                        image: 'AllSet Intégrateur de Service',
                        texte: 'AllSet Intégrateur de Service'

                    },
                    'allset-telecom-et-hebergement': {
                        title: 'AllSet Telecom et Hébergement',
                        subtitle: 'AllSet Telecom et Hébergement',
                        image: 'AllSet Telecom et Hébergement',
                        texte: 'AllSet Telecom et Hébergement'

                    },
                    'urban-service-network': {
                        title: 'Urban Service Network',
                        subtitle: 'Urban Service Network',
                        image: 'Urban Service Network',
                        texte: 'Urban Service Network'
                    }
                },
                $onInit() {
                    this.selectedService = this.myservices[$stateParams.myserviceUrl]
                }

            })
        }]
    })

})(angular.module('app.common'))
