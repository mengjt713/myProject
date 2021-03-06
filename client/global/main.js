;
require.config({
    baseUrl: './././client',
    paths: {
        'angular': 'global/lib/angular/angular',
        'router': 'global/lib/angular/angular-ui-router-v0.2.18',
        'app': 'global/myAngular/myApp',
        'filter': 'global/myAngular/myFilter',
        'service': 'global/myAngular/myService',
        'directive': 'global/myAngular/myDirective',
    },
    map: {
        '*': {
            'css': 'global/lib/require/require-css'
        }
    },
    shim: {
        'app': {
            deps: ['angular', 'router']
        },
        'router': {
            deps: ['angular']
        },
        'directive': {
            deps: ['app']
        },
        'service': {
            deps: ['app']
        },
        'filter': {
            deps: ['app']
        }
    }
});
// 手动初始化模块
require(['app'], function () {
    require(['filter', 'service', 'directive'], function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });
    });
});