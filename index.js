function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create the list item
    const li = document.createElement("li");

    // Create task text span
    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Create Update button
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.className = "update-btn";
    updateBtn.onclick = function () {
        const updatedText = prompt("Edit your task:", span.textContent);
        if (updatedText !== null && updatedText.trim() !== "") {
            span.textContent = updatedText.trim();
        }
    };

    // Create actions container for buttons
    const actions = document.createElement("div");
    actions.className = "actions";
    actions.appendChild(updateBtn);
    actions.appendChild(deleteBtn);

    // Append text and buttons to li
    li.appendChild(span);
    li.appendChild(actions);

    // Add to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}
