'use strict';

angular.module('5ePcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('characters/new', {
        url: '/characters/new',
        templateUrl: 'app/characters/new/characters/new.html',
        controller: 'CharactersNewCtrl'
      });
  });