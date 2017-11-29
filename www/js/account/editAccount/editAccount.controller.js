angular.module('starter')
  ///////////
  //Edit Account Page
  ///////////
  .controller('editAccountCtrl', function($scope, $state, GlobalStore, $ionicPopup) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("Edit Account");
      vm.userData = GlobalStore.getUserDetails();
      vm.baseData = vm.userData;
    };

    //Update Account
    vm.updateAccount = function() {

      //Create a local store for the changes that have been made
      vm.baseData.firstname = vm.userData.firstname;
      vm.baseData.surname = vm.userData.surname;
      vm.baseData.email = vm.userData.email;
      vm.baseData.preferred_name = vm.userData.preferred_name;

      GlobalStore.setUserDetails(vm.baseData);

      var alertPopup = $ionicPopup.alert({
        title: 'Account Updated',
        template: "Account Updated"
      });

      $state.go('tabs.accountDisplay');
    };
  });
