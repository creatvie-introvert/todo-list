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
        // create new <li> element
        const li = document.createElement('li');

        // create <checkbox> element
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';     // set input type

        // create a <span> element for text from task in task object
        const span = document.createElement('span');
        span.textContent = task.task; // update the span text
        span.classList.add('task-text');    // add .task-text to the span

        // create <button> element
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';    // update the button text content
        deleteBtn.classList.add('delete-task'); // add .delete-task to the button
        // add aria label to button
        deleteBtn.setAttribute('aria-label', `Delete ${task.task}`);    
        
        // add chckbox, span and deleteBtn to the li
        li.append(checkbox, span, deleteBtn);

        // initial UI sync (load state)
        updateTaskUI(task, li, checkbox)

        // checkbox listener
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;  // update object based in checked state
            updateTaskUI(task, li, checkbox);   // sync UI + save 
            console.log(task.completed);    // debugging: output value of completed from task object
            console.log(task);    // debugging: output the check/uncheck object
        });

        // delete button listener
        deleteBtn.addEventListener('click', () => {
            // remove task from data object
            const idx = tasks.indexOf(task);   // find index of task
            if (idx !== -1) tasks.splice(idx, 1);

            saveTasks();    // save changes
            renderTasks();  // re-rendered list
        });

        // add each li to the end of the ul
        taskList.appendChild(li);
        console.log(task) // debugging: log each task in console
    }

    console.log(taskList.children.length);  // debugging: output the length of the array
}

function updateTaskUI(task, li, checkbox) {
    checkbox.checked = task.completed;  // update object to match checked state

    if (task.completed) {
        li.classList.add('task-completed'); // add .task-completed to the li
    }
    else {
        li.classList.remove('task-completed'); // remove .task-completed from the li
    }
}