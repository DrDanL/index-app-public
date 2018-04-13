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
  .factory('screenQuestions', function() {

    //Screening Questions (not ordered)
    var questions = [{ //AUDIT Full
        question: "How often do you have a drink containing alcohol?",
        options: ["Never", "Monthly or less", "2-4 times per month", "2-3 times per week", "4+ times per week"], //If answer never go to question 9 of audit
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_1"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How many UNITs of alcohol do you drink on a typical day when you are drinking?",
        options: ["1-2", "3-4", "5-6", "7-9", "10+"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_2"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How often do you have six or more UNITs on one occasion?",
        options: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_3"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How often during the last year have you found that you were not able to stop drinking once you had started?",
        options: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_4"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How often during the last year have you failed to do what was normally expected from you because of drinking?",
        options: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_5"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
        options: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_6"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
        options: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_7"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "How often during the last year have you been unable to remember what happened the night before you had been drinking?",
        options: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        type_id: ["audit_8"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "Have you or someone else been injured as a result of your drinking?",
        options: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        values: [0, 2, 4],
        type_id: ["audit_9"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },
      {
        question: "Has a relative or friend or a doctor or another health worker been concerned about your drinking or suggested you cut down?",
        options: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        values: [0, 2, 4],
        type_id: ["audit_10"],
        num_response: 1,
        display_type: 3,
        question_name: "Audit"
      },

      { //Who do you drink with
        question: "Which of these options describe who you might drink with?",
        options: ["Friends from forces", "Civilian friends", "Spouse/partner", "Other family member", "On your own"],
        values: [1, 1, 1, 1, 1],
        type_id: ["drink_with_1_1", "drink_with_1_2", "drink_with_1_3", "drink_with_1_4", "drink_with_1_5"],
        num_response: 5,
        display_type: 1,
        question_name: "Who With"
      },
      {
        question: "From the options selected, who do you usually drink the most with, in a single session?",
        options: ["Friends from forces", "Civilian friends", "Spouse/partner", "Other family member", "On your own"],
        values: [1, 2, 3, 4, 5],
        type_id: ["drink_with_2", "drink_with_2", "drink_with_2", "drink_with_2", "drink_with_2"],
        link_question: "drink_with_1",
        num_response: 1,
        display_type: 1,
        question_name: "Who With Specific"
      },
      { //Where you drink
        question: "Which of these options describe where you might drink?",
        options: ["At home", "Ex-forces club", "Civilian pubs, bars or club", "At a civilian friend's house", "At friend’s from the forces house"],
        values: [1, 1, 1, 1, 1],
        values_alt: [1, 2, 3, 4, 5],
        type_id: ["drink_location_1_1", "drink_location_1_2", "drink_location_1_3", "drink_location_1_4", "drink_location_1_5"],
        num_response: 5,
        display_type: 1,
        question_name: "Where you drink"
      },
      {
        question: "From the options selected, where do you usually drink the most, in a single session?",
        options: ["At home", "Ex-forces club", "Civilian pubs, bars or club", "At a civilian friend's house", "At friend’s from the forces house"],
        values: [1, 2, 3, 4, 5],
        type_id: ["drink_location_2", "drink_location_2", "drink_location_2", "drink_location_2", "drink_location_2"],
        link_question: "drink_location_2",
        num_response: 1,
        display_type: 1,
        question_name: "Where you drink specific"
      },
      { //PHQ
        question: "Over the last two weeks, how often have you been bothered by any of the following problems? Little interest or pleasure in doing things",
        options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
        values: [0, 1, 2, 3],
        type_id: ["phq_2_1"],
        num_response: 1,
        display_type: 3,
        question_name: "PHQ 2"
      },
      {
        question: "Over the last two weeks, how often have you been bothered by any of the following problems? Feeling down, depressed or hopeless",
        options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
        values: [0, 1, 2, 3],
        type_id: ["phq_2_2"],
        num_response: 1,
        display_type: 3,
        question_name: "PHQ 2"
      },
      { //GAD 2
        question: "Over the last two weeks, how often have you been bothered by any of the following problems? Feeling nervous, anxious or on edge",
        options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
        values: [0, 1, 2, 3],
        type_id: ["gad_2_1"],
        num_response: 1,
        display_type: 3,
        question_name: "GAD 2"
      },
      {
        question: "Over the last two weeks, how often have you been bothered by any of the following problems? Being unable to stop or control worrying",
        options: ["Not at all", "Several days", "More than half the days", "Nearly everyday"],
        values: [0, 1, 2, 3],
        type_id: ["gad_2_2"],
        num_response: 1,
        display_type: 3,
        question_name: "GAD 2"
      },
      { //PTSD
        //If NO, do not show any more PTSD
        question: "Sometimes things happen to people that are unusual or especially frightening, terrible, or traumatic. For example: a serious accident or fire, military deployment, a war, seeing someone being killed or seriously injured, having a loved one die through homicide or suicide. Have you ever experienced this kind of event?",
        options: ["No", "Yes"],
        values: [0, 1],
        end_value: 0,
        display_type: 1,
        type_id: ["ptsd_1", "ptsd_1"],
        num_response: 1,
        question_name: "PTSD"
      },
      {
        question: "In the past month, have you had nightmares about the event(s) or thought about the event(s) when you did not want to?",
        options: ["No", "Yes"],
        values: [0, 1],
        type_id: ["ptsd_2", "ptsd_2"],
        num_response: 1,
        display_type: 1,
        question_name: "PTSD"
      },
      {
        question: "In the past month, have you tried not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
        options: ["No", "Yes"],
        values: [0, 1],
        type_id: ["ptsd_3", "ptsd_3"],
        num_response: 1,
        display_type: 1,
        question_name: "PTSD"
      },
      {
        question: "In the past month, have you been constantly on guard, watchful, or easily startled?",
        options: ["No", "Yes"],
        values: [0, 1],
        type_id: ["ptsd_4", "ptsd_4"],
        num_response: 1,
        display_type: 1,
        question_name: "PTSD"
      },
      {
        question: "In the past month, have you felt numb or detached from people, activities, or your surroundings?",
        options: ["No", "Yes"],
        values: [0, 1],
        type_id: ["ptsd_5", "ptsd_5"],
        num_response: 1,
        display_type: 1,
        question_name: "PTSD"
      },
      {
        question: "In the past month, have you felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
        options: ["No", "Yes"],
        values: [0, 1],
        type_id: ["ptsd_6", "ptsd_6"],
        num_response: 1,
        display_type: 1,
        question_name: "PTSD"
      },
      { //Service length
        question: "How long did you serve in the Armed Forces?",
        options: ["Less than 4 years", "Between 4 and 12 years", "Over 12 years"],
        values: [1, 2, 3],
        type_id: ["service_length"],
        num_response: 1,
        display_type: 3,
        question_name: "Length Service"
      },
      { //Transition
        question: "Which of the following describes your reason for leaving?",
        options: ["Completed term of service", "Better employment prospects in civilian life", "Impact of Service life on family", "Work not exciting or challenging", "Dissatisfaction with pay", "Lack of promotion prospects", "Difficult to plan life outside of work", "Due to deployments", "Pressure from family", "Didn’t want to be away from home", "My service was terminated", "Health problems", "Pregnancy", "Accomplished everything I wanted"],
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        type_id: ["trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason", "trans_reason"],
        num_response: 1,
        display_type: 1,
        question_name: "Transition - Reason KCMHR"
      },
      { //Transition - Situation
        question: "Please select the response which best describes your current situation",
        options: ["I am studying at university", "I am working full-time/part-time in a civilian job", "I am working as a civilian in MoD or the UK Armed Forces", "I am working as a private security contractor", "I am self-employed", "I am not working but am looking for employment", "I am not working due to ill health", "I am retired"],
        values: [1, 2, 3, 4, 5, 6, 7, 8],
        type_id: ["trans_sit", "trans_sit", "trans_sit", "trans_sit", "trans_sit", "trans_sit", "trans_sit", "trans_sit"],
        num_response: 1,
        display_type: 1,
        question_name: "Transition - Situation KCMHR"
      },
      { //Transition - Finance
        question: "How are you managing financially these days? Would you say you are:",
        options: ["Living comfortably", "Doing alright", "Just about getting by", "Finding it quite difficult", "Finding it very difficult"],
        values: [1, 2, 3, 4, 5],
        type_id: ["trans_fin"],
        num_response: 1,
        display_type: 3,
        question_name: "Transition - Finance KCMHR"
      },
      { //Motivation to reduce drinking
        question: "Which of the following best describes you?",
        options: ["I REALLY want to cut down on alcohol and intend to in the next month", "I want to cut down on alcohol and hope to soon", "I REALLY want to cut down on alcohol but I don't know when I will", "I want to cut down on alcohol but haven't thought about when", "I think I should cut down on alcohol but don't really want to", "I don't want to cut down on alcohol"],
        values: [1, 2, 3, 4, 5, 6],
        type_id: ["ats_des", "ats_des", "ats_des", "ats_des", "ats_des", "ats_des"],
        num_response: 1,
        display_type: 1,
        question_name: "ATS - Describe"
      },
      { //Motivation to reduce drinking
        question: "If you were going to change your drinking habits, what would be your main reason?",
        options: ["Advice from a doctor/health worker", "Government TV/radio/press advert", "To save money", "Someone I know is cutting down", "Concerns about health", "Something said by my family/friends", "To lose weight/improve my fitness", "Detox", "Affecting my work", "To be more productive", "Affecting my relationships"],
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        type_id: ["ats_red", "ats_red", "ats_red", "ats_red", "ats_red", "ats_red", "ats_red", "ats_red", "ats_red", "ats_red", "ats_red"],
        num_response: 1,
        display_type: 1,
        question_name: "ATS - Describe"
      },
      { //Barriers to cutting down
        question: "What do you think are the biggest barriers to reducing the amount you drink?",
        options: ["Other people encouraging me to have a drink", "Social situations that involve alcohol", "My partner drinking at home", "Spending time with friends who drink a lot", "Feeling frustrated, sad, anxious or bored", "Feeling really happy"],
        values: [1, 2, 3, 4, 5, 6],
        type_id: ["barrier", "barrier", "barrier", "barrier", "barrier", "barrier"],
        num_response: 1,
        display_type: 1,
        question_name: "Barriers"
      },
      { //Readiness ruler
        question: "Using the ruler below, indicate how ready you are to make a change to your drinking. If you are not at all ready, you would select 0 and if you are already trying hard to make the change, you would select 10",
        options: [""],
        values: [0, 10], //min and max
        type_id: ["readiness_score"],
        num_response: 1,
        display_type: 2,
        question_name: "Readiness Ruler"
      },
      { //Self-efficacy ruler
        question: "Using the ruler shown below, indicate how confident you are about making a change to your drinking. If you are not at all confident about making the change, you would select 0. If you are very confident about making the change, you would select 10",
        options: [""],
        values: [0, 10], //min and max
        type_id: ["efficacy_score"],
        num_response: 1,
        display_type: 2,
        question_name: "Self-efficacy Ruler"
      },
      { //Difficult Situation
        question: "Over the last week did you get into a situation that was the result of your drinking?",
        options: ["No", "Yes, I injured myself or someone else", "Yes, I had an argument with someone", "Yes, I lost personal belongings", "Yes, I had a physical fight with someone"],
        values: [1, 2, 3, 4, 5],
        type_id: ["difficult_sit"],
        num_response: 1,
        display_type: 3,
        question_name: "Difficult Situation"
      },
      { //Age Group
        question: "What is your age (select the most suitable group)?",
        options: ["15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69"],
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        type_id: ["age_group"],
        num_response: 1,
        display_type: 3,
        question_name: "Age Group"
      }
    ];

    return {
      getQuestion: function(id) {
        if (id < questions.length) {
          return questions[id];
        } else {
          return false;
        }
      }
    };
  });
