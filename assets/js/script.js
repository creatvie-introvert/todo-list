let currentFilter = 'all'; // variable to store the currently selected filter, with all as default

const newTask = document.querySelector('#new-task');
const addBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');
const taskCounter = document.querySelector('#task-count');
const filterBtn = document.querySelector('#filters');
const clearBtn = document.querySelector('#clear-completed');

// get all filter buttons
const filterBtns = document.querySelectorAll('button[data-filter]');   

const tasks = loadTasks();
console.log(tasks);

renderTasks();

addBtn.addEventListener('click', () => {
    // call function
    addTask(newTask.value);
});

// loop through all filter buttons
filterBtns.forEach(button =>{
    // add a click event listener to each filter button
    button.addEventListener('click', () => {
        // get the value from the data-filter attribute
        const selectedFilter = button.dataset.filter;

        setFilter(selectedFilter);  // call function to update the current filter
    });
});

newTask.addEventListener('keydown', (event) => {
    // check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
        // prevent the default browser action (e.g., form-submission)
        event.preventDefault();

        // call function
        addTask(newTask.value);
    }
});

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

    // variable to store filtered tasks
    let filteredTasks;

    if (currentFilter === 'all') {
        // show everything from tasks array
        filteredTasks = tasks;  
    }
    else if (currentFilter === 'active') {
        // show only active from tasks array
        filteredTasks = tasks.filter(task => task.completed === false);
    }
    else if (currentFilter === 'completed') {
        // show only completed from tasks array
        filteredTasks = tasks.filter(task => task.completed === true);
    }
    
    // loop through each task in tasks (ln8) 
    for (const task of filteredTasks) {
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
            
            saveTasks();    // save changes
            updateTaskCount();
        });

        // delete button listener
        deleteBtn.addEventListener('click', () => {
            // remove task from data object
            const idx = tasks.findIndex(t => t.id === task.id);   // find id of task
            if (idx !== -1) tasks.splice(idx, 1);

            saveTasks();    // save changes
            renderTasks();  // re-rendered list
        });

        // add each li to the end of the ul
        taskList.appendChild(li);
        console.log(task) // debugging: log each task in console
    }

    updateTaskCount();
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

function addTask(taskText) {
    // check if the task text is empty or contains only whitespace.
    if (taskText.trim() === '') {
        return; // stop function if input is empty or spaces
    }

    // create new task object
    const taskAdded = {
        id: Date.now().toString(),
        task: taskText,
        completed: false
    };

    tasks.push(taskAdded); // update array
    saveTasks();
    renderTasks();
    newTask.value = ""; // reset input
}

function updateTaskCount() {
    // variable to store number of active tasks
    let activeTasks = 0;

    // loop through each task in tasks array
    for (const task of tasks) {
        // if task is not complete
        if (!task.completed) {
            activeTasks++;  // increment active tasks number
        }
    }

    if (activeTasks === 0 || activeTasks > 1) {
        // update task count in the UI to show 0 or more than 1 task active
        taskCounter.textContent = `${activeTasks} items left`;
    }
    else {
        // update task count in the UI to show 1 task active
        taskCounter.textContent = `${activeTasks} item left`;
    }
}

// function to update the global filter
function setFilter(filter) {
    currentFilter = filter; // update selected filter

    renderTasks();
    console.log(currentFilter); // debugging: log the selected filter
}