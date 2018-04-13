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
  .service('userGoals', function(helperFunc, GlobalStore) {

    return {
      setUserGoal: function(goal) {
        var temp_goals = GlobalStore.getUserGoals();
        temp_goals.push(goal); //Push goals to list
        GlobalStore.setUserGoals(temp_goals);

      },
      removeUserGoal: function(goal_id, end_date) {
        var goals = GlobalStore.getUserGoals();

        for (i = 0; i < goals.length; i++) {

          if (goals[i].end_date == end_date && goals[i].goal_id == goal_id) {
            //If goal_id and end_date match then remove the goal
            goals.splice(i, 1);
          }
        }

        GlobalStore.setUserGoals(goals);
      },
      getActiveGoals: function() {
        var temp = [];

        for (i = 0; i < GlobalStore.getUserGoals().length; i++) {

          if (GlobalStore.getUserGoals()[i].active_goal == true) {
            //Return active goals
            temp.push(GlobalStore.getUserGoals()[i]);
          }
        }

        return temp
      },
      getInactiveGoals: function() {
        var temp = [];

        for (i = 0; i < GlobalStore.getUserGoals().length; i++) {

          if (GlobalStore.getUserGoals()[i].active_goal == false) {
            //Return inactive goals
            temp.push(GlobalStore.getUserGoals()[i]);
          }
        }

        return temp
      },
      deactivateGoals: function() {
        var temp_goals = GlobalStore.getUserGoals();

        for (i = 0; i < temp_goals.length; i++) {
          if (temp_goals[i].active_goal == true) {
            if (helperFunc.dateDifference(moment(), moment(temp_goals[i].end_date), 0) > 0) {
              //If the end_date is in th epast, endsure active goal is set to false
              temp_goals[i].active_goal = false;
            }
          }
        }

        GlobalStore.setUserGoals(temp_goals);
      },
      computeGoalProgress: function() {
        this.deactivateGoals(); //Ensure goal status updated

        var temp_goals = GlobalStore.getUserGoals();

        for (i = 0; i < temp_goals.length; i++) {
          var u_prog = 0;

          if (temp_goals[i].active_goal == false) {
            continue
          }

          //Get drinks that fall between the dates
          var dates = helperFunc.getDates(moment(temp_goals[i].start_date), moment(temp_goals[i].end_date), 'YYYY-MM-DD');

          var drinks = [];

          for (ii = 0; ii < dates.length; ii++) {
            var d = helperFunc.getObjects(GlobalStore.getUserDrinksDiary(), 'date', dates[ii]);

            if (d.length > 0) {
              drinks.push(d)
            }
          }

          //Flatten array
          var merged_drinks = [].concat.apply([], drinks);

          if (temp_goals[i].goal_id == 1) {
            u_prog = helperFunc.sumArrayKey(helperFunc.getObjects(merged_drinks, 'drink_qty', []), 'drink_qty');
            if (isNaN(u_prog)) {
              u_prog = 0;
            };
          }
          if (temp_goals[i].goal_id == 2) {
            u_prog = helperFunc.getObjects(merged_drinks, 'drink_free_status', true).length;
            if (isNaN(u_prog)) {
              u_prog = 0;
            }
          }
          if (temp_goals[i].goal_id == 3) {
            u_prog = helperFunc.sumArrayKey(helperFunc.getObjects(merged_drinks, 'drink_price_total', []), 'drink_price_total');
            if (isNaN(u_prog)) {
              u_prog = 0;
            }
          }
          if (temp_goals[i].goal_id == 4) {
            u_prog = helperFunc.sumArrayKey(helperFunc.getObjects(merged_drinks, 'drink_qty', []), 'drink_qty');
            if (isNaN(u_prog)) {
              u_prog = 0;
            }
          }

          if (u_prog <= parseInt(temp_goals[i].goal_target)) {
            temp_goals[i].goal_met = true;
          }

          temp_goals[i].progress = u_prog;
        }

        GlobalStore.setUserGoals(temp_goals);
      }
    }
  })
