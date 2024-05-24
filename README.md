# questionnaire-template
Customizable Questionnaire Form Template using native HTML, CSS, & JavaScript.

### About
Need a cusomizable questionnaire form like Google Forms that can run locally (offline) on your device? This product offers a fully-customizable form where you can set the value for each option, trigger specific questions based on previous question's response, and choose from various question types to use! The results of the user's selections will be outputted at the results page, where you have the option to download it as CSV or JSON. You could also integrate some grading algorithm (as per your use case) that uses the responses to calculate a score or conduct classification.

### Demo
https://javen05.github.io/questionnaire-template/

### Usage
1. Fill in the questions JSON in script.js with your pool of questions.
2. Put the question number of all the compulsory questions inside compulsoryQuestions array and add it into questionPool dictionary with an empty [array] as the value.
3. Customise the scoring/grading algorithm in algorithm.js according to your needs. algorithm.js is used for results.html.
4. Save file and open index.html to start questionnaire.

### Secret Questions
Refer to Question number "SECRET" and conditionalQuestions in questions.js to learn how to use the feature.
