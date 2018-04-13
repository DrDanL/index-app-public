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
  .factory('helpList', function() {

    var quest = [{
        question: 'How do I add a drink?',
        response: 'You can add a drink by clicking the ‘Add Drinks’ tab.',
        question_id: 0
      },
      {
        question: 'How do I modify a drink?',
        response: 'You can modify a drink in two ways: 1) Using the ‘Add Drinks’ tab, navigate to the day and drink you would like to edit. 2) On the ‘Drinks Diary’ tab, scroll to the day for which the drink was logged and swipe ‘LEFT’ to edit.',
        question_id: 1
      },
      {
        question: 'How do I remove a drink?',
        response: 'You can remove a drink by going to the ‘Drinks Diary’ tab and swiping ‘LEFT’ on the day you would like to edit.',
        question_id: 2
      },
      {
        question: 'I still need help',
        response: 'If you still need support using the InDEx App please contact daniel.leightley@kcl.ac.uk.',
        question_id: 3
      }
    ];

    return {
      getQuest: function(id) {
        if (id < drinks.length) {
          return quest[id];
        } else {
          return false;
        }
      },
      allQuestions: function() {
        return quest
      }
    };
  });
