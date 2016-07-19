  angular.module("RESTservices")
  .service('shipmentREST', ['$http', '$window', function($http, $window){
    var shipmentREST = this;
    
  shipmentREST.post = function(newShipData, token) {
      newShipData.userID= $window.localStorage.userID;
     return $http({
      url: 'https://finalproject-bdowlatshahiessf.c9users.io/api/shipments/',
      method: 'POST',
      data: newShipData,
      headers: {
                  'Authorization': token,
              }
     });
    };

shipmentREST.take = function(token, userID) {
    token=$window.localStorage.token;
     return $http({
      url: 'https://finalproject-bdowlatshahiessf.c9users.io/api/shipments?filter[where][userID]=' + $window.localStorage.userID,
      method: 'GET',
       headers: {
            'Authorization': token,
        }
      
     });
    };

  }]);
  
  
  
//   