angular.module('starter')
  ///////////
  //Account Controller
  ///////////
  .controller('accountCtrl', function($scope, GlobalStore, AuthService) {
    var vm = this;
    vm.userData = null;

    initController();

    function initController() {
      $scope.page.setTitle("Account");
      vm.userData = GlobalStore.getUserDetails();
    };

    //Logout
    vm.logout = function() {
      AuthService.logout();
    };

  });
