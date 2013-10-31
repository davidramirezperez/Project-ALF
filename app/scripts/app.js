'use strict';

angular.module('alfApp', ['ngUpload'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/mapping', {
        templateUrl: 'views/mapping.html',
        controller: 'MappingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
 