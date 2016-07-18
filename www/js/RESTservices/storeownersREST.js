  angular.module("RESTservices", [])
   .service('storeownersREST', function($http) {
    var storeownersREST = this;
    storeownersREST.post = function(newUserData) {
     return $http({
      url: "https://finalproject-bdowlatshahiessf.c9users.io/api/storeowners",
      method: 'POST',
      data: newUserData
     });
    };

storeownersREST.login = function(data) {
     return $http({
      url: "https://finalproject-bdowlatshahiessf.c9users.io/api/storeowners/login",
      method: 'POST',
      data: data
     });
    };

   });