angular.module('starter')
  ///////////
  //Drinks Diary Controller
  ///////////
  .controller('drinksCtrl', function($scope, userDiary, GlobalStore, $state) {
    var vm = this;
    vm.diaryItems = null;

    initController();

    function initController() {
      $scope.page.setTitle("Drinks");

      vm.diaryItems = userDiary.generateDaySummary();

      vm.showWalkthrough = JSON.parse(GlobalStore.getWalkStatusDrinkDiary());

      getTotalDrinks();
    };

    vm.hideWalk = function() {
      vm.getWalkDiary = false;
      GlobalStore.setWalkStatusDrinkDiary(false);
    };

    //Set Chart Display
    vm.setChartDisplay = function(chartType) {
      switch (chartType) {
        case 0:
          getTotalDrinks();
          break;
        case 1:
          getUnits();
          break;
        case 2:
          getCalories();
          break;
        case 3:
          getCost();
          break;
        default:
      };
    };

    function getTotalDrinks() {

      var temp = userDiary.getTotalDrinksWeek(vm.diaryItems);

      $scope.options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Drinks'
            }
          }]
        }
      };

      $scope.labels = temp[1];
      $scope.series = ['Quantity'];
      $scope.data = temp[0];
    };

    //Get Units
    function getUnits() {

      var temp = userDiary.getTotalUnitsWeek(vm.diaryItems);

      $scope.options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Units'
            }
          }]
        }
      };

      //Get the labels for the last 7 days
      $scope.labels = temp[1];
      $scope.series = ['Units'];
      $scope.data = temp[0];
    };

    //Get Calories
    function getCalories() {

      var temp = userDiary.getTotalCaloriesWeek(vm.diaryItems);

      $scope.options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Calories'
            }
          }]
        }
      };

      //Get the labels for the last 7 days
      $scope.labels = temp[1];
      $scope.series = ['Calories'];
      $scope.data = temp[0];
    };

    //Get Cost
    function getCost() {

      var temp = userDiary.getTotalCostWeek(vm.diaryItems);

      $scope.options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total Cost'
            }
          }]
        }
      };

      //Get the labels for the last 7 days
      $scope.labels = temp[1];
      $scope.series = ['Cost'];
      $scope.data = temp[0];
    };

    //Edit Drinks
    vm.editDrinks = function(date) {
      GlobalStore.setdateEditDiary(date)
      $state.go('tabs.edit-drink')
    };
  });
