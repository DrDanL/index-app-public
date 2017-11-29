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
