angular.module('starter')
  ///////////
  //Barrier Questions
  ///////////
  .factory('barrierQuestions', function() {

    var barriers = [
      {
        question: null,
        options: null,
        values: null,
        type_id: null,
        barrier_id: 0
      },
      //GOAL 1
      {
        question: "Other people encourage me to have a drink",
        options: ["I will change my usual drink for a smaller measure", "I will drink water in between my drinks ", "I will buy my own drinks so that I can see how much I’m drinking"],
        values: [1, 2, 3],
        type_id: ["goal_1_option_1"],
        barrier_id: 1
      },
      {
        question: "I’m in social situation that involve alcohol",
        options: ["I will buy my own drinks instead of doing rounds", "I will buy a snack to eat in between drinks", "I will order water between my drinks"],
        values: [1, 2, 3],
        type_id: ["goal_1_option_2"],
        barrier_id: 2
      },
      {
        question: "I’m spending time with friends who drink a lot",
        options: ["I will buy my own drinks", "I will switch my usual drink for a bottle or something smaller", "I will have a big meal before I go out "],
        values: [1, 2, 3],
        type_id: ["goal_1_option_3"],
        barrier_id: 3
      },
      {
        question: "I’m feeling frustrated, sad, anxious or bored",
        options: ["I will take only cash out with me so that I can see how much I’m drinking", "I will drink slowly to make my drinks last", "I will switch to bottled drinks or something smaller"],
        values: [1, 2, 3],
        type_id: ["goal_1_option_4"],
        barrier_id: 4
      },
      {
        question: "I’m feeling happy or excited",
        options: ["I will go out later in the evening so that I’m less likely to drink as much", "I will arrange to have a meal with friends before I go out", "I will order water to have in between my drinks"],
        values: [1, 2, 3],
        type_id: ["goal_1_option_5"],
        barrier_id: 5
      },
      //GOAL 2
      {
        question: "Other people encourage me to have a drink",
        options: ["I will choose a different alcohol-free day", "I will suggest that we go to a coffee shop or café ", "I will switch my usual drink to a soft drink"],
        values: [1, 2, 3],
        type_id: ["goal_2_option_1"],
        barrier_id: 6
      },
      {
        question: "I’m in social situations that involve alcohol",
        options: ["I will buy my own alcohol-free drink", "I will order a mocktail", "I will choose a different day to be alcohol-free"],
        values: [1, 2, 3],
        type_id: ["goal_2_option_2"],
        barrier_id: 7
      },
      {
        question: "My partner drinking at home",
        options: ["I will suggest we drink on specific days", "I will suggest that we go for a walk", "I will bring home a treat to have such as chocolate"],
        values: [1, 2, 3],
        type_id: ["goal_2_option_3"],
        barrier_id: 8
      },
      {
        question: "I’m spending time with friends who drink a lot",
        options: ["I will suggest that we do a different activity", "I will give rounds a miss and buy my own soft drinks ", "I will opt for an alcohol-free drink"],
        values: [1, 2, 3],
        type_id: ["goal_2_option_4"],
        barrier_id: 9
      },
      {
        question: "I’m feeling frustrated, sad, anxious or bored",
        options: ["I will go for a walk to get fresh air", "I will go for a bike ride", "I will take up some voluntary work"],
        values: [1, 2, 3],
        type_id: ["goal_2_option_5"],
        barrier_id: 10
      },
      {
        question: "I’m feeling happy or excited",
        options: ["I will try a new activity that I have been wanting to do", "I will go to a comedy club with friends", "I will catch up with an old friend"],
        values: [1, 2, 3],
        type_id: ["goal_2_option_6"],
        barrier_id: 11
      },
      //GOAL 3
      {
        question: "Other people encourage me to have a drink",
        options: ["I will opt for buying my own drinks", "I will only bring cash with me to check how much I spend", "I will have a soft drink between my drinks"],
        values: [1, 2, 3],
        type_id: ["goal_3_option_1"],
        barrier_id: 12
      },
      {
        question: "I’m in social situations that involve alcohol",
        options: ["I will have a large meal before I go out so that I spend less", "I will order water to space out my drinks", "I will buy my own drinks"],
        values: [1, 2, 3],
        type_id: ["goal_3_option_2"],
        barrier_id: 13
      },
      {
        question: "I’m spending time with friends who drink a lot",
        options: ["I will buy snacks to have", "I will organise a meal before going out so that I don’t spend as much", "I will suggest going somewhere new like a café"],
        values: [1, 2, 3],
        type_id: ["goal_3_option_3"],
        barrier_id: 14
      },
      {
        question: "My partner drinking at home",
        options: ["I will suggest that we save some for another day", "I will suggest that we buy less alcohol", "I will bring home a treat during the week such as chocolate instead of booze"],
        values: [1, 2, 3],
        type_id: ["goal_3_option_4"],
        barrier_id: 15
      },
      {
        question: "I’m feeling frustrated, sad, anxious or bored",
        options: ["I will break the habit and go for a walk instead of having a drink", "I will do activity with a friend instead of having a drink", "I will finish bits that I have been meaning to do instead of going for a drink"],
        values: [1, 2, 3],
        type_id: ["goal_3_option_5"],
        barrier_id: 16
      },
      {
        question: "I’m feeling happy or excited",
        options: ["I will invite people over for a meal so that I can control how much I spend", "I will start a new hobby instead of having a drink", "I will join a new club instead of spending money on alcohol"],
        values: [1, 2, 3],
        type_id: ["goal_3_option_6"],
        barrier_id: 17
      },
      //GOAL 4
      {
        question: "Other people encourage me to have a drink",
        options: ["I will arrange to go somewhere new like a coffee shop", "I will arrange to meet friends during the day for lunch", "I will switch between soft drinks and alcoholic drinks "],
        values: [1, 2, 3],
        type_id: ["goal_4_option_1"],
        barrier_id: 18
      },
      {
        question: "I’m in social situations that involve alcohol",
        options: ["I will ask for water to have available on the table to drink instead of alcohol", "I will have a smaller drink or add lemonade to my drink", "I will be the designated driver of the group"],
        values: [1, 2, 3],
        type_id: ["goal_4_option_2"],
        barrier_id: 19
      },
      {
        question: "I’m spending time with friends who drink a lot",
        options: ["I will order snacks to have at the table so that I can eat while I drink", "I will start with water or a soft drink before going onto alcoholic drinks", "I will suggest going to somewhere different where there isn’t alcohol"],
        values: [1, 2, 3],
        type_id: ["goal_4_option_3"],
        barrier_id: 20
      },
      {
        question: "My partner drinking at home",
        options: ["I will suggest that we have a drink with our meal", "I will suggest buy a maximum amount of alcohol on our food shop this week", "I will suggest that we drink from smaller glasses instead of larger ones"],
        values: [1, 2, 3],
        type_id: ["goal_4_option_4"],
        barrier_id: 21
      },
      {
        question: "I’m feeling frustrated, sad, anxious or bored",
        options: ["I will go for a walk instead of having a drink", "I will do try a new activity that I have been wanting to do", "I will do some odd jobs that I have been putting off"],
        values: [1, 2, 3],
        type_id: ["goal_4_option_5"],
        barrier_id: 22
      },
      {
        question: "I’m feeling happy or excited",
        options: ["I will arrange to cook for friends where I’ll be able to control how much I drink", "I will take up a new hobby that I have been interested in doing", "I will buy a nice bottle of alcohol to last over the week"],
        values: [1, 2, 3],
        type_id: ["goal_4_option_6"],
        barrier_id: 23
      }
    ]

    return {
      getQuestion: function(id) {
        if (id < barriers.length) {
          return barriers[id]
        } else {
          return false
        }
      },
      getBarrierList: function() {
        return barriers
      }
    };
  });
