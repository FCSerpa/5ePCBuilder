'use strict';

describe('Controller: CharactersEditCtrl', function () {

  // load the controller's module
  beforeEach(module('5ePcApp'));

  var CharactersEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharactersEditCtrl = $controller('CharactersEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
