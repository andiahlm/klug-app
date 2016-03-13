'use strict';

var app = angular.module('app');

app.controller('WordsController', function ($scope, AuthenticationService, MediaService) {
    
    var user = AuthenticationService.GetCurrentUser();



    MediaService.UserWords(user.userid).then( function (data) {

        $scope.userwords = data;

    });


});

