function getcookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return JSON.parse(match[2]);
}

$(document).ready(function(){
    var user_email = getcookie('user_email');
    console.log(user_email);
    $('#profile-picture').attr('src', '/images/' + user_email + '.jpg')

});