angular.module('starter')
   ///////////
   //Tab Controller
   ///////////
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
