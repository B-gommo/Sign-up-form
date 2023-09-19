/* Submit button events and reset button creation*/

const submitBtn = document.getElementById('submitBTN');

submitBtn.addEventListener("click", checkValid);

function checkValid() {
    const inputs = document.querySelectorAll('input');
    let validCount = 0;
    inputs.forEach((input) => {
        if (input.checkValidity()) {
            validCount++;
        }
    })
    if (validCount == 6) {
        const logo = document.getElementById('logo');
        logo.style.transform = 'translate(300px, 0px)';
        const resetBtn = document.createElement("button");
        resetBtn.setAttribute('type', 'reset');
        resetBtn.innerText = "Reset / Sail it home!";
        resetBtn.style.marginLeft = "1.5rem";
        submitBtn.insertAdjacentElement('afterend', resetBtn);
        resetBtn.addEventListener('click', sailHome);

    }
}

function sailHome() {
    const logo = document.getElementById('logo');
    logo.style.transform = 'translate(0px, 0px)';
    const checks = document.querySelectorAll('.checkMark');
    checks.forEach((check) => {
        check.remove();
    })
    setTimeout(() => {
        this.remove();
      }, 1);
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

/* validation check mark */

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
    if(input.checkValidity()) {
        if(input.nextSibling) {
            input.nextSibling.remove();
        }
        const checkMark = document.createElement('span');
        checkMark.classList.add("checkMark");
        checkMark.innerText = "✓";
        checkMark.style = "color:green; position:absolute; right:0px; top:17px;"
        input.insertAdjacentElement('afterend', checkMark);
        console.log("we got something");
    }else {
        console.log("still something")
        if(input.nextSibling) {
            input.nextSibling.remove();
        }
    }})
})


