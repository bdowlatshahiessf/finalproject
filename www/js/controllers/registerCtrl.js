angular.module('starter.controllers')
.controller('registerCtrl',['$scope', '$state', 'storeownersREST', '$window',
function($scope, $state, storeownersREST, $window) {



 // makes sure form is valid   
    $scope.user = {};
                $scope.regForm = function(rform) {
         if(rform.$invalid){
          return alert("Please complete the form before proceeding.");
         } 
 
 // talks to rest services
 
  storeownersREST.post($scope.user).then(function(response) {
  if (response.status == 200) {
    $window.localStorage.token = response.data.token;
    $window.localStorage.userID = response.data.id;
   $state.go("shipmentCon");
   console.log(response);
  
  // lists errors
  
  
 }}, function(error) {
  if (error.status == 422) {
   alert("email exits");
  }
  else if (error.status == 404) {
   alert("server not found");
  }
  return ("Please try again later");
 
 });
 
};
                 
                }]);

//needs to PUSH new info to backend making a user, then go to shipment control//