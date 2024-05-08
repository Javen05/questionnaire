questions = [
    {
        "number": "Q1",
        "inputType": "radio",
        "question": "During the past two weeks, how often have you felt down, depressed, or hopeless?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q2" },
            { "value": 3, "label": "Nearly every day", "trigger": "Q2" }
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
        "question": "How often have you become easily annoyed or irritable?",
        "options": [
            { "value": 0, "label": "Not at all", "trigger": "Q7" },
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
    }
];

compulsoryQuestions = ["Q1"];
questionPool = { "Q1": [] };

function generateQuestion(questionNumber, question, inputType, options, trigger) {
    const defaultOption = '<option value="" disabled selected>Please select an option</option>';
    let html = `
        <div class="form-group question ${compulsoryQuestions.includes(questionNumber) ? '' : 'd-none'}" data-question="${questionNumber}">
            <label>Question ${questionNumber}: ${question}</label>
    `;

    switch (inputType) {
        case 'radio':
            options.forEach(option => {
                html += `
                    <div class="form-check">
                        <input class="form-check-input" type="${inputType}" name="question${questionNumber}" id="q${questionNumber}option${option.value}" value="${option.value}" data-trigger="${option.trigger || ''}">
                        <label class="form-check-label" for="q${questionNumber}option${option.value}">${option.label}</label>
                    </div>
                `;
            });
            break;
        case 'checkbox':
            options.forEach(function(option) {
                html += '<div class="form-check">';
                html += '<input class="form-check-input" type="checkbox" id="q' + questionNumber + 'option' + option.value + '" value="' + option.value + '" data-trigger="' + (option.trigger ? option.trigger : '') + '">';
                html += '<label class="form-check-label" for="q' + questionNumber + 'option' + option.value + '">' + option.label + '</label>';
                html += '</div>';
            });
            break;
        case 'response':
            html += `
                <div class="response-input">
                    <input class="form-control" type="text" id="q${questionNumber}response" name="question${questionNumber}response" placeholder="Your response" data-trigger="${trigger || ''}">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}optionUnknown" value="998">
                        <label class="form-check-label" for="q${questionNumber}optionUnknown">Don't Know</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}optionRefused" value="999">
                        <label class="form-check-label" for="q${questionNumber}optionRefused">Refused</label> 
                    </div>
                </div>
                <button type="button" class="btn btn-secondary clear-radio">Clear</button> <button type="button" class="btn btn-primary proceed-btn" data-trigger="${trigger || ''}">Proceed</button>
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

lagQuestionPool = { ...questionPool };

const questionContainer = document.getElementById('questionContainer');
const questionForm = document.getElementById('questionForm');
questionForm.addEventListener('change', handleQuestionChange);

questions.forEach(q => {
    questionContainer.innerHTML += generateQuestion(q.number, q.question, q.inputType, q.options, q.trigger);
});

function handleQuestionChange(event) {
    const target = event.target;
    const questionNumber = target.closest('.question').getAttribute('data-question');
    updateQuestionPool(questionNumber);
}

function updateQuestionPool(questionNumber) {
    const questionElement = document.querySelector(`[data-question="${questionNumber}"]`);
    const inputType = questionElement.querySelector('select') ? 'select' : questionElement.querySelector('input[type="radio"]') ? 'radio' : 'checkbox';

    let selectedOptions = [];
    if (inputType === 'radio') {
        selectedOptions = Array.from(document.querySelectorAll(`[name="question${questionNumber}"]:checked`)).map(option => option.getAttribute('data-trigger'));
    } else if (inputType === 'checkbox') {
        selectedOptions = Array.from(document.querySelectorAll(`[data-question="${questionNumber}"] input:checked`)).map(option => option.getAttribute('data-trigger'));
    } else {
        selectedOptions = Array.from(document.querySelectorAll(`[data-question="${questionNumber}"] option:checked`)).map(option => option.getAttribute('data-trigger'));
    }
    questionPool[questionNumber] = selectedOptions;
    for(const option of selectedOptions) {
        questionPool[option] = [];
    }

    // if any key in questionPool not in compulsoryQuestions or value of questionPool, drop it
    for(const key in questionPool) {
        if (!compulsoryQuestions.includes(key) && !Object.values(questionPool).flat().includes(key)) {
            delete questionPool[key];
        }
    }

    // compare questionPool with lagQuestionPool to check what questions are removed or added
    const removedQuestions = Object.keys(lagQuestionPool).flat().filter(question => !Object.keys(questionPool).includes(question));
    const addedQuestions = Object.keys(questionPool).flat().filter(question => !Object.keys(lagQuestionPool).flat().includes(question));

    // edit the DOM to reflect the changes
    removedQuestions.forEach(question => {
        // add d-none to the question
        const questionElement = document.querySelector(`[data-question="${question}"]`);
        questionElement.classList.add('d-none');
    });
    addedQuestions.forEach(q => {
        // remove d-none from the question
        const questionElement = document.querySelector(`[data-question="${q}"]`);
        questionElement.classList.remove('d-none');
    });    

    lagQuestionPool = { ...questionPool };
}

// Event listener for radio box clear button in response type question
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('clear-radio')) {
        const questionNumber = event.target.closest('.question').getAttribute('data-question');
        document.querySelectorAll(`[name="question${questionNumber}"]`).forEach(input => {
            if (input.type === 'radio') {
                input.checked = false;
            }
        });
    }
    if (event.target && event.target.classList.contains('proceed-btn')) {
        const trigger = event.target.getAttribute('data-trigger');
        const questionNumber = event.target.closest('.question').getAttribute('data-question');
        if (trigger) {
            activateQuestion(questionNumber, trigger);
        }
    }
});

function activateQuestion(questionNumber, trigger) {
    const nextQuestion = document.querySelector(`[data-question="${trigger}"]`);
    nextQuestion.classList.remove('d-none');
    questionPool[questionNumber] = [trigger];
    questionPool[trigger] = [];
}


// Event listener for response input and radio box inputs
document.addEventListener('change', function(event) {
    const target = event.target;
    if (target && target.matches('.response-input input[type="text"]')) {
        const questionNumber = target.closest('.question').getAttribute('data-question');
        // Clear radio box inputs
        document.querySelectorAll(`[name="question${questionNumber}"]:checked`).forEach(input => {
            input.checked = false;
        });
    } else if (target && target.matches('.response-input input[type="radio"]')) {
        const questionNumber = target.closest('.question').getAttribute('data-question');
        // Clear text input
        document.getElementById(`q${questionNumber}response`).value = '';
    } else if (target && target.matches('.response-input input[type="checkbox"]')) {
        const questionNumber = target.closest('.question').getAttribute('data-question');
        // Clear text input
        document.getElementById(`q${questionNumber}response`).value = '';
    }
});

document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var formData = [];

    document.querySelectorAll('.question').forEach(function(element) {
        if (!element.classList.contains('d-none')) {
            var select = element.querySelector('select');
            var responseInput = element.querySelector('input[type="text"]');
            var checkboxes = element.querySelectorAll('input[type="checkbox"]:checked');
            var radioButton = element.querySelector('input[type="radio"]:checked');

            var questionNumber = element.getAttribute('data-question'); // Get the question number
            var questionText = element.querySelector('label').innerText;
            var selectedOption;

            if (select) {
                selectedOption = select.options[select.selectedIndex];
            } else if (checkboxes.length > 0) {
                selectedOption = Array.from(checkboxes).map(checkbox => checkbox.value);
            } else {
                selectedOption = radioButton;
            }

            var selectedValue = selectedOption ? (Array.isArray(selectedOption) ? selectedOption : selectedOption.value) : (responseInput ? responseInput.value : ''); // Handle null responseInput
            
            formData.push({ number: questionNumber, value: selectedValue });
        }
    });

    // Redirect to results.html with form data in JSON format
    window.location.href = 'results.html?data=' + encodeURIComponent(JSON.stringify(formData));
});



