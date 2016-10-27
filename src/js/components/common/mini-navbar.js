((app) => {
    'use strict'
    app.component("mininavbar", {
        bindings: {
            editMode: '=',
            ngModel: '='
        },
        templateUrl: 'js/components/common/mini-navbar.html',
        controller: function(PageService, UserService) {
            angular.extend(this, {
                initialData: null,
                $onInit() {
                  UserService.getCurrent().then((user) => {
                        this.user = user
                    }).catch((err) => {

                    })

                    PageService.get(this.ngModel.name).then((res) => {
                        if (res.data.content)
                            res.data.content = JSON.parse(res.data.content)
                        this.ngModel = res.data

                        this.initialData = this.ngModel
                    })
                },
                save() {
                    PageService.save(Object.assign({}, this.ngModel)).then((res) => {
                        this.editMode = false
                    })
                },
                cancel() {
                    this.editMode = false
                    this.ngModel = this.initialData
                }
            })
        }
    })
})(angular.module('app.common'))
