'use strict';

angular.module('5ePcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('characters/view', {
        url: '/characters/:id/view',
        templateUrl: 'app/characters/view/characters/view.html',
        controller: 'CharactersViewCtrl'
      });
  });