'use strict';

describe('Controller: AllCtrl', function () {

  // load the controller's module
  beforeEach(module('funApp'));

  var AllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllCtrl = $controller('AllCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should create 100 citizens on load and add 10 more', function () {
    expect(AllCtrl.citizens.length).toBe(100);
    AllCtrl.createNewCitizens(10);
    expect(AllCtrl.citizens.length).toBe(110);
    expect(AllCtrl.citizens[AllCtrl.citizens.length-1].id).toBe(110);
  });

  it('should not add citizens', function () {
    expect(AllCtrl.citizens.length).toBe(100);
    AllCtrl.createNewCitizens(0);
    expect(AllCtrl.citizens.length).toBe(100);
  });

  it('should return AvgAge', function () {
    expect(typeof AllCtrl.getAvgAge()).toBe('number');
  });

  it('should return educationCount', function () {
    expect(Object.keys(AllCtrl.getEducationCount()).length).toBe(3);
  });

  it('should return religiousCount', function () {
    expect(Object.keys(AllCtrl.getReligiousCount()).length).toBe(3);
  });

  it('should return current Date', function () {
    expect(AllCtrl.getDate()).toBe('Summer 1444');
    AllCtrl.advanceTime();
    expect(AllCtrl.getDate()).toBe('Autumn 1444');
    AllCtrl.advanceTime();
    expect(AllCtrl.getDate()).toBe('Winter 1445');
    AllCtrl.advanceTime();
    expect(AllCtrl.getDate()).toBe('Spring 1445');
  });
});
