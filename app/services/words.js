
'use strict';

var app = angular.module('app');

app.factory('WordService', function ($http, API_URL) {

    var service = {};

    service.word = word;
    service.updateword = updateword;
    service.addUserWord = addUserWord;
    service.removeUserWord = removeUserWord;
    service.googleTranslation = googleTranslation;

    return service; 


    function word(id) { 
        return $http.get(API_URL + '/words/' + id ).then(handleSuccess, handleError('Error getting media'));
    }

    function updateword(id, translation) { 
        return $http.put(API_URL + '/words/' + id, {word: {id: id, translation: translation}}).then(handleSuccess, handleError('Error adding word'));
    }

    function googleTranslation(word) { 
        return $http.get('https://www.googleapis.com/language/translate/v2?key=AIzaSyBXt20OM3gJbmtyppjr_seaSLvp0DajFoA&source=en&target=de&q=' + word).then(handleSuccess, handleError('Error adding word'));
    } 

    function addUserWord(wordid) { 
        return $http.post(API_URL + '/userwords/add', {userword: {word_id: wordid}}).then(handleSuccess, handleError('Error adding word'));
    } 

    function removeUserWord(wordid) { 
        return $http.post(API_URL + '/userwords/remove', {userword: {word_id: wordid}}).then(handleSuccess, handleError('Error removing word'));
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
