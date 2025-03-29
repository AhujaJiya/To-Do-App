const addButton = document.querySelector('#add-button');

let todoSaved = localStorage.getItem('todo');

let toDoList = JSON.parse(todoSaved) || [];

displayToDos();

function appendToDo() {

    let inputToDo = document.querySelector('#to-do-input');
    let dateToDo = document.querySelector('#date-input');

    let toDoItem = inputToDo.value;
    let todoDate = dateToDo.value;

    toDoList.push({ item: toDoItem, due: todoDate });
    inputToDo.value = '';
    dateToDo.value = '';

    displayToDos();

}

addButton.addEventListener("click", appendToDo);

function displayToDos() {
    let containerItem = document.querySelector('.todo-container');

    let newHTML = '';

    for (let i = 0; i < toDoList.length; i++) {
        // let item = toDoList[i].item;
        // let dueDate = toDoList[i].due;

        let { item, due } = toDoList[i];

        newHTML += `
        <span class="field">${item}</span>
        <span class="field">${due}</span>
        <button class="btn-delete" onclick="toDoList.splice(${i}, 1); displayToDos();">Delete</button>
        `;
    }
    localStorage.setItem('todo', JSON.stringify(toDoList));

    containerItem.innerHTML = newHTML;
}