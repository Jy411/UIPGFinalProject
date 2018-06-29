

function login(email, password) {
    var emailCheck = 'jinyungisnot@gmail.com';
    var passwordCheck= '1234';

    if (email === emailCheck && password === passwordCheck){
        alert("Login Successfully");
        window.location.href = "#close";
        document.getElementById('headerLoginButton').innerHTML =
            'jinyungisnot@gmail.com';
        var removeSignUp = document.getElementById('headerSignUpButton');
        removeSignUp.parentNode.removeChild(removeSignUp);
    }
}