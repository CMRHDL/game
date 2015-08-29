(function() {
    'use strict';
    angular.module('funApp').controller('AllCtrl', AllCtrl);

    //AllCtrl. = [ '' ];
    function AllCtrl() {
        var all = this;

        all.citizenCount = 1;
        all.citizens = [];

        all.createNewCitizens = createNewCitizens;
        all.getAvgAge = getAvgAge;
        all.getEducationCount = getEducationCount;
        all.getReligiousCount = getReligiousCount;

        init();
        function init(){
          createNewCitizens(100);
        }

        var education, age, religion, happyness, roll;
        function createNewCitizens(count) {
          for(var i = 1; i <= count; i++) {
            all.citizens.push({id: all.citizenCount, age: getAge(), education: getEducation(), religion: getReligion(), happyness: getHappyness()});
            all.citizenCount++;
          }
        }

        function getEducation() {
          roll = Math.floor((Math.random() * 10) + 1);
          if(roll <= 4) {
            return 'none';
          } else if(roll <= 8) {
            return 'basic';
          } else {
            return 'high';
          }
        }
        function getAge() {
          roll = Math.floor((Math.random() * 50) + 1);
          return roll;
        }
        function getReligion() {
          roll = Math.floor((Math.random() * 3) + 1);
          switch (roll) {
            case 1: return 'none';
            case 2: return 'christian';
            case 3: return 'scientology';
          }
        }
        function getHappyness() {
          roll = Math.floor((Math.random() * 10) + 1);
          return roll;
        }

        function getReligiousCount() {
          var religionCounter = {};
          religionCounter.none = 0;
          religionCounter.christian = 0;
          religionCounter.scientology = 0;
          all.citizens.forEach(function(entry){
              if(entry.religion === 'none') {
                religionCounter.none++;
              } else if(entry.religion === 'christian') {
                religionCounter.christian++;
              } else if(entry.religion === 'scientology') {
                religionCounter.scientology++;
              }
          });
          return religionCounter;
        }
        
        function getEducationCount() {
          var eduCounter = {};
          eduCounter.none = 0;
          eduCounter.basic = 0;
          eduCounter.high = 0;
          all.citizens.forEach(function(entry){
              if(entry.education === 'none') {
                eduCounter.none++;
              } else if(entry.education === 'basic') {
                eduCounter.basic++;
              } else if(entry.education === 'high') {
                eduCounter.high++;
              }
          });
          return eduCounter;
        }
        
        function getAvgAge() {
          var totalAge = 0;
          all.citizens.forEach(function(entry){
            totalAge += entry.age;
          });
          return Math.floor(totalAge / all.citizenCount);
        }

    }
})();