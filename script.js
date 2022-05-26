const loginButton = document.querySelector(".login-button");
const registerButton = document.querySelector(".register-button");
const loginForm = document.querySelector(".login");
const loginUsername = document.querySelector(".login-username")
const loginPassword = document.querySelector(".login-password")
const registerForm = document.querySelector(".register")
const registerSubmitButton = document.querySelector(".submit-registration")
const registerFirstname = document.querySelector(".register-firstname")
const registerLastname = document.querySelector(".register-lastname")
const registerUsername = document.querySelector(".register-username")
const registerPassword = document.querySelector(".register-password")
const registerPasswordConfirm = document.querySelector(".register-password-confirm")
const registerMessage = document.querySelector(".register-message")
const loginMessage = document.querySelector(".login-message")
const loginSubmitButton = document.querySelector(".submit-login")
const postBlogPost = document.querySelector(".blogpost")
const blogText = document.querySelector(".blogtext")
const homeButton = document.querySelector(".home-button")
const postButton = document.querySelector(".post-button")


registerForm.style.display = 'none';
loginForm.style.display = 'none';
postBlogPost.style.display = 'none'

loginButton.onclick = event => {

    loginForm.style.display = 'grid';
    registerForm.style.display = 'none';

}

registerButton.onclick = event => {

    registerForm.style.display = 'grid';
    loginForm.style.display = 'none';
}

homeButton.onclick = event => {
    ClearAllForms();
}

postButton.onclick = event => {
    ClearAllForms();
    postBlogPost.style.display = 'grid';
}


registerForm.onsubmit = event => {
    event.preventDefault();
    if (registerPassword.value == registerPasswordConfirm.value) {
        const data = {
            "firstName": registerFirstname.value,
            "lastName": registerLastname.value,
            "username": registerUsername.value,
            "password": registerPassword.value
        };

        fetch('http://localhost:4000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success', data);
            })
            .catch((error) => {
                console.error('Error', error);
            });
        registerMessage.textContent = 'Registration successful!'
        registerMessage.hidden = false;
        ClearAllRegisterInputs();

    } else {
        registerMessage.value = 'Passwords did not match!'
        registerMessage.hidden = false;
    }
}

loginForm.onsubmit = event => {
    event.preventDefault();

    Login();

}

postBlogPost.onsubmit = event => {
    event.preventDefault();



    const data = {
        "blogText": blogText.value
    };

    fetch('http://localhost:4000/blogposts/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.error('Error', error);
        });


}

function ClearAllRegisterInputs() {
    registerFirstname.value = '';
    registerLastname.value = '';
    registerUsername.value = '';
    registerPassword.value = '';
    registerPasswordConfirm.value = '';
}

async function Login() {
    const data = {
        "username": loginUsername.value,
        "password": loginPassword.value
    };

    fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            localStorage.setItem('token', data.token.value)
        })
        .catch((error) => {
            console.error('Error', error);
        });






    loginButton.hidden = true;
    registerButton.hidden = true;


    loginMessage.textContent = 'Login successful';
    loginMessage.hidden = false;

}

function ClearAllForms() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    postBlogPost.style.display = 'none';
}