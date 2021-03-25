function login(){
    let username = document.getElementById('username');
    let pass = document.getElementById('pwd');

    if(username.value == 'admin' && pass.value == 'admin'){
        alert("Đăng nhập thành công!!");
    } else {        
        alert("Đăng nhập thất bại!!");
    }
}