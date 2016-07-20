angular.module('starter.controllers')
.controller('shipmentConCtrl',['$scope', '$state', '$window', function($scope, $state, $window){
        $scope.logout=function(){
    delete $window.localStorage.token;
    delete $window.localStorage.userID;
    $state.go('landing');
    };







}]);

//just buttons//