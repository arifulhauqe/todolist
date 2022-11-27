//query selector
const toDo = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-add");
/* const toDoList = document.querySelector(".todo-list"); */

//event listner
toDoBtn.addEventListener('click', addTodo);

//function
function addTodo(event){
	event.preventDefault();
	const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  const newToDo = document.createElement("li");
  newToDo.innerText ="hello";
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);
}