angular.module('starter')
  ///////////
  //Edit Drinks Controller
  ///////////
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
