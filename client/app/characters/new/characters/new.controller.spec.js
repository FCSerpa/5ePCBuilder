'use strict';

describe('Controller: CharactersNewCtrl', function () {

  // load the controller's module
  beforeEach(module('5ePcApp'));

  var CharactersNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharactersNewCtrl = $controller('CharactersNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
