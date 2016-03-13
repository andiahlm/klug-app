
'use strict';

var app = angular.module('app');

app.factory('WordService', function ($http) {

    var service = {};

    service.word = word;
    service.addUserWord = addUserWord;
    service.removeUserWord = removeUserWord;


    return service;  

    function word(id) { 
        return $http.get('http://localhost:3000/userwords/' + id ).then(handleSuccess, handleError('Error getting media'));
    }

    function addUserWord(wordid) { 
        return $http.post('http://localhost:3000/userwords/add', {userword: {word_id: wordid}}).then(handleSuccess, handleError('Error adding word'));
    } 

    function removeUserWord(wordid) { 
        return $http.post('http://localhost:3000/userwords/remove', {userword: {word_id: wordid}}).then(handleSuccess, handleError('Error removing word'));
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
