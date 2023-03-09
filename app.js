const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){ 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username); //username is coming from the loginInput.value
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`   
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//*browser first step - Check localStorage 
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
} else{
    //show the greetings
    paintGreeting(savedUsername);  //username is coming from the local storage
}
