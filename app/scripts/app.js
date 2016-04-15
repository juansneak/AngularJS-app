'use strict';

angular.module('AngularApp', ['ui.router','ngResource','angularUtils.directives.dirPagination'])
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

            .state('app.settings', {
                url: 'settings',
                views: {
                    'content@': {
                        templateUrl : 'views/settings.html',
                   }
                }
            })

            .state('app.items', {
                url: 'items',
                views: {
                    'content@': {
                        templateUrl : 'views/items.html',
                        controller  : 'ItemsController'
                   }
                }
            })

            .state('app.new', {
                url: 'items/new',
                views: {
                    'content@': {
                        templateUrl : 'views/new.html',
                        controller  : 'NewItemController'
                   }
                }
            })

            .state('app.edit', {
                url: 'item/:id/edit',
                views: {
                    'content@': {
                        templateUrl : 'views/edit.html',
                        controller  : 'EditItemController'
                   }
                }
            })

            .state('app.detail', {
                url: 'item/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/detail.html',
                        controller  : 'ViewItemController'
                   }
                }
            });
    })
;