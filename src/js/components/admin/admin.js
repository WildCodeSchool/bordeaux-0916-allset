((app) => {
    'use strict'
    app.component("admin", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/admin/admin.html',
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
                        $state.go('app.dashboard')
                        toastr.success("Vous êtes connecté", "Connexion")
                    }).catch(() => {
                        toastr.error('Vos identifiants sont incorrects', 'Erreur');
                    })
                },
                disconnect() {
                    UserService.disconnect(this.user).then((res) => {
                        $state.reload()
                        toastr.warning("Vous êtes déconnecté", "Déconnexion")
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
})(angular.module('app.admin'))
