let username = document.getElementById('username');
let email = document.getElementById('email-daftar');
let nama = document.getElementById('nama');
let alamat = document.getElementById('alamat')
let password = document.getElementById('password-daftar');
let password1 = document.getElementById('password-daftar1');  
let register = document.getElementById("register")

async function daftar(data) {
    try {
        let result = await fetch("https://6353c131e64783fa82781ee9.mockapi.io/user", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {},
            
        })
        console.log("Anda Berhasil Registrasi", result);
    } catch (error) {
        console.log("gagal register");
    }
}

register.addEventListener("click", (event) => {
    
    event.preventDefault()

    let user_regis = {
        username : username.value,
        email : email-daftar.value,
        password : password.value 
    };
    daftar(user_regis)
})