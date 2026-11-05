let tasks = [];

// Save a task if the input is not empty.
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task !== "") {
        tasks.push(task);
        input.value = "";
    }
}

// Show the tasks with Edit and Delete buttons.
function viewTasks() {
    const display = document.getElementById("taskDisplay");
    display.innerHTML = "";

    if (tasks.length === 0) {
        display.textContent = "No tasks available.";
    } else {
        display.innerHTML = "<p>My Tasks:</p><ol id='taskList'></ol>";
        const list = document.getElementById("taskList");

        for (let i = 0; i < tasks.length; i++) {
            const item = document.createElement("li");
            item.textContent = tasks[i] + " ";

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.onclick = function() {
                editTask(i);
            };
            item.appendChild(editButton);
            item.appendChild(document.createTextNode(" "));

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function() {
                deleteTask(i);
            };
            item.appendChild(deleteButton);
            list.appendChild(item);
        }
    }
}

// Ask for a new name and update the task.
function editTask(index) {
    const newTask = prompt("Enter the new task name:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        viewTasks();
    }
}

// Remove one task from the array.
function deleteTask(index) {
    tasks.splice(index, 1);
    viewTasks();
}

// Clear all tasks if the user clicks OK.
function clearTasks() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        tasks = [];
        viewTasks();
    }
}