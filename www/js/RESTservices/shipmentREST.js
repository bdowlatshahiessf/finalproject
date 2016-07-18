  angular.module("RESTservices")
  .service('shipmentREST', ['$http', '$window', function($http, $window){
    var shipmentREST = this;
  shipmentREST.post = function(newShipData) {
     return $http({
      url: 'https://finalproject-bdowlatshahiessf.c9users.io/api/shipments/',
      method: 'POST',
      data: newShipData,
      headers: {
                  'Authorization': newShipData,
              }
     });
    };

shipmentREST.login = function(token, userID) {
     return $http({
      url: 'https://finalproject-bdowlatshahiessf.c9users.io/api/shipments/?filter[where][userID]=' + $window.localStorage.userID,
      method: 'GET',
       headers: {
            'Authorization': token
        }
      
     });
    };

  }]);