'use strict';

var app = angular.module('app');

app.controller('MediaController', function ($rootScope, $scope, MediaService, WordService) {

    $scope.initController = function () {
        loadMedia();
    }

    function loadMedia () {
        MediaService.Media()
            .then(function (data) {
                $scope.mediaList = data;
            });
    }
});