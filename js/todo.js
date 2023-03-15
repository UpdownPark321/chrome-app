const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // const li = event.composedPath()[1]; li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li는 span이라는 자식을 갖게됨
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새 변수에 복사
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);