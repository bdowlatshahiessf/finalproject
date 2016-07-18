// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers','ngCordova','RESTservices'])

 
  .controller("camController", function($scope, $cordovaCamera) {
 
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
             $scope.imgURI2 = "data:image/jpeg;base64," + imageData;
             $scope.imgURI3 = "data:image/jpeg;base64," + imageData;
            
        }, function(err) {
           
        });
    }

})

 

  .controller("camController2", function($scope, $cordovaCamera) {
 
    $scope.takePicture2 = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
          
             $scope.imgURI2 = "data:image/jpeg;base64," + imageData;
            
            
        }, function(err) {
           
        });
    }

})


  .controller("camController3", function($scope, $cordovaCamera) {
 
    $scope.takePicture3 = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
             $scope.imgURI3 = "data:image/jpeg;base64," + imageData;
            
        }, function(err) {
           
        });
    }

})





.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  
  .state('landing', {
    url: '/',
    templateUrl: 'templates/landing.html',
      controller:'landingCtrl'

  })
  
  .state('addShipment', {
    url: '/addShipment',
    templateUrl: 'templates/addShipment.html',
     controller: 'addShipmentCtrl',
  })
  
  .state('pastShipment', {
    url: '/pastShipment',
    templateUrl: 'templates/pastShipment.html',
   controller: 'pastShipmentCtrl',
  })
  
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
     controller: 'registerCtrl',
  })
  
  .state('shipmentCon', {
    url: '/shipmentCon',
    templateUrl: 'templates/shipmentCon.html',
     controller: 'shipmentConCtrl',
  })
  
  .state('viewshipment', {
    url: '/viewshipment',
    templateUrl: 'templates/viewshipment.html',
     controller: 'viewshipmentCtrl',
  })
  
  .state('eachShipment', {
    url: '/eachShipment',
    templateUrl: 'templates/eachShipment.html',
     controller: 'eachShipmentCtrl',
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
     controller: 'loginCtrl',
  });
  
  
  
  
  
  
  
  
  
});