(function(){
'use strict';

/**
 * @ngdoc overview
 * @name funApp
 * @description
 * # funApp
 *
 * Main module of the application.
 */
angular
  .module('funApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(config);

  config.$inject = [ '$routeProvider' ];
  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/culture', {
      templateUrl: 'views/culture/culture.html',
      controller: 'CultureCtrl',
      controllerAs: 'cult'
    })
    .when('/education', {
      templateUrl: 'views/education/education.html',
      controller: 'EducationCtrl',
      controllerAs: 'edu'
    })
    .when('/financials', {
      templateUrl: 'views/financials/financials.html',
      controller: 'FinancialsCtrl',
      controllerAs: 'fin'
    })
		.when('/military', {
      templateUrl: 'views/military/military.html',
      controller: 'MilitaryCtrl',
      controllerAs: 'mil'
    })
    .when('/politics', {
      templateUrl: 'views/politics/politics.html',
      controller: 'PoliticsCtrl',
      controllerAs: 'poli'
    })
    .when('/population', {
      templateUrl: 'views/population/population.html',
      controller: 'PopulationCtrl',
      controllerAs: 'pop'
    })
    .when('/production', {
      templateUrl: 'views/production/production.html',
      controller: 'ProductionCtrl',
      controllerAs: 'prod'
    })
		.when('/religion', {
      templateUrl: 'views/religion/religion.html',
      controller: 'ReligionCtrl',
      controllerAs: 'reli'
    })
		.when('/research', {
      templateUrl: 'views/research/research.html',
      controller: 'ResearchCtrl',
      controllerAs: 'res'
    })
    .when('/options', {
      templateUrl: 'views/options/options.html',
      controller: 'OptionsCtrl',
      controllerAs: 'opt'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
})();