((app) => {
    'use strict'
    app.component("assistance", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/assistance/assistance.html',
        controller: function(UserService, $state) {
            angular.extend(this, {
                $onInit() {
                    UserService.getCurrent().then((user) => {
                        this.user = user
                    }).catch((err) => {
                        //ERROR
                    })
                },
                connect() {
                    UserService.connect(this.user).then((res) => {
                        $state.reload()
                        toastr.success("Vous êtes connecté", "Connection")
                    }).catch(() => {
                        toastr.error('Vos identifiants sont incorrects', 'Erreur');
                    })
                },
                disconnect() {
                    UserService.disconnect(this.user).then((res) => {
                        $state.reload()
                        toastr.success("Vous êtes déconnecté", "Déconnection")
                    }).catch(() => {
                        toastr.error('Veuillez actualiser la page', 'Erreur');
                    })
                },
                page: {
                    name: 'home',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.assistance'))
