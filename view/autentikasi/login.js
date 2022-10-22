

let email = document.getElementById('email');
let password = document.getElementById('password');
let login = document.getElementById('login');


fetch("https://6353c131e64783fa82781ee9.mockapi.io/login")
    .then(response => response.json())
    .then((persons) => {

        // console.log(persons);
        login.addEventListener('click', () => {
            let email = inputEmail.value;
            let password = inputPassword.value;

            if (email !== "" && password !== "") {
                for (let i = 0; i < persons.length; i++) {
                    // login berhasil
                    if(email == persons[i].email && password == persons[i].password) {
                        return loginSuccess(persons[i].name)
                    }
                }

            } else {
                return alert('Lengkapi email dan password kamu')
            }
        });

    })
    .catch((err) => {
        console.error(err);
    });
