'use strict';

angular.module('AngularApp')

        .constant("baseURL","http://localhost:300")

        .factory('itemsFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var items = {};

            items.getItems = function(){
                return $resource(baseURL+"/items");
            };

            items.getItems_id = function(){
                return $resource(baseURL+"/items/:id", null, {'update':{method:'PUT' }});
            };

            return items;
    
        }])     
;