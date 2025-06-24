function add() {
  // Get the input field inside the To-Do List card
  const input = document.querySelector('.card .input-group input.form-control');
  const taskText = input.value.trim();

  if (!taskText) {
    alert('Please enter a task');
    return;
  }

  // Find the task list UL inside the To-Do List card
  // (the one after the input group)
  const taskList = document.querySelector('.card .card-body ul.list-group');

  // Create new task item li
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  // Left side: icon + task text
  const leftDiv = document.createElement('div');
  leftDiv.className = 'd-flex align-items-center';

  const icon = document.createElement('i');
  icon.className = 'fas fa-check-circle me-2 text-secondary';

  leftDiv.appendChild(icon);
  leftDiv.appendChild(document.createTextNode(taskText));

  // Right side: delete button
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'btn btn-outline-danger btn-sm';
  delBtn.textContent = '➖';
  delBtn.onclick = function () {
    del(this);
  };

  li.appendChild(leftDiv);
  li.appendChild(delBtn);

  // Append new task to the task list
  taskList.appendChild(li);

  // Clear input field
  input.value = '';
}

function del(button) {
  // Remove the parent li of the clicked delete button
  const li = button.closest('li');
  if (li) {
    li.remove();
  }
}
