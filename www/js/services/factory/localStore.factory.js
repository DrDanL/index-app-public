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
