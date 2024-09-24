// BO_Objects

// Coding Challenge
const courseNumber = "N220";
const courseTitle = "Introduction to Media Application Development";
let totalSeats = 20;
let avSeats = 18;

function available() {
  const openSeats = totalSeats - avSeats;
  console.log(courseNumber + " Open: " + (openSeats > 0));
}
available();

function available2() {
  avSeats += 2;
  console.log("Enrolled: " + avSeats);
  const openSeats = totalSeats - avSeats;
  console.log(courseNumber + " Open: " + (openSeats > 0));
}
available2();
