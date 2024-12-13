console.log("hi");

function loginContent() {
  const loginPageRef = document.getElementById("loginPage");
  loginPageRef.innerHTML = `<div>
  <label for="username">Username: </label>
  <input type="text" name="username" id="username" />
  </div>
  <div>
  <label for="password">Password: </label>
  <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number, one uppercase letter, and at least 8 characters" required />
  </div>
  <button onclick="login()">Login</button>`;
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
  }
  let number1 = /[0-9]/g;
  if (passwordValue.match(number1)) {
  } else {
    alert("Password must contain at least 1 number");
  }
  console.log(usernameValue);
  console.log(passwordValue);

  //   usernameInputRef.value = "";
  //   passwordInputRef.value = "";
}

loginContent();
