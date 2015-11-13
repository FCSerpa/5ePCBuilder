'use strict';

describe('Controller: CharactersCtrl', function () {

  // load the controller's module
  beforeEach(module('5ePcApp'));

  var CharactersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharactersCtrl = $controller('CharactersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
