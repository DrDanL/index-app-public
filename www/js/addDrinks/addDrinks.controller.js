angular.module('starter')
  ///////////
  //Add Drinks Display Controller
  ///////////
  .controller('addDrinksCtrl', function($scope, $ionicPopup, drinkList, screenQuestions, GeoService, helperFunc, GlobalStore, userDiary, parameters) {

    //Define the enviorment and any key spaces
    var vm = this; //define the vm
    var drink_data; //Store the current drink data
    var edit_data = parameters;
    vm.date = null; //The datastore for drinks data
    vm.drinkDayData = null; //Drinks data
    vm.drink_edit = false; //Does this drink exist
    vm.drink_id = 0;
    vm.noDrinkDayValue == false;

    //Include templates
    //We call in the templates instead of having them all in one html document
    //as it would otherwise be a mess to read
    vm.drinkListTemplateURL = 'templates/addDrinks/drinkList.template.html';
    vm.drinkOptionTemplateURL = 'templates/addDrinks/optionDrinks.template.html';
    vm.drinkInfoTemplateURL = 'templates/addDrinks/drinkInfo.template.html';

    //Initialise the controller and setup some key enviorment setups
    initController();

    function initController() {

      vm.showWalkthrough = JSON.parse(GlobalStore.getWalkStatusAddDrinks());

      //If we have a drink to edit.
      if (edit_data.length == 0) {
        //Populate the User Data from local memory
        //We really should bse handling this via a service (get setter)
        vm.datePicker = 0; //The number for the date based on creation

        //Stage display defaults
        resetVars();

        //Current Date
        vm.date = moment().format('YYYY-MM-DD');

        getDate();

      } else {

        //Find drink of interest
        var editData = userDiary.findDrink(edit_data[0], edit_data[1]);
        drink_edit = true;

        vm.date = editData.date;

        //We have a drink
        vm.qty = editData.drink_qty;
        vm.priceNumber = editData.drink_price;
        vm.price = editData.drink_price;
        vm.abvNumber = editData.drink_abv;
        vm.abv = editData.drink_abv + "%";
        vm.drink_with = screenQuestions.getQuestion(10);
        vm.drink_where = screenQuestions.getQuestion(12);
        vm.drink_with_selected = editData.who_with;
        vm.drink_where_selected = editData.where;
        vm.calories = editData.calories;
        vm.drink_edit = true;
        vm.drink_id = editData.drink_id;
        drink_data = drinkList.getDrinks(editData.drink_id);
        vm.drink_title = drink_data.drink_name;

        //Ensure we remove visability
        vm.stage_1 = false; //Display stage 1
        vm.stage_2 = false; //Display stage 1
        vm.stage_3 = true; //Display stage 1
      }
    };

    vm.hideWalk = function() {
      vm.showWalkthrough = false;
      GlobalStore.setWalkStatusAddDrinks(false);
    };

    //Generate payload ready for submission to API
    function getGPSHelper() {
      return GeoService.getPosition()
        .then(function(position) {
          return position.coords;
        }, function(err) {
          return err;
        }).then(function(pos) {
          return pos
        })
    };

    //No Drinks Day
    vm.noDrinkDayTrigger = function() {

      //Determine if it is an alcohol free day (or not)
      if (vm.noDrinkDayValue == false) {
        vm.noDrinkDayValue == true
      } else {
        vm.noDrinkDayValue == false;
      }

      getGPSHelper().then(function(pos) {
        var temp_drink_event = {
          date: vm.date,
          drink_free_status: vm.noDrinkDayValue,
          pos: pos
        }

        userDiary.setDrinkDiaryFreeDay(temp_drink_event)
      })
    };

    //Increase and decrease the date options
    vm.dateIncrement = function() {
      vm.datePicker++;
      vm.date = moment(vm.date).add(1, 'd').format('YYYY-MM-DD');
      getDate();
    };
    vm.dateDecrement = function() {
      vm.datePicker--;
      vm.date = moment(vm.date).subtract(1, 'd').format('YYYY-MM-DD');
      getDate();
    };

    //Manage the number of drinks the user is logging
    vm.qtyIncrement = function() {
      vm.qty++;
    };
    vm.qtyDecrement = function() {
      vm.qty--;
    };

    //Handle currenecy
    vm.addPoundSign = function() {
      var amount = /^\£?(\d*\.?\d*)/.exec(vm.price)[1];
      vm.price = amount;
      vm.priceNumber = amount;
    };

    vm.addPercentSign = function() {
      var per = /^\£?(\d*\.?\d*)/.exec(vm.abv)[1];
      vm.abv = per;
      vm.abvNumber = per;
    };

    //Drink Trigger
    //We pass in the drink value. We then display the drink
    //options page
    vm.drinkTrigger = function(drink) {

      //Get all the drinks related to the master drink
      vm.drinkOptions = getDrinkList(drink);

      //Store any IDs whicht he user has drank today
      vm.drinkToday = getDrinkDayIndent(drink);

      //Ensure we hide/show the correct screens
      vm.stage_1 = false; //Disable stage 1
      vm.stage_2 = true; //Display stage 2
      vm.stage_3 = false; //Disable stage 3
    };

    //Match against list to determine if user has had a drink today
    $scope.drinkThisDay = function(drink_id) {
      return vm.drinkToday.indexOf(drink_id) >= 0;
    };

    //Get the drink IDs based on ids input
    function getDrinkList(ids) {
      var drinks = {};
      for (i = 0; i < ids.length; i++) {

        drinks[i] = drinkList.getDrinks(ids[i]);
      }
      return drinks;
    };

    //Get the index location for any drinks the user has had today
    function getDrinkDayIndent(ids) {
      var drinks = [];

      for (i = 0; i < ids.length; i++) {

        var data = helperFunc.getObjects(vm.drinkDayData, 'drink_id', ids[i]);

        if (!data || !data.length) {} else {
          drinks[i] = ids[i];
        }
      }
      return drinks;
    };


    //Reset and head back to the main menu
    vm.mainScreen = function() {
      resetVars();
    };

    //Obtain Date and Drink Logs
    function getDate() {

      //Reset main views ready to be defined via  saved items)
      resetVars();

      //Get any saved items
      //Obtain drins id if it exists to enable modification
      vm.drinkDayData = helperFunc.getObjects(GlobalStore.getUserDrinksDiary(), 'date', vm.date);

      if (vm.drinkDayData.length > 0) {
        //Perform some checks on the data if length is greater than 0

        var drinkFreeDayData = helperFunc.getObjects(vm.drinkDayData, "drink_free_status", true);

        if (drinkFreeDayData.length == 1) {
          //Should only be length of 1 if a drink free day
          vm.noDrinkDayValue = drinkFreeDayData[0].drink_free_status;
        }
      }
    };

    //Drink Confirm Options
    //Selecct the drink options and populate the form
    //We may get this information from storage
    vm.drinkOptionsConfirm = function(drink) {

      //The drink input is actually the drink ID, we need to obtain the
      drink_data = drinkList.getDrinks(drink);

      //console.log("Add Drinks Tab: " + drink);
      vm.drink_title = drink_data.drink_name;
      vm.drink_id = drink;
      vm.abv = drink_data.abv;
      vm.abvNumber = drink_data.abv;
      vm.abv = drink_data.abv;
      vm.calories = drink_data.calories;
      vm.drink_free_status = false;

      //Drink ABV
      vm.abv = drink_data.abv;
      vm.abvNumber = drink_data.abv;
      vm.abv = drink_data.abv;

      //Drink Price
      vm.priceNumber = drink_data.drink_price;
      vm.price = drink_data.drink_price;

      //Ensure we remove visability
      vm.stage_1 = false; //Display stage 1
      vm.stage_2 = false; //Display stage 1
      vm.stage_3 = true; //Display stage 1

      //Obtain the two questions of interest
      vm.drink_with = screenQuestions.getQuestion(10);
      vm.drink_where = screenQuestions.getQuestion(12);

      var data = helperFunc.getObjects(vm.drinkDayData, 'drink_id', drink);

      if (data.length == 0) {
        //No drinks stored for this date or dirnk type
      } else {
        //We have a drink
        vm.qty = data[0].drink_qty;
        vm.priceNumber = data[0].drink_price;
        vm.price = data[0].drink_price;
        vm.abvNumber = data[0].drink_abv;
        vm.abv = data[0].drink_abv;
        vm.drink_with_selected = data[0].who_with;
        vm.drink_where_selected = data[0].where;
        vm.calories = data[0].calories;
        vm.drink_edit = true;
        vm.drink_id = data[0].drink_id;
        vm.drink_free_status = data[0].drink_id;;
      }
    };

    //Drink Record
    vm.recordDrink = function() {

      getGPSHelper().then(function(pos) {
        var temp_drink_event = {
          date: vm.date,
          drink_id: vm.drink_id,
          drink_qty: vm.qty,
          drink_price: vm.priceNumber,
          drink_abv: vm.abvNumber,
          who_with: vm.drink_with_selected,
          where: vm.drink_where_selected,
          calories: vm.calories,
          drink_units: (vm.abvNumber * drink_data.measure_ml) / 1000,
          drink_units_total: ((vm.abvNumber * drink_data.measure_ml) / 1000) * vm.qty,
          drink_price_total: vm.priceNumber * vm.qty,
          drink_calories_total: vm.qty * vm.calories,
          drink_free_status: vm.drink_free_status,
          pos: pos
        }

        userDiary.setDrinkDiaryEvent(temp_drink_event)

        resetVars();

        $scope.closeModal(null);
      })
    };


    //Reset Enviorment
    function resetVars() {

      //Stage display defaults
      vm.stage_1 = true; //Display stage 1
      vm.stage_2 = false; //Display stage 1
      vm.stage_3 = false; //Display stage 1
      vm.drinkOptions = {}; //Drink options
      vm.drinkToday = {};
      vm.qty = 1;
      vm.price = 0.00;
      vm.priceNumber = 0.00;
      vm.abv = 0;
      vm.calories = 0;
      vm.abvNumber = 0.00;
      vm.drink_with_selected = -1;
      vm.drink_where_selected = -1;
      drink_data = [];
      vm.drink_edit = false;
      vm.drink_id = 0;
      vm.noDrinkDayValue = false;
    };
  });
