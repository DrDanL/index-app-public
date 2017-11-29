angular.module('starter')
  ///////////
  //Support Page Controller
  ///////////
  .controller('supportCtrl', function($scope) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("Support");
    };
  });
