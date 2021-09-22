console.log('Welcome to Banking World!');

function clickLoginButton() {
    // alert('Login button has been clicked!');
    var user_name_txtbox = document.getElementById('username');
    var password_txtbox = document.getElementById('password');

    // Checking if blank user or pwd
    if(user_name_txtbox.value =='' || password_txtbox.value == ''){
        alert('All fields are required.')
    }

    user_name_txtbox.classList.remove('login-error')
    password_txtbox.classList.remove('login-error')
    if(user_name_txtbox.value ==''){
        user_name_txtbox.classList.add('login-error')
    }
    

    if(password_txtbox.value ==''){
        password_txtbox.classList.add('login-error')
    }


}