function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function login() {
    const email = $('#email').value;
    const password = $('#password').value;

    // Check if email format is valid
    if (!validateEmail(email)) {
        // Display an error message and change button style
        errorMessage.textContent = "Invalid email format. Please enter a valid email address.";
        $('#loginButton').addClass("error-button");
        return;
    }

    // Reset error message and button style
    $('#errorMessage').text("");
    $('#loginButton').removeClass("error-button");

    // Replace this with your authentication logic
    if (email === "example@email.com" && password === "password123") {
        // Successful login, you can redirect or perform other actions here
        alert("Login successful!");
        //window.location.href = "../views/map.html"
        
    } else {
        // Failed login attempt, show an alert
        alert("Invalid email or password. Please try again or sign up.");
    }
}


$(document).ready(function(){
    // Add a click event listener to the button
    $('#loginButton').click = login;

    // open signup form when pressing on sign up in login page
    $('.signup').click(()=> {
        $('#modalSignin').css("display", "block")
        $('#modalSignin').css("background-color", "rgb(217 214 214 / 67%)")
    })

    // close signup form when pressing on X
    $('.btn-close').click(()=> {
        $('#modalSignin').css("display", "none")
    })
});

