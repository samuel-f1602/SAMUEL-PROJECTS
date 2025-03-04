import Task from "./Task.js";

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        this.tasks.push(new Task(description));
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id);
    }

    updateTaskDescription(id, newDesc) {
        const task = this.tasks.find((task) => task.id == id);
        if (task) {
            task.description = newDesc;
        }
    }

    completeTask(id) {
        const task = this.tasks.find((task) => task.id == id);
        if (task) {
            task.completed = true;
        }
    }
}

export default TaskManager;