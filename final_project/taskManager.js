console.log("hi");

let aUser = [{ name: "userA", pass: "passwordA" }];

let thisUser = null;

// const loginPageRef = document.getElementById("loginPage");
const tasksPageRef = document.getElementById("tasksPage");

const dashboardRef = document.getElementById("dashboard");
const tasklistRef = document.getElementById("tasklist");

const activeUserRef = document.getElementById("activeUser");

// function loginContent() {}

document
  .getElementById("loginPage")
  .addEventListener("submit", function (event) {
    event.preventDefault();
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
    }
    let number1 = /[0-9]/g;
    if (passwordValue.match(number1)) {
      const theUser = aUser.find(
        (theUser) => theUser.usernameValue === usernameValue
      );
      thisUser = theUser;
      // aUser.push({ name: usernameValue, pass: passwordValue });
      // const theUser = aUser.find(
      //   (theUser) => theUser.usernameValue === usernameValue
      // );
      tasksContent();
    } else {
      alert("Password must contain at least 1 number");
    }

    console.log(usernameValue);
    console.log(passwordValue);
    console.log(thisUser);
    //   usernameInputRef.value = "";
    //   passwordInputRef.value = "";
  });

// loginContent();

function tasksContent() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("tasksPage").classList.remove("hidden");
  showTasks();
}

function logout(userName) {
  thisUser = null;
  // loginContent();
  console.log(thisUser);
}

const allTasks = [];

function addTask() {
  const newTasks = prompt(`New Task:`);
  // const newTasksInputRef = document.getElementById("taskTitle");
  // const newTasksValue = newTasksInputRef.value;
  console.log(newTasks);
  //   tasksPageRef.innerHTML += "";
  //   console.log(newTasksRef);
  allTasks.push({ name: newTasks });
  // console.log(allTasks[1]);
  showTasks();
}

// function addTask() {
//   const newTasks = prompt(`New Task:`);
//   const newTaskDiv = document.createElement("div");
//   newTaskDiv.classList.add("task");
//   newTaskDiv.innerHTML = newTasks;
// }

function removeTask(taskName) {
  let taskIndex;
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].name === taskName) {
      taskIndex = i;
    }
  }

  allTasks.splice(taskIndex, 1);
  showTasks();
}

function showTasks() {
  const taskListRef = document.getElementById("taskList");
  taskListRef.innerHTML = "";
  allTasks.forEach(function (task, taskIndex) {
    // taskListRef.innerHTML += `<div class="task"> <h id="taskTitle" onclick="markDone(${taskIndex})"> <h id="taskNameText">${task.name}</h> (<h id="categoryText">Choose Category</h>)</h>
    //     </br>
    //     <button class="red" onclick="removeTask(${taskIndex})">Remove</button>
    //     <button class="blue" id=" onclick="textChange(${taskIndex})">Change Text</button>
    //     <select id="chooseCategory" onchange="changeCategory(${taskIndex})">
    //       <option>Choose Category</option>
    //       <option>Important</option>
    //       <option>When Free</option>
    //       </select>
    //     </div>
    //     `;
  });
  //   tasksPageRef.innerHTML += "";
  //   console.log(newTasksRef);

  // console.log(allTasks);
  // console.log(taskNameText);
}

function changeCategory() {
  const category = document.getElementById("chooseCategory");
  const categoryValue = category.value;
  const categoryTextRef = document.getElementById("categoryText");
  categoryTextRef.innerHTML = categoryValue;
  //   console.log(categoryTextRef);
}

function markDone() {
  const taskTitleRef = document.getElementById("taskTitle");
  if (taskTitleRef.style.textDecoration === "line-through") {
    taskTitleRef.style.textDecoration = "none";
  } else {
    taskTitleRef.style.textDecoration = "line-through";
  }
}

// function markDone(taskIndex) {
//   const taskTitleRef = document.getElementById("taskTitle");
//   if (taskTitleRef.style.textDecoration === "line-through") {
//     taskTitleRef.style.textDecoration = "none";
//   } else {
//     taskTitleRef.style.textDecoration = "line-through";
//   }
//   const taskName = allTasks[taskIndex].name;
//   console.log(taskName + " hi");

//   allTasks.splice(taskIndex, 1, {
//     name: taskName,
//   });
// }

function textChange(e) {
  const taskNewName = prompt(`New Name: `);
  taskNewName = e.currentTarget.dataset.text;
  document.getElementById("");
  //   const taskNameRef = document.getElementById("taskNameText");
  //   taskNameRef.innerHTML = `${taskNewName}`;
}

// function moveFriend(taskIndex, isMovingUp) {
//   // let friendIndex;
//   let taskNewIndex;
//   if (isMovingUp) {
//     taskNewIndex = taskIndex - 1;
//   } else {
//     taskNewIndex = taskIndex + 1;
//   }
//   const taskName = allTasks[taskIndex].name;
//   allTasks.splice(taskIndex, 1);
//   allTasks.splice(taskNewIndex, 0, { name: taskName });
//   showTasks();
// }

// loginContent();
// tasksContent();
