// Get references to the form, results section, and message section from the DOM
const form = document.querySelector("#bmi-form");
const results = document.querySelector("#results");
const message = document.querySelector("#message");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission action (which would reload the page)
  e.preventDefault();

  // Clear previous results and message
  results.innerHTML = '';
  message.innerHTML = '';

  // Retrieve input values from the form (height, weight, age, and gender)
  const height = parseInt(document.querySelector("#height").value); // Convert height to an integer
  const weight = parseInt(document.querySelector("#weight").value); // Convert weight to an integer
  const age = parseInt(document.querySelector("#age").value); // Convert age to an integer
  const gender = document.querySelector("#gender").value; // Retrieve the selected gender

  // Validate height input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please provide a valid height.";
    return; // Exit the function early to prevent further processing
  }

  // Validate weight input
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide a valid weight.";
    return; // Exit the function early to prevent further processing
  }

  // Validate age input
  if (isNaN(age) || age <= 0) {
    results.innerHTML = "Please provide a valid age.";
    return; // Exit the function early to prevent further processing
  }

  // Validate gender input
  if (!gender) {
    results.innerHTML = "Please select your gender.";
    return; // Exit the function early to prevent further processing
