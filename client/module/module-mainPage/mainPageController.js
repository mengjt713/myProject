define(["app"], function (myApp) {
    myApp.register.controller('indexCtrl', function ($scope) {
        /*
         * 登出
         * */
        $scope.logOut = function () {
        }
    });

    myApp.register.controller('navCtrl', function ($scope, $rootScope, $state) {
        var sessionStorage = window.sessionStorage;

        if (sessionStorage.getItem("curSliderSwitch") == null) {
            $rootScope.sliderSwitch = true;
        }
        else {
            $rootScope.sliderSwitch = angular.fromJson(sessionStorage.getItem("curSliderSwitch"));
        }
        $rootScope.clickSlider = function () {
            $rootScope.sliderSwitch = !$scope.sliderSwitch;
            sessionStorage.setItem("curSliderSwitch", $rootScope.sliderSwitch);
        };

        if (angular.isString(sessionStorage.getItem("currentNavSelected"))) {
            $rootScope.currentNavSelected = sessionStorage.getItem("currentNavSelected");
        }
        else {
            $rootScope.currentNavSelected = "AGENT";
        }

        /**
         * 解决从主界面跳回：左侧菜单选中错误问题
         */
        if ($state.current.name.indexOf("mainPage.agent") > -1) {
            $rootScope.currentNavSelected = "AGENT";
            sessionStorage.setItem("currentNavSelected", "AGENT");
        }

        $scope.switchNav = function ($event, currentNav) {

            $rootScope.currentNavSelected = currentNav;
            sessionStorage.setItem("currentNavSelected", currentNav);
        };
    });
});
	