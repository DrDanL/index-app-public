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

angular.module('starter', ['ionic', 'ngAnimate', 'pascalprecht.translate', 'ngCordova', 'ui.router', 'ngStorage', 'ionic-material', 'chart.js', 'ng-walkthrough'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('outside', {
        url: '/outside',
        abstract: true,
        templateUrl: 'templates/outside/outside.template.html'
      })
      .state('outside.register', {
        url: '/register',
        templateUrl: 'templates/outside/register/register.template.html',
        controller: 'RegisterCtrl',
        cache: false //Force state (view) to refresh
      })
      .state('outside.register.consent', {
        url: '/consent',
        templateUrl: 'templates/outside/register/step1.template.html',
        cache: false
      })
      .state('outside.register.profile', {
        url: '/profile',
        templateUrl: 'templates/outside/register/step2.template.html',
        cache: false
      })
      .state('outside.register.verify', {
        url: '/verify',
        templateUrl: 'templates/outside/register/step3.template.html',
        cache: false
      })
      .state('screening', {
        url: '/screening',
        templateUrl: 'templates/screening/registration/registration.template.html',
        controller: 'ScreeningCtrl',
        controllerAs: 'vm',
        cache: false
      })
      .state('tabs', {
        url: "/tab",
        abstract: true,
        cache: false,
        controller: 'tabCtrl',
        controllerAs: 'vmTab',
        templateUrl: "templates/tabs/tabs.template.html"
      })
      .state('tabs.normative', {
        url: '/normative',
        cache: false,
        views: {
          'support-tab': {
            templateUrl: 'templates/normative/normative.template.html',
            controllerAs: 'vm',
            controller: 'normativeCtrl'
          }
        }
      })
      .state('tabs.support', {
        url: '/support',
        cache: false,
        views: {
          'support-tab': {
            templateUrl: 'templates/support/support.template.html',
            controllerAs: 'vm',
            controller: 'supportCtrl'
          }
        }
      })
      .state('tabs.dashboard', {
        url: '/dashboard',
        cache: false,
        views: {
          'dashboard-tab': {
            templateUrl: 'templates/dashboard/dashboard.template.html',
            controllerAs: 'vm',
            controller: 'dashboardCtrl'
          }
        }
      })
      .state('tabs.goals', {
        url: '/goals',
        cache: false,
        views: {
          'goals-tab': {
            templateUrl: 'templates/goals/goals.template.html',
            controllerAs: 'vm',
            controller: 'goalsCtrl'
          }
        }
      })
      .state('tabs.drinks', {
        url: '/drinks',
        cache: false,
        views: {
          'drinks-tab': {
            templateUrl: 'templates/drinks/drinks.template.html',
            controllerAs: 'vm',
            controller: 'drinksCtrl'
          }
        }
      })
      .state('tabs.edit-drink', {
        url: "/edit-drink",
        cache: false,
        views: {
          'drinks-tab': {
            templateUrl: 'templates/drinks/edit.template.html',
            controllerAs: 'vm',
            controller: 'editCtrl'
          }
        }
      })
      .state('tabs.account', {
        url: '/account',
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/account.template.html',
            controllerAs: 'vm',
            controller: 'accountCtrl'
          }
        }
      })
      .state('tabs.index', {
        url: "/about-index",
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/about/about.template.html',
            controllerAs: 'vm',
            controller: 'aboutCtrl'
          }
        }
      })
      .state('tabs.help', {
        url: "/help-index",
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/help/help.template.html',
            controllerAs: 'vm',
            controller: 'helpCtrl'
          }
        }
      })
      .state('tabs.walkthrough', {
        url: "/walkthrough",
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/walkthrough/walkthrough.template.html',
            controllerAs: 'vm',
            controller: 'walkthroughCtrl'
          }
        }
      })
      .state('tabs.consent', {
        url: "/consent",
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/consent/consent.template.html',
            controllerAs: 'vm',
            controller: 'consentCtrl'
          }
        }
      })
      .state('tabs.accountDisplay', {
        url: "/accountDisplay",
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/accountDisplay/accountDisplay.template.html',
            controllerAs: 'vm',
            controller: 'accountDisplayCtrl'
          }
        }
      })
      .state('tabs.editAccount', {
        url: "/editAccount",
        cache: false,
        views: {
          'account-tab': {
            templateUrl: 'templates/account/editAccount/editAccount.template.html',
            controllerAs: 'vm',
            controller: 'editAccountCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/outside/register');
  })
  .run(function($rootScope, $state, $ionicPlatform, $ionicLoading, $ionicPopup, GlobalStore, screenDetect) {

    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {

      if (!GlobalStore.getIsLoggedIn() || GlobalStore.getIsLoggedIn() == undefined) {

        if (next.name !== 'outside.register' && next.name !== 'outside.register.consent' && next.name !== 'outside.register.profile' && next.name !== 'outside.register.verify') {
          event.preventDefault();
          $state.go('outside.register');
        }
      }
    });

    //Let's manage the internal titles on pages
    $rootScope.page = {
      setTitle: function(title) {
        this.title = title + ' | InDEx';
      }
    };

    //Change title as required
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      $rootScope.page.setTitle(current.$route.title || 'InDEx App');
    });

    //Let's manage screening redirection
    $rootScope.$on('$stateChangeSuccess', function(event, current, previous) {
      screenDetect.determineScreening();
    });

    //Event fire action
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
