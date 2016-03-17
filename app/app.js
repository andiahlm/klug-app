'use strict';

angular.module('app', ['ngRoute', 'ngCookies', 'ngResource', 'ng-token-auth', 'youtube-embed']) //

.constant('API_URL', 'https://lit-dusk-60245.herokuapp.com/') //http://localhost:3000/

.config(function ($routeProvider, $locationProvider, $httpProvider, $authProvider, API_URL) { //

    //$httpProvider.interceptors.push('authInterceptorService');

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'app/views/login.html',
        })
        .when('/register', {
            controller: 'RegisterController',
            templateUrl: 'app/views/register.html',
        })
        .when('/media', {
            controller: 'MediaController',
            templateUrl: 'app/views/media.html',
        })
        .when('/youtube/:id', {
            controller: 'YoutubeController',
            templateUrl: 'app/views/youtube.html',
        })
        .when('/words/:id', {
            controller: 'WordsController',
            templateUrl: 'app/views/words.html',
        })
        .when('/adminlogin', {
            controller: 'AdminloginController',
            templateUrl: 'app/views/adminlogin.html',
        })
        .when('/adminmedia', {
            controller: 'AdminmediaController',
            templateUrl: 'app/views/adminmedia.html',
        })
        .when('/adminmedium/:id?', {
            controller: 'AdminmediumController',
            templateUrl: 'app/views/adminmedium.html',
        })

        .otherwise({ redirectTo: '/login' });

        $authProvider.configure([
            { 
                default: {
                    apiUrl: API_URL
                }
            },
            {
                admin: {
                    apiUrl:  API_URL,
                    signOutUrl:            'admin_auth/sign_out',
                    emailSignInPath:       'admin_auth/sign_in',
                    tokenValidationPath:   'admin_auth/validate_token',
                }
            }
        ]);

})
.run(function run($rootScope, $location, $http, $auth) {

    $rootScope.$on('auth:login-success', function(ev, user) {
        $location.path('/media');
    });
    $rootScope.$on('auth:validation-success', function(ev, user) {
        //$location.path('/media');
    });
    $rootScope.$on('auth:validation-error', function(ev, user) {
        alert('Please Login!');
        $location.path('/login');
    });
});



