angular.module('starter')
  ///////////
  //Display Goals Page
  ///////////
  .controller('goalsCtrl', function($scope, GlobalStore, goalList, myModals, helperFunc, $state, barrierQuestions, $ionicPopup, userGoals) {
    var vm = this;

    vm.goalListData = {};
    vm.activeGoals = {};
    vm.inactiveGoals = {};
    vm.activeGoalIds = [];
    vm.goalComplete = {};

    initController();

    function initController() {
      $scope.page.setTitle("Goals");

      vm.daysUsing = helperFunc.dateDifference(moment(), GlobalStore.getUserDetails().createdAt, 1);

      //Just show help if it is the first day e.g. day zero
      if (vm.daysUsing >= 8) {
        vm.showWalkthrough = JSON.parse(GlobalStore.getWalkStatusGoals());
      }

      //Get Goal List
      userGoals.deactivateGoals();
      userGoals.computeGoalProgress();

      vm.goalListData = goalList.getGoalList();

      //Identify active goals
      vm.activeGoals = userGoals.getActiveGoals();

      //Identify inactive goals
      vm.inactiveGoals = userGoals.getInactiveGoals();

      buildList();
      buildCompleteGoals();
    };

    vm.hideWalk = function() {
      vm.showWalkthrough = false;
      GlobalStore.setWalkStatusGoals(false);
    };

    function buildList() {
      for (i = 1; i < vm.goalListData.length; i++) {
        var tempData = helperFunc.getObjects(vm.activeGoals, 'goal_id', i);
        if (!tempData || !tempData.length) {
          vm.goalListData[i].active_goal = false;
        } else {
          var tempBarrier = barrierQuestions.getQuestion(tempData[0].barrier_id);

          vm.goalListData[i].id = tempData[0]._id;
          vm.goalListData[i].progress = tempData[0].progress;
          vm.goalListData[i].active_goal = true;
          vm.goalListData[i].goal_target = tempData[0].goal_target;
          vm.goalListData[i].end_date = tempData[0].end_date;
          vm.goalListData[i].if = tempBarrier.question;
          vm.goalListData[i].then = tempBarrier.options[tempData[0].barrier_option - 1]; //NOTE the minute 1
        }
      };
    };


    function buildCompleteGoals() {
      for (i = 0; i < vm.inactiveGoals.length; i++) {
        var temp = goalList.getGoals(vm.inactiveGoals[i].goal_id);

        vm.inactiveGoals[i].name = temp.name;
        vm.inactiveGoals[i].desc = temp.desc;
        vm.inactiveGoals[i].advice = temp.advice;
        vm.inactiveGoals[i].advice2 = temp.advice2;
        vm.inactiveGoals[i].advice3 = temp.advice3;
        vm.inactiveGoals[i].option_name = temp.option_name;
        vm.inactiveGoals[i].option_name_lower = temp.option_name_lower;
      };
    };

    // A confirm dialog
    vm.showConfirmRemove = function(id, end_date) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Are you sure?',
        template: 'Are you sure you want to remove this goal?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          userGoals.removeUserGoal(id, end_date);
          $state.reload()
        }
      });
    };


    //Set goal
    vm.setGoal = function(id) {
      var goalData = goalList.getGoals(id);

      myModals.showSetGoals(goalData)
        .then(function(result) {
          $state.reload();
        }, function(err) {
          alert(err);
        });
    };
  });
