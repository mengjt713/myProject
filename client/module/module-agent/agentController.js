define(["app"], function(myApp) {
    myApp.register.controller('agentController', function ($scope, $location, $state, $rootScope, msgService, httpService) {
        $scope.osHandle = {
            curSelectTab:"all",
            osList:[],
            queryOs:function(type){
                let that = this;
                that.curSelectTab = type;
                $scope.osHandle.getOsByType(type);
            },
            getOsByType:function(type){
                let that = this;
                httpService.post({
                    url: 'action/agent/getAgent',
                    data:{
                        type:type
                    },
                    onSuccess: function(response){
                        if(response){
                            that.osList = response;
                        }
                    },
                    onError: function(response){
                        msgService.promt(response.message);
                    }
                });
            }
        };
        $scope.osHandle.getOsByType('all');

    })
})