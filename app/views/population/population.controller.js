(function() {
    'use strict';
    angular.module('funApp').controller('PopulationCtrl', PopulationCtrl);

    //PopulationCtrl. = [ '' ];
    function PopulationCtrl() {
        var vm = this;

        // variables


        // public functions
        vm.someFunctionOne = someFunctionOne;
        vm.someFunctionTwo = someFunctionTwo;
        vm.someFunctionThree = someFunctionThree;
        vm.someFunctionFour = someFunctionFour;
        vm.someFunctionFive = someFunctionFive;

        //in case something needs to be done on load
        init();

        function init() {
        }

        function someFunctionOne() {
        }

        function someFunctionTwo() {
        }

        function someFunctionThree() {
        }

        function someFunctionFour() {
        }

        function someFunctionFive() {
        }
    }
})();
