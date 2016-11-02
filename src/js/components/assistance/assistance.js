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
                    }).catch(() => {
                        //ERROR
                    })
                },
                disconnect() {
                    UserService.disconnect(this.user).then((res) => {
                        $state.reload()
                    }).catch(() => {
                        //ERROR
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
