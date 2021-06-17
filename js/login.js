var username = 'YeikovSama';
var password = '123456';
$("#boton").click(function () { 
    var user = $("#username").val();
    var pass = $("#password").val();
    if(user == username && pass==password){
        sessionStorage.setItem('user',user);
        window.location = 'index.html';        
    }else{
            window.location = 'login.html';
    }

});