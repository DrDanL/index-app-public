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
  .service('userDiary', function(helperFunc, GlobalStore) {

    return {
      setDrinkDiaryFreeDay: function(free_day_event) {
        var temp_diary = GlobalStore.getUserDrinksDiary();

        //Check to ensure no data for present day
        var date_data = helperFunc.getObjects(temp_diary, 'date', free_day_event.date);

        if (date_data.length > 0) {
          //Check to see why it is not empty. It could be that drinks have been added OR the day is already set as a drinks free day

          temp_diary = temp_diary.filter(function(obj) {
            return obj.date !== free_day_event.date;
          });

          //If drinks already present. Remove all
          if (free_day_event.drink_free_status == true) {
            temp_diary.push(free_day_event)
          }

        } else {
          //object is empty
          temp_diary.push(free_day_event)
        }

        GlobalStore.setUserDrinksDiary(temp_diary);
      },
      setDrinkDiaryEvent: function(diaryEvent) {
        var temp_diary = GlobalStore.getUserDrinksDiary();

        //Check to ensure no data for presented day
        var date_data = helperFunc.getObjects(temp_diary, 'date', diaryEvent.date);

        if (date_data.length > 0) {

          temp_diary = temp_diary.filter(function(obj) {
            if (obj.drink_id == diaryEvent.drink_id && obj.date == diaryEvent.date) {} else {
              return obj
            }
          });

          temp_diary.push(diaryEvent)

        } else {
          //Object is empty
          temp_diary.push(diaryEvent)
        }
        GlobalStore.setUserDrinksDiary(temp_diary);
      },
      removeDrink: function(date, drink_id) {

        var diary = GlobalStore.getUserDrinksDiary();

        if (diary.length == 1) {
          //Enable user to see a drink free day
          //Forces them to be aware of the function
          GlobalStore.setUserDrinksDiary([{
            "date": moment().format('YYYY-MM-DD'),
            "drink_free_status": true,
            "pos": {}
          }]);
          return
        }

        for (i = 0; i < diary.length; i++) {

          if (diary[i].date == date && diary[i].drink_id == drink_id) {
            diary.splice(i, 1);
          }
        }

        GlobalStore.setUserDrinksDiary(diary);
      },
      findDrink: function(date, drink_id) {

        var diary = GlobalStore.getUserDrinksDiary();

        for (i = 0; i < diary.length; i++) {

          if (diary[i].date == date && diary[i].drink_id == drink_id) {
            //Drink matches. Return drink
            return diary[i]
          }
        }
      },
      findDrinkDate: function(date) {

        var diary = [];

        for (i = 0; i < GlobalStore.getUserDrinksDiary().length; i++) {
          if (GlobalStore.getUserDrinksDiary()[i].date == date) {
            diary.push(GlobalStore.getUserDrinksDiary()[i])
          }
        }

        return diary
      },
      generateDaySummary: function() {

        //Identify the start date and dates between then and now
        var date_list = helperFunc.getDates(this.startDateDrinks(), moment(), 'YYYY-MM-DD');

        var compiled_summary = [];

        //Loop through all objects and generate summary including day summaries
        for (i = 0; i < date_list.length; i++) {

          var drinkData = helperFunc.getObjects(GlobalStore.getUserDrinksDiary(), "date", date_list[i]);

          if (drinkData.length > 0) {

            //Check if drink free day
            if (drinkData[0].drink_free_status == true) {
              //Drink free day
              compiled_summary.push({
                "date": date_list[i],
                "drink_free_status": true
              })
            } else {
              //Drinks logged
              compiled_summary.push({
                "date": date_list[i],
                "drink_free_status": false,
                "drink_price_total": this.getTotalCost(drinkData),
                "drink_calories_total": this.getTotalCalories(drinkData),
                "drink_qty": this.getTotalDrinks(drinkData),
                "drink_units_total": this.getTotalUnits(drinkData)
              })
            }
          } else {
            //Drink free day assumed
            compiled_summary.push({
              "date": date_list[i],
              "drink_free_status": true
            })
          }
        }

        return compiled_summary
      },
      getTotalCost: function(data) {
        var total = 0;
        for (var i in data) {
          total += data[i].drink_price_total;
        }

        return Math.round(total);
      },
      getTotalCalories: function(data) {
        var total = 0;
        for (var i in data) {
          total += data[i].drink_calories_total;
        }
        return total;
      },
      getTotalDrinks: function(data) {
        var total = 0;
        for (var i in data) {
          total += data[i].drink_qty;
        }

        return total;
      },
      getTotalUnits: function(data) {
        var total = 0;
        for (var i in data) {
          total += data[i].drink_units_total;
        }

        return Math.round(total);
      },
      getTotalUnitsWeek: function(data) {
        var total = [];
        var date = [];
        var dataTemp = data.slice().reverse();

        for (i = 0; i < 6; i++) {

          var drinkData = dataTemp[i];

          if (drinkData === undefined) {
            total.push(0);
            date.push('M');
          } else {
            if (drinkData.drink_free_status == true) {
              total.push(0);
              date.push(moment(drinkData.date).format('ddd'));
            } else {
              total.push(drinkData.drink_units_total);
              date.push(moment(drinkData.date).format('ddd'));
            }
          }
        }

        return [total, date]
      },
      getTotalDrinksWeek: function(data) {
        var total = [];
        var date = [];
        var dataTemp = data.slice().reverse();

        for (i = 0; i < 6; i++) {

          var drinkData = dataTemp[i];

          if (drinkData === undefined) {
            total.push(0);
            date.push('M');
          } else {
            if (drinkData.drink_free_status == true) {
              total.push(0);
              date.push(moment(drinkData.date).format('ddd'));
            } else {
              total.push(drinkData.drink_qty);
              date.push(moment(drinkData.date).format('ddd'));
            }
          }
        }

        return [total, date]
      },
      getTotalCaloriesWeek: function(data) {
        var total = [];
        var date = [];
        var dataTemp = data.slice().reverse();

        for (i = 0; i < 6; i++) {

          var drinkData = dataTemp[i];

          if (drinkData === undefined) {
            total.push(0);
            date.push('M');
          } else {
            if (drinkData.drink_free_status == true) {
              total.push(0);
              date.push(moment(drinkData.date).format('ddd'));
            } else {
              total.push(drinkData.drink_calories_total);
              date.push(moment(drinkData.date).format('ddd'));
            }
          }
        }

        return [total, date]
      },
      getTotalCostWeek: function(data) {
        var total = [];
        var date = [];
        var dataTemp = data.slice().reverse();

        for (i = 0; i < 6; i++) {

          var drinkData = dataTemp[i];

          if (drinkData === undefined) {
            total.push(0);
            date.push('M');
          } else {
            if (drinkData.drink_free_status == true) {
              total.push(0);
              date.push(moment(drinkData.date).format('ddd'));
            } else {
              total.push(drinkData.drink_price_total);
              date.push(moment(drinkData.date).format('ddd'));
            }
          }
        }

        return [total, date]
      },
      startDateDrinks: function() {
        //Date of first drink logged
        var drinkDates = helperFunc.getObjects(GlobalStore.getUserDrinksDiary(), "date", []);

        return moment(helperFunc.earlyDateFinder(drinkDates));
      },
      getExercise: function(data) {

        var totalCals = helperFunc.sumArray(this.getTotalCaloriesWeek(data)[0]);

        if (GlobalStore.getUserDetails().gender == "Male") {
          //One calory is equal to:
          var runnCalTime = 0.09;
        } else {
          //One calory is equal to:
          var runnCalTime = 0.11;
        }

        return Math.round(totalCals * runnCalTime);
      },
      getTotalBurgers: function(total_cal) {

        var burgerCal = 354;

        return Math.round(total_cal / burgerCal);
      }
    }
  })
