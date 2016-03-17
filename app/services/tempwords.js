
'use strict';

var app = angular.module('app');

app.factory('TempwordService', function ($resource, API_URL) {
    return $resource(API_URL + 'words/:id', { id: '@id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
