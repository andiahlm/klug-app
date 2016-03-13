
'use strict';

var app = angular.module('app');

app.factory('MediaService', function ($http) {

    var service = {};

    service.Medium = medium;
    service.Media = media;


    return service;    

    function medium(id) { 
        return $http.get('http://localhost:3000/media/' + id + '/translate' ).then(handleSuccess, handleError('Error getting media'));
    }

    function media() { 
        return $http.get('http://localhost:3000/media').then(handleSuccess, handleError('Error getting all media'));
    }


    function handleSuccess(response) {
        return response.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
});
