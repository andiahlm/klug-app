
'use strict';

var app = angular.module('app');

app.factory('AdminmediaService', function ($resource) {
    return $resource('http://localhost:3000/media/:id', { id: '@id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
