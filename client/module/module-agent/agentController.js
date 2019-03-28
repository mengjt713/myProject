define(["app"], function(myApp) {
    myApp.register.controller('agentController', function ($scope, $location, $state, $rootScope, msgService, httpService) {
        $scope.osHandle = {
            curSelectTab:"all",
            osList:[],
            physicalNum:0,
            virtualNum:0,
            buildNum:0,
            idleNum:0,
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
                            if(type=='all'){
                                that.virtualNum = myFilter(that.osList,'type','virtual').length;
                                that.physicalNum = myFilter(that.osList,'type','physical').length;
                                that.buildNum = myFilter(that.osList,'status','building').length;
                                that.idleNum = myFilter(that.osList,'status','idle').length;
                            }
                        }
                    },
                    onError: function(response){
                        msgService.promt(response.message);
                    }
                });
            }
        };
        $scope.osHandle.getOsByType('all');

        function myFilter(list,type,value){
            return list.filter(function (item) {
                return item[type] ==value
            })
        }

    })
})