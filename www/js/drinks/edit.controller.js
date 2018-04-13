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
  .controller('editCtrl', function($scope, GlobalStore, helperFunc, drinkList, userDiary, myModals, $state) {
    var vm = this;
    vm.diaryDayEditItems = null;

    initController();

    function initController() {
      $scope.page.setTitle("Edit Drinks");

      vm.diaryDayEditItems = helperFunc.getObjects(GlobalStore.getUserDrinksDiary(), 'date', GlobalStore.getdateEditDiary());
    };

    $scope.returnDrinkName = function(id) {
      var drink = drinkList.getDrinks(id);
      return drink.drink_name + ' - ' + drink.drink_measure;
    };

    $scope.returnDrinkImage = function(id) {
      var drink = drinkList.getDrinks(id);
      return drink.image;
    };

    vm.removeData = function(index) {
      vm.diaryDayEditItems.splice(index, 1);
    };

    //Remove the recorded drink
    vm.removeDrink = function(index) {

      userDiary.removeDrink(vm.diaryDayEditItems[index].date, vm.diaryDayEditItems[index].drink_id)

      vm.diaryDayEditItems.splice(index, 1);

      if(vm.diaryDayEditItems.length == 0) {
        $state.go("tabs.drinks")
      }
    };

    //Add Drinks
    vm.editDrink = function(index) {

      myModals.showAddDrinks([vm.diaryDayEditItems[index].date, vm.diaryDayEditItems[index].drink_id])
        .then(function(result) {
          $state.reload();
        }, function(err) {
          alert(err);
        });
    };

  });
