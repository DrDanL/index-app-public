angular.module('starter')
//This factory enables us to set and get items from local memory storage (Confirmed)
.factory('$localstorage', ['$window', function($window) {
   return {
     set: function(key, value) {
       $window.localStorage[key] = value;
     },
     get: function(key, defaultValue) {
       return $window.localStorage[key] || false;
     },
     setObject: function(key, value) {
       $window.localStorage[key] = JSON.stringify(value);
     },
     getObject: function(key) {
       if($window.localStorage[key] != undefined)
         return JSON.parse($window.localStorage[key] || false );
       return false;
     },
     remove: function(key){
       $window.localStorage.removeItem(key);
     },
     clear: function(){
       $window.localStorage.clear();
     }
   }
 }])
