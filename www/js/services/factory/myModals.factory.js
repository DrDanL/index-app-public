angular.module('starter')
  //This factory enables the presention of ionic pop-up modals with default templates (Confirmed)
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
