'use strict';

describe('Controller: CharactersViewCtrl', function () {

  // load the controller's module
  beforeEach(module('5ePcApp'));

  var CharactersViewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharactersViewCtrl = $controller('CharactersViewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
