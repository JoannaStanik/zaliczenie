function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const loginForm = document.querySelector('#login form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Nazwa użytkownika i hasło są wymagane.');
        return;
    }


    alert('Logowanie udane!');
});

const registerForm = document.querySelector('#register form');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = registerForm.querySelector('#new-username').value;
    const newEmail = registerForm.querySelector('#new-email').value;
    const newPassword = registerForm.querySelector('#new-password').value;

    if (newUsername.trim() === '' || newEmail.trim() === '' || newPassword.trim() === '') {
        alert('Wszystkie pola są wymagane.');
        return;
    }

    if (!isValidEmail(newEmail)) {
        alert('Podany adres email jest niepoprawny.');
        return;
    }

    if (newPassword.length < 8) {
        alert('Hasło musi mieć co najmniej 8 znaków.');
        return;
    }


    alert('Rejestracja udana!');
});



function validateLoginForm() {
    var errors = [];
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username.trim() === "") {
        errors.push("Nazwa użytkownika jest wymagana.");
    }
    if (password.trim() === "") {
        errors.push("Hasło jest wymagane.");
    }

    if (errors.length > 0) {
        displayErrors(errors, "login-errors");
        return false;
    }
    return true;
}

function validateRegisterForm() {
    var newUsername = document.getElementById("new-username").value;
    var newEmail = document.getElementById("new-email").value;
    var newPassword = document.getElementById("new-password").value;
    var errorContainer = document.getElementById("register-errors");
    var errorMessage = "";

    if (newUsername.trim() === "") {
        errorMessage += "Nazwa użytkownika jest wymagana.<br>";
    }
    if (newEmail.trim() === "") {
        errorMessage += "Adres email jest wymagany.<br>";
    }
    if (newPassword.trim() === "") {
        errorMessage += "Hasło jest wymagane.<br>";
    } else if (newPassword.length < 8) {
        errorMessage += "Hasło musi mieć co najmniej 8 znaków.<br>";
    }

    if (errorMessage !== "") {
        errorContainer.innerHTML = errorMessage;
        return false;
    }
    return true;
}


document.addEventListener("DOMContentLoaded", function() {
    function signUpForClass(className) {
        alert('Zapisałeś się na zajęcia: ' + className);
    }

    const signUpButtons = document.querySelectorAll('.sign-up-btn');

    signUpButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const className = this.parentNode.textContent.trim();

            signUpForClass(className);
        });
    });
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
