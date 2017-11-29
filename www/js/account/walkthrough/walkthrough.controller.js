angular.module('starter')
    ///////////
    //Walkthrough Pages
    ///////////
    .controller('walkthroughCtrl', function($scope, $state) {
        var vm = this;
        vm.showWalkthroughDash = false;
        vm.showWalkthroughGoals = false;
        vm.showWalkthroughAddDrinks = false;
        vm.showWalkthroughDiary = false;
        vm.showSetGoal = false;

        initController();

        function initController() {
            $scope.page.setTitle("Tutorials");
        };

        vm.dashboardWalk = function(){
            vm.showWalkthroughDash = true;
        };

        vm.goalsWalk = function(){
            vm.showWalkthroughGoals = true;
        };

        vm.addDrinks = function(){
            vm.showWalkthroughAddDrinks = true;
        };

        vm.diary = function() {
            vm.showWalkthroughDiary = true;
        };

        vm.diary = function() {
            vm.showWalkthroughDiary = true;
        };

        vm.setGoals = function() {
          vm.showSetGoal = true;
        };

        vm.hideWalk = function(){
            vm.showWalkthroughDash = false;
            vm.showWalkthroughGoals = false;
            vm.showWalkthroughAddDrinks = false;
            vm.showWalkthroughDiary = false;
            vm.showSetGoal = false;
        };
    });
