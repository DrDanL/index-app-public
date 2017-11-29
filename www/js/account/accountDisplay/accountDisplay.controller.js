angular.module('starter')
  ///////////
  //InDEx About page
  ///////////
  .controller('accountDisplayCtrl', function($scope, GlobalStore) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("My Account");
      vm.userData = GlobalStore.getUserDetails();
    };

  });
