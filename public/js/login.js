$(document).ready(function(){
    // Add a click event listener to the button
    $('#loginButton').click(() => {
        const email = $('#signinEmail')[0].value;
        const password = $('#signinPassword')[0].value;

        if (!email || !password) {
            alert("please fill in the relevant fields")
        } else {
            console.log("sending data...");
        // Send a POST request to the server for authentication
            fetch('/login', { method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({email: email, password: password}),})
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.success) {
                                    // Authentication was successful
                                    window.location.href = '/posts'; // Redirect to the dashboard page, for example
                                } else {
                                    // Authentication failed
                                    alert(data.message);
                                }
                            })
                            .catch((error) => {
                                // Handle any errors that occur during the request
                                console.error('Error:', error);
                            });
        }
    });

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