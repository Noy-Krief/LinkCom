
$(document).ready(function(){
    $('#edit-profile').click(() => {
        //change the page to be editable with inputs for display name

        // when pressing save, perform a post to /profile to update the account
        
        // fetch('/profile', { method: 'POST',
        //                     headers: {'Content-Type': 'application/json'},
        //                     body: JSON.stringify({email: email, password: password}),})
        //                     .then((response) => response.json())
        //                     .then((data) => {
        //                         if (data.success) {
        //                             // Authentication was successful
        //                             window.location.href = '/posts';
        //                         } else {
        //                             // Authentication failed
        //                             alert(data.message);
        //                         }
        //                     })
        //                     .catch((error) => {
        //                         // Handle any errors that occur during the request
        //                         console.error('Error:', error);
        //                     });
    });
});