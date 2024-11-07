function validatePassword() {
    const password = document.getElementById("passwordInput").value;

    // Regular expressions for each requirement
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[@#$!%^+*?&]/;

    let strengthScore = 0;
    let validationMessage = "";

    // Check for at least one uppercase letter
    if (uppercaseRegex.test(password)) {
      strengthScore++;
    } else {
      validationMessage += "Password must include at least one uppercase letter.<br>";
    }
    
    // Check for at least one lowercase letter
    if (lowercaseRegex.test(password)) {
      strengthScore++;
    } else {
      validationMessage += "Password must include at least one lowercase letter.<br>";
    }
    
    // Check for at least one digit
    if (digitRegex.test(password)) {
      strengthScore++;
    } else {
      validationMessage += "Password must include at least one digit.<br>";
    }
    
    // Check for at least one special character
    if (specialCharRegex.test(password)) {
      strengthScore++;
    } else {
      validationMessage += "Password must include at least one special character.<br>";
    }
    
    // Check for minimum length
    if (password.length >= 8) {
      strengthScore++;
    } else {
      validationMessage += "Password must be at least 8 characters long.<br>";
    }

    // Assess strength based on the score
    let strength;
    switch (strengthScore) {
      case 5:
        strength = "Very Strong";
        break;
      case 4:
        strength = "Strong";
        break;
      case 3:
        strength = "Moderate";
        break;
      case 2:
        strength = "Weak";
        break;
      default:
        strength = "Very Weak";
    }

    const validationMessageElement = document.getElementById("validationMessage");

    // Display messages
    if (strengthScore === 5) {
      validationMessage = "Password is valid.";
      validationMessageElement.classList.add("valid"); // Apply green color
    } else {
      validationMessage += "Password is invalid.";
      validationMessageElement.classList.remove("valid"); // Keep red color
    }
    
    validationMessageElement.innerHTML = validationMessage;
    document.getElementById("strengthMessage").innerHTML = `Password strength: ${strength}`;
  }