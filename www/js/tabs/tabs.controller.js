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
   .controller('tabCtrl', function($scope, myModals, $state) {
      var vmTab = this;

      vmTab.addDrink = function() {
         myModals.showAddDrinks([])
            .then(function(result) {
               $state.reload();
            }, function(err) {
               alert(err);
            });
      };
   })
