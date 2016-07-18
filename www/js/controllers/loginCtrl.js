angular.module('starter.controllers')
.controller('loginCtrl',['$scope', '$state', 'storeownersREST', '$window',
function($scope, $state, storeownersREST, $window) {


$scope.user = {};
   $scope.logForm = function(lform) {
    if (lform.$invalid) {
     return alert("Please complete the form before proceeding.");
    }

 storeownersREST.login($scope.user).then(function(response) {
  if (response.status == 200) {
    $window.localStorage.token = response.data.id;
    $window.localStorage.userID = response.data.userId;
   $state.go("shipmentCon");
   console.log(response);
  
  }
    }, function(error) {
     if  (error.status == 404) {
      alert("server not found");
     }
     return ("Please try again later");


    });
 
};
                 
                }]);


// needs to compare input to back end and GET info that maches StoreName then go to shipment control//
