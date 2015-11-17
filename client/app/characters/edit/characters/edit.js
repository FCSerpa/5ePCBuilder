'use strict';

angular.module('5ePcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('characters/edit', {
        url: '/characters/:id/edit',
        templateUrl: 'app/characters/edit/characters/edit.html',
        controller: 'CharactersEditCtrl'
      });
  });