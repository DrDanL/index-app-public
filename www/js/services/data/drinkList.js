angular.module('starter')
  ///////////
  //Drinks list
  ///////////
  .factory('drinkList', function() {

    var drinks = [{ //Default Drink
        drink_name: 'Default',
        abv: 4,
        calories: 182,
        measure_ml: 568,
        drink_price: 3.35,
        drink_measure: 'NA',
        group_id: 1,
        image: 'beer-glass.svg',
        drink_id: 0
      },
      { //Beer - cat 1 - Pint 0
        drink_name: 'Beer',
        abv: 4,
        calories: 182,
        measure_ml: 568,
        drink_price: 3.35,
        drink_measure: 'Pint',
        group_id: 1,
        image: 'beer-glass.svg',
        drink_id: 1
      },
      { //Beer - cat 1 - Half 1
        drink_name: 'Beer',
        abv: 4,
        calories: 91,
        measure_ml: 330,
        drink_price: 2.25,
        drink_measure: 'Half',
        group_id: 1,
        image: 'beer-glass.svg',
        drink_id: 2
      },
      { //Shandy - cat 1 - Pint 2
        drink_name: 'Shandy',
        abv: 4,
        calories: 220,
        measure_ml: 568,
        drink_price: 3.55,
        drink_measure: 'Pint',
        group_id: 1,
        image: 'beers/shandy.svg',
        drink_id: 3
      },
      { //Shandy - cat 1 - Half 3
        drink_name: 'Shandy',
        abv: 4,
        calories: 110,
        measure_ml: 330,
        drink_price: 2.55,
        drink_measure: 'Half',
        group_id: 1,
        image: 'beers/shandy.svg',
        drink_id: 4
      },
      { //Ale - cat 1 - Pint 4
        drink_name: 'Ale',
        abv: 4,
        calories: 200,
        measure_ml: 568,
        drink_price: 2.95,
        drink_measure: 'Pint',
        group_id: 1,
        image: 'beers/ale.svg',
        drink_id: 5
      },
      { //Ale - cat 1 - Half 5
        drink_name: 'Ale',
        abv: 4,
        calories: 100,
        measure_ml: 330,
        drink_price: 2.00,
        drink_measure: 'Half',
        group_id: 1,
        image: 'beers/ale.svg',
        drink_id: 6
      },
      { //Bitter - cat 1 - Pint 6
        drink_name: 'Bitter',
        abv: 4,
        calories: 170,
        measure_ml: 568,
        drink_price: 2.55,
        drink_measure: 'Pint',
        group_id: 1,
        image: 'beers/bitter.svg',
        drink_id: 7
      },
      { //Bitter - cat 1 - Half 7
        drink_name: 'Bitter',
        abv: 4,
        calories: 85,
        measure_ml: 330,
        drink_price: 2.225,
        drink_measure: 'Half',
        group_id: 1,
        image: 'beers/bitter.svg',
        drink_id: 8
      },
      { //Red Wine - cat 2 - Large 8
        drink_name: 'Red Wine',
        abv: 13,
        calories: 228,
        measure_ml: 250,
        drink_price: 4.95,
        drink_measure: 'Large',
        group_id: 2,
        image: 'wine-glass.svg',
        drink_id: 9
      },
      { //Red Wine - cat 2 - Medium 9
        drink_name: 'Red Wine',
        abv: 13,
        calories: 160,
        measure_ml: 175,
        drink_price: 3.85,
        drink_measure: 'Medium',
        group_id: 2,
        image: 'wine-glass.svg',
        drink_id: 10
      },
      { //Red Wine - cat 2 - Small 10
        drink_name: 'Red Wine',
        abv: 13,
        calories: 100,
        measure_ml: 125,
        drink_price: 3.05,
        drink_measure: 'Small',
        group_id: 2,
        image: 'wine-glass.svg',
        drink_id: 11
      },
      { //White Wine - cat 2 - Large 11
        drink_name: 'White Wine',
        abv: 13,
        calories: 228,
        measure_ml: 250,
        drink_price: 5.15,
        drink_measure: 'Large',
        group_id: 2,
        image: 'wine/white-wine.svg',
        drink_id: 12
      },
      { //White Wine - cat 2 - Medium 12
        drink_name: 'White Wine',
        abv: 13,
        calories: 160,
        measure_ml: 175,
        drink_price: 3.85,
        drink_measure: 'Medium',
        group_id: 2,
        image: 'wine/white-wine.svg',
        drink_id: 13
      },
      { //White Wine - cat 2 - Small 13
        drink_name: 'White Wine',
        abv: 13,
        calories: 100,
        measure_ml: 125,
        drink_price: 3.00,
        drink_measure: 'Small',
        group_id: 2,
        image: 'wine/white-wine.svg',
        drink_id: 14
      },
      { //Rose Wine - cat 2 - Large 14
        drink_name: 'Rose Wine',
        abv: 13,
        calories: 172,
        measure_ml: 250,
        drink_price: 4.55,
        drink_measure: 'Large',
        group_id: 2,
        image: 'wine/rose-wine.svg',
        drink_id: 15
      },
      { //Rose Wine - cat 2 - Medium 15
        drink_name: 'Rose Wine',
        abv: 13,
        calories: 128,
        measure_ml: 175,
        drink_price: 3.35,
        drink_measure: 'Medium',
        group_id: 2,
        image: 'wine/rose-wine.svg',
        drink_id: 16
      },
      { //Rose Wine - cat 2 - Small 16
        drink_name: 'Rose Wine',
        abv: 13,
        calories: 90,
        measure_ml: 125,
        drink_price: 2.85,
        drink_measure: 'Small',
        group_id: 2,
        image: 'wine/rose-wine.svg',
        drink_id: 17
      },
      { //Prosecco - cat 2 - Glass 17
        drink_name: 'Prosecco',
        abv: 12,
        calories: 80,
        measure_ml: 125,
        drink_price: 4.15,
        drink_measure: 'Glass',
        group_id: 2,
        image: 'wine/pros-wine.svg',
        drink_id: 18
      },
      { //Cider - cat 3 - Pint 18
        drink_name: 'Cider',
        abv: 5,
        calories: 239,
        measure_ml: 568,
        drink_price: 3.25,
        drink_measure: 'Pint',
        group_id: 3,
        image: 'cider-glass.svg',
        drink_id: 19
      },
      { //Cider - cat 3 - Half 19
        drink_name: 'Cider',
        abv: 5,
        calories: 120,
        measure_ml: 330,
        drink_price: 2.55,
        drink_measure: 'Half',
        group_id: 3,
        image: 'cider-glass.svg',
        drink_id: 20
      },
      { //Cognac - cat 4 - Single 20
        drink_name: 'Cognac',
        abv: 40,
        calories: 70,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'spirits/cognac.svg',
        drink_id: 21
      },
      { //Cognac - cat 4 - Double 21
        drink_name: 'Cognac',
        abv: 40,
        calories: 140,
        measure_ml: 50,
        drink_price: 3.35,
        drink_measure: 'Double',
        group_id: 4,
        image: 'spirits/cognac.svg',
        drink_id: 22
      },
      { //Gin - cat 4 - Single 22
        drink_name: 'Gin',
        abv: 37.5,
        calories: 75,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'spirits/gin-tonic.svg',
        drink_id: 23
      },
      { //Gin - cat 4 - Double 23
        drink_name: 'Gin',
        abv: 37.5,
        calories: 150,
        measure_ml: 50,
        drink_price: 2.95,
        drink_measure: 'Double',
        group_id: 4,
        image: 'spirits/gin-tonic.svg',
        drink_id: 24
      },
      { //Rum - cat 4 - Single 24
        drink_name: 'Rum',
        abv: 37.5,
        calories: 97,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'spirits/rum.svg',
        drink_id: 25
      },
      { //Rum - cat 4 - Double 25
        drink_name: 'Rum',
        abv: 37.5,
        calories: 194,
        measure_ml: 50,
        drink_price: 2.95,
        drink_measure: 'Double',
        group_id: 4,
        image: 'spirits/rum.svg',
        drink_id: 26
      },
      { //Vodka - cat 4 - Single 26
        drink_name: 'Vodka',
        abv: 40,
        calories: 69,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'spirits/vodka.svg',
        drink_id: 27
      },
      { //Vodka - cat 4 - Double 27
        drink_name: 'Vodka',
        abv: 40,
        calories: 138,
        measure_ml: 50,
        drink_price: 2.95,
        drink_measure: 'Double',
        group_id: 4,
        image: 'spirits/vodka.svg',
        drink_id: 28
      },
      { //Tequila - cat 4 - Single 28
        drink_name: 'Tequila',
        abv: 38,
        calories: 70,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'spirits/tequila.svg',
        drink_id: 29
      },
      { //Tequila - cat 4 - Double 29
        drink_name: 'Tequila',
        abv: 38,
        calories: 140,
        measure_ml: 50,
        drink_price: 2.95,
        drink_measure: 'Double',
        group_id: 4,
        image: 'spirits/tequila.svg',
        drink_id: 30
      },
      { //Liqueurs - cat 4 - Single 30
        drink_name: 'Liqueurs',
        abv: 17,
        calories: 53,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'spirits/liqueurs.svg',
        drink_id: 31
      },
      { //Liqueurs - cat 4 - Double 31
        drink_name: 'Liqueurs',
        abv: 17,
        calories: 106,
        measure_ml: 50,
        drink_price: 2.95,
        drink_measure: 'Double',
        group_id: 4,
        image: 'spirits/liqueurs.svg',
        drink_id: 32
      },
      { //Other - cat 4 - Single 32
        drink_name: 'Other',
        abv: 40,
        calories: 80,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Single',
        group_id: 4,
        image: 'shot-glass.svg',
        drink_id: 33
      },
      { //Other - cat 4 - Double 33
        drink_name: 'Other',
        abv: 40,
        calories: 160,
        measure_ml: 50,
        drink_price: 2.85,
        drink_measure: 'Double',
        group_id: 4,
        image: 'shot-glass.svg',
        drink_id: 34
      },
      { //Sambuca - cat 4 - Shot 34
        drink_name: 'Sambuca',
        abv: 38,
        calories: 50,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Shot',
        group_id: 4,
        image: 'spirits/sam.svg',
        drink_id: 35
      },
      { //Sours - cat 4 - Shot 35
        drink_name: 'Sours',
        abv: 17,
        calories: 160,
        measure_ml: 25,
        drink_price: 2.55,
        drink_measure: 'Shot',
        group_id: 4,
        image: 'spirits/lime.svg',
        drink_id: 36
      },
      { //Bloody Mary - cat 5 - Shot 36
        drink_name: 'Bloody Mary',
        abv: 11.5,
        calories: 262,
        measure_ml: 285,
        drink_price: 6.15,
        drink_measure: 'Glass',
        group_id: 5,
        image: 'cocktails/blood.svg',
        drink_id: 37
      },
      { //Screwdriver- cat 5 - Shot 37
        drink_name: 'Screwdriver',
        abv: 10,
        calories: 180,
        measure_ml: 285,
        drink_price: 6.15,
        drink_measure: 'Glass',
        group_id: 5,
        image: 'cocktails/screwdriver.svg',
        drink_id: 38
      },
      { //Martini - cat 5 - Shot 38
        drink_name: 'Martini',
        abv: 20,
        calories: 184,
        measure_ml: 285,
        drink_price: 6.15,
        drink_measure: 'Glass',
        group_id: 5,
        image: 'cocktails/martini.svg',
        drink_id: 39
      },
      { //Margarita - cat 5 - Shot 39
        drink_name: 'Margarita',
        abv: 34,
        calories: 168,
        measure_ml: 285,
        drink_price: 6.15,
        drink_measure: 'Glass',
        group_id: 5,
        image: 'cocktails/margarita.svg',
        drink_id: 40
      },
      { //Cosmopolitan - cat 5 - Shot 40
        drink_name: 'Cosmopolitan',
        abv: 26.6,
        calories: 213,
        measure_ml: 285,
        drink_price: 6.15,
        drink_measure: 'Glass',
        group_id: 5,
        image: 'cocktails/cosmopolitan.svg',
        drink_id: 41
      },
      { //Mojito - cat 5 - Shot 41
        drink_name: 'Mojito',
        abv: 11.7,
        calories: 353,
        measure_ml: 285,
        drink_price: 6.15,
        drink_measure: 'Glass',
        group_id: 5,
        image: 'cocktails/mojito.svg',
        drink_id: 42
      },
      { //WKD - cat 6 - Bottle 42
        drink_name: 'WKD',
        abv: 4.5,
        calories: 185,
        measure_ml: 330,
        drink_price: 3.35,
        drink_measure: 'Bottle',
        group_id: 6,
        image: 'bottle/wkd.svg',
        drink_id: 43
      },
      { //Hooch - cat 6 - Bottle 43
        drink_name: 'Hooch',
        abv: 5,
        calories: 202,
        measure_ml: 330,
        drink_price: 3.35,
        drink_measure: 'Bottle',
        group_id: 6,
        image: 'bottle/hooch.svg',
        drink_id: 44
      },
      { //Smirnoff Ice - cat 6 - Bottle 44
        drink_name: 'Smirnoff Ice',
        abv: 4,
        calories: 176,
        measure_ml: 330,
        drink_price: 3.35,
        drink_measure: 'Bottle',
        group_id: 6,
        image: 'bottle/ice.svg',
        drink_id: 45
      }
    ];

    return {
      getDrinks: function(id) {
        if (id < drinks.length) {
          return drinks[id];
        } else {
          return false;
        }
      }
    };
  });
