// Get DOM elements
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let click = document.getElementById('click');
let acc = {};

click.onclick = function () {
    const pushEmail = email.value;         
    const pushPass = password.value;     
    const pushPassword = confirmPassword.value; 
    if (pushPass !== pushPassword) {
        alert("Mật khẩu không trùng khớp!");
        return;
    } else if(pushEmail === ""){
        alert("Email hiện đang trống");
        return;
    }else {
        acc = {
            email: pushEmail,
            password: pushPass,
        };
        localStorage.setItem('account', JSON.stringify(acc));
        const saved = localStorage.getItem('account');
    }
};