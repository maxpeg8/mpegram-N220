// ARRAY BASICSl
let studentGrades = [78, 86, 92, 77, 50];
const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
  answersPTag.innerHTML += `${answer} <br />`;
}

// 1. Arrays will print as a string sepereated by commas and no space
// answersPTag.innerHTML += studentGrades;
printAnswer(studentGrades);

// 2. Access specific values in an array using indexes
// studentGrades[0]; indexes start at 0
// answersPTag.innerHTML += `<br /> ${studentGrades[1]}`;
printAnswer(studentGrades[1]);

// 3. Assign new values to array items in the same way that you would a variable declared with let
studentGrades[1] = 83;
// answersPTag.innerHTML += `<br /> ${studentGrades[1]}`;
printAnswer(studentGrades[1]);

// console.log(studentGrades);

// 4. Same as 1
// answersPTag.innerHTML += `<br /> ${studentGrades}`;
printAnswer(studentGrades);

// 5. All arrays have a length even if it is zero
printAnswer(studentGrades.length);

// 6. Arrays have a forEach method that takes a function as the parameter. That function has access to the values and indexes in the array.
studentGrades.forEach(function (currentStudentGrades, currentStudentIndex) {
  //loop here
  studentGrades[currentStudentIndex] += 1;
  printAnswer(studentGrades[currentStudentIndex]);
});

// 7. Same as 1
printAnswer(studentGrades);

// 8. same as 2
const indexOfLastStudent = studentGrades.length - 1;
printAnswer(studentGrades[indexOfLastStudent]);

// 9.
let totalOfGrades = 0;
studentGrades.forEach(function (currentStudentGrades) {
  totalOfGrades += currentStudentGrades;
});
const averageGrade = totalOfGrades / studentGrades.length;
printAnswer(averageGrade);

// 10.
printAnswer(averageGrade > 80);

// ARRAY EXTRAS
const friends = [
  "Elmo",
  "Spongebob",
  "CatDog",
  "Danny Phantom",
  "Timmy Turner",
];

function printFriends() {
  document.querySelector("#extraAnswers").innerHTML += `<br /> ${friends}`;
}

// 1. Add item to an array using the push method
friends.push("Jimmy Neutron");
printFriends();

// 2. Remove the last item to an array using the pop method
friends.pop();
printFriends();

// 3. Remove the first item to an array using the splice method
friends.splice(0, 1);
printFriends();

// 4. Add item to frint of array using the splice method
friends.splice(0, 0, "Invader Zin");
printFriends();

// 5. Use splice again
friends.splice(2, 1);
printFriends();

// 6. Splice again
friends.splice(2, 0, "Gir");
printFriends();

// 7. Splice again
friends.splice(2, 0, "Patrick", "Squidward");
printFriends();

// Splice method takes three parameters:
// 1. What index it starts at
// 2. How many elements starting from index should be deleted
// 3. What to add to the array
// ^ This could be just a value or an array of values to add multiple

// OBJECTS
const person = {
  firstName: "Joe",
  lastName: "Random",
  age: 32,
  hometown: "Narnia",
  //   favoriteColor: "Gray",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(person);

// function printPerson() {
//   document.getElementById("fullName").innerHTML += person.getFullName();
// }

// 0. Show each property
document.getElementById("fullName").innerHTML += `${person.firstName}, ${
  person.lastName
}, ${person.age}, ${person.hometown}, ${person.getFullName()}`;

// 1. Show full name
document.getElementById(
  "fullName"
).innerHTML += `<br /> ${person.getFullName()}`;

// 2.
person.age += 1;
document.getElementById("newFProp").innerHTML += person.age;

// 3. Printing object variable using JSON.stringify method
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

// 4. Remove property from person using delete keyword
delete person.hometown;
delete person.favoriteColor;
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

// 5. Print a sentence using our subject
console.log(`${person.getFullName()} is ${person.age} years old`);

// 6. Add a method to an existing object
person.isMiddleAged = function () {
  return this.age >= 40;
};
console.log(person.isMiddleAged());

person.age += 10;
console.log(person.isMiddleAged());

let keyProp = "age";
console.log(`person[keyProp] = ${person[keyProp]}`);
console.log(`person.keyProp = ${person.keyProp}`);

person["Middle Initial"] = "A";
console.log(person["Middle Initial"]);

person.hair_color = "black";
console.log(person.hair_color);
