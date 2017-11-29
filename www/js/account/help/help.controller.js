angular.module('starter')
  ///////////
  //Help Pages
  ///////////
  .controller('helpCtrl', function($scope, helpList) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("Help");
      vm.questions = helpList.allQuestions();
    };

  });
