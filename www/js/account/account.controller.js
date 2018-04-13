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
