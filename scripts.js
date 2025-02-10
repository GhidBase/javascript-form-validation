const emailField = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const zipField = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");
const passwordField = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const confirmPasswordField = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector(
  "#confirm-password + span.error"
);

function showEmailError() {
  if (emailField.validity.tooShort) {
    emailError.textContent = "Email too short, needs at least 10 characters";
    return;
  } else if (emailField.validity.typeMismatch) {
    emailError.textContent = "Input must be an email";
    return;
  }
}

function showZipCodeError() {
  if (zipField.validity.patternMismatch) {
    zipError.textContent = "Zip code must be 5 digits";
    return;
  }
}

function showPasswordError() {
  if (passwordField.validity.tooShort) {
    passwordError.textContent = "Password must be at least 5 characters long";
    return;
  } else {
    passwordError.textContent = "";
  }
}

emailField.addEventListener("input", () => {
  if (!emailField.validity.valid) {
    showEmailError();
  } else {
    emailError.textContent = "";
  }
});

zipField.addEventListener("input", () => {
  if (!zipField.validity.valid) {
    showZipCodeError();
  } else {
    zipError.textContent = "";
  }
});

passwordField.addEventListener("input", () => {
  showPasswordError();
});

confirmPasswordField.addEventListener("input", () => {
  if (passwordField.value != confirmPasswordField.value) {
    confirmPasswordError.textContent = "Passwords must match";
    return;
  } else {
    confirmPasswordError.textContent = "";
  }
});
