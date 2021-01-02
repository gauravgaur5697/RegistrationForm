var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var cpassword = document.getElementById('cpassword');
var LoginForm = document.getElementById('form-heading');

email.onload('input', function(e){
    console.log(e.target.value);
});