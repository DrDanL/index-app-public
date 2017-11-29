angular.module('starter')
  ///////////
  //About Page
  ///////////
  .controller('aboutCtrl', function($scope) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("About");
    };

  });
