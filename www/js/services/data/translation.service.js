angular.module('starter')
  //This app provides translations for use by the app

  .config(function($translateProvider) {

    // Enable cleaning of content
    $translateProvider.useSanitizeValueStrategy('escape');

    //provide the translations for use by the app
    $translateProvider.translations('mil_lang', {

      ///DEFAULT VALUES
      USERNAME: 'Username',
      CONSENT: 'Consent',
      PROFILE: 'Profile',
      MOBILE_VER_VALIDATE: 'Verify',
      DASHBOARD: 'Dashboard',
      GOALS: 'Goals',
      ACCOUNT: 'My Account',
      ADD_DRINK: 'Add Drink',
      DRINKS: 'Drinks',
      SUPPORT: 'Support',
      LOGOUT: 'Logout',
      ACCOUNT_DISPLAY: 'Account Display',
      UPDATE: 'Update',
      LOG: 'Log',
      SCREENING: 'Screening',
      NEXT_TEXT: 'Next',
      BEER: 'Beer',
      WINE: 'Wine',
      CIDER: 'Cider',
      COCKTAIL: 'Cocktail',
      SPIRITS: 'Spirits',
      ALCOPOPS: 'Alcopops',
      MINUTES: 'Minutes',
      CALORIES: 'Calories',
      MANY_TOTAL_CAL: 'Your Calories',
      HOW_MUCH_MONEY: 'Your Money',
      DAILY_CALORIES: 'Daily Calories',
      CAL_DRUNK: 'Calories Drunk',
      HOW_MANY_UNIT: 'Your Units',
      UNITS: 'Units',
      YOUR_MONEY: 'Your Money',
      COST: 'Cost',
      DAILY_COST: 'Daily Cost',
      LIKE_COST: 'Likely Cost',
      QUANTITY: 'Quantity',
      EDIT: 'Edit',
      BACK_DIARY: 'Back to Diary',
      TOTAL_DRINKS: 'Total Drinks',
      YOUR_ACTIVE_GOALS: 'Your Active Goals',
      YOUR_ARE_CURRENTLY: 'So far you are on ',
      YOUR_ARE_ACHIVE: ' to achieving this goal',
      YOUR_PROGRESS: 'Your Progress',
      YOUR_PROGRESS_SO_FAR: 'Your progress so far...',
      BARRIERS: 'Barriers',

      //REGISTER
      BACK: 'Back',
      START_REGISTER: 'Start Registration',
      GOAL_ENDS: 'Goal will finish on ',

      //CONSENT FORM
      INFORMED_CONSENT: 'Informed Consent',
      CONSENT_INTRO: 'This is a joint study between University of Liverpool and King\'s College London. We need all participants to provide informed consent. Please read each section below carefully and amend where needed',
      CONSENT_1: 'I confirm that I have read and have understood the information sheet for the study. I have had the opportunity to consider the information and ask questions via email or telephone',
      CONSENT_2: 'I agree that information collected through the app can be used for research purposes',
      CONSENT_3: 'I understand that information collected from the app will be shared with the study teams at King\’s College London and the University of Liverpool',
      CONSENT_4: 'I agree to provide my mobile phone number so that I can receive SMS text messages as part of this study',
      CONSENT_5: 'I agree for my location to be collected by GPS when using the InDEx App (optional consent)',
      CONSENT_6: 'I understand that the study is confidential, anonymous and I will not be named in any publications',
      CONSENT_7: 'I agree to have an interview with a researcher after one month',
      CONSENT_8: 'I consent for the interview to be audio recorded. I understand that I do not have to answer any study questions if I do not wish to',
      CONSENT_9: 'I agree for direct quotes from the interviews which do not identify me to be included in any reports or publications from the project',
      CONSENT_10: 'I understand that I can request a copy of the transcript of my interview from the study team',
      CONSENT_11: 'I understand that my participation is voluntary and that I am free to withdraw at any time without giving any reason and without my rights being affected',
      CONSENT_12: 'I understand that, under the Data Protection Act, I can at any time ask for access to the information I provide and I can also request the destruction of that information if I wish',
      CONSENT_WARN: 'You have not given consent to the required options. Please scroll up and re-visit your responses',

      //Register Details
      REGISTER_FIRST_NAME: 'First name',
      REGISTER_FIRST_NAME_ERROR: 'First name must be longer than 3 characters',
      REGISTER_FIRST_NAME_ERROR_REQUIRED: 'First name required.',
      REGISTER_SURNAME: 'Surname',
      REGISTER_SURNAME_ERROR: 'Surname must be longer than 1 character',
      REGISTER_SURNAME_ERROR_REQUIRED: 'Surname required.',
      REGISTER_EMAIL: 'Email',
      REGISTER_EMAIL_ERROR_REQUIRED: 'Please enter your email.',
      REGISTER_EMAIL_ERROR_TYPE: 'Must be an email address.',
      REGISTER_EMAIL_ERROR_LENGTH: 'Must be longer than 5 characters.',
      REGISTER_PREFFERED_NAME: 'Preferred name',
      REGISTER_PREFFERED_NAME_ERROR_MIN: 'Preferred name must be longer than 3 characters',
      REGISTER_PREFFERED_NAME_ERROR_MAX: 'Preferred name can have a maximum length of 10 characters',
      REGISTER_PREFFERED_NAME_ERROR_REQUIRED: 'Preferred name required.',
      REGISTER_GENDER: 'Gender',
      REGISTER_GENDER_MALE: 'Male',
      REGISTER_GENDER_FEMALE: 'Female',
      REGISTER_GENDER_ERROR_REQUIRED: 'You must provide your gender.',
      REGISTER_MOBILE: 'Mobile',
      REGISTER_MOBILE_MIN: 'Mobile is too short.',
      REGISTER_MOBILE_MAX: 'Mobile is too long. Remember to remove the 0.',
      REGISTER_MOBILE_NUMBER: 'Valid number is required.',
      REGISTER_MOBILE_REQUIRED: 'You must provide a mobile number.',
      MOBILE_VER_SMS: 'Confirmation Code',
      MOBILE_VER_ENTER_BELOW: 'Type in the confirmation code from the text message we sent to ',

      //Dashboard
      UNITS_CONSUMED: 'My units consumed',
      USING_APP: 'days using InDEx',
      THIS_TIME_LAST_WEEK: 'from this time last week',
      STARTED_APP: 'since you started',
      DRINKS_CONSUMED: 'My drinks consumed',
      ALCOHOL_CALORIES: 'My alcohol calories',
      EQ_RUNNING: 'Equivalent running',
      EQ_BURGERS: 'Equivalent burgers',
      EST_COSTS: 'Estimated cost',

      //Gloals
      GOALS_NOT_YET: 'You will be able to set and monitor your goals on this page after you have used the app for a little longer. We will send you a message when it is time to set your goal. ',
      GOALS_NOW: 'You can choose one of the following goals, try to make sure you stick to it!',
      SET_GOAL: 'Set this Goal',
      REALISTIC_GOAL: 'Setting a realistic goal can really help you cut down on the amount you drink each day',
      GOALS_NOW2: 'You are now able to set a goal using the InDEx App. Please try to make sure it is suitable and realistic with your ambition of reducing your alcohol consumption. Our guidelines are based on your use of the app.',
      GOALS_TEXT_BARRIER: 'Here are some examples of barriers which might make it harder for you to achieve this goal. Please select the one that might make it difficult for you',

      //Global Account Messages
      BACK_ACCOUNT: 'Back to your account',

      //Account Display (Edit account etc)
      YOUR_INFORMED_CONSENT: 'My Consent',
      HELP_ARTICLES: 'Help Articles',
      HELP_TUTORIALS: 'Tutorials',
      DISCOVER: 'Discover',
      ABOUT_INDEX: 'About InDEx',
      EDIT_YOUR_ACCOUNT: 'Edit Your Account', // show date

      //About InDEx App
      ABOUT_INDEX_PARA1: 'InDEx is a project funded by the Medical Research Council to develop an alcohol intervention delivered via a hybrid web and mobile app. Our aim is to help people leaving the UK Armed Forces to reduce their drinking and to understand more about their patterns of drinking.',

      //Help
      HELP: 'Help',

      //Add Drinks Popup
      ADD_DRINKS_HEADER: 'Your saved drinks...',
      ADD_DRINKS_ALCOHOL_FREE: 'Alcohol Free Day',
      ADD_DRINKS_GENERAL_DRINKS: 'Common Drinks',
      ADD_DRINK_TODAY_FREE: 'was an alcohol free day! We have logged your response.',
      ADD_DRINK_KEEP_UP: 'Keep Up the good work!',
      ADD_DRINK_WAITING: 'No drinks logged for today!',
      ADD_DRINK_ABV: 'ABV',
      ADD_DRINK_HOW_MANY: 'Your Drinks',
      ADD_DRINK_COST: 'Price (Drink)',
      CALORIES_PER_DRINK: 'Calories (Drink)',
      ADD_DRINK_OPTIONAL: 'Optional Drink Information',
      ADD_DRINK_WHERE_ARE_YOU: 'Where?',
      ADD_DRINK_WHO_ARE_YOU_WITH: 'Who with?',
      DRINK_OPTIONS: 'Drink Options',

      //Screening
      SCREENING_INFO: 'To help us tailor the InDEx App to you, we need to ask you a few questions. Your responses will be used to customise the InDEx app and text messages we send you.',

      ACCOUNT_CONSENT_INTRO1: 'You provided informed consent on the', // show date
      ACCOUNT_CONSENT_INTRO2: '. If you have any questions, concerns or would like to make any changes to optional consent please contact the Research Team.'
    });

    $translateProvider.preferredLanguage('mil_lang');
  });
