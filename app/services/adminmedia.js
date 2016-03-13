
'use strict';

var app = angular.module('app');

app.factory('AdminmediaService', function ($resource, API_URL) {
    return $resource(API_URL + 'media/:id', { id: '@id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
