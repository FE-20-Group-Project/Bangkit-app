const USER_KEY = 'user-session';

const checkSession = () => {

    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', ()=> {
        logout();
    });
    const userSession = sessionStorage.getItem(USER_KEY);
        if(!userSession) {
            logoutButton.style.display = "none";
            return true;
            
        }else {
            const textBanner = document.getElementById('text-homepage');
            const buttonHome = document.getElementById('button-homepage');
            const userName = JSON.parse(userSession);
            
            if( textBanner || buttonHome ){
                buttonHome.setAttribute('href', 'view/lowongan-pekerjaan.html');
                buttonHome.innerText = "Lihat informasi Loker disini !";
                textBanner.innerHTML = `Selamat Datang, <span class="text-warning">${userName.name}</span>`;
            }
            loginButton.style.display = "none";
            logoutButton.style.display = "block";

            return false;
        }

}


const securityAutenticate = () => {

    if(!sessionStorage.getItem(USER_KEY)) {
            window.location = "../../view/autentikasi/login.html";
    }

}

const logout = () => {
    Swal.fire({
		title: `Logout`,
		text: `Apakah Anda Yakin?`,
		icon: "question",
        showCancelButton: true,
        confirmButtonColor: '#DC3545',
        cancelButtonColor: '#212529',
		confirmButtonText: `Yakin`,
		cancelButtonText: `Tidak`,
		showLoaderOnConfirm: true,
		preConfirm: () => {
            sessionStorage.removeItem(USER_KEY);
		},
	}).then((result) => {
		if (result.isConfirmed) {
			window.location = "../../view/autentikasi/login.html";
		}
	});
}

export { checkSession, logout, securityAutenticate };
