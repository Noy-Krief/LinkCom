// open signup form when pressing on sign up in login page
// close signup form when pressing on X
$(document).ready(function(){
    $('.signup').click(()=> {
        $('#modalSignin').css("display", "block")
        $('#modalSignin').css("background-color", "rgb(217 214 214 / 67%)")
    })

    $('.btn-close').click(()=> {
        $('#modalSignin').css("display", "none")
    })
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function login() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");
    const errorMessage = document.getElementById("errorMessage");
    const Account = require('../models/account')

    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if email format is valid
    if (!validateEmail(email)) {
        // Display an error message and change button style
        errorMessage.textContent = "Invalid email format. Please enter a valid email address.";
        loginButton.classList.add("error-button");
        return;
    }

    // Reset error message and button style
    errorMessage.textContent = "";
    loginButton.classList.remove("error-button");

    // Replace this with your authentication logic
    if (email === "example@email.com" && password === "password123") {
        // Successful login, you can redirect or perform other actions here
        // alert("Login successful!");
        window.location.href = "../views/map.html"
        
    } else {
        // Failed login attempt, show an alert
        alert("Invalid email or password. Please try again or sign up.");
    }
}

// Add a click event listener to the button
document.getElementById("loginButton").addEventListener("click", login);


const mongoose = require('mongoose');

// Define the schema for the "accounts" collection
const accountSchema = new mongoose.Schema({
  display_name: String,
  user_name: String,
  password: String,
  groups: [String],
  posts: Number,
  events: [String],
  future_revenges: [String],
  profile_picture: String,
});

// Create a model for the "accounts" collection
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;