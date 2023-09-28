
$(document).ready(function(){
    $('.signup').click(()=> {
        $('#modalSignin').css("display", "block")
        $('#modalSignin').css("background-color", "rgb(217 214 214 / 67%)")
    })

    $('.btn-close').click(()=> {
        $('#modalSignin').css("display", "none")
    })
});

