/* Submit button events */

const SubmitBtn = document.getElementById('submitBTN').addEventListener("click", checkValid);

function checkValid() {
    const inputs = document.querySelectorAll('input');
    let validCount = 0;
    inputs.forEach((input) => {
        if (input.checkValidity()) {
            validCount++;
            console.log(validCount);
        }
    })
    if (validCount == 6) {
        const logo = document.getElementById('logo');
        logo.style.transform = 'translate(300px, 0px)';
    }
}

var form = document.getElementById('formId');

function submitForm(e) {
    e.preventDefault();
}

form.addEventListener('submit', submitForm);


/* Password checker */

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpass");

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);

function checkPassword() {
    console.log('event fired');

    if (password.value != confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        password.classList.remove('match');
        confirmPassword.classList.remove('match');
    } else {
        password.classList.add('match');
        confirmPassword.classList.add('match');
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    }
}




