$(document).ready(function(){
    let clicked = false;

    $('.search-tool').click(()=> {
        if (!clicked) {
            $('.search-box').css("display", "block");
        } else {
            $('.search-box').css("display", "none");
        }
        
    });
});