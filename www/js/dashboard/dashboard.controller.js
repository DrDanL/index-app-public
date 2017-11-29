angular.module('starter')
  ///////////
  //Dashboard Display
  ///////////
  .controller('dashboardCtrl', function($scope, userDiary, GlobalStore, goalList, helperFunc, userGoals) {
    var vm = this;

    //Display values
    vm.daysUsing = 0; //Number of days using the app
    vm.total_cost = null; //Cost of using the
    vm.total_units = null; //Units of drinking
    vm.total_calories = null;
    vm.total_drinks = null;
    vm.total_exercise = null;
    vm.total_burgers = null;
    vm.activeGoals = {};

    initController();

    function initController() {
      $scope.page.setTitle("Dashboard");

      vm.daysUsing = helperFunc.dateDifference(moment(), GlobalStore.getUserDetails().createdAt, 1);

      vm.userData = GlobalStore.getUserDetails();

      vm.diaryItems = userDiary.generateDaySummary();

      //Just show help if it is the first day e.g. day zero
      vm.showWalkthrough = JSON.parse(GlobalStore.getWalkStatusDashboard());

      //Default view is the 7 day setting
      sevenDayView();

      //Active goals
      vm.userActiveGoals = userGoals.getActiveGoals();

      if (vm.userActiveGoals.length > 0) {
        buildList();
      }
    };

    function buildList() {
      for (i = 0; i < vm.userActiveGoals.length; i++) {
        var tempData = goalList.getGoals(vm.userActiveGoals[i].goal_id);
        vm.userActiveGoals[i].advice = tempData.advice;
        vm.userActiveGoals[i].desc = tempData.desc;
        vm.userActiveGoals[i].name = tempData.name;
        vm.userActiveGoals[i].advice2 = tempData.advice2;
        vm.userActiveGoals[i].advice3 = tempData.advice3;
        vm.userActiveGoals[i].advice3 = tempData.advice3;
        vm.userActiveGoals[i].option_name_lower = tempData.option_name_lower;
      };
    };

    vm.hideWalk = function() {
      vm.showWalkthrough = false;
      GlobalStore.setWalkStatusDashboard(false);
    };

    //Weekly values
    function sevenDayView() {
      vm.total_calories = helperFunc.sumArray(userDiary.getTotalCaloriesWeek(vm.diaryItems)[0]);
      vm.total_cost = helperFunc.sumArray(userDiary.getTotalCostWeek(vm.diaryItems)[0]);
      vm.total_units = helperFunc.sumArray(userDiary.getTotalUnitsWeek(vm.diaryItems)[0]);
      vm.total_drinks = helperFunc.sumArray(userDiary.getTotalDrinksWeek(vm.diaryItems)[0]);
      vm.total_exercise = userDiary.getExercise(vm.diaryItems);
      vm.total_burgers = userDiary.getTotalBurgers(vm.total_calories);
    };
  });
