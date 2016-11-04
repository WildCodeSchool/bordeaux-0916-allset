((app) => {
    'use strict'
    app.component("contactform", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/contact/contact.html',
        controller: function($state, $http) {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {

                    }
                },
                $onInit() {},
                saveUser() {
                    //récupération des champs du formulaire via les ng-model
                    var message = this.contactInfo;
                    $http.post('/mail', message).
                    success(function(message, status, headers, config) {
                        //toastr : affichage des popups
                        toastr.success('Votre message a bien été envoyé', 'Message envoyé')
                        $state.reload()
                    }).
                    error(function(message, status, headers, config) {
                        toastr.error('Une erreur est survenue, veuillez réessayer plus tard', 'Erreur')
                    })
                }
            })
        }
    })
})(angular.module('app.form'))
