((app) => {
    'use strict'
    app.component("assistance", {
        templateUrl: 'js/components/assistance/assistance.html',
        controller: function(UserService){
          angular.extend(this,{
            connect(){
              debugger
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
