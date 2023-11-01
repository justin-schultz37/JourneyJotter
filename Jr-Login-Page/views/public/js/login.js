document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("email-login").value;
      const passwordInput = document.getElementById("password-login").value;
  
      // Replace this with your authentication logic
      if (validateLogin(emailInput, passwordInput)) {
        // Redirect to another page
        window.location.href = "/";
      } else {
        alert("Invalid login credentials. Please try again.");
      }
    });
  
    function validateLogin(email, password) {
      // Replace this with actual authentication logic
      const users = [
        { email: "user1@example.com", password: "password1" },
        { email: "user2@example.com", password: "password2" },
        // Add more user objects as needed
      ];
  
      // Check if the provided email and password match any user in the array
      for (const user of users) {
        if (user.email === email && user.password === password) {
          return true; // Authentication successful
        }
      }
  
      return false; // Authentication failed
    }
  });
  