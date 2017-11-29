angular.module('starter')
    //This function revsers an array input use by ng-repeat="array | reverse"
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });
