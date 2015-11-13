'use strict';

angular.module('5ePcApp')
  .controller('CharactersCtrl', function ($scope, Auth, Character) {
    $scope.characters = Character.query({}, {'user_id': Auth.getCurrentUser()._id});
 });
