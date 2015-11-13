'use strict';

angular.module('5ePcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('characters', {
        url: '/characters',
        templateUrl: 'app/characters/characters.html',
        controller: 'CharactersCtrl'
      });
  });