// console.log("hi");

let myUsername = [];
let taskIndex = 0;

const loginPageRef = document.getElementById("loginPage");
const tasksPageRef = document.getElementById("tasksPage");

function loginContent() {
  loginPageRef.innerHTML = `
  <div>
  <label for="username">Username: </label>
  <input type="text" name="username" id="username" />
  </div>
  <div>
  <label for="password">Password: </label>
  <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number, one uppercase letter, and at least 8 characters" required />
  </div>
  <button onclick="login()">Login</button>
  `;
  tasksPageRef.innerHTML = "";
}

function login() {
  const usernameInputRef = document.getElementById("username");
  const passwordInputRef = document.getElementById("password");

  const usernameValue = usernameInputRef.value;
  if (usernameValue.length < 1) {
    alert("You must fill in a username");
  }

  const passwordValue = passwordInputRef.value;
  if (passwordValue.length < 1) {
    alert("You must fill in a password");
  } else if (passwordValue.length < 8) {
    alert("Password must be at least 8 characters");
  }

  let uppercase1 = /[A-Z]/g;
  if (passwordValue.match(uppercase1)) {
  } else {
    alert("Password must contain at least 1 uppercase");
    return;
  }

  let number1 = /[0-9]/g;
  if (passwordValue.match(number1)) {
  } else {
    alert("Password must contain at least 1 number");
    return;
  }

  myUsername.push(usernameValue);
  tasksContent(usernameValue);

  //   console.log(usernameValue);
  //   console.log(passwordValue);
  //   console.log(myUsername);
  //   usernameInputRef.value = "";
  //   passwordInputRef.value = "";
}

// loginContent();

function tasksContent(usernameValue) {
  tasksPageRef.innerHTML = `
  <div class="dashboard">
        Welcome, ${myUsername[0]}
        <button class="out" onclick="logout()">Logout</button>
      </div>
      <button onclick="addTask()">Add Task</button>
      `;
  loginPageRef.innerHTML = "";
}

function logout() {
  myUsername = [];
  taskIndex = 0;
  loginContent();

  //   console.log(myUsername);
}

function addTask() {
  const newTasksPrompt = prompt("New Task:");

  //   console.log(newTasksPrompt);

  const taskId = giveTasksId();

  tasksPageRef.innerHTML += `
  <div class="task" id="task-${taskId}"> <h id="taskTitle-${taskId}" onclick="markDone(${taskId})">
  ${newTasksPrompt} (<h id="categoryText-${taskId}">Choose Priority</h>)</h>  
  </br>
  <button class="red" onclick="removeTask(${taskId})">Remove</button>
  <button class="blue" onclick="textChange(${taskId})">Change Text</button>
  <select id="chooseCategory-${taskId}" onchange="changeCategory(${taskId})">
    <option>Choose Priority</option>
    <option>Important</option>
    <option>When Free</option>
    </select>
  </div>
  `;
}

function giveTasksId() {
  taskIndex += 1;
  return taskIndex;
}

function removeTask(taskId) {
  const removeTaskRef = document.getElementById(`task-${taskId}`);
  removeTaskRef.remove();
}

function changeCategory(taskId) {
  const category = document.getElementById(`chooseCategory-${taskId}`);
  const categoryValue = category.value;
  const categoryTextRef = document.getElementById(`categoryText-${taskId}`);
  categoryTextRef.innerHTML = categoryValue;

  //   console.log(categoryTextRef);
}

function markDone(taskId) {
  const taskTitleRef = document.getElementById(`taskTitle-${taskId}`);
  if (taskTitleRef.style.textDecoration === "line-through") {
    taskTitleRef.style.textDecoration = "none";
  } else {
    taskTitleRef.style.textDecoration = "line-through";
  }
}

function textChange(taskId) {
  const taskNewName = prompt(`New Name: `);
  const taskTitleRef = document.getElementById(`taskTitle-${taskId}`);
  taskTitleRef.innerHTML = `
  ${taskNewName} (<h id="categoryText-${taskId}">Choose Priority</h>)
  `;
}

loginContent();
