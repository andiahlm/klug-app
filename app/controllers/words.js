'use strict';

var app = angular.module('app');

app.controller('WordsController', function ($scope, WordService, $routeParams) {
    
    // if ($routeParams.id)
    // {
    //     TempwordService.get({ id: $routeParams.id }, function (data) {
            
    //         var word = data;
    //         console.log(word);
    //         WordService.googleTranslation(word.word).then( function (data) {

    //         	WordService.updateword(word.id, data.data.translations[0].translatedText)
    //         	//word.translation = data.data.translations[0].translatedText;
    //         	//word.$update(word);
    //     	});
    //     });
    // }

    var i;

    for (i = 55000; i < 60000; i++) { 
    	WordService.word(i).then( function (data) {           
            var word = data;
            WordService.googleTranslation(word.word).then( function (data) {
            	WordService.updateword(word.id, data.data.translations[0].translatedText)
            	//word.translation = data.data.translations[0].translatedText;
            	//word.$update(word);
        	});
        });
	}
    // WordService.word(wordid).then( function (data) {
    // 	$scope.word = data.word;


    // });
});

