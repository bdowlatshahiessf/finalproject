angular.module('shipmentServices',[])
.service('shipmentServices',['$window',  function ($window ) {
    var service = this;
    var shipmentElements = {
        "shipment name": {},
        "photos": [],
        "shipment issues": {},
        "worker name": {}
       
    };
    var shipmentStack = [];
    
         service.getLists = function() {
     return JSON.parse($window.localStorage.shipmentlist || "[]");
       
   }} ]);