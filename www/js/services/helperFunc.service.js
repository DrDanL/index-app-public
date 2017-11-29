angular.module('starter')
  ///////////
  //Helper Service
  ///////////
  .service('helperFunc', function($filter) {

    return {
      earlyDateFinder: function(dateArray) {
        var min = dateArray[0].date;
        for (var i = 0; i < dateArray.length; i++) {
          if (dateArray[i].date < min) {
            min = dateArray[i].date;
          }
        }

        return min;
      },
      dateDifference: function(date1, date2, shift) {
        //Ensure the dates are in moments format
        var a = moment(date1, 'YYYY-MM-DD');
        var b = moment(date2, 'YYYY-MM-DD');

        //note that if you want total days including today add +1
        return a.diff(b, 'days') + shift;
      },
      getDates: function(startDate, endDate, dateFormat) {
        if (startDate.isSame(endDate, 'd')) {
          return [startDate.format(dateFormat)]
        }

        var dates = [startDate.format(dateFormat)],
          end = moment(endDate),
          diff = endDate.diff(startDate, 'days');

        if (!startDate.isValid() || !endDate.isValid() || diff <= 0) {
          return [startDate.format(dateFormat)];
        }
        //Note that we include today
        for (var i = 0; i < diff; i++) {
          dates.push(startDate.add(1, 'd').format(dateFormat));
        }

        return dates;
      },
      sumArray: function(input) {
        var total = 0;
        for (var i in input) {
          total += input[i];
        }

        return total;
      },
      sumArrayKey: function(input, key) {
        return input.reduce(function(a, b) {
          return Math.round(a + b[key]);
        }, 0);
      },
      getDateArrayNames: function(dates) {
        var dayNames = [];
        //Change the format below to change the format of the date day names
        for (var i = 0; i < dates.length; i++) {
          dayNames[i] = moment(dates[i]).format('ddd-DD');
        }

        return dayNames;
      },
      getObjects: function(obj, key, val) {
        var objects = [];
        for (var i in obj) {
          if (!obj.hasOwnProperty(i)) continue;
          if (typeof obj[i] == 'object') {
            objects = objects.concat(this.getObjects(obj[i], key, val));
          } else
            //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
            if (i == key && obj[i] == val || i == key && val == '') { //
              objects.push(obj);
            } else if (obj[i] == val && key == '') {
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1) {
              objects.push(obj);
            }
          }
        }

        return objects;
      }
    }
  })
