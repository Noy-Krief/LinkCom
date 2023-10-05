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