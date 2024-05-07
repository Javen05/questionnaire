questions = [
    //   How to add a question
    //   {
    //     "number": {can be number or string, but first record must be 1 in integer}
    //     "inputType": {can be radio, checks, response, or dropdown},
    //     "question": {question text},
    //     "options": [
    //       { "value": {value}, "label": {label of option}, "trigger": {question number to trigger next question} },
    //       { "value": {value}, "label": {label of option}, "trigger": {question number to trigger next question} }
    //     ]
    //   },
    
        {
            "number": 1, // DO NOT CHANGE THIS NUMBER
            "inputType": "radio",
            "question": "Do you want to continue?",
            "options": [
                { "value": 1, "label": "Yes", "trigger": "1a" },
                { "value": 0, "label": "No" }
            ]
        },
        {
            "number": "1a",
            "inputType": "checks",
            "question": "What components are you interested in?",
            "options": [
                { "value": "Dropdown", "label": "Dropdown (Default)", "trigger": 2 },
                { "value": "Radio", "label": "Radio", "trigger": 3 },
                { "value": "Checks", "label": "Checks", "trigger": 4 },
                { "value": "Response", "label": "Response", "trigger": 5 }
            ]
        },
        {
            "number": 2,
            // don't need to specify inputType if it's dropdown
            "question": "This survey ends here regardless ur input",
            "options": [
                { "value": 1, "label": "Yes" },
                { "value": 0, "label": "No" }
            ]
        },
        {
            "number": 3,
            "inputType": "radio",
            "question": "This survey ends here regardless ur input",
            "options": [
                { "value": 1, "label": "Yes" },
                { "value": 0, "label": "No" }
            ]
        },
        {
            "number": 4,
            "inputType": "checks",
            "question": "This survey ends here regardless ur input",
            "options": [
                { "value": 1, "label": "Yes" },
                { "value": 0, "label": "No" }
            ]
        },
        {
            "number": 5,
            "inputType": "response",
            "question": "This survey ends here regardless ur input",
            // don't need to specify options if it's response
            "target": 6
        },
        {
            "number": 6,
            "inputType": "response",
            "question": "Cool you found me!",
            // don't need to specify options if it's response
        },
    ]
    

    
function generateQuestion(questionNumber, question, options, inputType) {
    var html = "";
    html += '<div class="form-group question ' + (questionNumber === 1 ? '' : 'd-none') + '" data-question="' + questionNumber + '">';
    html += '<label>Question ' + questionNumber + ': ' + question + '</label>';

    // Generate input based on the input type
    switch (inputType) {
        case 'checks':
            options.forEach(function(option) {
                html += '<div class="form-check">';
                html += '<input class="form-check-input" type="checkbox" id="q' + questionNumber + 'option' + option.value + '" value="' + option.value + '" data-trigger="' + (option.trigger ? option.trigger : '') + '">';
                html += '<label class="form-check-label" for="q' + questionNumber + 'option' + option.value + '">' + option.label + '</label>';
                html += '</div>';
            });
            break;
        case 'radio':
            options.forEach(function(option) {
                html += '<div class="form-check">';
                html += '<input class="form-check-input" type="radio" name="question' + questionNumber + '" id="q' + questionNumber + 'option' + option.value + '" value="' + option.value + '" data-trigger="' + (option.trigger ? option.trigger : '') + '">';
                html += '<label class="form-check-label" for="q' + questionNumber + 'option' + option.value + '">' + option.label + '</label>';
                html += '</div>';
            });
            break;
        case 'response':
            html += '<input class="form-control" type="text" id="q' + questionNumber + 'response" name="question' + questionNumber + 'response" placeholder="Your response">';
            html += '<div class="form-check">';
            html += '<input class="form-check-input" type="radio" name="question' + questionNumber + '" id="q' + questionNumber + 'optionUnknown" value="998">';
            html += '<label class="form-check-label" for="q' + questionNumber + 'optionUnknown">Don\'t Know</label>';
            html += '</div>';
            html += '<div class="form-check">';
            html += '<input class="form-check-input" type="radio" name="question' + questionNumber + '" id="q' + questionNumber + 'optionRefused" value="999">';
            html += '<label class="form-check-label" for="q' + questionNumber + 'optionRefused">Refused</label>';
            html += '</div>';
            break;        
        default: // Default to dropdown if input type is not specified or recognized
            html += '<select class="form-control" data-question="' + questionNumber + '">';
            html += '<option value="" disabled selected>Please select an option</option>'; // Add default option
            options.forEach(function(option) {
                html += '<option value="' + option.value + '" data-trigger="' + (option.trigger ? option.trigger : '') + '">' + option.label + '</option>';
            });
            html += '</select>';
            break;
    }

    html += '</div>';
    return html;
}

