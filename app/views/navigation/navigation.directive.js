(function() {
  'use strict';
  angular.module('funApp').directive('myNav', myNav);

  //myNav. = [ '' ];
  function myNav() {
    return {
      restrict: 'E',
      templateUrl: 'views/navigation/nav-template.html',
      controller: 'NavCtrl',
      controllerAs: 'nav',
      link: function(scope, element, attrs, tabsCtrl) {
      },
    };
  }
})();
