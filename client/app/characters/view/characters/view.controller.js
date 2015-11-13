'use strict';

angular.module('5ePcApp')
  .controller('CharactersViewCtrl', function ($scope, $stateParams, Character) {
    $scope.character = Character.get({id:$stateParams.id});
});
