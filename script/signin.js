function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.trim() === "" || password.trim() === "") {
      alert("Username or password cannot be blank!");
      return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // More robust regex for email validation

  if (!emailRegex.test(username)) {
      alert("Please enter a valid email address.");
      return false;
  }

  if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
  }

  // Continue with navigation if validation passes
  redirectform();
  return false; // Returning false to prevent form submission
}

function redirectform() {
  const email = document.getElementById("username").value;
  const domain = email.split("@")[1];

  if (domain == "admin.com") {
      window.location.href = "/HTML/admin.html";
  } else {
      window.location.href = "/HTML/home.html";
  }
}