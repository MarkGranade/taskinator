// Assigning variables to HTML elements using IDs
var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function(event) {

    event.preventDefault();

    // Create a new task item
    var listItemEl = document.createElement('li');
    // Style the new task item
    listItemEl.className = 'task-item';
    // Add the text
    listItemEl.textContent = 'This is a new task.';
    // Append this element to the task list
    tasksToDoEl.appendChild(listItemEl);
};

// EVENTLISTENER
formEl.addEventListener('submit', createTaskHandler);
