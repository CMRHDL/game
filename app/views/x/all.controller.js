(function() {
  'use strict';
  angular.module('funApp').controller('AllCtrl', AllCtrl);

  AllCtrl.$inject = [ 'chart', 'citizen' ];
  function AllCtrl(chart, citizen) {
    var all = this;

    all.citizenCount = 1;
    all.citizens = [];
    all.maxExpectedAge = 50;

    all.advanceTime = advanceTime;
    all.createNewCitizens = createNewCitizens;
    all.getAvgAge = getAvgAge;
    all.getMaxExpectedAge = getMaxExpectedAge;
    all.getCount = getCount;
    all.getDate = getDate;

    var education, age, religion, happyness, roll;
    var season = 'Summer';
    var year = 1444;

    var educations = ['none', 'basic', 'high'];
    var religions = ['reformed', 'christian', 'protestant'];
    var seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

    init();
    function init(){
      createNewCitizens(100);
    }

    function advanceTime(){
      if(season === 'Autumn') {
        year++;
      }
      season = getNextSeason(season);
      getDate();
      citizen.advanceTime(all.citizens, season);
    }

    function getNextSeason(currentSeas) {
      var nextSeas = {};
      for(var i = 0, len = seasons.length; i < len; i++) {
        nextSeas[seasons[i]] = seasons[i+1] ? seasons[i+1] : seasons[0];
      }
      return nextSeas[currentSeas];
    }

    function createNewCitizens(count) {
      for(var i = 1; i <= count; i++) {
        // all.citizens.push({id: all.citizenCount, age: getAge(), education: getEducation(), season: getSeason(), religion: getReligion(), happyness: getHappyness()});
        // all.citizens.push(new Citizen(all.citizenCount, getAge(), getSeason() getEducation(), getReligion(), getHappyness()));
        all.citizens.push(citizen.create(all.citizenCount, getAge(), getSeason(), getEducation(), getReligion(), getHappyness()));
        all.citizenCount++;
      }
      console.log(all.citizens);
    }

    function getDate() {
        return season + ' ' + year;
    }

    function getEducation() {
      roll = randomNumber(10);
      if(roll <= 4) {
        return 'none';
      } else if(roll <= 8) {
        return 'basic';
      } else {
        return 'high';
      }
    }

    function getAge() {
      roll = randomNumber(50);
      return roll;
    }    

    function getSeason() {
      roll = randomNumber(seasons.length);
      return seasons[roll-1];
    }

    function getReligion() {
      roll = randomNumber(religions.length);
      return religions[roll-1]
    }

    function getHappyness() {
      roll = randomNumber(10);
      return roll;
    }

    function getCount(prop) {
      // var counter = {};
      // all.citizens.forEach(function(entry){
      //   counter[entry[prop]] = counter[entry[prop]] + 1 || 1;
      // });
      // return counter;
      return all.citizens.reduce(function(obj, curVal){
        obj[curVal[prop]] = obj[curVal[prop]] + 1 || 1;
        console.log(obj);
        return obj;
      }, {});
    }

    function getAvgAge() {
      var totalAge = 0;
      all.citizens.forEach(function(entry){
        totalAge += entry.age;
      });
      return Math.floor(totalAge / all.citizenCount);
    }

    function getMaxExpectedAge() {
      return all.maxExpectedAge;
    }

    function randomNumber(to) {
      return Math.floor((Math.random() * to) + 1);
    }

    function setCitizen(cit) {
      // [{id: 1, age: 20, education: 'high', season: 'Winter', religion: 'protestant', happyness: 5}]
      all.citizens = cit;
    }

    all.reliData = chart.getDataArray(getCount('religion'));
    all.reliLabels = chart.getDataLabel(getCount('religion'));
    all.eduData = chart.getDataArray(getCount('education'));
    all.eduLabels = chart.getDataLabel(getCount('education'));

    all.chartType = 'Pie';
    all.changeChartType = changeChartType;
    function changeChartType() {
    all.chartType = all.chartType === 'PolarArea' ?
            'Pie' : 'PolarArea';
      }
    }
})();