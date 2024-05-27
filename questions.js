questions = [
// To add questions:
//   {
//     "number": "Question number; ID of question",
//     "question": "Question info and stuff",
//     "inputType": "checkbox, radio, response, display", // remove inputType to use dropdown
//      // default options (when no options) for response type: don't know = 998, refused = 999.
//     "options": [ {value (optional), label, trigger (optional) } ]
//     "trigger": "questionNumber" // ONLY WORKS FOR reponse and display inputType
//   },
    {
        "number": "Q1",
        "inputType": "radio",
        "question": "During the past two weeks, how often have you felt down, depressed, or hopeless?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q2" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q2" },
            { "value": 4, "label": "Try out algorithm.js", "trigger": "D22bt" }
        ]
    },
    {
        "number": "D22bt",
        "question": "Do you feel depressed?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "D22dt" },
            { "value": 3, "label": "Nearly every day", "trigger": "D22dt" },
            { "value": 4, "label": "No response", "trigger": "D22bt" }
        ]
    },
    {
        "number": "D22dt",
        "question": "How difficult have these feelings made it for you to perform your work, take care of things at home, or get along with other people?",
        "options": [
            { "value": 0, "label": "Not difficult at all", "trigger": "D39t" },
            { "value": 1, "label": "Somewhat difficult", "trigger": "D39t" },
            { "value": 2, "label": "Very difficult", "trigger": "D39t" },
            { "value": 3, "label": "Extremely difficult", "trigger": "D39t" },
            { "value": 4, "label": "Unable to do work or take care of things", "trigger": "D39t" },
            { "value": 5, "label": "Unable to get along with other people", "trigger": "D39t" }
        ]
    },
    {
        "number": "D39t",
        "question": "How often have you had trouble falling asleep, staying asleep, or sleeping too much?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "D26dm" },
            { "value": 3, "label": "Nearly every day", "trigger": "D26dm" },
            { "value": 4, "label": "Try out algorithm.js", "trigger": "D26dm" }
        ]
    },
    {
        "number": "D26dm",
        "question": "Do you feel bad about yourself or that you are a failure or have let yourself or your family down?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "D26fm" },
            { "value": 3, "label": "Nearly every day", "trigger": "D26fm" },
            { "value": 4, "label": "End questionnaire"}
        ]
    },
    {
        "number": "D26fm",
        "question": "Do you have trouble concentrating on things like reading the newspaper or watching television?",
        "options": [
            { "value": 0, "label": "Not at all" },
            { "value": 3, "label": "Nearly every day" },
            { "value": 4, "label": "No response"}
        ]
    },
    {
        "number": "Q2",
        "question": "How difficult have these feelings made it for you to perform your work, take care of things at home, or get along with other people?",
        "options": [
            { "value": 0, "label": "Not difficult at all", "trigger": "Q3" },
            { "value": 1, "label": "Somewhat difficult", "trigger": "Q3" },
            { "value": 2, "label": "Very difficult", "trigger": "Q3" },
            { "value": 3, "label": "Extremely difficult", "trigger": "Q3" },
            { "value": 4, "label": "Unable to do work or take care of things", "trigger": "Q3" },
            { "value": 5, "label": "Unable to get along with other people", "trigger": "Q3" }
        ]
    },
    {
        "number": "Q3",
        "question": "Have you felt nervous, anxious, or on edge?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q3A" },
            { "value": 1, "label": "Several days", "trigger": "Q3A" },
            { "value": 2, "label": "More than half the days", "trigger": "Q3A" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q3A" }
        ]
    },
    {
        "number": "Q3A",
        "inputType": "checkbox",
        "question": "Bonus Question",
        "options": [
            { "value": 1, "label": "QN 99999999", "trigger": "QN 99999999" },
            { "value": 0, "label": "QN-100000", "trigger": "QN-100000" },
            { "value": 4, "label": "Q4 (move on)", "trigger": "Q4" }
        ]
    },
    {
        "number": "QN 99999999",
        "inputType": "response",
        "question": "Bonus QN 99999999 (move on to Q5 without going to Q4)",
        // response no need options
        "trigger": "Q5"
    },
    {
        "number": "QN-100000",
        "inputType": "radio",
        "question": "Bonus QN-100000",
        "options": [
            { "value": 1, "label": "QN 99999999" },
            { "value": 0, "label": "QN-100000" }
        ]
    },
    {
        "number": "Q4",
        "question": "How often have you found it hard to relax?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q5" },
            { "value": 1, "label": "Several days", "trigger": "Q5" },
            { "value": 2, "label": "More than half the days", "trigger": "Q5" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q5" }
        ]
    },
    {
        "number": "Q5",
        "question": "How often have you been so restless that it's hard to sit still?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q6" },
            { "value": 1, "label": "Several days", "trigger": "Q6" },
            { "value": 2, "label": "More than half the days", "trigger": "Q6" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q6" }
        ]
    },
    {
        "number": "Q6",
        "question": "Very cool and random qn number 6",
        "options": [
            { "value": "bad", "label": "Instant score of 10", "trigger": "Q7" },
            { "value": 1, "label": "Several days", "trigger": "Q7" },
            { "value": 2, "label": "More than half the days", "trigger": "Q7" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q7" }
        ]
    },
    {
        "number": "Q7",
        "question": "How often have you felt afraid as if something awful might happen?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q8" },
            { "value": 1, "label": "Several days", "trigger": "Q8" },
            { "value": 2, "label": "More than half the days", "trigger": "Q8" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q8" }
        ]
    },
    {
        "number": "Q8",
        "question": "During the past month, how often have you felt tired or had little energy?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q9" },
            { "value": 1, "label": "Several days", "trigger": "Q9" },
            { "value": 2, "label": "More than half the days", "trigger": "Q9" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q9" }
        ]
    },
    {
        "number": "Q9",
        "question": "How often have you had trouble concentrating on things, such as reading the newspaper or watching TV?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q10" },
            { "value": 1, "label": "Several days", "trigger": "Q10" },
            { "value": 2, "label": "More than half the days", "trigger": "Q10" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q10" }
        ]
    },
    {
        "number": "Q10",
        "question": "How often have you thought you would be better off dead or of hurting yourself in some way?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q11" },
            { "value": 1, "label": "Several days", "trigger": "Q11" },
            { "value": 2, "label": "More than half the days", "trigger": "Q11" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q11" }
        ]
    },
    {
        "number": "Q11",
        "question": "Have you had any thoughts of self-harm or suicide?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q12" },
            { "value": 1, "label": "Several days", "trigger": "Q12" },
            { "value": 2, "label": "More than half the days", "trigger": "Q12" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q12" }
        ]
    },
    {
        "number": "Q12",
        "question": "Do you often feel lonely or isolated?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q13" },
            { "value": 1, "label": "Several days", "trigger": "Q13" },
            { "value": 2, "label": "More than half the days", "trigger": "Q13" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q13" }
        ]
    },
    {
        "number": "Q13",
        "question": "How often do you worry about your future?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q14" },
            { "value": 1, "label": "Several days", "trigger": "Q14" },
            { "value": 2, "label": "More than half the days", "trigger": "Q14" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q14" }
        ]
    },
    {
        "number": "Q14",
        "question": "Do you find it hard to focus on your tasks?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q15" },
            { "value": 1, "label": "Several days", "trigger": "Q15" },
            { "value": 2, "label": "More than half the days", "trigger": "Q15" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q15" }
        ]
    },
    {
        "number": "Q15",
        "question": "Have you felt disconnected from your surroundings?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q16" },
            { "value": 1, "label": "Several days", "trigger": "Q16" },
            { "value": 2, "label": "More than half the days", "trigger": "Q16" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q16" }
        ]
    },
    {
        "number": "Q16",
        "question": "Do you often feel overwhelmed by your responsibilities?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q17" },
            { "value": 1, "label": "Several days", "trigger": "Q17" },
            { "value": 2, "label": "More than half the days", "trigger": "Q17" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q17" }
        ]
    },
    {
        "number": "Q17",
        "question": "Have you experienced changes in your sleep patterns?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q18" },
            { "value": 1, "label": "Several days", "trigger": "Q18" },
            { "value": 2, "label": "More than half the days", "trigger": "Q18" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q18" }
        ]
    },
    {
        "number": "Q18",
        "question": "Have you experienced physical symptoms like headaches or stomachaches?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q19" },
            { "value": 1, "label": "Several days", "trigger": "Q19" },
            { "value": 2, "label": "More than half the days", "trigger": "Q19" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q19" }
        ]
    },
    {
        "number": "Q19",
        "question": "Have you experienced a loss of interest in activities you once enjoyed?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q20" },
            { "value": 1, "label": "Several days", "trigger": "Q20" },
            { "value": 2, "label": "More than half the days", "trigger": "Q20" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q20" }
        ]
    },
    {
        "number": "Q20",
        "question": "Do you often feel like you're not good enough?",
        "options": [
            { "value": 0, "label": "Not at all" },
            { "value": 1, "label": "Several days" },
            { "value": 2, "label": "More than half the days" },
            { "value": 3, "label": "Nearly every day" }
        ]
    },
    {
        "number": "SECRET",
        "question": "You chose options with value 0 for Qn 1-7",
        "options": [
            { "label": "Not at all" },
        ]
    },
    {
        "number": "Q??",
        "question": "Curious man (Select all options in Q3A)",
        "inputType": "response",
        "options": [
            { "value": 100, "label": "Select 100" },
            { "value": 99, "label": "Select 99" },
            { "value": 88, "label": "Select 88" },
            { "value": 77, "label": "Select 77" }
        ]
    },
    {
        "number": "Secret text",
        "question": "Hello, world!",
        "inputType": "response",
        "options": []
    },
    {
        number: "INSTRUCTION-1",
        question: `You could give a cool background or context before your questions just like this one! <br>Click proceed to continue...`,
        inputType: "display",
        trigger: "INSTRUCTION-QN"
    },
    {
        number: "INSTRUCTION-QN",
        question: `Hello this is the end.`,
        inputType: "display",
        // trigger is optional, proceed button will not show if no trigger exist for qn
    },
    {
        number: "test123",
        question: `works`,
        inputType: "display",
    },
];

questionPool = {}; // init questionPool
compulsoryQuestions = ["Q1", "INSTRUCTION-1"];
conditionalQuestions = { 
    "SECRET": [["Q1", [0]], ["Q2", [0]], ["Q3", [0]], ["Q4", [0]], ["Q5", [0]], ["Q6", [0]], ["Q7", [0]]], 
    "Q??": [["Q3A", [0, 1, 4]]], 
    "Secret text": [["QN 99999999", ["hello"]]],
    "test123": [["QN 99999999", ["~hello"]]]
//  "D9a_1": [[ "D9a", ['~999', '~998']]], // '~' means not equal to. 
//  // If selectedOptions for D9a NOT EQUAL TO 999 and 998, then condition is true and Qn will show.
//  "D9a_2": [[ "D9a", [999, 998], 'or' ]], // 'or' means any value in D9a will satisfy the condition
};
