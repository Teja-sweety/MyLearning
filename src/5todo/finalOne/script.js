const formEL = document.getElementById('form');
const inputEL = document.getElementById('input');
const todosEL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach(todo =>{
        addTodo(todo);
    })
}

formEL.addEventListener('submit' , (e) => {
    e.preventDefault();
    addTodo();
})

function addTodo(todo){
    let todoText = inputEL.value;
    if(todo){
        todoText = todo.text;
    }
    if (todoText) {
        todoEl = document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLs();
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLs();
        })
        todosEL.appendChild(todoEl);

        inputEL.value = "";
        updateLs();
    }

}
function updateLs(){
    const todosElement = document.querySelectorAll('li');
    const todos =[];
    todosElement.forEach((element) =>{
        todos.push({
            text: element.innerText,
            completed: element.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))

}