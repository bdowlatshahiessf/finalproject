  angular.module("RESTservices", [])
   .service('storeownersREST',['$http', '$window', function($http, $window) {
    var storeownersREST = this;
    storeownersREST.post = function(newUserData) {
     return $http({
      url: "https://finalproject-bdowlatshahiessf.c9users.io/api/storeowners",
      method: 'POST',
      data: newUserData,
      headers: {
                  'Authorization': newUserData,
              }
     });
    };

storeownersREST.login = function(data) {
     return $http({
      url: "https://finalproject-bdowlatshahiessf.c9users.io/api/storeowners/login",
      method: 'POST',
      data: data,
      
     });
    };
storeownersREST.logout = function(){
 return $http({
  url:"https://finalproject-bdowlatshahiessf.c9users.io/api/storeowners/logout",
  method:'POST',
  header: {
   'Authorization':$window.localStorage.token
  }
 });
};
   }]);