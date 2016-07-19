angular.module('starter.controllers')
.controller('viewshipmentCtrl',['$scope', '$state','shipmentREST','shipments',
        function($scope, $state, shipmentREST, shipments) {
 $scope.shipments = shipments;

 

    
     
    
 
 


}]);

//creates a list using GET filerting by store name//



