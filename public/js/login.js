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
            // $.ajax({
            //     type: 'POST',
            //     url: '/login', // Replace with your authentication endpoint
            //     data: {
            //     email: email,
            //     password: password,
            //     // Include any necessary data for authentication
            //     },
            //     success: function(data) {
            //         // Handle successful authentication here
            //         if (data.authenticated) {
            //           // Redirect to the posts page upon successful authentication
            //           window.location.href = '/posts';
            //         } else {
            //           // Handle authentication failure, e.g., show an error message
            //           alert('Authentication failed');
            //         }
            //       },
            //       error: function(error) {
            //         // Handle AJAX request error here
            //         console.error('Authentication request failed', error);
            //       },
            //     });
            fetch('/login', { method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({email: email, password: password}),})
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.success) {
                                    // Authentication was successful
                                    window.location.href = '/posts';
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