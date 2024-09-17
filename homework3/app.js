function simpleFunctionOne() {
  // Code here:
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph.";
}
simpleFunctionOne();

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters.";
}
simpleFunctionTwo();

function sayHelloWorld() {
  console.log("Hello World");
}
sayHelloWorld();

// Started using parameters

function sayFavBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}
sayFavBand("Sideshow (an artist not a band)");

function consoleName(firstName) {
  console.log(firstName);
}
consoleName("Max");
consoleName("Was");
consoleName("Here");

// Functions that do calculations

function calcRecPer(height, width) {
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
}
calcRecPer(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br/>";
}

function calcRAP(height, width) {
  const perimeter = 2 * height + 2 * width;
  const area = height * width;
  document.getElementById("multiAnswer").innerHTML += `
    Height: ${height} <br/>
    Width: ${width} <br/>
    Perimeter ${perimeter} <br/>   
    Area: ${area} <br/> <br/>
    `;
}
calcRAP(5, 4);
calcRAP(2, 8);

function myFunction() {
  alert("Who goes there?");
}

function wizard(name, occupation) {
  //   confirm("Welcome " + name + ", the " + occupation);
  confirm(`Welcome ${name}, the ${occupation}`);
  document.getElementById(
    "future"
  ).innerHTML = `Welcome ${name}, the ${occupation}`;
}

function addItem() {
  const newItem = prompt("Add Item:");
  console.log(newItem);
}

function returnValue(color) {
  return color;
}
alert(returnValue("Indigo"));
