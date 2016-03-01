'use strict';

angular.module('belatrixApp')

        .constant("baseURL","http://localhost:300")

        .factory('directorsFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var directors = {};

            directors.getDirectors = function(){
                return $resource(baseURL+"/db");
            };

            directors.getDirector = function (index) {
                return $resource(baseURL+"/:id",null,  {'get':{method:'GET' }});
            };

            return directors;
    
        }])     
;