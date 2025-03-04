import TaskManager from "./classes/TaskManager.js";

const manager = new TaskManager();

window.addNewTask = function () {
    const description = document.getElementById("description").value.trim();
    if (description) {
        manager.addTask(description);
        showTasks();
        document.getElementById("description").value = ""; // נקה אחרי הוספה
    } else {
        alert("Please enter a valid description.");
    }
};

window.completeTask = function (id) {
    manager.completeTask(id);
    showTasks();
};

window.updateTask = function (id, oldDesc) {
    const newDesc = prompt("Enter new description:", oldDesc);
    if (newDesc && newDesc.trim()) {
        manager.updateTaskDescription(id, newDesc.trim());
        showTasks();
    } else {
        alert("Invalid input");
    }
};

window.deleteTask = function (id) {
    if (confirm("Are you sure you want to delete this task?")) {
        manager.deleteTask(id);
        showTasks();
    }
};

function showTasks() {
    const activeContainer = document.getElementById("activeTasks");
    const completedContainer = document.getElementById("completedTasks");

    activeContainer.innerHTML = "";
    completedContainer.innerHTML = "";

    for (let task of manager.tasks) {
        const taskHtml = `
            <div class="d-flex align-items-center mb-2">
                <li class="list-group-item flex-grow-1 ${task.completed ? 'text-decoration-line-through' : ''}">
                    ${task.description}
                </li>
                ${task.completed ? `
                    <button class='btn btn-success me-1' disabled>
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class='btn btn-primary me-1' disabled>
                        <i class="text-light fa-sharp fa-solid fa-pencil"></i>
                    </button>
                    <button class='btn btn-danger me-1' disabled>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                ` : `
                    <button class='btn btn-success me-1' onclick='completeTask(${task.id})'>
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class='btn btn-primary me-1' onclick='updateTask(${task.id}, "${task.description.replace(/"/g, '&quot;')}")'>
                        <i class="text-light fa-sharp fa-solid fa-pencil"></i>
                    </button>
                    <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                `}
            </div>
        `;

        if (task.completed) {
            completedContainer.innerHTML += taskHtml;
        } else {
            activeContainer.innerHTML += taskHtml;
        }
    }
}

// הצגת המשימות בהתחלה (אם תרצה לטעון ממשימות שמורות ב-localStorage בהמשך)
showTasks();