angular.module('kaifanla',['ngRoute',
                            'ngAnimate',
                            'kaifanlaController',
                            'kaifanlaService',
                            'kaifanlaFilter'])
    .config(function($routeProvider){
            $routeProvider
                .when('/start',{
                    templateUrl:'view/start.html',
                    controller:'startCtrl'
                 })
                .when('/main',{
                    templateUrl:'view/main.html',
                    controller:'mainCtrl'
                })
                .when('/detail/:dno',{
                    templateUrl:'view/detail.html',
                    controller:'detailCtrl'
                })
                .otherwise({
                    redirectTo:'/start'
                })
    })