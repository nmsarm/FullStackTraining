document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskDate = document.getElementById('task-date');
    const submitButton = document.getElementById('add-task');
    const taskFilter = document.getElementById('task-filter');
    const taskSearch = document.getElementById('task-search');
    const taskTable = document.createElement('table');
    
    // Save tasks to local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Initialize variables for editing tasks
    let isEditing = false;
    let editIndex = null;

    // Append table to the container
    document.querySelector('.table-container').appendChild(taskTable);

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
                        <td class=${task.completed ? 'completed' : 'pending'}>${task.completed ? 'Completed' : 'Pending'}</td>
                        <td>
                            <button class="edit-task">Edit</button>
                            <button class="delete-task">Delete</button>
                            <button class="complete-task">${task.completed ? 'Unmark' : 'Complete'}</button>
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
            tasks[editIndex] = newTask;
            isEditing = false;
            editIndex = null;
            submitButton.textContent = 'Add Task';
        } else {
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
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            taskDate.value = task.date;
            isEditing = true;
            editIndex = taskIndex;
            submitButton.textContent = 'Edit Task'; 
        } else if (e.target.classList.contains('delete-task')) {
            if(confirm("Are you sure you want to delete this task?")){
                tasks.splice(taskIndex, 1);
            }
        } else if (e.target.classList.contains('complete-task')) { 
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

    renderTasks(tasks);
});