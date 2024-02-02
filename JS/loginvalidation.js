function validateLogin() {
    let mail = document.getElementById("mail");
    let passwords = document.getElementById("passwords");
  
    let bug = document.getElementById("bug");
    let bug1 = document.getElementById("bug1");
  
    const Emailregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  
    // Email validation
    if (mail.value !== "" && /\s/.test(mail.value) === false && Emailregexp.test(mail.value)) {
      bug.innerHTML = "Email is Valid";
      bug.style.color = "green";
    } else {
      bug.innerHTML = "Email is Invalid. Cannot be empty or contain spaces.";
      bug.style.color = "red";
      return false;
    }
  
    // Password validation
    let password = passwords.value;
    let passwordStrength = checkPasswordStrength(password);
  
    // Display password strength indication
    if (passwordStrength === "strong") {
      bug1.innerHTML = "Password is Strong";
      bug1.style.color = "green";
  
      // Redirect only if password is strong
      return true;
    } else if (passwordStrength === "medium") {
      bug1.innerHTML = "Password is Medium";
      bug1.style.color = "orange";
    } else {
      bug1.innerHTML = "Password is Weak or cannot be empty";
      bug1.style.color = "red";
      return false;
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