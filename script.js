document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDeadline = document.getElementById("taskDeadline");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span><strong>${taskInput.value}</strong> - ${taskDeadline.value}</span> 
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>`;
    
    taskList.appendChild(listItem);
    
    setReminder(taskInput.value, taskDeadline.value);
    
    taskInput.value = "";
    taskDeadline.value = "";
}

function setReminder(task, deadline) {
    const deadlineTime = new Date(deadline).getTime();
    const reminderTime = deadlineTime - (5 * 60 * 1000); // 5 minutes before deadline
    const currentTime = new Date().getTime();
    
    if (reminderTime > currentTime) {
        setTimeout(() => {
            alert(`Reminder: "${task}" is due in 5 minutes!`);
        }, reminderTime - currentTime);
    }
}
