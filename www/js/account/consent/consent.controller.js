angular.module('starter')
  ///////////
  //Consent Display Page
  ///////////
  .controller('consentCtrl', function($scope, GlobalStore) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("Consent");
      vm.userJoinDate = GlobalStore.getUserDetails().createdAt;
      vm.userPermissions = GlobalStore.getUserPermissions();
    };

  });
