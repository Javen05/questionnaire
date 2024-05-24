function generateQuestion(questionNumber, question, inputType, options, trigger) {
  const defaultOption =
    '<option value="" disabled selected>Please select an option</option>'; // placeholder for dropdown
  let html = `
        <div class="form-group question ${
          compulsoryQuestions.includes(questionNumber) ? "" : "d-none"
        }" data-question="${questionNumber}">
            <label><strong>Question ${questionNumber}</strong>: ${
    inputType != "display" ? question : ""
  }</label>
    `;

  switch (inputType) {
    case "radio":
      if (Array.isArray(options)) {
        options.forEach((option) => {
          html += `
                    <div class="form-check">
                        <input class="form-check-input" type="${inputType}" name="question${questionNumber}" id="q${questionNumber}option${
            option.value
          }" value="${option.value}" data-trigger="${option.trigger || ""}">
                        <label class="form-check-label" for="q${questionNumber}option${
            option.value
          }">${option.label}</label>
                    </div>
                `;
        });
      } else {
        console.error(
          "generateQuestion: options is not an array for radio input type",
          { questionNumber, options }
        );
      }
      break;
    case "checkbox":
      if (Array.isArray(options)) {
        options.forEach(function (option) {
          html += '<div class="form-check">';
          html +=
            '<input class="form-check-input" type="checkbox" id="q' +
            questionNumber +
            "option" +
            option.value +
            '" value="' +
            option.value +
            '" data-trigger="' +
            (option.trigger ? option.trigger : "") +
            '">';
          html +=
            '<label class="form-check-label" for="q' +
            questionNumber +
            "option" +
            option.value +
            '">' +
            option.label +
            "</label>";
          html += "</div>";
        });
      } else {
        console.error(
          "generateQuestion: options is not an array for checkbox input type",
          { questionNumber, options }
        );
      }
      break;
      case "response":
        html += `
                  <div class="response-input">
                      <input class="form-control" type="text" id="q${questionNumber}response" name="question${questionNumber}response" placeholder="Your response" data-trigger="${
          trigger || ""
        }">
              `;
  
        if (Array.isArray(options) && options.length > 0) {
          options.forEach((option) => {
            html += `
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}option${option.value}" value="${option.value}" data-trigger="${option.trigger || ""}">
                          <label class="form-check-label" for="q${questionNumber}option${
              option.value
            }">${option.label}</label>
                      </div>
                  `;
          });
        } else {
          html += `
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}optionUnknown" value="998">
                          <label class="form-check-label" for="q${questionNumber}optionUnknown">Don't Know</label>
                      </div>
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}optionRefused" value="999">
                          <label class="form-check-label" for="q${questionNumber}optionRefused">Refused</label> 
                      </div>
                  `;
        }
  
        html += `
                  </div>
                  <button type="button" class="btn btn-secondary clear-radio">Clear</button> ${
                    trigger
                      ? `<button type="button" class="btn btn-primary proceed-btn" data-trigger="${trigger}">Proceed</button>`
                      : ""
                  }
              `;
        break;
    case "display":
      html += `
                <div class="display-text">${question}</div>
                ${
                  trigger
                    ? `<button type="button" class="btn btn-primary proceed-btn" data-trigger="${trigger}">Proceed</button>`
                    : ""
                }
            `;
      break;
    default:
      html += `
                <select class="form-control" data-question="${questionNumber}">
                    ${defaultOption}
                    ${
                      Array.isArray(options)
                        ? options
                            .map(
                              (option) =>
                                `<option value="${
                                  option.value
                                }" data-trigger="${option.trigger || ""}">${
                                  option.label
                                }</option>`
                            )
                            .join("")
                        : console.error(
                            "generateQuestion: options is not an array for default input type",
                            { questionNumber, options }
                          )
                    }
                </select>
            `;
      break;
  }

  html += "</div>";
  return html;
}

lagQuestionPool = { ...questionPool };

const questionContainer = document.getElementById("questionContainer");
const questionForm = document.getElementById("questionForm");
questionForm.addEventListener("change", handleQuestionChange);

questions.forEach((q) => {
  questionContainer.innerHTML += generateQuestion(
    q.number,
    q.question,
    q.inputType,
    q.options,
    q.trigger
  );
});

function handleQuestionChange(event) {
  const target = event.target;
  const questionElement = target.closest(".question");
  if (questionElement === null) {
    console.error("handleQuestionChange: questionElement is null", { target });
    return;
  }
  const questionNumber = questionElement.getAttribute("data-question");
  updateQuestionPool(questionNumber);
}

