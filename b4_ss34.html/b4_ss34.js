// Get DOM elements
let taskInput = document.getElementById('task-input');
let addTaskButton = document.getElementById('add-task');
let taskList = document.querySelector('.task-list');

// Load tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Set the ID counter based on existing tasks
let idCounter = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

// Render tasks on page load
renderTasks();

// Add task when the "Thêm" button is clicked
addTaskButton.onclick = function () {
    let taskContent = taskInput.value.trim();

    // Validate input
    if (!taskContent) {
        alert('Vui lòng nhập việc cần làm!');
        return;
    }

    // Create a new task object
    let task = {
        id: idCounter++,
        content: taskContent
    };

    // Add the task to the array
    tasks.push(task);

    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear the input field
    taskInput.value = '';

    // Re-render the task list
    renderTasks();
};

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the current list

    tasks.forEach(task => {
        let taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.innerHTML = `
            <span>${task.content}</span>
            <button onclick="deleteTask(${task.id})">Xóa</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}