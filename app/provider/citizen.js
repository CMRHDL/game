(function() {
  'use strict';

  angular.module('funApp').service('citizen', citizen);

  //citizen.$inject = [''];
  function citizen() {

    var service = this; // jshint ignore:line

    service.create = function (id, age, education, religion, happyness) {
      return new Citizen(id, age, education, religion, happyness);
    };

    function Citizen(id, age, education, religion, happyness) {
      this.id = id;
      this.age = age;
      this.education = education;
      this.religion = religion;
      this.happyness = happyness;
    }
  }
})();