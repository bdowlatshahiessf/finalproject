

//should PUSH info to make a new shipment//



angular.module('starter.controllers')
.controller('addShipmentCtrl',['$scope', '$state','shipmentREST', '$window',
function($scope, $state, shipmentREST, $window) {



 // makes sure form is valid   

    $scope.user = {};
                $scope.addForm = function(aform) {
         if(aform.$invalid){
          return alert("Please complete the form before proceeding.");
         } 
 
 // talks to rest services
 
  shipmentREST.post($scope.user).then(function(response) {
  if (response.status == 200) {
    $window.localStorage.token = response.data.token;
    $window.localStorage.userID = response.data.id;
  $state.go("shipmentCon");
  console.log(response);
  
  // lists errors
  
  
 }}, function(error) {
  if (error.status == 404) {
  alert("server not found");
  }
  return ("Please try again later");
 
 });
 
};
                 
                }]);