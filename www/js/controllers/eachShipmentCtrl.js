angular.module('starter.controllers')
.controller('eachShipmentCtrl',['$scope', '$state',
    function($scope, $state) {
    
    $scope.shipmentname="Spot for shipment name";
    $scope.photohere="photo to go here";
    $scope.shipmentissues="any issues";
    $scope.workername="workername";
    $scope.Shipment="Shipment Num";

}

]);