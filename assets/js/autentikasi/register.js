import { API } from "../env.js";
import { getCurrentDate } from "../data.js"

document.addEventListener('DOMContentLoaded', () => {

    const formRegister = document.getElementById('form-register');

    formRegister.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const name = document.getElementById('name');
        const address = document.getElementById('address');
        const password = document.getElementById('password');
        const confirmationPassword = document.getElementById('confirmation-password');

        if(checkPassword(password.value) && checkPassword(confirmationPassword.value)) {
            if(password.value === confirmationPassword.value) {
                const generateIdUser = () => +new Date();
                const createdAt = getCurrentDate();
                const avatar = "https://cdn-icons-png.flaticon.com/512/456/456212.png";
                const formulir = getFormulirObject(generateIdUser(), createdAt, avatar, username.value, email.value, name.value, address.value, password.value, false);
                
                register(formulir, event.target);

            }
        }else {
            password.classList.add('is-invalid');
            confirmationPassword.classList.add('is-invalid');
        }

    })

});


const register = async (formulir, form) => { 

    const { email, username } = formulir;
    const checkData = await fetch(API + 'users');
    const data = await checkData.json();
    let findEmail = data.findIndex( index => index.email == email );
    let findUsername = data.findIndex( index => index.username == username );
    
    if ( findEmail !== -1 ) {
        form.reset();
       return Swal.fire({
        icon: 'error',
        title: 'Maaf...',
        text: 'Email sudah terdaftar, silahkan gunakan email lain!',
      });
    }else if( findUsername !== -1 ) {
        form.reset();
        return Swal.fire({
            icon: 'error',
            title: 'Maaf...',
            text: 'Username sudah terdaftar, silahkan gunakan username lain!',
          });
    }
    else {
        die();
        fetch(API + 'users', {
            method : 'POST',
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(formulir)
        })

        return Swal.fire({
            icon: 'success',
            title: 'Akun berhasil terdaftar!',
            footer: '<a href="../../view/autentikasi/login.html">Silahkan login disini</a>'
          });

    }

    

}



const getFormulirObject = (id, createdAt, avatar, username, email, name, address, password, isCompany) => {
    return {
      id,
      createdAt,
      avatar,
      username,
      email,
      name,
      address,
      password,
      isCompany
    }
}


const checkPassword = input => {
    const passw = /^[a-zA-Z]\w{3,14}$/;
    if(input.match(passw)) {
        return true;
    }else {
        return false;
    }
};
