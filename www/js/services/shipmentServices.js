angular.module('shipmentServices',[])
.service('shipmentServices',['$window','shipmentREST',  function ($window, shipmentREST ) {
    var service = this;
    var shipmentElements = {
        "shipment name": {},
        "photos": [],
        "shipment issues": {},
        "worker name": {}
       
    };
    var shipmentStack = [];
    
         service.getLists = function() {
        return shipmentREST.take();
   }} ]);