'use strict';

angular.module('5ePcApp')
  .controller('CharactersCtrl', function ($scope, Auth, Character) {
    $scope.characters = Character.query({}, {'user_id': Auth.getCurrentUser()._id});

    // $scope.ifCharacters = function() {
    // 	console.log($scope.characters)
    // 	if ($scope.characters.length() > 2) {
    // 		return true;
    // 	} else{
    // 		return false;
    // 	}
    // };

 });
