// Get references to the form, results section, and message section from the DOM
const form = document.querySelector("#bmi-form");
const results = document.querySelector("#results");
const message = document.querySelector("#message");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission action (which would reload the page)
  e.preventDefault();

  // Retrieve input values from the form (height, weight, age, and gender)
  const height = parseInt(document.querySelector("#height").value); // Convert height to an integer
  const weight = parseInt(document.querySelector("#weight").value); // Convert weight to an integer
  const age = parseInt(document.querySelector("#age").value); // Convert age to an integer
  const gender = document.querySelector("#gender").value; // Retrieve the selected gender

  // Validate height input
  if (isNaN(height) || height <= 0) {
    // If height is not a valid number or is less than or equal to 0, show an error message
    results.innerHTML = "Please provide a valid height.";
    return; // Exit the function early to prevent further processing
  }

  // Validate weight input
  if (isNaN(weight) || weight <= 0) {
    // If weight is not a valid number or is less than or equal to 0, show an error message
    results.innerHTML = "Please provide a valid weight.";
    return; // Exit the function early to prevent further processing
  }

  // Validate age input
  if (isNaN(age) || age <= 0) {
    // If age is not a valid number or is less than or equal to 0, show an error message
    results.innerHTML = "Please provide a valid age.";
    return; // Exit the function early to prevent further processing
  }

  // Validate gender input
  if (!gender) {
    // If no gender is selected, show an error message
    results.innerHTML = "Please select your gender.";
    return; // Exit the function early to prevent further processing
  }

  // Calculate BMI using the formula: BMI = weight / (height in meters squared)
  const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Convert height to meters (by dividing by 10000) and calculate BMI

  // Display the calculated BMI value in the results section
  results.innerHTML = `Your BMI is: <strong>${bmi}</strong>`;

  // Provide feedback based on the BMI value
  if (bmi < 18.5) {
    // If BMI is less than 18.5, the person is considered underweight
    message.innerHTML = "You are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // If BMI is between 18.5 and 24.9, the person has a normal weight
    message.innerHTML = "You have a normal weight.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    // If BMI is between 25 and 29.9, the person is considered overweight
    message.innerHTML = "You are overweight.";
  } else {
    // If BMI is 30 or higher, the person is considered obese
    message.innerHTML = "You are obese.";
  }
});
.
