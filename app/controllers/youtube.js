'use strict';

var app = angular.module('app');

app.controller('YoutubeController', function ($scope, MediaService, WordService, $auth, $routeParams) {
    
    var mediaid = $routeParams.id;
    var playerready;

    $scope.currenttime = 0;

    MediaService.Medium(mediaid).then( function (data) {
        $scope.mediaName = data.name;
        $scope.videoid = data.identifier;
        $scope.translation = data.translation;
    });
 
    $scope.$on('youtube.player.ready', function ($event, player) {
        playerready = true;
    });                
        
    setInterval(setTimestamp, 250);

    function setTimestamp(){
        
        if (playerready) {
            var timestmp = $scope.player.getCurrentTime();
            $scope.currenttime = timestmp;
            $scope.$apply('currenttime');
        } 
    }
    
    $scope.intervallSmallerThan = function(prop){
        return function(item){
            return (item[prop] - $scope.currenttime > -4) && (item[prop] - $scope.currenttime < 0);
        }
    }

    $scope.removeWord = function(wordId){
        var response = WordService.removeUserWord(wordId);
    }

    $scope.addWord = function(wordId){
        var response = WordService.addUserWord(wordId);
    }


});