function updateQuestionPool(questionNumber) {
  const questionElement = document.querySelector(
    `[data-question="${questionNumber}"]`
  );
  if (questionElement === null) {
    console.error("updateQuestionPool: questionElement is null", {
      questionNumber,
    });
    return;
  }

  const inputType = questionElement.querySelector("select")
    ? "select"
    : questionElement.querySelector('input[type="text"]')
    ? "response"
    : questionElement.querySelector('input[type="checkbox"]')
    ? "checkbox"
    : questionElement.querySelector(".display-text")
    ? "display"
    : "radio";

  let selectedOptions = [];
  if (inputType === "radio") {
    selectedOptions = Array.from(
      document.querySelectorAll(`[name="question${questionNumber}"]:checked`)
    ).map((option) => option.getAttribute("data-trigger"));
  } else if (inputType === "checkbox") {
    selectedOptions = Array.from(
      document.querySelectorAll(
        `[data-question="${questionNumber}"] input:checked`
      )
    ).map((option) => option.getAttribute("data-trigger"));
  } else if (inputType === "response") {
    const responseInput = document.querySelector(
      `[data-question="${questionNumber}"] input[type="text"]`
    );
    if (responseInput === null) {
      console.error("updateQuestionPool: responseInput is null", {
        questionNumber,
      });
      return;
    }
    selectedOptions = [responseInput.getAttribute("data-trigger")];
  } else {
    // dropdown
    selectedOptions = Array.from(
      document.querySelectorAll(
        `[data-question="${questionNumber}"] option:checked`
      )
    ).map((option) => option.getAttribute("data-trigger"));
  }

  questionPool[questionNumber] = selectedOptions.filter((option) => option);
  for (const option of selectedOptions) {
    questionPool[option] = [];
  }

  // Check if any conditional question should be added to the question pool
  for (const question in conditionalQuestions) {
    let conditionMet = true;

    for (const condition of conditionalQuestions[question]) {
      let [conditionQuestion, conditionValues, option] = condition;
      conditionValues = conditionValues.map((val) => val.toString()); // parse the condition values to string to match with query selectors string type

      // select from all question types
      const selectedRadio = questionContainer.querySelector(
        `[data-question="${conditionQuestion}"] input[type="radio"]:checked`
      );
      const selectedCheckbox = questionContainer.querySelectorAll(
        `[data-question="${conditionQuestion}"] input[type="checkbox"]:checked`
      );
      const selectedResponse = questionContainer.querySelector(
        `[data-question="${conditionQuestion}"] input[type="text"]`
      );
      const selectedDropdown = questionContainer.querySelector(
        `[data-question="${conditionQuestion}"] option:checked`
      );

      // combine all non-null values into array
      const selectedOptions = [
        selectedRadio && selectedRadio.value,
        ...(selectedCheckbox
          ? Array.from(selectedCheckbox).map((checkbox) => checkbox.value)
          : []),
        selectedResponse && selectedResponse.value,
        selectedDropdown && selectedDropdown.value,
      ].filter((option) => option !== undefined && option !== null);

      if (option === "or") {
        // any value in conditionValues is in selectedOptions
        conditionMet = conditionValues.some((val) =>
          selectedOptions.includes(val)
        );
        break;
      } else if (
        conditionValues.some((val) => val.startsWith("~")) &&
        !selectedOptions.includes("")
      ) {
        // slice out any '~' value in conditionValues
        conditionValues = conditionValues.map((val) => val.replace("~", ""));
        // any value in conditionValues is not in selectedOptions
        conditionMet = conditionValues.every(
          (val) => !selectedOptions.includes(val)
        );
        break;
      } else if (
        !conditionValues.every((val) => selectedOptions.includes(val))
      ) {
        conditionMet = false;
        break;
      }
    }

    if (conditionMet) {
      compulsoryQuestions.push(question); // utilize compulsoryQuestions mechanism to ensure question won't get removed.
      questionPool[question] = [];
    } else {
      compulsoryQuestions = compulsoryQuestions.filter((q) => q !== question);
      delete questionPool[question];
    }
  }

  // if any key in questionPool not in compulsoryQuestions or value of questionPool, drop it
  for (const key in questionPool) {
    if (
      !compulsoryQuestions.includes(key) &&
      !Object.values(questionPool).flat().includes(key)
    ) {
      delete questionPool[key];
    }
  }

  // compare questionPool with lagQuestionPool to check what questions are removed or added
  const removedQuestions = Object.keys(lagQuestionPool)
    .flat()
    .filter((question) => !Object.keys(questionPool).includes(question));
  const addedQuestions = Object.keys(questionPool)
    .flat()
    .filter(
      (question) => !Object.keys(lagQuestionPool).flat().includes(question)
    );

  // edit the DOM to reflect the changes
  removedQuestions.forEach((question) => {
    // add d-none to the question
    const questionElement = document.querySelector(
      `[data-question="${question}"]`
    );
    if (questionElement) {
      questionElement.classList.add("d-none");
    } else {
      console.error(
        "updateQuestionPool: questionElement for removed question is null",
        { question }
      );
    }
  });
  addedQuestions.forEach((q) => {
    // remove d-none from the question
    const questionElement = document.querySelector(`[data-question="${q}"]`);
    if (questionElement) {
      questionElement.classList.remove("d-none");
    } else {
      console.error(
        "updateQuestionPool: questionElement for added question is null",
        { question: q }
      );
    }
  });

  lagQuestionPool = { ...questionPool };
}

