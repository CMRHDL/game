(function() {
  'use strict';
  angular.module('funApp').controller('AllCtrl', AllCtrl);

  AllCtrl.$inject = [ 'chart', 'citizen' ];
  function AllCtrl(chart, citizen) {
    var all = this;

    all.citizenCount = 1;
    all.citizens = [];

    all.advanceTime = advanceTime;
    all.createNewCitizens = createNewCitizens;
    all.getAvgAge = getAvgAge;
    all.getCount = getCount;
    all.getDate = getDate;

    var education, age, religion, happyness, roll;
    var season = 'Summer';
    var year = 1444;

    var educations = ['none', 'basic', 'high'];
    var religions = ['reformed', 'christian', 'protestant'];

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
    }

    function getNextSeason(currentSeas) {
      var nextSeas = {
        'Winter' : 'Spring',
        'Spring' : 'Summer',
        'Summer' : 'Autumn',
        'Autumn' : 'Winter',
      }
      return nextSeas[currentSeas];
    }

    function createNewCitizens(count) {
      for(var i = 1; i <= count; i++) {
        // all.citizens.push({id: all.citizenCount, age: getAge(), education: getEducation(), religion: getReligion(), happyness: getHappyness()});
        // all.citizens.push(new Citizen(all.citizenCount, getAge(), getEducation(), getReligion(), getHappyness()));
        all.citizens.push(citizen.create(all.citizenCount, getAge(), getEducation(), getReligion(), getHappyness()));
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

    function getReligion() {
      roll = randomNumber(religions.length);
      return religions[roll-1]
    }

    function getHappyness() {
      roll = randomNumber(10);
      return roll;
    }

    function getCount(prop) {
      var counter = {};
      all.citizens.forEach(function(entry){
        counter[entry[prop]] = counter[entry[prop]] ? counter[entry[prop]] + 1 : 1;
      });
      return counter;
    }

    function getAvgAge() {
      var totalAge = 0;
      all.citizens.forEach(function(entry){
        totalAge += entry.age;
      });
      return Math.floor(totalAge / all.citizenCount);
    }

    function randomNumber(to) {
      return Math.floor((Math.random() * to) + 1);
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