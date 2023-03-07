const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("button");

function loginBtnClick(){
    const username = loginInput.value;
   if(username === ""){
    alert("Write your name");
   }else if(username.length > 15){
    alert("your name is too long")
   }
}

loginBtn.addEventListener("click", loginBtnClick);