var questionContainer = document.getElementById('questionContainer');
questions.forEach(function(q) {
    questionContainer.innerHTML += generateQuestion(q.number, q.question, q.options, q.inputType);
});

// Event listener for changing answers
document.getElementById('questionForm').addEventListener('change', function(event) {
    var target = event.target;
    if (target.classList.contains('form-control') || target.classList.contains('form-check-input')) {
        var currentQuestionNumber = parseInt(target.closest('.question').getAttribute('data-question'));
        var nextQuestion;

        if (target.classList.contains('form-control')) {
            nextQuestion = target.options[target.selectedIndex].getAttribute('data-trigger');
        } else if (target.classList.contains('form-check-input')) {
            nextQuestion = target.getAttribute('data-trigger');
        }

        // Hide all subsequent questions
        var nextQuestionElements = document.querySelectorAll('.question');
        nextQuestionElements.forEach(function(element) {
            var qNumber = parseInt(element.getAttribute('data-question'));
            if (qNumber > currentQuestionNumber) {
                element.classList.add('d-none');
                if (element.querySelector('select')) {
                    var select = element.querySelector('select');
                    select.selectedIndex = 0; // Reset selected option
                }
            }
        });

        // Show next question
        if (nextQuestion) {
            var nextQuestionElement = document.querySelector('.question[data-question="' + nextQuestion + '"]');
            nextQuestionElement.classList.remove('d-none');
        }
    }
});

// Event listener for changing answers
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = Array.from(document.querySelectorAll('.question:not(.d-none)')).map(function(element) {
        var select = element.querySelector('select');
        var checkboxes = element.querySelectorAll('input[type="checkbox"]');
        var radioInputs = element.querySelectorAll('input[type="radio"]');
        var responseInput = element.querySelector('input[type="text"]');
        var answered;

        if (responseInput) {
            answered = responseInput.value.trim() !== '' || getSelectedRadioValue(radioInputs) !== '';
        } else if (select) {
            answered = select.selectedIndex !== 0;
        } else if (checkboxes.length > 0) {
            answered = Array.from(checkboxes).some(function(checkbox) { return checkbox.checked; });
        } else {
            answered = Array.from(radioInputs).some(function(radio) { return radio.checked; });
        }

        if (!answered) {
            alert('Please answer all questions before submitting.');
            throw new Error('Unanswered question found.');
        }

        var questionNumber = element.getAttribute('data-question');
        var questionText = element.querySelector('label').innerText;
        var selectedValues = [];

        if (responseInput) {
            var responseValue = responseInput.value.trim();
            if (responseValue !== '') {
                selectedValues.push(responseValue);
            }
            var radioValue = getSelectedRadioValue(radioInputs);
            if (radioValue !== '') {
                selectedValues.push(radioValue);
            }
        } else if (select) {
            Array.from(select.selectedOptions).forEach(function(option) {
                selectedValues.push(option.value);
            });
        } else if (checkboxes.length > 0) {
            Array.from(checkboxes).forEach(function(checkbox) {
                if (checkbox.checked) {
                    selectedValues.push(checkbox.value);
                }
            });
        } else {
            var radioValue = getSelectedRadioValue(radioInputs);
            if (radioValue !== '') {
                selectedValues.push(radioValue);
            }
        }

        // Filter out empty values
        selectedValues = selectedValues.filter(value => value !== '');

        return { number: questionNumber, question: questionText, value: selectedValues };
    });

    // Proceed with form submission if all visible questions are answered
    window.location.href = 'results.html?data=' + encodeURIComponent(JSON.stringify(formData));
});


function getSelectedRadioValue(radioInputs) {
    const selectedRadio = Array.from(radioInputs).find(radio => radio.checked);
    return selectedRadio ? selectedRadio.value : '';
} 