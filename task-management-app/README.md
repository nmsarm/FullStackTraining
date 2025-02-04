# Task Management Application

## Overview

This is a simple Task Management Application that allows users to add, edit, delete, and mark tasks as completed. The application also provides filtering and sorting functionalities to help users organize their tasks better. 

## Features

- **Add Task**: Users can add a new task with a title, description, and due date.
- **Edit Task**: Users can edit an existing task's title, description, and due date.
- **Delete Task**: Users can delete a task with a confirmation prompt.
- **Mark Task as Completed**: Users can mark tasks as completed, and completed tasks are visually distinct.
- **Filter Tasks**: Users can filter tasks to view all tasks, completed tasks, or incomplete tasks.
- **Search Tasks**: Users can search for tasks by title or description.
- **Sort Tasks**: Users can sort tasks by title, description, due date, or status.
- **Persist Data**: Tasks are saved in local storage to ensure data persistence.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Project Structure

```filetree
task-management-app
├── css
│   └── style.css
├── js
│   └── app.js
├── index.html
└── README.md
```

## Running the Application

1. Clone the repository or download the ZIP file.
2. Extract the downloaded file (if downloaded).
3. Access the `task-management-app` folder.
4. Open **index.html** in your browser.

## Testing the Application

1. **Open the Application**:
   - Open the `index.html` file in your browser.

2. **Add a Task**:
   - Fill in the "Task Title", "Task Description", and "Due Date" fields.
   - Click the "Add Task" button.
   - Verify that the new task appears in the task list.

3. **Edit a Task**:
   - Click the "Edit" button next to a task.
   - Modify the task details in the form.
   - Click the "Edit Task" button.
   - Verify that the task details are updated in the task list.

4. **Delete a Task**:
   - Click the "Delete" button next to a task.
   - Confirm the deletion in the prompt.
   - Verify that the task is removed from the task list.

5. **Mark a Task as Completed**:
   - Click the "Complete" button next to a task.
   - Verify that the task is marked as completed and visually distinct.
   - Click the "Unmark" button to mark the task as incomplete.

6. **Filter Tasks**:
   - Use the filter dropdown to select "All Tasks", "Completed Tasks", or "Incomplete Tasks".
   - Verify that the task list updates to show the correct tasks based on the selected filter.

7. **Search for Tasks**:
   - Enter a search term in the "Search Tasks" input field.
   - Verify that the task list updates to show tasks that match the search term.

8. **Sort Tasks**:
   - Use the "Sort by" dropdown to sort tasks by title, description, due date, or status.
   - Verify that the task list updates to reflect the selected sorting order.

9. **Persist Data**:
   - Refresh the browser.
   - Verify that the tasks are still present in the task list, ensuring data persistence.