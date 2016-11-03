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
                    var message = this.contactInfo;
                    console.log('SEND !!', message);
                    toastr.success('Votre message a bien été envoyé', 'Message envoyé');
                    $state.reload();
                }
            })
        }
    })
})(angular.module('app.form'))
