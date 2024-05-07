questions = [
    //   How to add a question
    //   {
    //     "number": {can be number or string, but first record must be 1 in integer}
    //     "inputType": {can be radio, checkbox, response, or dropdown},
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
            "inputType": "checkbox",
            "question": "What components are you interested in?",
            "options": [
                { "value": "Dropdown", "label": "Dropdown (Default)", "trigger": 2 },
                { "value": "Radio", "label": "Radio", "trigger": 3 },
                { "value": "checkbox", "label": "checkbox", "trigger": 4 },
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
            "inputType": "checkbox",
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
            "trigger": 6
        },
        {
            "number": 6,
            "inputType": "response",
            "question": "Cool you found me!",
            // don't need to specify options if it's response
        },
    ]
    

    
function generateQuestion(questionNumber, question, options, inputType, trigger) {
    const defaultOption = '<option value="" disabled selected>Please select an option</option>';
    let html = `
        <div class="form-group question ${questionNumber === 1 ? '' : 'd-none'}" data-question="${questionNumber}">
            <label>Question ${questionNumber}: ${question}</label>
    `;

    switch (inputType) {
        case 'checkbox':
            options.forEach(function(option) {
                html += '<div class="form-check">';
                html += '<input class="form-check-input" type="checkbox" id="q' + questionNumber + 'option' + option.value + '" value="' + option.value + '" data-trigger="' + (option.trigger ? option.trigger : '') + '">';
                html += '<label class="form-check-label" for="q' + questionNumber + 'option' + option.value + '">' + option.label + '</label>';
                html += '</div>';
            });
            break;
        case 'radio':
            options.forEach(option => {
                html += `
                    <div class="form-check">
                        <input class="form-check-input" type="${inputType}" name="${inputType === 'radio' ? 'question' + questionNumber : ''}" id="q${questionNumber}option${option.value}" value="${option.value}" data-trigger="${option.trigger || ''}">
                        <label class="form-check-label" for="q${questionNumber}option${option.value}">${option.label}</label>
                    </div>
                `;
            });
            break;
        case 'response':
            html += `
                <input class="form-control" type="text" id="q${questionNumber}response" name="question${questionNumber}response" placeholder="Your response" data-trigger="${trigger || ''}">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}optionUnknown" value="998">
                    <label class="form-check-label" for="q${questionNumber}optionUnknown">Don't Know</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}optionRefused" value="999">
                    <label class="form-check-label" for="q${questionNumber}optionRefused">Refused</label>
                </div>
            `;
            break;
        default:
            html += `
                <select class="form-control" data-question="${questionNumber}">
                    ${defaultOption}
                    ${options.map(option => `<option value="${option.value}" data-trigger="${option.trigger || ''}">${option.label}</option>`).join('')}
                </select>
            `;
            break;
    }

    html += '</div>';
    return html;
}

const questionContainer = document.getElementById('questionContainer');
questions.forEach(q => {
    questionContainer.innerHTML += generateQuestion(q.number, q.question, q.options, q.inputType, q.trigger);
});

document.getElementById('questionForm').addEventListener('change', function(event) {
    const target = event.target;
    const currentQuestionNumber = parseInt(target.closest('.question').getAttribute('data-question'));
    let nextQuestion;

    if (target.classList.contains('form-control') || target.classList.contains('form-check-input')) {
        nextQuestion = target.getAttribute('data-trigger');
    } else if (target.classList.contains('form-control')) {
        nextQuestion = target.options[target.selectedIndex].getAttribute('data-trigger');
    }

    const nextQuestionElements = document.querySelectorAll('.question');
    nextQuestionElements.forEach(element => {
        const qNumber = parseInt(element.getAttribute('data-question'));
        if (qNumber > currentQuestionNumber) {
            element.classList.add('d-none');
            if (element.querySelector('select')) {
                element.querySelector('select').selectedIndex = 0;
            }
        }
    });

    if (nextQuestion) {
        const nextQuestionElement = document.querySelector(`.question[data-question="${nextQuestion}"]`);
        nextQuestionElement.classList.remove('d-none');
    }
});

document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = Array.from(document.querySelectorAll('.question:not(.d-none)')).map(element => {
        const select = element.querySelector('select');
        const checkboxes = element.querySelectorAll('input[type="checkbox"]');
        const radioInputs = element.querySelectorAll('input[type="radio"]');
        const responseInput = element.querySelector('input[type="text"]');
        let answered;

        if (responseInput) {
            answered = responseInput.value.trim() !== '' || Array.from(radioInputs).some(radio => radio.checked);
        } else if (select) {
            answered = select.selectedIndex !== 0;
        } else if (checkboxes.length > 0) {
            answered = Array.from(checkboxes).some(checkbox => checkbox.checked);
        } else {
            answered = Array.from(radioInputs).some(radio => radio.checked);
        }

        if (!answered) {
            alert('Please answer all questions before submitting.');
            throw new Error('Unanswered question found.');
        }

        const questionNumber = element.getAttribute('data-question');
        const questionText = element.querySelector('label').innerText;
        let selectedValues = [];

        if (responseInput) {
            const responseValue = responseInput.value.trim();
            if (responseValue !== '') {
                selectedValues.push(responseValue);
            }
            const radioValue = Array.from(radioInputs).find(radio => radio.checked)?.value;
            if (radioValue) {
                selectedValues.push(radioValue);
            }
        } else if (select) {
            selectedValues = Array.from(select.selectedOptions).map(option => option.value);
        } else if (checkboxes.length > 0) {
            selectedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
        } else {
            const radioValue = Array.from(radioInputs).find(radio => radio.checked)?.value;
            if (radioValue) {
                selectedValues.push(radioValue);
            }
        }

        selectedValues = selectedValues.filter(value => value !== '');
        return { number: questionNumber, question: questionText, value: selectedValues };
    });

    window.location.href = 'results.html?data=' + encodeURIComponent(JSON.stringify(formData));
});