// Event listener for radio box clear button in response type question
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("clear-radio")) {
    const questionElement = event.target.closest(".question");
    if (questionElement === null) {
      console.error("clear-radio click handler: questionElement is null", {
        target: event.target,
      });
      return;
    }
    const questionNumber = questionElement.getAttribute("data-question");
    document
      .querySelectorAll(`[name="question${questionNumber}"]`)
      .forEach((input) => {
        if (input.type === "radio") {
          input.checked = false;
        }
        // update question
        updateQuestionPool(questionNumber);
      });
  }
  if (event.target.classList.contains("proceed-btn")) {
    const trigger = event.target.getAttribute("data-trigger");
    const questionElement = event.target.closest(".question");
    if (questionElement === null) {
      console.error("proceed-btn click handler: questionElement is null", {
        target: event.target,
      });
      return;
    }
    const questionNumber = questionElement.getAttribute("data-question");
    if (trigger) {
      activateQuestion(questionNumber, trigger);
    }
  }
});

function activateQuestion(questionNumber, trigger) {
  const nextQuestion = document.querySelector(`[data-question="${trigger}"]`);
  if (nextQuestion === null) {
    console.error("activateQuestion: nextQuestion is null", { trigger });
    return;
  }
  nextQuestion.classList.remove("d-none");
  questionPool[questionNumber] = [trigger];
  questionPool[trigger] = [];
}

// Event listener for response input and radio box inputs
document.addEventListener("change", function (event) {
  const target = event.target;
  if (target && target.matches('.response-input input[type="text"]')) {
    const questionElement = target.closest(".question");
    if (questionElement === null) {
      console.error("response-input change handler: questionElement is null", {
        target,
      });
      return;
    }
    const questionNumber = questionElement.getAttribute("data-question");
    // Clear radio box inputs
    document
      .querySelectorAll(`[name="question${questionNumber}"]:checked`)
      .forEach((input) => {
        input.checked = false;
      });
  } else if (target && target.matches('.response-input input[type="radio"]')) {
    // Clear radio box for response-type
    const questionElement = target.closest(".question");
    if (questionElement === null) {
      console.error("radio input change handler: questionElement is null", {
        target,
      });
      return;
    }
    const questionNumber = questionElement.getAttribute("data-question");
    // Clear text input
    const responseInput = document.getElementById(`q${questionNumber}response`);
    if (responseInput) {
      responseInput.value = "";
    } else {
      console.error("radio input change handler: responseInput is null", {
        questionNumber,
      });
    }
  } else if (
    target &&
    target.matches('.response-input input[type="checkbox"]')
  ) {
    const questionElement = target.closest(".question");
    if (questionElement === null) {
      console.error("checkbox input change handler: questionElement is null", {
        target,
      });
      return;
    }
    const questionNumber = questionElement.getAttribute("data-question");
    // Clear text input
    const responseInput = document.getElementById(`q${questionNumber}response`);
    if (responseInput) {
      responseInput.value = "";
    } else {
      console.error("checkbox input change handler: responseInput is null", {
        questionNumber,
      });
    }
  }
});

document
  .getElementById("questionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    var confirmationCheckbox = document.getElementById("confirmationCheckbox");
    if (!confirmationCheckbox.checked) {
      alert("Please confirm that your answers are correct before submitting.");
      return; // Prevent form submission if the checkbox is not checked
    }

    var formData = [];

    document.querySelectorAll(".question").forEach(function (element) {
      if (!element.classList.contains("d-none")) {
        var select = element.querySelector("select");
        var responseInput = element.querySelector('input[type="text"]');
        var checkboxes = element.querySelectorAll(
          'input[type="checkbox"]:checked'
        );
        var radioButton = element.querySelector('input[type="radio"]:checked');

        var questionNumber = element.getAttribute("data-question"); // Get the question number
        var questionText = element.querySelector("label").innerText;
        var selectedOption;

        if (select) {
          selectedOption = select.options[select.selectedIndex];
        } else if (checkboxes.length > 0) {
          selectedOption = Array.from(checkboxes).map(
            (checkbox) => checkbox.value
          );
        } else {
          selectedOption = radioButton;
        }

        var selectedValue = selectedOption
          ? Array.isArray(selectedOption)
            ? selectedOption
            : selectedOption.value
          : responseInput
          ? responseInput.value
          : ""; // Handle null responseInput

        formData.push({ number: questionNumber, value: selectedValue });
      }
    });

    // Redirect to results.html with form data in JSON format
    window.location.href =
      "results.html?data=" + encodeURIComponent(JSON.stringify(formData));
  });
