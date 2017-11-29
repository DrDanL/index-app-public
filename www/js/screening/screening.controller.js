angular.module('starter')
  ///////////
  //Screening Display
  ///////////
  .controller('ScreeningCtrl', function($scope, screenDetect, screenQuestions, GlobalStore, $state) {
    var vm = this;
    var listQuestionIDs = []; //Store the question IDs (index locations)
    var ptsd_trigger = false;
    var audit_trigger = false;

    //Data stores
    vm.screeningTitle = ""; //Store the page title
    vm.questionLength = null; //Question length
    vm.screenOver = false; //Screening complete?
    vm.showNext = true; //Should we show another question?
    vm.questionIncremnt = 0; //Question increment
    vm.nextStep = true; //Display next button
    $scope.dataObject = {}; //Scope to store the questions

    initController();

    function initController() {

      //console.log("Screening ID: " + screeningID)
      if (screenDetect.getScreeningID() == 1) {
        $scope.page.setTitle("Tell us about you...");
        vm.screeningTitle = "Tell us about you...";
      } else {
        $scope.page.setTitle("How are you doing...");
        vm.screeningTitle = "How are you doing...";
      }

      screenIDsArrayFill();

      //Begin initalisation of the questionnaire
      vm.questionLength = listQuestionIDs.length - 1; //Number of questions

      //Obtain the first question
      getQuestion(vm.questionIncremnt);
    };

    //Obtain the required questions for the screening type
    function screenIDsArrayFill() {
      if (screenDetect.getScreeningID() == 1) {
        //Registration questions
        listQuestionIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
      } else if (screenDetect.getScreeningID() == 5) {
        //Final Screening - Except age and others maybe?
        listQuestionIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
      } else {
        //Weekly questions
        listQuestionIDs = [14, 15, 16, 17, 31, 32, 33];
      }
    };

    //Get Question
    function getQuestion(indexLoc) {
      id = listQuestionIDs[indexLoc];

      //Get the screening question base on array index id
      var q = screenQuestions.getQuestion(id);
      //console.log(q)

      if (q) {
        //If we have a question grab out some key and populate
        vm.question = q.question;
        vm.options = q.options;
        vm.num_response = q.num_response;
        vm.type_id = q.type_id; //Type variable
        vm.display_type = q.display_type; //Display Type
        vm.valueOptions = q.values; //Display Type
      }
      //If it is the last question lets display the save option
      if (vm.questionIncremnt == vm.questionLength) {
        vm.showNext = false;
        vm.screenOver = true;
      }
      //IF we are showing a single questions
      if (listQuestionIDs.length == 1) {
        vm.screenOver = true;
        vm.showNext = false;
      }
    };

    //Next Question
    //Let's move to the next question (based on user event)
    vm.showNextButton = function() {
      vm.nextStep = false; //Display next button
    };

    //Next Question
    //Let's move to the next question (based on user event)
    vm.nextQuestion = function() {
      vm.nextStep = true; //Display next button

      //If the user answers no to PTSD, stop the questionnaire
      //(or skip questions)
      //This does limit us, it requires us to look out for PTSD variable and skip to the next object.
      //This triggers on the registration screening
      if ($scope.dataObject.ptsd_1 == 0 && ptsd_trigger == false) {
        ptsd_trigger = true;
        vm.questionIncremnt = 24;
        getQuestion(vm.questionIncremnt);
      } else if ($scope.dataObject.audit_1 == 0 && audit_trigger == false) {
        audit_trigger = true;
        vm.questionIncremnt = 8;
        getQuestion(vm.questionIncremnt);
      } else {
        vm.questionIncremnt++;
        getQuestion(vm.questionIncremnt);
      }
    };

    //Save Response
    vm.saveResponse = function() {

      if (screenDetect.getScreeningID() == 1) {
        GlobalStore.setRegistrationScreening($scope.dataObject);
        $state.go('tabs.normative')
      }

      if (screenDetect.getScreeningID() == 2) {
        GlobalStore.setDay8Screening($scope.dataObject);
        $state.go('tabs.dashboard')
      }

      if (screenDetect.getScreeningID() == 3) {
        GlobalStore.setDay15Screening($scope.dataObject);
        $state.go('tabs.dashboard')
      }

      if (screenDetect.getScreeningID() == 4) {
        GlobalStore.setDay22Screening($scope.dataObject);
        $state.go('tabs.dashboard')
      }

      if (screenDetect.getScreeningID() == 5) {
        GlobalStore.setFinalScreening($scope.dataObject);
        $state.go('tabs.dashboard')
      }
    };
  });
