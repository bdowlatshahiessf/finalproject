//should PUSH info to make a new shipment//



angular.module('starter.controllers')
 .controller('addShipmentCtrl', ['$scope', '$state', 'shipmentREST', '$window',
  function($scope, $state, shipmentREST, $window) {



   // makes sure form is valid   

   $scope.user = {};
   $scope.addForm = function(aform) {
    if (aform.$invalid) {
     return alert("Please complete the form before proceeding.");
    }

    // talks to rest services
    // $scope.img1 = document.getElementById('imgURI').src;
    // // $scope.img2 = document.getElementById('imgURI2').src;
    // $scope.img3 = document.getElementById('imgURI3').src;
    shipmentREST.post($scope.user, $window.localStorage.token).then(function(response) {
     if (response.status == 200) {
      $state.go("shipmentCon");
      console.log(response);

      // lists errors


     }
    }, function(error) {
     if (error.status == 404) {
      alert("server not found");
     }
     return ("Please try again later");

    });

   };

  }
 ]);