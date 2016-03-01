'use strict';

angular.module('belatrixApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })

            .state('app.directors', {
                url: 'directors',
                views: {
                    'content@': {
                        templateUrl : 'views/directors.html',
                        controller  : 'DirectorsController'
                   }
                }
            })

            .state('app.detail', {
                url: 'director/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/detail.html',
                        controller  : 'DetailController'
                   }
                }
            });
    })
;