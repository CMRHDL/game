'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('funApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have 8 tabs', function () {
    expect(NavCtrl.tabs.length).toBe(11);
  });

  it('should return the right cssClass', function () {
    NavCtrl.setActiveTab('culture');
    expect(NavCtrl.isTabActive('culture')).toBe('active');
    expect(NavCtrl.isTabActive('overview')).toBe('');
  });
});
