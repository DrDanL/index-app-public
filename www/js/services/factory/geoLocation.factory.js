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
