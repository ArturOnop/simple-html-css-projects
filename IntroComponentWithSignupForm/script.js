const form = document.getElementById('form');
const firstname = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    const nameVal = firstname.value;
    const lastNameVal = lastName.value;
    const emailVal = email.value;
    const passwordVal = password.value;


    if (nameVal == "") {
        firstname.classList.add('error');
        email.classList.remove('error');
        password.classList.remove('error');
        lastName.classList.remove('error');
    }
    else if (lastNameVal == "") {
        lastName.classList.add('error');
        email.classList.remove('error');
        password.classList.remove('error');
        firstname.classList.remove('error');
    }
    else if (!validateEmail(emailVal)) {
        email.classList.add('error');
        lastName.classList.remove('error');
        password.classList.remove('error');
        firstname.classList.remove('error');
    }
    else if (passwordVal == "") {
        password.classList.add('error');
        lastName.classList.remove('error');
        email.classList.remove('error');
        firstname.classList.remove('error');
    }
    else {
        email.classList.remove('error');
        password.classList.remove('error');
        lastName.classList.remove('error');
        firstname.classList.remove('error');
        document.body.innerHTML = `Thank you!`;
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}