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
  //This factory enables the presention of ionic pop-up modals with default templates
  .factory('myModals', ['appModalService', function(appModalService) {
    // all app modals here
    var service = {
      showAddDrinks: showAddDrinks,
      showSetGoals: showSetGoals
    };

    return service;

    //Display the Add Drinks Page
    function showAddDrinks(drinks) {
      return appModalService.show('templates/addDrinks/addDrinks.template.html', 'addDrinksCtrl as vm', drinks);
    };

    //Display the Show Goals Page
    function showSetGoals(goalData) {
      return appModalService.show('templates/goals/setGoals.template.html', 'setGoalsCtrl as vm', goalData);
    };

  }])
