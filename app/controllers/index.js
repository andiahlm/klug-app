'use strict';
var app = angular.module('app');

app.controller('AppController', function ($rootScope, $scope, $location, $auth) {

	$scope.user = $rootScope.user;

	$scope.logOut = function() {
      $auth.signOut()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

});