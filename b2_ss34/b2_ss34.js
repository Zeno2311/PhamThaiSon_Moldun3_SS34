let content = document.getElementById('content');
let date = document.getElementById('date');
let choose = document.getElementById('choose');
let userName = document.getElementById('user');
let click = document.getElementById('click');
let taskList = document.querySelector('.task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let idCounter = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

renderTasks();

click.onclick = function () {
    let pushContent = content.value;
    let pushDate = date.value;
    let pushChoose = choose.value;
    let pushUser = userName.value;

    if (!pushContent || !pushDate || !pushChoose || !pushUser) {
        alert('Please fill in all fields');
        return;
    }

    let task = {
        id: idCounter++,
        content: pushContent,
        date: pushDate,
        status: pushChoose,
        user: pushUser
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    content.value = '';
    date.value = '';
    choose.value = '';
    userName.value = '';

    renderTasks();
};

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        let taskElement = document.createElement('div');
        taskElement.className = 'tr';
        taskElement.innerHTML = `
                    <div>${task.id}</div>
                    <div>${task.content}</div>
                    <div>${task.date}</div>
                    <div>${task.status}</div>
                    <div>${task.user}</div>
                    <div><button onclick="Task(${task.id})">Sửa</button></div> 
                    <div><button onclick="deleteTask(${task.id})">Xóa</button></div>
                    
                `;
        taskList.appendChild(taskElement);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}