console.log("hi");

function loginContent() {
  const loginPageRef = document.getElementById("loginPage");
  loginPageRef.innerHTML = `<div>
  <label for="username">Username: </label>
  <input type="text" name="username" id="username" required />
  </div>
  <div>
  <label for="password">Password: </label>
  <input type="password" name="password" id="password" required />
  </div>
  <button onclick="login()">Login</button>`;
}

// function managerPage() {
//   const loginPageRef = document.getElementById("loginPage");

//   loginPageRef.innerHTML = `<div>
//     <label for="username">Username: </label>
//     <input type="text" name="username" id="username" />
//     </div>
//     <div>
//     <label for="password">Password: </label>
//     <input type="text" name="password" id="password" />
//     </div>
//     <button onclick="login()">Login</button>`;
// }

// managerPage();

// alert(
//   "Password must contain at least 8 characters, a capital letter, and a number"
// );

function login() {
  const usernameInputRef = document.getElementById("username");
  if (usernameInputRef.length < 1) {
    alert("You must fill in a Username");
  }
  const passwordInputRef = document.getElementById("password");
  if (passwordInputRef.length < 1) {
    alert("You must fill in a Password");
  } else if (passwordInputRef.length < 8) {
    alert("Password must be at least 8 characters");
  }

  //   usernameInputRef.value = "";
  //   passwordInputRef.value = "";
}

loginContent();
