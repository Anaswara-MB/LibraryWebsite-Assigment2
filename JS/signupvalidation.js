let email = document.getElementById("email");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");

let error = document.getElementById("error");
let err1 = document.getElementById("err1");
let err2 = document.getElementById("err2");

function validate() {
  const ValidEmailregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const ValidPhoneregexp = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}[-.\s]\d{4}[-.\s]\d{3})$/;

  // Email validation
  if (email.value !== "" && ValidEmailregexp.test(email.value)) {
    error.innerHTML = "Email is Valid";
    error.style.color = "green";
  } else {
    error.innerHTML = "Email is Invalid. Cannot be empty or contain spaces.";
    error.style.color = "red";
    return false;
  }

  // Phone number validation
  if (phone.value !== "" && ValidPhoneregexp.test(phone.value)) {
    err1.innerHTML = "Phone number is Valid";
    err1.style.color = "green";
  } else {
    err1.innerHTML = "Phone number is Invalid or Cannot be empty";
    err1.style.color = "red";
    return false;
  }

  // Password validation
  let password = pass.value;
  let passwordStrength = checkPasswordStrength(password);

  // Display password strength indication
  if (password !== "" && passwordStrength === "strong") {
    err2.innerHTML = "Password is Strong";
    err2.style.color = "green";

    // Redirect only if password is strong
    return true;
  } else if (password !== "" && passwordStrength === "medium") {
    err2.innerHTML = "Password is Medium";
    err2.style.color = "orange";
  } else {
    err2.innerHTML = "Password is Weak or cannot be empty";
    err2.style.color = "red";
  }

  // Do not redirect for medium or weak passwords
  return false;
}

// Function to check password strength
function checkPasswordStrength(password) {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (strongRegex.test(password)) {
    return "strong";
  } else if (mediumRegex.test(password)) {
    return "medium";
  } else {
    return "weak";
  }
}