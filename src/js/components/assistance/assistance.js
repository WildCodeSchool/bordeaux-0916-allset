((app) => {
    'use strict'
    app.component("assistance", {
        bindings:{
          editMode:"<",
          ngModel:"="
        },
        templateUrl: 'js/components/assistance/assistance.html',
        controller: function(UserService){
          angular.extend(this,{
            connect(){
              UserService.connect(this.user).then((res) => {
                //OK
              }).catch(() => {
                //ERROR
              })
            }
          })
        }
    })
})(angular.module('app.assistance'))
