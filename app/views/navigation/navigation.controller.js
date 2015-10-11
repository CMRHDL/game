(function() {
    'use strict';
    angular.module('funApp').controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = [ '$location' ];
    function NavCtrl($location) {
        var nav = this;

        var activeTab = $location.url().substr(1,$location.url().length) !== '' ? $location.url().substr(1,$location.url().length) : 'overview';

        nav.isTabActive = isTabActive;
        nav.setActiveTab = setActiveTab;

        nav.tabs = [
          {visibleName: 'Overview', name: 'overview', css: 'glyphicon glyphicon-align-justify'},
          //{visibleName: 'Culture', name: 'culture', css: 'glyphicon glyphicon-music'},
          //{visibleName: 'Education', name: 'education', css: 'glyphicon glyphicon-education'},
          {visibleName: 'Financials', name: 'financials', css: 'glyphicon glyphicon-usd'},
          //{visibleName: 'Military', name: 'military', css: 'glyphicon glyphicon-tower'},
          {visibleName: 'Politics', name: 'politics', css: 'glyphicon glyphicon-envelope'},
          //{visibleName: 'Population', name: 'population', css: 'glyphicon glyphicon-cutlery'},
          {visibleName: 'Production', name: 'production', css: 'glyphicon glyphicon-wrench'},
          //{visibleName: 'Religion', name: 'religion', css: 'glyphicon glyphicon-tent'},
          //{visibleName: 'Research', name: 'research', css: 'glyphicon glyphicon-search'},
          //{visibleName: 'Options', name: 'options', css: 'glyphicon glyphicon-cog'},
        ]

        function isTabActive(tab) {
          return activeTab === tab ? 'active' : '';
        }
        function setActiveTab(tab) {
          activeTab = tab;
        }
    }
})();
