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
  .factory('goalList', function() {

    var goals = [{ //Drink less (general)
        name: 'null',
        desc: 'null',
        advice: 'null',
        day_length: 1,
        option_name: 'null',
        option_name_lower: 'null',
        option_length: 20,
        goal_id: 0,
        barrier_list: []
      },
      { //Drink less on night out - specific day - goal option 1
        name: 'Drink less night out',
        desc: 'I want to drink less on a night out',
        advice: 'What is the maximum number of drinks you will drink tonight?',
        advice2: 'Have a maximum of ',
        advice3: ' drinks tonight',
        day_length: 1,
        option_name: 'Drinks',
        option_name_lower: 'drinks',
        option_length: 20,
        goal_id: 1,
        barrier_list: [1, 2, 3, 4, 5]
      },
      { //Drink free days during the week - goal option 2
        name: 'Drink free days',
        desc: 'I want to have more drink free days during the week',
        advice: 'How many drink free days do you want to have this week?',
        advice2: 'Have ',
        advice3: ' alcohol free days this week',
        day_length: 7,
        option_name: 'Days',
        option_name_lower: 'days',
        option_length: 7,
        goal_id: 2,
        barrier_list: [6, 7, 8, 9, 10, 11]
      },
      { //Save Money
        name: 'Save money',
        desc: 'Spend less on alcohol this week',
        advice: 'I want to try and spend less on alcohol this week',
        advice2: 'Spend £',
        advice3: ' on alcohol this week',
        day_length: 7,
        option_name: 'Pounds',
        option_name_lower: 'pounds',
        option_length: 50,
        goal_id: 3,
        barrier_list: [12, 13, 14, 15, 16, 17]
      },
      { //Drink fewer units
        name: 'Fewer Units',
        desc: 'To drink less overall this week',
        advice: 'What is the maximum number of drinks you will drink this week?',
        advice2: 'Have a maximum of ',
        advice3: ' drinks this week',
        day_length: 7,
        option_name: 'Drinks',
        option_name_lower: 'drinks',
        option_length: 20,
        goal_id: 4,
        barrier_list: [18, 19, 20, 21, 22, 23]
      }
    ];

    return {
      getGoals: function(id) {
        if (id < goals.length) {
          return goals[id];
        } else {
          return false;
        }
      },
      getGoalList: function() {
        return goals;
      }
    };
  });
