const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
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
    }
}

function setErrorFor(input, message) {
    const field = input.parentElement;
    const error = field.querySelector("span");

    error.innerText = message;

    field.className = "field error";
}