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
const postMessage = document.querySelector(".post-message")
const posts = document.querySelector(".posts")
const postList = document.querySelector(".post-list")
const commentSection = document.querySelector(".comment")
const commentText = document.querySelector(".comment-text")
const commentButton = document.querySelector(".comment-submit-button")
const commentList = document.querySelector(".comment-list")
const myPostsButton = document.querySelector(".posts-button")
const profileButton = document.querySelector(".profile-button")
const profileSection = document.querySelector(".profile")
const updateForm = document.querySelector(".update")
const updateSubmitButton = document.querySelector(".submit-update")
const updateFirstname = document.querySelector(".update-firstname")
const updateLastname = document.querySelector(".update-lastname")
const updateUsername = document.querySelector(".update-username")
const updatePassword = document.querySelector(".update-password")
const updatePasswordConfirm = document.querySelector(".update-password-confirm")
const updateMessage = document.querySelector(".update-message")
const myPosts = document.querySelector(".my-posts")
const myPostsList = document.querySelector(".my-posts-list")
const updatePostForm = document.querySelector(".update-post")
const updatePostInput = document.querySelector(".update-posttext")
const updatePostSubmitButton = document.querySelector(".submit-update-post")

localStorage.clear();




registerForm.style.display = 'none';
loginForm.style.display = 'none';
postBlogPost.style.display = 'none';
commentSection.style.display = 'none';
myPosts.style.display = 'none';
updateForm.style.display = 'none';
updatePostForm.style.display = 'none';

loginButton.onclick = event => {

    ClearAllForms();
    loginForm.style.display = 'grid';
}

registerButton.onclick = event => {
    ClearAllForms();
    registerForm.style.display = 'grid';
}

homeButton.onclick = event => {
    ClearAllForms();
    posts.style.display = 'block';
    GetAllPosts();
}

postButton.onclick = event => {
    ClearAllForms();
    postBlogPost.style.display = 'grid';

}

profileButton.onclick = event => {
    ClearAllForms();
    GetCurrentUser();
    profileSection.style.display = 'block';
}

myPostsButton.onclick = event => {
    ClearAllForms();
    GetMyPosts();
    myPosts.style.display = 'block';
}



async function GetMyPosts() {

    myPostsList.innerHTML = '';
    let userId = localStorage.getItem('userId');
    console.log(userId);

    fetch('http://localhost:4000/blogposts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            data.forEach(element => {
                if (element.userId == userId) {
                    AddToMyPostList(element);
                }
            });
        })
        .catch((error) => {
            console.error('Error', error);
        });
}

function AddToMyPostList(data) {


    let postText = document.createElement('h2');
    postText.textContent = data.blogText;
    let username = document.createElement('h3');
    username.textContent = 'User: ' + data.username;
    let likesCounter = document.createElement('h4');
    likesCounter.textContent = data.likes;
    likes = data.likes;
    let likesEmoji = document.createElement('div');
    likesEmoji.textContent = '👍';
    let timePosted = document.createElement('h5');
    const date = formatDate(data.timeOfPost);

    function formatDate(date) {
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        let year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }
    timePosted.textContent = 'Posted: ' + date;


    let liElement = document.createElement('li');
    liElement.append(postText);
    liElement.append(username);
    liElement.append(timePosted);
    liElement.append(likesEmoji);
    liElement.append(likesCounter);

    myPostsList.append(liElement);

}
updateForm.onsubmit = event => {
    event.preventDefault();
    if (updatePassword.value == updatePasswordConfirm.value) {
        const data = {
            "firstName": updateFirstname.value,
            "lastName": updateLastname.value,
            "username": updateUsername.value,
            "password": updatePassword.value
        };

        fetch('http://localhost:4000/users/updateCurrent', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
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
        updateMessage.textContent = 'Update successful!'
        updateMessage.hidden = false;
        ClearAllUpdateInputs();

    } else {
        registerMessage.value = 'Passwords did not match!'
        registerMessage.hidden = false;
    }
}

function ClearAllRegisterInputs() {
    registerFirstname.value = '';
    registerLastname.value = '';
    registerUsername.value = '';
    registerPassword.value = '';
    registerPasswordConfirm.value = '';
}

function GetCurrentUser() {

    profileSection.innerHTML = '';

    let profileFirstname = document.createElement('p');
    let profileLastname = document.createElement('p');
    let profileUsername = document.createElement('p');

    let user;

    fetch('http://localhost:4000/users/getCurrentUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            user = data;
            profileFirstname.textContent = 'Firstname: ' + data.firstName;
            profileLastname.textContent = 'Lastname: ' + data.lastName;
            profileUsername.textContent = 'Username: ' + data.username;
        })
        .catch((error) => {
            console.error('Error', error);
        });

    let updateProfileButton = document.createElement("button");
    updateProfileButton.type = 'button';
    updateProfileButton.textContent = 'Update profile';

    let deleteProfileButton = document.createElement('button');
    deleteProfileButton.type = 'button';
    deleteProfileButton.textContent = 'Delete profile'

    profileSection.append(profileFirstname);
    profileSection.append(profileLastname);
    profileSection.append(profileUsername);
    profileSection.append(updateProfileButton);
    profileSection.append(deleteProfileButton);


    updateProfileButton.onclick = event => {
        ClearAllForms();
        updateForm.style.display = 'block';

    }

    deleteProfileButton.onclick = event => {
        fetch('http://localhost:4000/users/' + user.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success', data);
            })
            .catch((error) => {
                console.error('Error', error);
            });
    }
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
                registerMessage.textContent = 'Registration successful!'
            })
            .catch((error) => {
                registerMessage.textContent = 'Username already exists!'
            });

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
                "Authorization": localStorage.getItem('token'),
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

    postMessage.textContent = 'Posted!'
    postMessage.hidden = false;
}

