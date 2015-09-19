(function() {
  'use strict';

  angular.module('funApp').service('chart', chart);

  //chart.$inject = [''];
  function chart() {

    var service = this; // jshint ignore:line

    service.variable = '';

    service.getDataArray = function (countObj) {
      return getData(countObj)[0];
    };

    service.getDataLabel = function (countObj) {
      return getData(countObj)[1];
    };

    function getData(obj) {
      var arr = [];
      var labels = [];
      for(var key in obj) {
        arr.push(obj[key]);
        labels.push(key);
      }
      return [arr, labels];
    }
  }
})();