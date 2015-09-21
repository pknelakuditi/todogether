'use strict';

angular.module('myApp.save', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('create', {
            url: "/save",
            templateUrl: "save/list.html",
            controller:"listCtrl as lc"
        });
}]);
angular.module('myApp').requires.push('myApp.save');
