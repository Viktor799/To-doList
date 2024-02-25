let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <span class="delete" onclick="deleteTask(${index})">❌</span>
            <span class="edit" onclick="editTask(${index})">✏️</span>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTask = prompt("Edit task:", tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

window.onload = function() {
    renderTasks();
};