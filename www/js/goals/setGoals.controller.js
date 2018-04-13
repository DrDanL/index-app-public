/*
InDEx version 1, Copyright (C) 2018 Daniel Leightley

This file is part of InDEx.

InDEx is free software; you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

InDEx is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Koha; if not, see <http://www.gnu.org/licenses>.
*/

angular.module('starter')
  .controller('setGoalsCtrl', function($scope, parameters, $ionicPopup, barrierQuestions, userGoals) {
    var vm = this; //define the vm
    vm.goalData = parameters;
    vm.barrier_selected_temp = 0; //Temp barrier store

    vm.goalSet = {
      goal_id: parameters.goal_id,
      start_date: null,
      end_date: null,
      barrier_id: null,
      barrier_option: null,
      active_goal: true,
      goal_target: 0,
      goal_met: false,
      progress: 0
    };

    //Initialise the controller and setup some key enviorment setups
    initController();

    function initController() {
      $scope.page.setTitle("Set Goals");

      vm.goalSet.start_date = moment().format('YYYY-MM-DD');
      vm.goalSet.end_date = moment().add(vm.goalData.day_length, 'd').format('YYYY-MM-DD');

      //Get barriers
      vm.barriers = getBarriers(vm.goalData.barrier_list);
    };

    //Get barriers list
    function getBarriers(ids) {
      var barriers = {};
      for (i = 0; i < ids.length; i++) {

        barriers[i] = barrierQuestions.getQuestion(ids[i]);
      }
      return barriers;
    };

    //On barrier change
    vm.onBarrierChange = function() {
      var tempData = vm.barriers[vm.barrier_selected_temp];
      vm.barrier_options = tempData;
      vm.goalSet.barrier_id = tempData.barrier_id;
    };

    vm.getLength = function(num) {
      return new Array(num);
    };

    //Submit Goal
    vm.submitGoal = function() {

      if (vm.goalSet.goal_target == null || vm.goalSet.barrier_id == null || vm.goalSet.barrier_option == null) {
        //Throw error message codes do not match
        var alertPopup = $ionicPopup.alert({
          title: 'Missing an Option!',
          template: 'You have not selected an option!'
        });
      } else {

        userGoals.setUserGoal(vm.goalSet)
        $scope.closeModal(null);
      }
    };
  });
