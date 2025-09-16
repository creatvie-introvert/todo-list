const newTask = document.querySelector('#new-task');
const addBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');
const taskCounter = document.querySelector('#task-count');
const filterBtn = document.querySelector('#filters');
const clearBtn = document.querySelector('#clear-completed');

// create an array of objects
// const tasks = [
//     {
//         id: '1',
//         task: "sample task",
//         completed: false
//     },
//     {
//         id: '2',
//         task: 'another sample task',
//         completed: false
//     }
// ];

const tasks = loadTasks();
console.log(tasks);

function saveTasks() {
    // convert array of objects to JSON sting and store it in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    // retrieve the string 'tasks' from localStorage, return as an array (or empty if none saved)
    return JSON.parse(localStorage.getItem('tasks')) || [];
}