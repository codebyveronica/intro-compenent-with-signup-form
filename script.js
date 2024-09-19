const btn = document.querySelector("button");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

btn.addEventListener("click", (e) => {
   e.preventDefault();

   checkInputs();
});

function checkInputs() {
    const fNameValue = firstName.value.trim();
    const lNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fNameValue === '') {
        setErrorFor(firstName, "First name cannot be empty")
    } else {
        setSucess(firstName);
    }

    if (lNameValue === '') {
        setErrorFor(lastName, "Last name cannot be empty");
    } else {
        setSucess(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
    } else {
        setSucess(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSucess(password);
    }
}

function setErrorFor(input, message) {
    const field = input.parentElement;
    const error = field.querySelector("span");

    error.innerText = message;

    field.className = "field error";
}

function setSucess(input) {
    const field = input.parentElement;

    field.className = "field";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}