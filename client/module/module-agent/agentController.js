define(["app"], function(myApp) {
    myApp.register.controller('agentController', function ($scope, $location, $state, $rootScope, msgService, httpService) {
        $scope.curSelectTab = "all";
        $scope.queryOs = function(type){
            $scope.curSelectTab = type;
        };
        function getOs(type){
            httpService.post({
                url: 'action/agent/getAgent',
                data:{
                    type:type
                },
                onSuccess: function(response){
                    if(response){
                        $scope.osList = response;
                    }
                },
                onError: function(response){
                    msgService.promt(response.message);
                }
            });
        }
        getOs('all');

    })
})