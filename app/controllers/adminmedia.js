'use strict';

var app = angular.module('app');

app.controller('AdminmediaController', function ($rootScope, $scope, MediaService, WordService) {

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