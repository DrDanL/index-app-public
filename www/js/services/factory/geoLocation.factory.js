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
  //This function calls the $cordovaGeolocation GPS locator and provides the results to the front-end
  .factory('GeoService', function($q, $ionicPlatform, $cordovaGeolocation, GlobalStore, $rootScope) {

    function getPosition() {
      var user_permissions = GlobalStore.getUserPermissions();

      return $q(function(resolve, reject) {

        //Define position options
        var positionOptions = {
          timeout: 10000,
          enableHighAccuracy: true
        };

        if (user_permissions.gps_consent) {
          $rootScope.$broadcast('loading:show')
          $cordovaGeolocation.getCurrentPosition(positionOptions)
            .then(function(position) {
              $rootScope.$broadcast('loading:hide')
              resolve(position);
            }, function(error) {
              reject(error);
            });
        } else {
          //If the user has declined to provide their GPS details
          reject("Permission denied by user");
        }
      })
    };
    return {
      getPosition: getPosition
    };
  });
