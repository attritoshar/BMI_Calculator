<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags for character encoding and responsive design -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Title of the webpage that appears in the browser's tab -->
    <title>BMI Calculator</title>
    
    <!-- Linking external CSS stylesheet for styling -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Main container for the BMI calculator form -->
    <div class="container">
        <!-- Heading for the page -->
        <h1>BMI Calculator</h1>
        
        <!-- Input for weight with a label and placeholder text -->
        <label for="weight">Enter Weight:</label>
        <input type="number" id="weight" placeholder="Weight (kg or lbs)" required>
        
        <!-- Input for height with a label and placeholder text -->
        <label for="height">Enter Height:</label>
        <input type="number" id="height" placeholder="Height (cm or inches)" required>
        
        <!-- Button that triggers the BMI calculation when clicked -->
        <button onclick="calculateBMI()">Calculate BMI</button>
        
        <!-- Element to display the calculated BMI result -->
        <h3 id="result"></h3>
        
        <!-- Element to display the BMI category (e.g., Underweight, Normal weight, etc.) -->
        <p id="category"></p>
    </div>

    <!-- Linking external JavaScript file that contains the BMI calculation logic -->
    <script src="script.js"></script>
</body>
</html>

<style>
/* Basic styling for the BMI Calculator */
body {
    font-family: Arial, sans-serif; /* Setting font for the entire page */
    background-color: #f4f4f4; /* Light background color */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
}

.container {
    width: 90%; /* Responsive width */
    max-width: 400px; /* Set a maximum width for the container */
    margin: 50px auto; /* Center container with margin at the top */
    background-color: #fff; /* White background for the form */
    padding: 20px; /* Padding inside the container */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow effect */
}

h1 {
    text-align: center; /* Center the title */
    color: #4CAF50; /* Green color for the title */
}

label {
    display: block; /* Make label a block element to display above input */
    margin-top: 15px; /* Margin between label and input */
    font-size: 1.1em; /* Slightly larger font size for labels */
}

input {
    width: 100%; /* Make input fields fill the container */
    padding: 10px; /* Padding inside input fields */
    margin-top: 5px; /* Small margin on top of inputs */
    font-size: 1em; /* Set font size for input text */
    border-radius: 5px; /* Round the input corners */
    border: 1px solid #ccc; /* Light border for the input fields */
}

button {
    width: 100%; /* Full width button */
    padding: 10px; /* Padding inside the button */
    background-color: #4CAF50; /* Green background for the button */
    color: white; /* White text color */
    border: none; /* Remove the border */
    margin-top: 20px; /* Add space above the button */
    font-size: 1.1em; /* Increase button text size */
    cursor: pointer; /* Change cursor to pointer when hovered */
    border-radius: 5px; /* Round button corners */
}

button:hover {
    background-color: #45a049; /* Darken button color when hovered */
}

#result {
    margin-top: 20px; /* Margin above the result text */
    text-align: center; /* Center align the result */
    font-size: 1.5em; /* Larger font size for the BMI result */
    font-weight: bold; /* Make the result bold */
}

#category {
    text-align: center; /* Center align the BMI category */
    font-size: 1.2em; /* Slightly larger font size for category */
}
</style>

<script>
// Function to calculate BMI when the button is clicked
function calculateBMI() {
    // Get the values entered by the user for weight and height
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    
    // Get elements for displaying result and category
    let resultElement = document.getElementById("result");
    let categoryElement = document.getElementById("category");

    // Input validation: Check if weight or height is not a valid number or less than or equal to 0
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        // If input is invalid, display an error message and clear the category
        resultElement.textContent = "Please enter valid positive numbers for weight and height.";
        categoryElement.textContent = "";
        return; // Exit the function
    }

    // Convert height to meters if it's in centimeters (assuming height > 100 is in cm)
    if (height > 100) {
        height = height / 100;  // Convert cm to meters
    }

    // Calculate BMI using the formula: weight / (height * height)
    let bmi = weight / (height * height);

    // Display the calculated BMI value, rounded to two decimal places
    resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    // Determine the BMI category based on the calculated BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the BMI category
    categoryElement.textContent = `Category: ${category}`;
}
</script>
