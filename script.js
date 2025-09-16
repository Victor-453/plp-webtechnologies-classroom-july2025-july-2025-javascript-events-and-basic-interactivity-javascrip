
//  Part 1: Event Handling


// Toggle dark/light mode
const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


//  Part 2: Interactive Elements


// Click counter
let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const clickCountDisplay = document.getElementById("clickCount");

incrementBtn.addEventListener("click", () => {
  count++;
  clickCountDisplay.textContent = count;
});

// Part 3: Form Validation


// Form and inputs
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Validate form on submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation: min 6 chars
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
