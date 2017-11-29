angular.module('starter')
  ///////////
  //Normative Feedback Controller
  ///////////
  .controller('normativeCtrl', function($scope, GlobalStore, userDiary) {
    var vm = this
    vm.hgt_general = 0;
    vm.hgt_user = 0;
    vm.user_text_status = '';
    vm.alertStatus = false;
    vm.people_count = 1;
    vm.people_count_text = '';

    initController();

    function initController() {
      vm.userData = GlobalStore.getUserDetails();

      vm.screeningData = GlobalStore.getRegistrationScreening();
      riskLevel();
    };

    $scope.getNumber = function(num) {
      return new Array(num);
    };

    Highcharts.chart('cal-display', {
      chart: {
        type: 'pie'
      },
      title: {
        text: null
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: false,
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Result',
        colorByPoint: true,
        data: [{
          name: 'Weekly Calories',
          y: vm.weeklyCalVal
        }, {
          name: 'Your Alcohol Calories',
          y: vm.weeklyAlcVal,
          sliced: true,
          selected: true
        }]
      }],
      colors: ["#2f7ed8", "#ff6666"]
    });

    //Get warning status
    function riskLevel() {
      var audit_score = 0;
      var unit_intake = vm.screeningData.audit_2 * 2;
      var drink_cal_avg = 250;

      //Determine cost based on location costings
      if (vm.screeningData.drink_location_2 == 1 || vm.screeningData.drink_location_2 == 4 || vm.screeningData.drink_location_2 == 5) {

        var drink_cost_avg = 2; //the average drink cost
        vm.source_summary = "These results are based on the Alcohol Toolkit Study which represents 21,000 adults in the UK. We have tailored these results based on you mostly drinking at home or with friends from the forces and the responses to the questions when you joined";

      } else if (vm.screeningData.drink_location_2 == 2 || vm.screeningData.drink_location_2 == 3) {
        //Pub or club
        var drink_cost_avg = 4; //the average drink cost
        vm.source_summary = "These results are based on the Alcohol Toolkit Study which represents 21,000 adults in the UK. We have tailored these results based on you mostly drinking in a club, pub and outside of the home and the responses to the questions when you joined";
      }

      //Compute AUDIT score
      for (i = 1; i <= 10; i++) {
        if (vm.screeningData['audit_' + i] != undefined) {
          audit_score += parseInt(vm.screeningData['audit_' + i]);
        }
      };

      //Generate data to fill the gaps
      if (audit_score == 0) { //Stage 1
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you do not currently drink any alcohol";
        vm.alertStatus = false; //if false, show green tick
        vm.people_count = 1;
        vm.people_count_text = "10% of people drink less than you in the UK";

        vm.hgt_user = 0;
      } else if (audit_score < 4) { //Stage 1
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a LOW risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = false; //if false, show green tick
        vm.people_count = 1;
        vm.people_count_text = "10% of people drink less than you in the UK";

        vm.hgt_user = 50;
      } else if (audit_score > 4 && audit_score <= 8) { //Stage 2
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a LOW risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = false; //if false, show green tick
        vm.people_count = 2;
        vm.people_count_text = "20% of people drink less than you in the UK";

        vm.hgt_user = 65;
      } else if (audit_score > 8 && audit_score <= 12) { //Stage 3
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at an AVERAGE risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = false; //if false, show green tick
        vm.people_count = 3;
        vm.people_count_text = "30% of people drink less than you in the UK";

        vm.hgt_user = 80;
      } else if (audit_score > 12 && audit_score <= 16) { //Stage 4
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at an INCREASED risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 4;
        vm.people_count_text = "40% of people drink less than you in the UK";

        vm.hgt_user = 95;
      } else if (audit_score > 16 && audit_score <= 20) { //Stage 5
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at an INCREASED risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 5;
        vm.people_count_text = "50% of people drink less than you in the UK";

        vm.hgt_user = 110;
      } else if (audit_score > 20 && audit_score <= 24) { //Stage 6
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a HIGH risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 6;
        vm.people_count_text = "60% of people drink less than you in the UK";

        vm.hgt_user = 125;
      } else if (audit_score > 24 && audit_score <= 28) { //Stage 7
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a HIGH risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 7;
        vm.people_count_text = "70% of people drink less than you in the UK";

        vm.hgt_user = 140;
      } else if (audit_score > 28 && audit_score <= 32) { //Stage 8
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a SERVERE risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 8;
        vm.people_count_text = "80% of people drink less than you in the UK";

        vm.hgt_user = 155;
      } else if (audit_score > 32 && audit_score <= 36) { //Stage 9
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a SERVERE risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 9;
        vm.people_count_text = "90% of people drink less than you in the UK";

        vm.hgt_user = 170;
      } else if (audit_score > 36 && audit_score <= 40) { //Stage 10
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a SERVERE risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 10;
        vm.people_count_text = "Most people drink less than you in the UK";

        vm.hgt_user = 185;
      } else {
        vm.user_text_status = "Hi " + vm.userData.preferred_name + " you're at a AVERAGE risk compared to those around you in the UK to your health due to drinking";
        vm.alertStatus = true; //if false, show green tick
        vm.people_count = 5;
        vm.people_count_text = "50% of people drink less than you in the UK";

        vm.hgt_user = 125;
      };

      //Compute general age data for user based on gender
      if (parseInt(vm.screeningData.age_group) == 1 || parseInt(vm.screeningData.age_group) == null || parseInt(vm.screeningData.age_group) === undefined) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 50;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 2) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 65;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 3) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 50;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 4) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 65;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 5) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 50;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 6) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 60;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 7) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 8) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 9) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 10) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 50;
        } else {
          vm.hgt_general = 50;
        }
      };
      if (parseInt(vm.screeningData.age_group) == 11) {
        if (vm.userData.gender == "Male") {
          vm.hgt_general = 65;
        } else {
          vm.hgt_general = 50;
        }
      };

      //Gender Calories
      var total_cals = 0;
      if (vm.userData.gender == "Male") {
        total_cals = 17500;
      } else {
        total_cals = 14000;
      }

      var temp_cal_count = drink_cal_avg * 2 * unit_intake;
      var remain = total_cals - temp_cal_count;
      vm.weeklyCalVal = (remain / total_cals) * 100;
      vm.weeklyAlcVal = 100 - ((remain / total_cals) * 100);

      //Pass into burger number
      vm.burger_num = userDiary.getTotalBurgers(temp_cal_count) * unit_intake;
      vm.weeklyCost = (vm.burger_num * drink_cost_avg).toFixed(2);

      vm.calSumm = "You drink " + Math.round(vm.weeklyAlcVal) + "% of your recommended weekly in-take of calories on alcohol alone";
    }
  });
