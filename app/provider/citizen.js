(function() {
  'use strict';

  angular.module('funApp').service('citizen', citizen);

  //citizen.$inject = [''];
  function citizen() {

    var service = this; // jshint ignore:line

    service.create = function(id, age, seas, education, religion, happyness) {
      return new Citizen(id, age, seas, education, religion, happyness);
    };

    service.advanceTime = function(citArr, season) {
      var tempArr = [];
      for(var i = 0, len = citArr.length; i < len; i++) {
        citArr[i].age = citArr[i].season === season ? citArr[i].age + 1 : citArr[i].age;
        if(citArr[i].age < 51) {
          tempArr.push(citArr[i]);
        }
      }
      citArr = tempArr;
    };

    function Citizen(id, age, season, education, religion, happyness) {
      this.id = id;
      this.age = age;
      this.season = season;
      this.education = education;
      this.religion = religion;
      this.happyness = happyness;
    }
  }
})();