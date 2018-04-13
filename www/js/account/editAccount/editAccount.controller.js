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
      //This payload should be sent via an API to a backend service
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
