//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filter_option = document.querySelector('.filter-todo');


//event listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filter_option.addEventListener("click", filterTodo);


//functions
function addToDo(event){
    //prevent default form submitting
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);

    //complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    toDoDiv.appendChild(completeButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);

    //append todolist
    todoList.appendChild(toDoDiv);

    //clear Todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    //console.log(e.target);
    const item = e.target;

    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //check todo
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


//filter function
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                console.log('all');
                break;
                
            case "completed":
                console.log('completed');
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
        }
    });
}