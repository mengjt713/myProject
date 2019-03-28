define(["app"], function(myApp) {
    myApp.register.controller('agentController', function ($scope, $location, $state, $rootScope, httpService) {
        $scope.osHandle = {
            curSelectTab:"all",
            osList:[],
            physicalNum:0,
            virtualNum:0,
            buildNum:0,
            idleNum:0,
            reSource:[],
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
                    onError: function(err){
                        console.log(err)
                    }
                });
            },
            deleteOs:function (item,ReIndex) {
                let that = this;
                let osIndex = getOsindex(item);
                that.osList[osIndex].resources.splice(ReIndex,1);
            },
            addResource:function () {
                document.querySelector("#myModal").style.display = "block";
            },
            close:function(){
                let that = this;
                document.querySelector("#myModal").style.display = "none";
                that.reSource = [];
            }


        };
        $scope.osHandle.getOsByType('all');

        function myFilter(list,type,value){
            return list.filter(function (item) {
                return item[type] ==value
            })
        }
        function getOsindex(item){
            for(let i = 0; $scope.osHandle.osList.length;i++){
                if(item.id ==$scope.osHandle.osList[i].id){
                        return i;
                }
            }
        }



    })
})