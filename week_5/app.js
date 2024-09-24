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
  console.log(`Inner Height: ${window.innerHeight}`);
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`Outer Height: ${window.outerHeight}`);
  console.log(`Outer Width: ${window.outerWidth}`);
  console.log(window.location);
}
IUPUIWebsite();
