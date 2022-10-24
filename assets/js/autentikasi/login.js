import { API, isStorageExist } from "../env.js";

const USER_KEY = 'user-session';

document.addEventListener('DOMContentLoaded', () => {

    const formLogin = document.getElementById('form-login');
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const userSession = generateObjectUser(email.value, password.value);

        login(userSession, event.target);
        
    });

});


const login = async (user, form) => {

    const checkData = await fetch(API + 'users');
    const data = await checkData.json();
    const findName = data.find( index => index.email == user.email );

    if(findName) {
        user.name = findName.name;
    }

    const { name, email, password } = user;
    const findData = data.findIndex( index => index.email == email && index.password == password );

    if(findData !== -1) {
        if(isStorageExist()) {
            sessionStorage.setItem(USER_KEY, JSON.stringify(user));
            window.location = '../../index.html';
        }
    }else {
        form.reset();
        return Swal.fire({
            icon: 'error',
            title: 'Akun tidak ditemukan',
            text: 'Harap periksa kembali email dan password anda!',
            footer: '<a href="../../view/autentikasi/register.html">Silahkan daftar disini, jika belum mempunyai akun!</a>'
        });
    }
}


const generateObjectUser = (email, password) => {
    return {
        email,
        password
    }
}
