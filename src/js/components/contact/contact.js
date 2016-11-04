((app) => {
    'use strict'
    app.component("contactform", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/contact/contact.html',
        controller: function($state) {
            angular.extend(this, {
                page: {
                    name: 'home',
                    content: {

                    }
                },
                $onInit() {},
                saveUser() {
                    var message = this.contactInfo; //contenu de l'email transformé en variable
                    console.log('SEND !!', message); //contenu du mail mis dans la console
                    toastr.success('Votre message a bien été envoyé', 'Message envoyé'); //toaster
                    $state.reload(); //refresh
                }
            })
        }
    })
})(angular.module('app.form'))
