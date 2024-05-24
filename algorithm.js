// Get form data from query string
var urlParams = new URLSearchParams(window.location.search);
var formData = urlParams.get('data');
var resultsContainer = document.getElementById('results');

// Parse JSON data and display results
if (formData) {
    var parsedData = JSON.parse(decodeURIComponent(formData));
    parsedData.forEach(function(entry) {
        var resultHtml = '<div class="mb-3">';
        resultHtml += '<strong>Question Number:</strong> ' + entry.number + '<br>';
        resultHtml += '<strong>Answer:</strong> ' + entry.value + '<br>';
        resultHtml += '</div>';
        resultsContainer.innerHTML += resultHtml;
    });
} else {
    resultsContainer.innerHTML = '<p>No data available.</p>';
}

// Function to convert JSON to CSV
function jsonToCsv(json) {
    var csv = 'Question Number,Answer\n';
    json.forEach(function(obj) {
        csv += obj.number + ',"' + obj.value + '"\n';
    });
    return csv;
}

// Function to trigger download of JSON and CSV files
document.getElementById('downloadJson').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Create a new object to hold both score and parsedData
    var dataWithScore = {
        score: normalizedScore,
        data: parsedData
    };

    // Convert the combined data to JSON
    var jsonData = JSON.stringify(dataWithScore, null, 2);
    var blob = new Blob([jsonData], { type: 'application/json' });

    // Create a URL for the Blob
    var url = URL.createObjectURL(blob);

    // Create a link element to trigger the download
    var a = document.createElement('a');
    a.href = url;
    a.download = 'results.json';

    // Append the link to the document body, trigger the click, and then remove the link
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Function to convert JSON to CSV
function jsonToCsv(json, normalizedScore) {
    var csv = 'Normalized Score,Question Number,Answer\n';
    csv += `${normalizedScore},\n`; // Add the normalized score to the first row
    json.forEach(function(obj) {
      csv += `${obj.number},"${obj.value}"\n`;
    });
    return csv;
}

document.getElementById('downloadCsv').addEventListener('click', function(event) {
    event.preventDefault();
    var csvData = generateCsv(parsedData);
    downloadCsv(csvData); // Download CSV file
});

// Function to generate CSV data
function generateCsv(data) {
    // Transpose the data
    var transposedData = transposeData(data);

    // Prepare CSV header
    var csv = 'Question Number,Answer\n';

    // Add data rows
    transposedData.forEach(function(row) {
        csv += row.join(',') + '\n'; // Add each row without the score column
    });
    return csv;
}

// Function to transpose data
function transposeData(data) {
    // Assuming data is an array of objects with 'number' and 'value' properties
    var transposedData = [];

    // Iterate over each object in the data array
    data.forEach(function(obj) {
        // Iterate over each property in the object
        Object.entries(obj).forEach(function([key, value], index) {
            // Initialize a new array for each property if it doesn't exist
            transposedData[index] = transposedData[index] || [];
            // Push the property value to the corresponding index in the transposed array
            transposedData[index].push(value);
        });
    });

    return transposedData;
}

// Function to trigger download of CSV file
function downloadCsv(csvData) {
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'results.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Retry questionnaire button click event
document.getElementById('retryButton').addEventListener('click', function() {
    // Redirect to the questionnaire page
    window.location.href = 'index.html';
});


/**
 * ALGORITHM LOGIC BELOW
 */
// Note: This algorithm runs on rubbish logic. It's sole purpose is demo how an algorithm logic can be integrated into this web app.

var score = 0;

parsedData.forEach(function(entry) {
    if (!isNaN(entry.value) && entry.value !== '') {
        score += parseInt(entry.value); // Numeric value
    } else if (typeof entry.value === 'string') {
        // Handle string values
        switch (entry.value.toLowerCase()) {
            case 'bad':
                score = 10; // If the value is 'bad', set score to 10 instantly
                break;
            default:
                score += 5; // Adding 5 for other string values
        }
    } else {
        // Handle other data types or missing values
        score += 999; // Adding 999 for empty or non-numeric values
    }
});

// Curve the score to a scale of 1 to 10 using a bell curve approach
// Assuming the maximum possible score is 70 and minimum is 0 (sum of scores from 10 questions)
// Normalize the score to a scale of 1 to 10
var normalizedScore = (score / 70) * 10;
normalizedScore = Math.round(normalizedScore);

// Implement grade cap
if (normalizedScore > 10) {
    normalizedScore = 10;
}

// Display the calculated score on the HTML element with ID "score"
var scoreElement = document.getElementById('score');
if (scoreElement) {
    // Round the normalized score and display
    scoreElement.textContent = normalizedScore;
}

document.getElementById("loadingOverlay").style.display = "none"; // Hide the loading after page is loaded




