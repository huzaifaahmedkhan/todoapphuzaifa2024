const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', toggleTask);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}
// Function to create task item with edit and delete buttons
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', editTask);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

// Function to add task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
}

// Function to edit task
function editTask() {
    const newText = prompt('Edit task:', this.parentNode.textContent.trim());
    if (newText !== null) {
        this.parentNode.textContent = newText;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', editTask);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        this.parentNode.appendChild(editBtn);
        this.parentNode.appendChild(deleteBtn);
    }
}

// Function to delete task
function deleteTask() {
    this.parentNode.remove();
}
