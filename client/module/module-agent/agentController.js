define(["app"], function(myApp) {
    myApp.register.controller('agentController', function ($scope, $location, $state, $rootScope, msgService, httpService) {
        httpService.post({
            url: 'action/agent/getAgent',
            data:{
                number:'1'
            },
            onSuccess: function(response){
            },
            onError: function(response){
                msgService.promt(response.message);
            }
        });
    })
})