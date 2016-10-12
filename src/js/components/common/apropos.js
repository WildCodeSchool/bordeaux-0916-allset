((app) => {
    'use strict'
    app.component("apropos", {
        templateUrl: 'js/components/common/apropos.html',
        controller: ['$stateParams', function($stateParams) {
            angular.extend(this, {
                lesapropos: {
                    'notre-metier': {
                        title: 'Notre Métier',
                        subtitle: 'Sous titre',
                        image: '',
                        texte: ''

                    },
                    'nos-demarches': {
                        title: 'Nos démarches',
                        subtitle: 'Sous titre',
                        image: '',
                        texte: ''

                    },
                    'notre-organisation': {
                        title: 'Notre Organisation',
                        subtitle: 'Sous Titre',
                        image: '',
                        texte: ''

                    }
                },
                $onInit() {
                    this.selectedApropos = this.lesapropos[$stateParams.lesaproposUrl]
                }

            })
        }]
    })

})(angular.module('app.common'))
