document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const taskForm = document.getElementById('task-form');
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskDate = document.getElementById('task-date');
    const submitButton = document.getElementById('add-task');
    const taskFilter = document.getElementById('task-filter');
    const taskSearch = document.getElementById('task-search');
    const sortBy = document.getElementById('task-sort');
    const taskTable = document.createElement('table');

    // Initialize variables for editing tasks
    let isEditing = false;
    let editIndex = null;
    
    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to local storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Append table to the container
    document.querySelector('.table-container').appendChild(taskTable);

    // Function to render tasks
    const renderTasks = (tasksToRender) => {
        taskTable.innerHTML = `
        <table class="task-table" id="task-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${tasksToRender.map(task => `
                    <tr class="task-list">
                        <td class=${task.completed ? 'done' : ''}>${task.title}</td>
                        <td class=${task.completed ? 'done' : ''}>${task.description}</td>
                        <td class=${task.completed ? 'done' : ''}>${task.date}</td>
                        <td class=${task.completed ? 'completed' : 'incomplete'}>${task.completed ? 'Completed' : 'Incomplete'}</td>
                        <td>
                            <button class="edit-task">Edit</button>
                            <button class="delete-task">Delete</button>
                            <button class=${task.completed ? 'unmark' : 'complete-task'}>${task.completed ? 'Unmark' : 'Complete'}</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
            </table> 
        `;
    };

    // Function to add a task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = {
            title: taskTitle.value,
            description: taskDescription.value,
            date: taskDate.value,
            completed: false
        };
       
        if (isEditing) {
            // Update existing task
            tasks[editIndex] = newTask;
            isEditing = false;
            editIndex = null;
            submitButton.textContent = 'Add Task';
        } else {
            // Add new task
            tasks.push(newTask);
        }

        saveTasks();
        renderTasks(tasks);
        taskForm.reset();
    });

    // Function to edit, delete, and complete a task
    taskTable.addEventListener('click', (e) => {
        const taskRow = e.target.parentElement.parentElement;
        const taskIndex = Array.from(taskRow.parentElement.children).indexOf(taskRow);
        const task = tasks[taskIndex];

        if (e.target.classList.contains('edit-task')) {
            // Edit task
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            taskDate.value = task.date;
            isEditing = true;
            editIndex = taskIndex;
            submitButton.textContent = 'Edit Task'; 
        } else if (e.target.classList.contains('delete-task')) {
            // Delete task
            if(confirm("Are you sure you want to delete this task?")){
                tasks.splice(taskIndex, 1);
            }
        } else if (e.target.classList.contains('complete-task') || e.target.classList.contains('unmark')) { 
            // Toggle task completion
            task.completed = !task.completed;    
        }

        saveTasks();
        renderTasks(tasks);
    });

    // Function to filter tasks
    taskFilter.addEventListener('change', () => {
        const filterValue = taskFilter.value;
        let filteredTasks = tasks;
        if (filterValue === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filterValue === 'incomplete') {
            filteredTasks = tasks.filter(task => !task.completed);
        }
        renderTasks(filteredTasks);
    });

    // Function to search for tasks
    taskSearch.addEventListener('input', () => {
        const searchValue = taskSearch.value.toLowerCase();
        const filteredTasks = tasks.filter(task => 
            task.title.toLowerCase().includes(searchValue) || 
            task.description.toLowerCase().includes(searchValue)
        );
        renderTasks(filteredTasks);
    });

    // Function to sort tasks
    sortBy.addEventListener('change', () => {
        const sortKey = sortBy.value;
        tasks.sort((a, b) => {
            if (sortKey === 'date') {
                return new Date(a[sortKey]) - new Date(b[sortKey]);
            } else if (sortKey === 'title' || sortKey === 'description') {
                return a[sortKey].localeCompare(b[sortKey]);
            }
        });
        renderTasks(tasks);
    });
    
    // Initial render of tasks
    renderTasks(tasks);
});