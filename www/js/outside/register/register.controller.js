angular.module('starter')
  ///////////
  //Register Controller
  ///////////
  .controller('RegisterCtrl', function($scope, $ionicPopup, $state, $ionicScrollDelegate, $ionicPopup, $state, GlobalStore) {
    var vm = this;

    initController();

    function initController() {
      $scope.page.setTitle("");
      if (GlobalStore.getIsLoggedIn()) {
        $state.go('tabs.dashboard')
      }
    };

    //Define default items for all inputs
    $scope.registerDataForm = {
      op_consent1: true,
      op_consent2: true,
      op_consent3: true,
      op_consent4: true,
      op_consent5: true,
      op_consent6: true,
      op_consent7: true,
      op_consent8: true,
      op_consent9: true,
      op_consent10: true,
      op_consent11: true,
      op_consent12: true
    };

    $scope.userData = {
      consent_obtained: false,
      gps_consent: '',
      firstname: 'Daniel',
      surname: 'Leightley',
      email: 'dan@dan.com',
      preferred_name: 'Dan',
      gender: '',
      smsmobile: '9999999999',
      code: '',
      createdAt: moment()
    };

    //Stage 1: Require informed consent
    $scope.consentComplete = function() {
      //Check all consents have been confirmed
      if ($scope.registerDataForm.op_consent1 == true && $scope.registerDataForm.op_consent2 == true &&
        $scope.registerDataForm.op_consent3 == true && $scope.registerDataForm.op_consent4 == true &&
        $scope.registerDataForm.op_consent6 == true && $scope.registerDataForm.op_consent7 == true &&
        $scope.registerDataForm.op_consent8 == true && $scope.registerDataForm.op_consent9 == true &&
        $scope.registerDataForm.op_consent10 == true && $scope.registerDataForm.op_consent11 == true &&
        $scope.registerDataForm.op_consent12 == true) {

        //If we get to this stage consent has been obtained
        $scope.registerDataForm.consent_obtained = true;

        //Provide details about the GPS consent
        $scope.userData.gps_consent = $scope.registerDataForm.op_consent5;

        //Next stage
        $state.go("outside.register.profile");

        //Reset scroll
        $ionicScrollDelegate.scrollTop();

      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'Consent Agreement',
          template: 'You have not given consent to the required options. Please scroll up and re-visit your responses'
        });
      }
    };

    //Stage 2: Confirm the mobile number is correct
    $scope.showConfirmMobile = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirm your mobile number',
        template: "+44 " + $scope.userData.smsmobile
      });
      confirmPopup.then(function(res) {
        if (res) {
          $state.go('outside.register.verify');
          var alertPopup = $ionicPopup.alert({
            title: 'Two-Step Authentication',
            template: 'Default code: 0000'
          });
        }
        //The asummption would be the user would go back and modify the mobile number provides
      });
    };

    //Stage 3: Validate SMS number
    $scope.twoStepAuth = function() {
      if ($scope.userData.code == 0000) {
        joinInDEx();
      } else {
        //Throw error message codes do not match
        var alertPopup = $ionicPopup.alert({
          title: 'Validation failed!',
          template: 'Incorrect Code'
        });
      }
    };

    //Stage 4: Enroll the user to the InDEX App
    function joinInDEx() {

      //Set Local store for data
      GlobalStore.setIsLoggedIn(true);
      GlobalStore.setUserDetails($scope.userData);
      GlobalStore.setUserPermissions({
        gps_consent: $scope.registerDataForm.op_consent5
      })

      GlobalStore.setWalkStatusDashboard(true);
      GlobalStore.setWalkStatusAddDrinks(true);
      GlobalStore.setWalkStatusGoals(true);
      GlobalStore.setWalkStatusDrinkDiary(true)
      GlobalStore.setUserDrinksDiary([{
        "date": moment().format('YYYY-MM-DD'),
        "drink_free_status": true,
        "pos": {}
      }]);

      var alertPopup = $ionicPopup.alert({
        title: 'Success!',
        template: 'Welcome to InDEx App. Please answer the next questions honestly'
      });

      $state.go('tabs.dashboard');
    }

    //Helper Functions
    $scope.filterValue = function($event) {
      if (isNaN(String.fromCharCode($event.keyCode))) {
        $event.preventDefault();
      }
    };
  });
