// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
    //controller: 'landingCtrl',
  })
  
  .state('addShipment', {
    url: '/addShipment',
    templateUrl: 'templates/addShipment.html',
    // controller: 'addShipmentCtrl',
  })
  
  .state('pastShipment', {
    url: '/pastShipment',
    templateUrl: 'templates/pastShipment.html',
    // controller: 'pastShipmentCtrl',
  })
  
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    // controller: 'registerCtrl',
  })
  
  .state('shipmentCon', {
    url: '/shipmentCon',
    templateUrl: 'templates/shipmentCon.html',
    // controller: 'templatesCtrl',
  })
  
  .state('viewshipment', {
    url: '/viewshipment',
    templateUrl: 'templates/viewshipment.html',
    // controller: 'viewshipmentCtrl',
  })
  
  .state('eachShipment', {
    url: '/eachShipment',
    templateUrl: 'templates/eachShipment.html',
    // controller: 'eachShipment',
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    // controller: 'loginCtrl',
  });
});