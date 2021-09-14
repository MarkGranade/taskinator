// Assigning variables to HTML elements using IDs
var buttonEl = document.querySelector('#save-task');
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function() {
    // Create a new task item
    var listItemEl = document.createElement('li');
    // Style the new task item
    listItemEl.className = 'task-item';
    // Add the text
    listItemEl.textContent = 'This is a new task.';
    // Append this element to the task list
    tasksToDoEl.appendChild(listItemEl);
}

// EVENTLISTENER
buttonEl.addEventListener('click', createTaskHandler);
