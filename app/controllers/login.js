'use strict';

var app = angular.module('app');

app.controller('LoginController', function ($scope, $location, $auth, FlashService) { //


    $scope.handleLoginBtnClick = function() {

        console.log("Hello World");
        $auth.submitLogin($scope.loginForm)
            .then(function(resp) {
          // handle success response
            $location.path('/media');
            })
            .catch(function(resp) {
          // handle error response
        });
    };
});

