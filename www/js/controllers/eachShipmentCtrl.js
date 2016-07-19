angular.module('starter.controllers')
.controller('eachShipmentCtrl',['$scope', '$state','shipmentREST',
    function($scope, $state, shipmentREST) {
    
    $scope.shipmentname="Spot for shipment name";
    $scope.photohere="photo to go here";
    $scope.shipmentissues="any issues";
    $scope.workername="workername";
    $scope.Shipment="Shipment Num";

}

]);