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
  .service('screenDetect', function($state, GlobalStore, helperFunc) {
    var screening_id = null; //1: reg week, 2: day 8, 3: 15, 4: 22, 5: 30

    //Determine the number of days using the app
    function determineScreening() {

      var daysUsing = helperFunc.dateDifference(moment(), GlobalStore.getUserDetails().createdAt, 1);

      getScreeningSwitch(daysUsing)
    };

    function getScreeningSwitch(daysUsing) {
      switch (daysUsing) {
        case 1:
          if (GlobalStore.getRegistrationScreening() == false) {
            screening_id = 1;
            $state.go("screening")
            console.log("Go to registration screening")
          }
          break;
        case 2:
          if (GlobalStore.getRegistrationScreening() == false) {
            screening_id = 1;
            $state.go("screening")
            console.log("Go to registration screening")
            //Account locked
          }
          break;
        case 8:
          if (GlobalStore.getDay8Screening() == false) {
            screening_id = 2;
            $state.go("screening")
            console.log("Go to day 8 screening")
          }
          break;
        case 9:
          if (GlobalStore.getDay8Screening() == false) {
            screening_id = 2;
            $state.go("screening")
            console.log("Go to day 8 screening")
          }
          break;
        case 15:
          if (GlobalStore.getDay15Screening() == false) {
            screening_id = 3;
            $state.go("screening")
            console.log("Go to day 15 screening")
          }
          break;
        case 16:
          if (GlobalStore.getDay15Screening() == false) {
            screening_id = 3;
            $state.go("screening")
            console.log("Go to day 15 screening")
          }
          break;
        case 22:
          if (GlobalStore.getDay22Screening() == false) {
            screening_id = 4;
            $state.go("screening")
            console.log("Go to day 22 screening")
          }
          break;
        case 23:
          if (GlobalStore.getDay22Screening() == false) {
            screening_id = 4;
            $state.go("screening")
            console.log("Go to day 22 screening")
          }
          break;
        default:
          if (GlobalStore.getFinalScreening() == false && daysUsing >= 28) {
            screening_id = 5;
            $state.go("screening")
            console.log("Go to final screening")
          }
      }
    };

    //Get the Screening ID
    //Return the screening ID to the requestor
    function getScreeningID() {
      return screening_id;
    };

    return {
      determineScreening: determineScreening,
      getScreeningID: getScreeningID
    };
  })
