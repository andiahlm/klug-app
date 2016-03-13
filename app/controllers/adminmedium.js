'use strict';

var app = angular.module('app');

app.controller('AdminmediumController', function ($scope, AdminmediaService, $auth, $routeParams) {
    
    var mediaid = $routeParams.id;

    if (mediaid)
    {
        AdminmediaService.get({ id:$routeParams.id }, function (data) {
            $scope.medium = data;
        });
    }
    else
    {
        $scope.medium = new AdminmediaService();   
    }

    $scope.saveMedium = function(){
        if ($scope.medium.id)
        {
            $scope.medium.$update(function(data){
                $scope.medium = data;
            });
        }
        else
        {
            $scope.medium.$save(function(data){
                $scope.medium = data;
            });
        }     
    }
});

