// Get references to the form, results section, and message section from the DOM
const form = document.querySelector("#bmi-form");
const results = document.querySelector("#results");
const message = document.querySelector("#message");

// Listen for form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior (page reload)
  e.preventDefault();

  // Get input values from the form (height, weight, age, gender)
  const height = parseInt(document.querySelector("#height").value); // Convert height input to integer
  const weight = parseInt(document.querySelector("#weight").value); // Convert weight input to integer
  const age = parseInt(document.querySelector("#age").value); // Convert age input to integer
  const gender = document.querySelector("#gender").value; // Get the gender value

  // Validate height input
  if (isNaN(height) || height <= 0) {
    // If height is not a valid number or less than or equal to 0, show error
    results.innerHTML = "Please provide a valid height.";
    return; // Exit the function early to stop further execution
  }

  // Validate weight input
  if (isNaN(weight) || weight <= 0) {
    // If weight is not a valid number or less than or equal to 0, show error
    results.innerHTML = "Please provide a valid weight.";
    return; // Exit the function early to stop further execution
  }

  // Validate age input
  if (isNaN(age) || age <= 0) {
    // If age is not a valid number or less than or equal to 0, show error
    results.innerHTML = "Please provide a valid age.";
    return; // Exit the function early to stop further execution
  }

  // Validate gender selection
  if (!gender) {
    // If no gender is selected, show error
    results.innerHTML = "Please select your gender.";
    return; // Exit the function early to stop further execution
  }

  // Calculate BMI using the formula: BMI = weight / (height in meters squared)
  const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Convert height from cm to meters by dividing by 10000, and then calculate BMI

  // Display the BMI result in the results section
  results.innerHTML = `Your BMI is: <strong>${bmi}</strong>`;

  // Display feedback based on BMI range
  if (bmi < 18.5) {
    // If BMI is less than 18.5, the person is underweight
    message.innerHTML = "You are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // If BMI is between 18.5 and 24.9, the person has a normal weight
    message.innerHTML = "You have a normal weight.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    // If BMI is between 25 and 29.9, the person is overweight
    message.innerHTML = "You are overweight.";
  } else {
    // If BMI is 30 or higher, the person is obese
    message.innerHTML = "You are obese.";
  }
});
