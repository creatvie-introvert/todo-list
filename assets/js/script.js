const newTask = document.querySelector('#new-task');
const addBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');
const taskCounter = document.querySelector('#task-count');
const filterBtn = document.querySelector('#filters');
const clearBtn = document.querySelector('#clear-completed');

const tasks = loadTasks();
console.log(tasks);

renderTasks();

function saveTasks() {
    // convert array of objects to JSON sting and store it in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    // retrieve the string 'tasks' from localStorage, return as an array (or empty if none saved)
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function renderTasks() {
    // remove all children from taskList
    taskList.replaceChildren();

    // loop through each task in tasks (ln8) 
    for (const task of tasks) {
        const newLi = document.createElement('li');
        newLi.textContent = task.task;

        taskList.appendChild(newLi);
        console.log(task) // debugging: log each task in console
    }

    console.log(taskList.children.length);  // debugging: output the length of the array
}