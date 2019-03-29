define(["app"], function (myApp) {
    myApp.register.controller('agentController', function ($scope, $location, $state, $rootScope, httpService) {
        $scope.osHandle = {
            curSelectTab: "all",
            osList: [],
            physicalNum: 0,
            virtualNum: 0,
            buildNum: 0,
            idleNum: 0,
            reSource: [],
            curSelectOs: {},
            queryOs: function (type) {
                //tab页切换查询os设备
                let that = this;
                that.curSelectTab = type;
                $scope.osHandle.getOsByType(type);
            },
            getOsByType: function (type) {
                //根据类型获取所有os设备
                let that = this;
                httpService.post({
                    url: 'action/agent/getAgent',
                    data: {
                        type: type
                    },
                    onSuccess: function (response) {
                        if (response) {
                            that.osList = response;
                            if (type == 'all') {
                                that.virtualNum = myFilter(that.osList, 'type', 'virtual').length;
                                that.physicalNum = myFilter(that.osList, 'type', 'physical').length;
                                that.buildNum = myFilter(that.osList, 'status', 'building').length;
                                that.idleNum = myFilter(that.osList, 'status', 'idle').length;
                            }
                        }
                    },
                    onError: function (err) {
                        console.log(err)
                    }
                });
            },
            deleteOs: function (item, ReIndex) {
                //删除资源
                let that = this;
                let osIndex = getOsindex(item);
                that.osList[osIndex].resources.splice(ReIndex, 1);
            },
            addResource: function (item) {
                //点击添加按钮弹出对话框
                let that = this;
                that.curSelectOs = item;
                $scope.modal.show();
            },
            sourceSubmit: function () {
                //添加资源
                if ($scope.osHandle.reSource.length != 0) {
                    let newReSource = $scope.osHandle.reSource.split(",");
                    let i = getOsindex($scope.osHandle.curSelectOs);
                    $scope.osHandle.osList[i].resources.push(...newReSource);
                    $scope.modal.close();
                }else {
                    return;
                }
            },


        };
        /*
        * 模态框
        * */
        $scope.modal = {
            close: function () {
                //关闭模态框
                document.querySelector("#myModal").style.display = "none";
                $scope.osHandle.reSource = [];
            },
            show: function () {
                //打开模态框
                document.querySelector("#myModal").style.display = "block";
            }
        }
        $scope.osHandle.getOsByType('all');
        /*
        * 工具函数，获取分类资源
        * */
        function myFilter(list, type, value) {
            return list.filter(function (item) {
                return item[type] == value
            })
        }
        /*
        * 获取当前设备在设备列表中index
        * */
        function getOsindex(item) {
            for (let i = 0; $scope.osHandle.osList.length; i++) {
                if (item.id == $scope.osHandle.osList[i].id) {
                    return i;
                }
            }
        }
    })
})