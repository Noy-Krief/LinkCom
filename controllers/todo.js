const tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({ text: taskText, isCompleted: false });

    taskInput.value = "";

    updateTaskList();
}

// Function to update the task list
function updateTaskList() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${task.text}</span>
            <button id="complete" onclick="toggleComplete(${index})">Complete</button>
            <button id="remove" onclick="removeTask(${index})">Remove</button>
        `;

        // Add CSS class for completed tasks
        if (task.isCompleted) {
            listItem.classList.add("completed");
        }

        taskList.appendChild(listItem);
    });
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Function to toggle task completion
function toggleComplete(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    updateTaskList();
}

document.getElementById("task").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
