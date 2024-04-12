const userList = document.getElementById("root");

function renderUserList() {
  userList.innerHTML = ""; // Clear existing list

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const userItem = document.createElement("li");
        userItem.className = "userItem";

        const userName = document.createElement("h3");
        userName.textContent = user.name;
        userItem.appendChild(userName);

        const todoList = document.createElement("ul");
        todoList.className = "todoList";
        userItem.appendChild(todoList);

        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
          .then((response) => response.json())
          .then((todos) => {
            todos.forEach((todo) => {
              const todoItem = document.createElement("li");
              todoItem.className = `todoItem ${todo.completed ? "done" : ""}`;

              const todoCheckbox = document.createElement("input");
              todoCheckbox.type = "checkbox";
              todoCheckbox.checked = todo.completed;
              todoItem.appendChild(todoCheckbox);

              const todoText = document.createElement("span");
              todoText.textContent = todo.title;
              todoItem.appendChild(todoText);

              todoList.appendChild(todoItem);
            });
          });

        userList.appendChild(userItem);
      });
    });
}

renderUserList();