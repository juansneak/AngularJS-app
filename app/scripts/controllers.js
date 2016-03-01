'use strict';

angular.module('belatrixApp')

        .controller('DetailController', ['$scope', '$stateParams', 'directorsFactory', function($scope, $stateParams, directorsFactory) {

            $scope.director = directorsFactory.getDirector().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                function(response){
                    $scope.director = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
            
        }])

        .controller('DirectorsController', ['$scope', 'directorsFactory', function($scope, directorsFactory) {

        $scope.directors = directorsFactory.getDirectors().query()
            .$promise.then(
                function(response){
                    $scope.directors = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
            
        }])

;