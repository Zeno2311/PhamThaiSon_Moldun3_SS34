let email = document.getElementById('email');
let password = document.getElementById('password');
let loginButton = document.getElementById('login');

loginButton.onclick = function () {
    const inputEmail = email.value.trim();
    const inputPassword = password.value;
    if (inputEmail === "") {
        alert("Email không được để trống!");
        return;
    }
    const storedAccount = localStorage.getItem('account');
    if (!storedAccount) {
        alert("Không thể đăng nhập!");
        return;
    }
    const account = JSON.parse(storedAccount);
    if (inputEmail !== account.email || inputPassword !== account.password) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }
    alert("Đăng nhập thành công!");
    window.location.href = "home_ss34.html"; 
};