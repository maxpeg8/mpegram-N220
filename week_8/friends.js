// Reference variables
const friendNameInputRef = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");

// Variable to track my friends
const myFriends = [];

// Function for adding friend
function addFriend() {
  // Get the name the user inputed
  const nameValue = friendNameInputRef.value;
  // Add friend to friends list array
  myFriends.push({ name: nameValue, color: "black" });
  // Add the name to the friends list
  showFriends();
  // Clear the input textbox
  friendNameInputRef.value = "";
}

function removeFriend(friendIndex) {
  //   // Use variable to track index of friend to remove
  //   let friendIndex;
  //   // Loop through current friends to find the friendName
  //   for (let i = 0; i < myFriends.length; i++) {
  //     if (myFriends[i].name === friendName) {
  //       friendIndex = i;
  //     }
  //   }
  // Remove the person from the list
  myFriends.splice(friendIndex, 1);
  showFriends();
}

// Function to loop through myFriends and "reload" it on the page
function showFriends() {
  // Clear pages old friends list
  friendsListRef.innerHTML = "";
  // Loop through friends
  myFriends.forEach(function (friend, friendIndex) {
    // Add the name to the friends list
    friendsListRef.innerHTML += `<li>
    <span style="color: ${friend.color}">${friend.name}</span>
    <button onclick="removeFriend(${friendIndex})">X</button>
    <button onclick="moveFriend(${friendIndex}, true)">&#8593;</button>
    <button onclick="moveFriend(${friendIndex}, false)">&#8595;</button>
    <input 
        type="color" 
        name="friendTextColor${friendIndex}" 
        id="friendTextColor${friendIndex}"
        onchange="changeFriendTextColor(${friendIndex}, event.currentTarget)" 
    />
    </li>`;
  });
}

function changeFriendTextColor(friendIndex, inputRef) {
  console.log(friendIndex + " text color to " + inputRef.value);
  const friendName = myFriends[friendIndex].name;
  myFriends.splice(friendIndex, 1, {
    name: friendName,
    color: inputRef.value,
  });

  showFriends();
}

// Function to clear the list
function clearList() {
  myFriends.splice(0, myFriends.length);
  showFriends();
}

// Function to move friends rankings
function moveFriend(friendIndex, isMovingUp) {
  // let friendIndex;
  let friendNewIndex;
  if (isMovingUp) {
    friendNewIndex = friendIndex - 1;
  } else {
    friendNewIndex = friendIndex + 1;
  }
  const friendName = myFriends[friendIndex].name;
  myFriends.splice(friendIndex, 1);
  myFriends.splice(friendNewIndex, 0, { name: friendName, color: "black" });
  showFriends();
}
