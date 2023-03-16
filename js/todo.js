const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;  // const li = event.composedPath()[1]; li.remove();
    li.remove(); 
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //object의 text.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //id로 각각의 li item을 구별하기 위함.
    };
    toDos.push(newTodoObj); //toDo를 submit할 때마다 newToDo(새로운 입력)를 push함
    paintToDo(newTodoObj); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;  //toDos가 빈값으로 시작하므로, 이 코드를 넣음으로써 array에 이전의 toDo들을 넣게 함.
    parsedToDos.forEach(paintToDo); //forEach함수가 parsedToDos배열의 요소마다 paintToDo를 실행 
}