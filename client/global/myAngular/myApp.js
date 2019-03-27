define(['router'], function () {
    var myApp = angular.module("myApp", ['ui.router']);

    //使用promise对象异步加载controllers等
    myApp.resolveFunc = function (loaders) {
        return function ($q) {
            if (!angular.isArray(loaders)) {
                return null;
            }
            var deferred = $q.defer();
            //异步加载controller／directive/filter/service
            require(loaders, function () {
                deferred.resolve();
            });
            return deferred.promise;
        }
    };

    myApp.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        myApp.register = {
            //得到$controllerProvider的引用,用来做按需加载
            controller: $controllerProvider.register,
            //保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            service: $provide.service
        };
    });

    myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise(function ($injector, $location) {
            return "/mainPage/agent";
        });
        $stateProvider
            .state("mainPage", {
                url: "/mainPage",
                views: {
                    'mainContain': {
                        templateUrl: "client/module/module-mainPage/mainPage.html"
                    }
                },
                resolve: {
                    loadCtrl: myApp.resolveFunc(["module/module-mainPage/mainPageController", "css!module/module-mainPage/mainPage.css"]),
                }
            })
            .state("mainPage.dashboard", {
                url: "/dashboard",
                views: {
                    'mainView': {
                        templateUrl: "client/module/module-dashboard/dashboard.html"
                    }
                },
                resolve: {
                    loadCtrl: myApp.resolveFunc(["module/module-dashboard/dashboardController", "css!module/module-dashboard/dashboard.css"]),
                }
            })
            .state("mainPage.agent", {
                url: "/agent",
                views: {
                    'mainView': {
                        templateUrl: "client/module/module-agent/agent.html"
                    }
                },
                resolve: {
                    loadCtrl: myApp.resolveFunc(["module/module-agent/agentController", "css!module/module-agent/agent.css"]),
                }
            })
            .state("mainPage.myCruise", {
                url: "/myCruise",
                views: {
                    'mainView': {
                        templateUrl: "client/module/module-myCruise/myCruise.html"
                    }
                },
                resolve: {
                    loadCtrl: myApp.resolveFunc(["module/module-myCruise/myCruiseController", "css!module/module-myCruise/myCruise.css"]),
                }
            })
            .state("mainPage.help", {
                url: "/help",
                views: {
                    'mainView': {
                        templateUrl: "client/module/module-help/help.html"
                    }
                },
                resolve: {
                    loadCtrl: myApp.resolveFunc(["module/module-help/helpController", "css!module/module-help/help.css"]),
                }
            })

        //禁用IE缓存
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    });
    return myApp;
})
