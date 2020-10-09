const formEL = document.getElementById('form');
const inputEL = document.getElementById('input');
const todosEL = document.getElementById('todos')

formEL.addEventListener('submit' , (e) => {
    e.preventDefault();
    const todoText = inputEL.value;
    if (todoText){
        todoEl = document.createElement('li');
        todoEl.innerText = todoText;
        todosEL.appendChild(todoEl);
        inputEL.value ="";
    }
})