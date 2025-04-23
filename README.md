<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        
        <label for="weight">Enter Weight:</label>
        <input type="number" id="weight" placeholder="Weight (kg or lbs)" required>
        
        <label for="height">Enter Height:</label>
        <input type="number" id="height" placeholder="Height (cm or inches)" required>
        
        <button onclick="calculateBMI()">Calculate BMI</button>
        
        <h3 id="result"></h3>
        <p id="category"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
/* Basic styling for the BMI Calculator */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%;
    max-width: 400px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #4CAF50;
}

label {
    display: block;
    margin-top: 15px;
    font-size: 1.1em;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    margin-top: 20px;
    font-size: 1.1em;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #45a049;
}

#result {
    margin-top: 20px;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
}

#category {
    text-align: center;
    font-size: 1.2em;
}
function calculateBMI() {
    // Get input values
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let resultElement = document.getElementById("result");
    let categoryElement = document.getElementById("category");

    // Input validation
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = "Please enter valid positive numbers for weight and height.";
        categoryElement.textContent = "";
        return;
    }

    // Convert height to meters if it's in centimeters
    if (height > 100) {
        height = height / 100;  // Convert cm to meters
    }

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display BMI result
    resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    // Determine BMI category
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

    categoryElement.textContent = `Category: ${category}`;
}
