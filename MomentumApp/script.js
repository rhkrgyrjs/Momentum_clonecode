// login form div
const loginFormDiv = document.getElementById("login-form");
const loginInput = loginFormDiv.querySelector("input");
const loginButton = loginFormDiv.querySelector("button");

loginButton.addEventListener("click", handleLoginButtonClick);

function handleLoginButtonClick()
{
    console.log("login button clicked, username is " + loginInput.value);
}