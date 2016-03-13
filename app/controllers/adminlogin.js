'use strict';

var app = angular.module('app');

app.controller('AdminloginController', function ($scope, $location, $auth, FlashService) { //


    $scope.handleLoginBtnClick = function() {
        $auth.submitLogin($scope.loginForm, {
            config: 'admin'
        }).then(function(resp) {
          // handle success response
            $location.path('/adminmedia');
        }).catch(function(resp) {
          // handle error response
        });
    };
});