function ClearAllUpdateInputs() {
    updateFirstname.value = '';
    updateLastname.value = '';
    updateUsername.value = '';
    updatePassword.value = '';
    updatePasswordConfirm.value = '';
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
            localStorage.setItem('token', data.token)
            localStorage.setItem('userId', data.id)
            loginMessage.textContent = 'Login successful';
            loginButton.hidden = true;
            registerButton.hidden = true;
            myPostsButton.hidden = false;
            profileButton.hidden = false;
        })
        .catch((error) => {
            loginMessage.textContent = 'Wrong username or password!'
        });










    loginMessage.hidden = false;

}

function ClearAllForms() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    postBlogPost.style.display = 'none';
    posts.style.display = 'none';
    commentSection.style.display = 'none';
    myPosts.style.display = 'none';
    updateForm.style.display = 'none';
    profileSection.style.display = 'none';
    updatePostForm.style.display = 'none';
}

async function GetAllPosts() {




    postList.innerHTML = '';
    fetch('http://localhost:4000/blogposts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
            data.forEach(element => {
                AddToPostList(element);
            });
        })
        .catch((error) => {
            console.error('Error', error);
        });



}

function AddToPostList(data) {
    let likes;
    let id = data.id;




    let postText = document.createElement('h2');
    postText.textContent = data.blogText;
    let username = document.createElement('h3');
    username.textContent = 'User: ' + data.username;
    let likesCounter = document.createElement('h4');
    likesCounter.textContent = data.likes;
    likes = data.likes;
    let likesButton = document.createElement('button');
    likesButton.type = 'button';
    likesButton.textContent = '👍';
    let timePosted = document.createElement('h5');
    const date = formatDate(data.timeOfPost);



    function formatDate(date) {
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        let year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }
    timePosted.textContent = 'Posted: ' + date;
    let commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.textContent = 'Comment 💬'


    let commentList = document.createElement('ul');

    GetCommentsForPost(id);



    let liElement = document.createElement('li');
    liElement.append(postText);
    liElement.append(username);
    liElement.append(timePosted);
    liElement.append(commentButton);
    liElement.append(likesButton);
    liElement.append(likesCounter);
    liElement.append(commentList);

    let userId = localStorage.getItem('userId');

    if (data.userId == userId) {
        let deletePostButton = document.createElement('button');
        deletePostButton.type = 'button';
        deletePostButton.textContent = 'Delete post';
        liElement.append(deletePostButton);

        let updatePostButton = document.createElement('button');
        updatePostButton.type = 'button';
        updatePostButton.textContent = 'Update post';
        liElement.append(updatePostButton);

        deletePostButton.onclick = event => {
            fetch('http://localhost:4000/blogposts/' + data.id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('token')
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success', data);
                })
                .catch((error) => {
                    console.error('Error', error);
                });
        }

        updatePostButton.onclick = event => {
            ClearAllForms();
            updatePostForm.style.display = 'block';

            updatePostInput.value += data.blogText;

            updatePostForm.onsubmit = event => {
                event.preventDefault();
                const updatedData = {
                    'blogText': updatePostInput.value
                }

                fetch('http://localhost:4000/blogposts/' + data.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem('token')
                        },
                        body: JSON.stringify(updatedData)
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success', data);
                    })
                    .catch((error) => {
                        console.error('Error', error);
                    });
            }
        }
    }







    likesButton.onclick = event => {
        likesCounter.textContent = likes += 1;
        likesButton.disabled = true;

        const data = {
            "id": id
        };

        fetch('http://localhost:4000/blogposts/like', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.getItem('token'),
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

    async function GetCommentsForPost(id) {


        fetch('http://localhost:4000/comments/postsComments/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success', data);
                data.forEach(element => {
                    AddCommentsToPostList(element);
                });
            })
            .catch((error) => {
                console.error('Error', error);
            });



    }



    function AddCommentsToPostList(data) {



        let commentText = document.createElement('p');
        commentText.textContent = data.commentText;
        let username = document.createElement('p');
        username.textContent = data.username;

        let commentLi = document.createElement('li');

        commentLi.appendChild(username);
        commentLi.appendChild(commentText);



        commentList.appendChild(commentLi);

    }

    commentButton.onclick = event => {
        ClearAllForms();
        commentSection.style.display = 'block';

        commentSection.onsubmit = event => {
            event.preventDefault();
            const data = {
                "commentText": commentText.value
            };

            fetch('http://localhost:4000/comments/' + id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": localStorage.getItem('token'),
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success', data);
                    AddCommentsToPostList(data);
                })
                .catch((error) => {
                    console.error('Error', error);
                });
        }




    }
    postList.append(liElement);

}