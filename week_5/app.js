// BO_Objects

// Coding Challenge
const codeChallenge = {
  courseNumber: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolledSeats: 18,
  getAvailibility: function () {
    return this.totalSeats > this.enrolledSeats;
  },
};

// 1. Are seats available
console.log(
  `${codeChallenge.courseNumber} Open: ${codeChallenge.getAvailibility()}`
);

// 2. Two more students enrolled
codeChallenge.enrolledSeats += 2;
console.log(`Total Students: ${codeChallenge.enrolledSeats}`);

// 3. Check available again
console.log(
  `${codeChallenge.courseNumber} Open: ${codeChallenge.getAvailibility()}`
);

// BUILT-IN OBJECTS
var tacocat = "wednesday";
function IUPUIWebsite() {
  console.log(window.tacocat);
  // console.log(`Inner Height: ${window.innerHeight}`);
  console.log(`Inner Width: ${window.innerWidth}`);
  // console.log(`Outer Height: ${window.outerHeight}`);
  console.log(`Outer Width: ${window.outerWidth}`);
  // console.log(window.location);
}
IUPUIWebsite();

// Window/Browser Object
function printPage() {
  window.print();
}

//Document Object
document.getElementById("dpDetails").innerHTML += codeChallenge.courseTitle;
document.querySelector("#domain").innerHTML += codeChallenge.courseNumber;

const updatePTag = document.getElementById("update");
console.log(updatePTag.querySelector("#delete"));

console.log(String(100), 100);
console.log(String(100).length, 100);
console.log(String(100).includes("0"), 100);
console.log(String(100).replace("0", "2"), 100);
console.log(String(100).replaceAll("0", "2"), 100);
console.log("1, 2, 3, 4".split("#"));
console.log("   123   ");
console.log("   123   ".trim());

// String Object
