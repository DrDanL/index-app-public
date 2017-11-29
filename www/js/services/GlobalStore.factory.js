angular.module('starter')

  .factory('GlobalStore', function($localstorage) {

    var editDate = [];

    return {
      setIsLoggedIn: function(status) {
        $localstorage.set('IS_LOGGED_IN', status);
      },
      getIsLoggedIn: function() {
        return $localstorage.get('IS_LOGGED_IN');
      },
      setUserDetails: function(user) {
        $localstorage.setObject('USER_CREDENTIALS', user);
      },
      getUserDetails: function() {
        var data = $localstorage.getObject('USER_CREDENTIALS');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      setUserPermissions: function(permissions) {
        $localstorage.setObject('PERMISSIONS', permissions)
      },
      getUserPermissions: function() {
        var data = $localstorage.getObject('PERMISSIONS');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      getRegistrationScreening: function() {
        var data = $localstorage.getObject('USER_REG_SCREENING');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      setRegistrationScreening: function(data) {
        $localstorage.setObject('USER_REG_SCREENING', data);
      },
      getDay8Screening: function() {
        var data = $localstorage.getObject('USER_DAY_8_SCREENING');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      setDay8Screening: function(data) {
        $localstorage.setObject('USER_DAY_8_SCREENING', data);
      },
      getDay15Screening: function() {
        var data = $localstorage.getObject('USER_DAY_15_SCREENING');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      setDay15Screening: function(data) {
        $localstorage.setObject('USER_DAY_15_SCREENING', data);
      },
      getDay22Screening: function() {
        var data = $localstorage.getObject('USER_DAY_22_SCREENING');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      setDay22Screening: function(data) {
        $localstorage.setObject('USER_DAY_22_SCREENING', data);
      },
      getFinalScreening: function() {
        var data = $localstorage.getObject('USER_FINAL_SCREENING');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      setFinalScreening: function(data) {
        $localstorage.setObject('USER_FINAL_SCREENING', data);
      },
      getWalkStatusAddDrinks: function() {
        return $localstorage.get('DISPLAY_ADD_DRINKS_WALK');
      },
      setWalkStatusAddDrinks: function(boolean) {
        $localstorage.set('DISPLAY_ADD_DRINKS_WALK', boolean);
      },
      getWalkStatusGoals: function() {
        return $localstorage.get('DISPLAY_GOALS_WALK');
      },
      setWalkStatusGoals: function(boolean) {
        $localstorage.set('DISPLAY_GOALS_WALK', boolean);
      },
      getWalkStatusDrinkDiary: function() {
        return $localstorage.get('DISPLAY_DRINK_DIARY_WALK');
      },
      setWalkStatusDrinkDiary: function(boolean) {
        $localstorage.set('DISPLAY_DRINK_DIARY_WALK', boolean);
      },
      getWalkStatusDashboard: function() {
        return $localstorage.get('DISPLAY_DASHBOARD_WALK');
      },
      setWalkStatusDashboard: function(boolean) {
        return $localstorage.set('DISPLAY_DASHBOARD_WALK', boolean);
      },
      setUserDrinksDiary: function(diary) {
        $localstorage.setObject('USER_DRINKS_DIARY', diary);
      },
      getUserDrinksDiary: function() {
        var data = $localstorage.getObject('USER_DRINKS_DIARY');

        if (data == false) {
          return [{}]
        } else {
          return data
        }
      },
      setUserGoals: function(goals) {
        $localstorage.setObject('USER_GOALS', goals);
      },
      getUserGoals: function() {
        var data = $localstorage.getObject('USER_GOALS');

        if (data == false) {
          return []
        } else {
          return data
        }
      },
      getdateEditDiary: function() {
        return editDate;
      },
      setdateEditDiary: function(dateEditDiary) {
        editDate = dateEditDiary;
      },
      clearStorage: function() {
        $localstorage.clear();
      },
      removeStorage: function(item) {
        $localstorage.remove(item);
      }
    };
  });
