'use strict';

angular.module('AngularApp')

        .controller('ItemsController', ['$scope', '$state', 'itemsFactory', function($scope, $state, itemsFactory, item) {

            $scope.filter_parameter = "";
            $scope.loading = true;

            $scope.deleteItem = function(item) {
                if(confirm('Are you sure?')){
                    $scope.loading = true;
                    itemsFactory.getItems_id().delete({id:parseInt(item.id,10)})
                    .$promise.then(
                        function(){
                            $scope.items.splice( $scope.items.indexOf(item), 1);
                            $scope.message = 'The item has been deleted successfully';
                            $('.flash-message').addClass('alert-success').show();
                            $scope.loading = false;
                        },
                        function(response){
                            $scope.message = "Error: "+response.status + " " + response.statusText;
                            $('.flash-message').addClass('alert-danger').show();
                            $scope.loading = false;
                        }
                    );

                } 
            }

            $scope.items = itemsFactory.getItems().query()
                .$promise.then(
                    function(response){
                        $scope.items = response;
                        $scope.loading = false;
                    },
                    function(response) {
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                        $('.flash-message').addClass('alert-danger').show();
                        $scope.loading = false;
                    }
                );

            
        }])

        .controller('NewItemController', ['$scope', '$state', 'itemsFactory', function($scope, $state, itemsFactory) {

            $scope.newItem = {id:"", name:"", type:"", category:"", description:"" };
            $scope.newItem.date = new Date().toISOString();

            $scope.addItem = function() {
                $scope.loading = true;
                itemsFactory.getItems().save($scope.newItem)
                    .$promise.then(
                        function(){
                            $('.flash-message').addClass('alert-success').show();
                            $scope.message = 'The item has been added successfully';
                            $scope.loading = false;
  
                        },
                        function(response){
                            $scope.message = "Error: "+response.status + " " + response.statusText;
                            $('.flash-message').addClass('alert-danger').show();
                            $scope.loading = false;
                        }
                    );
            }
            
        }])

        .controller('EditItemController', ['$scope', '$stateParams','$state', 'itemsFactory', function($scope, $stateParams, $state, itemsFactory) {

            $scope.item = itemsFactory.getItems_id().get({id:parseInt($stateParams.id,10)})
            $scope.editItem = function() {
                $scope.loading = true;
                itemsFactory.getItems_id().update({id:$scope.item.id},$scope.item)
                    .$promise.then(
                        function(){
                            $scope.message = 'The item has been updated successfully';
                            $('.flash-message').addClass('alert-success').show();
                            $scope.loading = false;
                        },
                        function(response) {
                            $scope.message = "Error: "+response.status + " " + response.statusText;
                            $('.flash-message').addClass('alert-danger').show();
                            $scope.loading = false;
                        }
                    );
            }
            
        }])

        .controller('ViewItemController', ['$scope', '$stateParams', 'itemsFactory', function($scope, $stateParams, itemsFactory) {

            $scope.loading = true;
            $scope.item = itemsFactory.getItems_id().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                function(response){
                    $scope.item = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                    $('.flash-message').addClass('alert-danger').show();
                    $scope.loading = false;
                }
            );
            
        }])
;