let taskInput = document.getElementById('task-input');
let addTaskButton = document.getElementById('add-task');
let taskList = document.querySelector('.task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let idCounter = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
renderTasks();

addTaskButton.onclick = function () {
    let taskContent = taskInput.value.trim();
    if (!taskContent) {
        alert('Vui lòng nhập việc cần làm!');
        return;
    }
    let task = {
        id: idCounter++,
        content: taskContent
    };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
};
function renderTasks() {
    taskList.innerHTML = ''; 
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
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}
