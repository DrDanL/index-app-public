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
  .service('AuthService', function($state, $ionicHistory, GlobalStore, $rootScope) {

    //Destory User Credentials
    function destroyUserCredentials() {

      isAuthenticated = false;

      GlobalStore.clearStorage();
      //Do some additional cleaning to try to remove EVERYTHING
      //Pesty local stores cause lots of problems
      $ionicHistory.clearCache().then(function() {
        //now you can clear history or goto another state if you need
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
          disableBack: true,
          historyRoot: true
        });

        //When the final cleaning has been comfirmed take the user to the Logout page
        $state.go('outside.register');
      });
    };

    //Logout
    logout = function() {
      destroyUserCredentials();
    };

    return {
      logout: logout,
      isAuthenticated: function() {
        return GlobalStore.getIsLoggedIn();
      },
    };
  })
